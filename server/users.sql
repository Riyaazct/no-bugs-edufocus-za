CREATE TABLE registration (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) TEXT DEFAULT 'member' NOT NULL
);
INSERT INTO registration (username, email, password, role)
VALUES ('edufocus',  'edufocus@gmail.com', 'Edufocus1!','admin');
INSERT INTO registration (username, email, password, user) 
VALUES ('mirela', 'mirela@gmail.com', 'Mirela1!', 'member');



