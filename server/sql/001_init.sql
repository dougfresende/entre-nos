create extension if not exists pgcrypto;

create table events (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  couple_names text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table event_tags (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  token text not null unique check (token ~ '^[A-Za-z0-9_-]{8,100}$'),
  label text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table guest_sessions (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  tag_id uuid references event_tags(id) on delete set null,
  display_name text not null check (char_length(display_name) between 1 and 80),
  created_at timestamptz not null default now()
);

create table media (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  session_id uuid not null references guest_sessions(id) on delete cascade,
  original_name text not null,
  storage_key text not null unique,
  mime_type text not null,
  byte_size bigint not null check (byte_size > 0),
  state text not null default 'received' check (state in ('received', 'processing', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

create table notes (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  session_id uuid not null references guest_sessions(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 500),
  state text not null default 'received' check (state in ('received', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

create table missions (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  title text not null,
  description text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table mission_submissions (
  id uuid primary key default gen_random_uuid(),
  mission_id uuid not null references missions(id) on delete cascade,
  session_id uuid not null references guest_sessions(id) on delete cascade,
  media_id uuid references media(id) on delete set null,
  state text not null default 'submitted' check (state in ('submitted', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  unique (mission_id, session_id)
);

create index event_tags_event_id_idx on event_tags(event_id);
create index guest_sessions_event_id_idx on guest_sessions(event_id);
create index media_session_id_idx on media(session_id);
create index notes_event_id_idx on notes(event_id);
create index missions_event_id_idx on missions(event_id);

insert into events (slug, title, couple_names) values ('marina-rafael', 'Nosso dia', 'Marina & Rafael');
insert into event_tags (event_id, token, label) select id, 'mesa-jardim', 'Mesa Jardim' from events where slug = 'marina-rafael';
insert into missions (event_id, title, description)
select id, 'Um abraço inesquecível', 'Registre um abraço que marcou o nosso dia.' from events where slug = 'marina-rafael';
insert into missions (event_id, title, description)
select id, 'Um detalhe dourado', 'Encontre um detalhe dourado e compartilhe a pista.' from events where slug = 'marina-rafael';
