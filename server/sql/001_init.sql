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

create index event_tags_event_id_idx on event_tags(event_id);
create index guest_sessions_event_id_idx on guest_sessions(event_id);

insert into events (slug, title, couple_names) values ('marina-rafael', 'Nosso dia', 'Marina & Rafael');
insert into event_tags (event_id, token, label) select id, 'mesa-jardim', 'Mesa Jardim' from events where slug = 'marina-rafael';
