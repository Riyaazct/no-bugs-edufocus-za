CREATE TABLE registration (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  user_role VARCHAR(20) NOT NULL
);
INSERT INTO registration (username, email, password, user_role) 
VALUES ('mirela', 'mirela@gmail.com', 'Mirela1!', 'member');

select * from registration