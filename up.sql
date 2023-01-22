/// Kopirajte u DBeaver i odvrtite skriptu

create extension if not exists "uuid-ossp";

create table users
( 
  id varchar(36) default uuid_generate_v4() not null,
  username VARCHAR(25) not null unique,
  email VARCHAR(50) not null unique,
  pass varchar(256) not null,
  
  constraint pk_users_id primary key(id)
);

create table reviews
(
  id varchar(36) default uuid_generate_v4() not null,
  user_id  varchar(36) not null,
  movie varchar(36) not null,
  review varchar(256) not null,
  is_spoiler bool not null,
  grade decimal(3,1) not null,
  created_at timestamptz not null default now(),
  
  constraint pk_reviewss_id primary key(id),
  constraint fk_reviews_users foreign key(user_id) references users(id)
)
