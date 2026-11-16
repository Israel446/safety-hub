// PIN rules shared by sign-up, Admin and "Change my PIN".
export const validPin = (pin: string) => /^\d{6,12}$/.test(pin);

// Refuse PINs that anyone could guess: all one digit, or a straight run like 123456 / 987654.
export function weakPin(pin: string) {
  if (/^(\d)\1+$/.test(pin)) return true;
  const d = pin.split('').map(Number);
  const up = d.every((x, i) => i === 0 || x === (d[i - 1] + 1) % 10);
  const down = d.every((x, i) => i === 0 || x === (d[i - 1] + 9) % 10);
  return up || down;
}

export function pinProblem(pin: string, confirm?: string) {
  if (!validPin(pin)) return 'PIN must be 6 to 12 digits.';
  if (weakPin(pin)) return 'That PIN is too easy to guess. Avoid repeated digits and runs like 123456.';
  if (confirm !== undefined && pin !== confirm) return 'The two PINs do not match.';
  return null;
}
