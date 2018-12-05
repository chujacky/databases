CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY,
  username VARCHAR(64) NOT NULL
);

CREATE TABLE rooms (
  id INT NOT NULL PRIMARY KEY,
  roomname VARCHAR(64) NOT NULL
);

CREATE TABLE messages (
  id INT NOT NULL PRIMARY KEY,
  content text NOT NULL,
  created_at Timestamp NOT NULL,
  id_user INT NOT NULL,
  id_room INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES users(id),
  FOREIGN KEY (id_room) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
