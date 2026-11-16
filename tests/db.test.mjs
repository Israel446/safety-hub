import { PGlite } from '@electric-sql/pglite';
import { readFileSync, readdirSync } from 'node:fs';
import assert from 'node:assert/strict';
const db = new PGlite();
try {
  await db.exec(`create schema auth;
    create table auth.users (id uuid primary key default gen_random_uuid());
    create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
    create role authenticated; create role anon; create role service_role bypassrls;
    grant usage on schema auth to authenticated, anon, service_role;
    grant execute on function auth.uid() to authenticated, anon, service_role;`);
  const directory = new URL('../supabase/migrations/', import.meta.url);
  for (const file of readdirSync(directory).filter(f => f.endsWith('.sql')).sort()) await db.exec(readFileSync(new URL(file, directory), 'utf8'));
  const ids = {};
  for (const [key, role, active] of [['a','member',true], ['b','member',true], ['owner','owner',true], ['admin','admin',true], ['inactive','admin',false]]) {
    ids[key] = (await db.query('insert into auth.users default values returning id')).rows[0].id;
    await db.query('insert into profiles (id,staff_id,full_name,role,active) values ($1,$2,$2,$3,$4)', [ids[key],key.toUpperCase(),role,active]);
  }
  async function as(key, query, args = [], role = 'authenticated') {
    await db.exec(`set role ${role}`);
    try {
      await db.query("select set_config('request.jwt.claim.sub', $1, false)", [ids[key] ?? '']);
      return await db.query(query,args);
    } finally { await db.exec("reset role; select set_config('request.jwt.claim.sub', '', false)"); }
  }
  const denied = (key, sql, args = []) => assert.rejects(as(key,sql,args), /row-level security|permission denied/);
  for (const key of ['a','b']) {
    await as(key, 'insert into progress (user_id) values ($1)', [ids[key]]);
    await as(key, "insert into assignments (user_id,lesson_id,text) values ($1,'lesson-1','My reflection')", [ids[key]]);
  }
  assert.equal((await as('a','select * from progress')).rows.length,2);
  assert.equal((await as('a','select * from assignments')).rows.length,2);
  assert.equal((await as('a','select full_name from profiles')).rows.length,5);
  await denied('a','select email from profiles');
  await denied('a',"update profiles set role='admin' where id=$1",[ids.a]);
  await denied('admin',"update profiles set active=false where id=$1",[ids.b]);
  await as('a',`update progress set done='{"lesson-1":true}' where user_id=$1`,[ids.a]);
  await as('a',"update assignments set text='Updated' where user_id=$1",[ids.a]);
  assert.equal((await as('a',"update progress set done='{}' where user_id=$1 returning *",[ids.b])).rows.length,0);
  assert.equal((await as('a',"delete from assignments where user_id=$1 returning *",[ids.b])).rows.length,0);
  await denied('a',"insert into assignments (user_id,lesson_id,text) values ($1,'other','bad')",[ids.b]);
  await denied('a',"insert into progress (user_id) values ($1)",[ids.owner]);
  await denied('a','update progress set user_id=$1 where user_id=$2',[ids.owner,ids.a]);
  await denied('a','update assignments set user_id=$1 where user_id=$2',[ids.owner,ids.a]);
  assert.equal((await as('a',"update assignments set text='bad' where user_id=$1 returning *",[ids.b])).rows.length,0);
  assert.equal((await as('a','delete from progress where user_id=$1 returning *',[ids.b])).rows.length,0);
  await assert.rejects(as('a',"update assignments set text=$1 where user_id=$2",['x'.repeat(1201),ids.a]),/check constraint/);
  await as('a',"update assignments set text=$1 where user_id=$2",['x'.repeat(1200),ids.a]);
  assert.equal((await as('a',"update hub_settings set team_note='bad' returning *")).rows.length,0);
  for (const key of ['owner','admin']) {
    const row = (await as(key,"update hub_settings set team_note='Team learning' where id=1 returning *")).rows[0];
    assert.equal(row.updated_by,ids[key]);
    await assert.rejects(as(key,'update hub_settings set team_note=$1',['x'.repeat(201)]),/check constraint/);
  }
  await denied('owner','delete from hub_settings');
  await denied('owner','insert into hub_settings (id) values (1)');
  for (const table of ['progress','assignments','hub_settings']) {
    assert.equal((await as('inactive',`select * from ${table}`)).rows.length,0);
    await assert.rejects(as('',`select * from ${table}`,[],'anon'),/permission denied/);
  }
  assert.equal((await as('inactive','select full_name from profiles')).rows.length,0);
  await denied('inactive','insert into progress (user_id) values ($1)',[ids.inactive]);
  await denied('inactive',"insert into assignments (user_id,lesson_id,text) values ($1,'x','x')",[ids.inactive]);
  assert.equal((await as('inactive',"update hub_settings set team_note='bad' returning *")).rows.length,0);
  await db.query('update profiles set active=false where id=$1',[ids.a]);
  assert.equal((await as('a','select * from progress')).rows.length,0);
  assert.equal((await as('a',"update progress set done='{}' returning *")).rows.length,0);
  await as('b','delete from assignments where user_id=$1',[ids.b]);
  await as('b','delete from progress where user_id=$1',[ids.b]);
  console.log('All database checks passed: team reads, personal writes, private profiles, settings roles, constraints, inactive accounts and anonymous access.');
} finally { await db.close(); }
