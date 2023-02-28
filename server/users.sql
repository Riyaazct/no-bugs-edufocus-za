CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  users VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  pwd VARCHAR(255) NOT NULL
);
INSERT INTO signup (users, email, pwd) 
VALUES ('alex', 'alex@gmail.com', 'Alex1!');