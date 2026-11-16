import Anthropic from '@anthropic-ai/sdk';
import { body, HttpError, hubGuard } from '@/lib/hub-guard';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  let upstream: ReturnType<Anthropic['beta']['messages']['stream']> | undefined;
  let disconnect: (() => void) | undefined;
  try {
    const { db } = await hubGuard();
    const input = await body(request);
    const messages: { role: 'user' | 'assistant'; content: string }[] = [];
    if (!Array.isArray(input.messages) || input.messages.length < 1 || input.messages.length > 40) throw new HttpError(400, 'Invalid messages');
    let total = 0;
    for (const [i, message] of input.messages.entries()) {
      if (!message || message.role !== (i % 2 === 0 ? 'user' : 'assistant') || typeof message.content !== 'string' || message.content.length < 1 || message.content.length > 20000) throw new HttpError(400, 'Invalid messages');
      total += message.content.length;
      messages.push({ role: message.role, content: message.content });
    }
    if (total > 60000) throw new HttpError(400, 'Messages too long');
    if (!process.env.ANTHROPIC_API_KEY) throw new HttpError(503, 'Tutor not configured');
    const configuredLimit = Number(process.env.TUTOR_DAILY_LIMIT ?? 40);
    const limit = Number.isInteger(configuredLimit) && configuredLimit > 0 && configuredLimit <= 2147483647 ? configuredLimit : 40;
    const { data: allowed, error } = await db.rpc('tutor_take', { p_limit: limit });
    if (error) throw new HttpError(500, 'Tutor usage check failed');
    if (!allowed) throw new HttpError(429, 'Daily tutor limit reached');
    const client = new Anthropic();
    const parameters = {
      model: 'claude-opus-5-5', max_tokens: 4000,
      output_config: { effort: 'medium' },
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default', messages,
    } as Parameters<typeof client.beta.messages.stream>[0] & { fallbacks: 'default' };
    // The fallback beta predates its SDK types; keep the extension narrowly typed.
    upstream = client.beta.messages.stream(parameters);
    const stream = upstream;
    disconnect = () => stream.abort();
    request.signal.addEventListener('abort', disconnect, { once: true });
    if (request.signal.aborted) stream.abort();
    // Establish the upstream response before committing our status and headers.
    await stream.withResponse();
    const encoder = new TextEncoder();
    const cleanup = () => request.signal.removeEventListener('abort', disconnect!);
    return new Response(new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') controller.enqueue(encoder.encode(event.delta.text));
          }
          const final = await stream.finalMessage();
          if (final.stop_reason === 'refusal') controller.enqueue(encoder.encode("\n\n(The tutor can't help with that request.)"));
          controller.close();
        } catch { controller.error(new Error('Tutor stream failed')); }
        finally { cleanup(); }
      },
      cancel() { stream.abort(); cleanup(); },
    }), { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' } });
  } catch (error) {
    upstream?.abort();
    if (disconnect) request.signal.removeEventListener('abort', disconnect);
    const status = error instanceof HttpError ? error.status : error instanceof Anthropic.RateLimitError ? 429 : error instanceof Anthropic.APIError ? 502 : 500;
    return Response.json({ error: error instanceof HttpError ? error.message : 'Tutor request failed' }, { status, headers: { 'Cache-Control': 'no-store' } });
  }
}
