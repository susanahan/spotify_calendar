drop database if exists spotify_cal;
create database spotify_cal;

\connect spotify_cal;


CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password VARCHAR
);

CREATE TABLE events (
  ID SERIAL PRIMARY KEY,
  date date,
  start_time VARCHAR,
  end_time  VARCHAR,
  description VARCHAR,
  user_id INTEGER REFERENCES users(ID)
);



INSERT INTO users (username, password )
  VALUES('Hansusana', 'password123');
