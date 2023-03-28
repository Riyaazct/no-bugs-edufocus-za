drop table if exists training_material;

create table training_material (
id serial primary key,
title varchar(200) not null,
description varchar(200) not null,
date varchar(20) not null,
file_path varchar(200) not null,
uploaded date default current_date,
user_id int references users(user_id)
)

insert into training_material (title, description, date, file_path) 
					   values('Eight week enhancing, holistic teacher wellbing', 'To follow', '12 March 2023', '/api/training_material/Programme Overview Eight-Week Enhancing Holistic Teacher Wellbeing.pdf')
					   
--DUMMY DATA:
INSERT INTO training_material (title, description, date, file_path)
VALUES 
    ('Effective Classroom Management Techniques', 'This training will cover effective classroom management techniques for teachers', '1 January 2023', '/api/training_material/Effective Classroom Management Techniques.pdf'),
    ('Incorporating Technology in the Classroom', 'This training will focus on how to incorporate technology in the classroom', '15 January 2023', '/api/training_material/Incorporating Technology in the Classroom.pdf'),
    ('Teaching with Mindfulness', 'This training will explore how to teach with mindfulness techniques', '1 February 2023', '/api/training_material/Teaching with Mindfulness.pdf'),
    ('Differentiated Instruction Strategies', 'This training will cover differentiated instruction strategies for teachers', '15 February 2023', '/api/training_material/Differentiated Instruction Strategies.pdf'),
    ('Supporting Students with Learning Disabilities', 'This training will provide strategies for supporting students with learning disabilities', '1 March 2023', '/api/training_material/Supporting Students with Learning Disabilities.pdf'),
    ('Title 6', 'Description 6', 'Date 6', 'File Path 6'),
    ('Title 7', 'Description 7', 'Date 7', 'File Path 7'),
    ('Title 8', 'Description 8', 'Date 8', 'File Path 8'),
    ('Title 9', 'Description 9', 'Date 9', 'File Path 9'),
    ('Title 10', 'Description 10', 'Date 10', 'File Path 10'),
    ('Title 11', 'Description 11', 'Date 11', 'File Path 11'),
    ('Title 12', 'Description 12', 'Date 12', 'File Path 12'),
    ('Title 13', 'Description 13', 'Date 13', 'File Path 13'),
    ('Title 14', 'Description 14', 'Date 14', 'File Path 14'),
    ('Title 15', 'Description 15', 'Date 15', 'File Path 15'),
    ('Title 16', 'Description 16', 'Date 16', 'File Path 16'),
    ('Title 17', 'Description 17', 'Date 17', 'File Path 17'),
    ('Title 18', 'Description 18', 'Date 18', 'File Path 18'),
    ('Title 19', 'Description 19', 'Date 19', 'File Path 19'),
    ('Title 20', 'Description 20', 'Date 20', 'File Path 20'),
    ('Title 21', 'Description 21', 'Date 21', 'File Path 21'),
    ('Title 22', 'Description 22', 'Date 22', 'File Path 22'),
    ('Title 23', 'Description 23', 'Date 23', 'File Path 23'),
    ('Title 24', 'Description 24', 'Date 24', 'File Path 24'),
    ('Title 25', 'Description 25', 'Date 25', 'File Path 25'),
    ('Title 26', 'Description 26', 'Date 26', 'File Path 26'),
    ('Title 27', 'Description 27', 'Date 27', 'File Path 27'),
    ('Title 28', 'Description 28', 'Date 28', 'File Path 28')
    
    
INSERT INTO training_material (title, description, date, file_path, uploaded)
VALUES
('Introduction to React', 'Learn the basics of React', '2022-01-01', '/training_materials/react-intro.pdf', '2022-01-01'),
('React Hooks', 'Advanced concepts on React Hooks', '2022-01-02', '/training_materials/react-hooks.pdf', '2022-01-02'),
('Node.js Fundamentals', 'Introduction to Node.js', '2022-01-03', '/training_materials/nodejs-fundamentals.pdf', '2022-01-03'),
('RESTful APIs with Express.js', 'Building RESTful APIs with Express.js', '2022-01-04', '/training_materials/express-rest.pdf', '2022-01-04'),
('Unit Testing with Jest', 'Writing unit tests with Jest', '2022-01-05', '/training_materials/jest-unit-testing.pdf', '2022-01-05'),
('Deploying React Apps to AWS', 'Deploying React apps to Amazon Web Services', '2022-01-06', '/training_materials/react-aws.pdf', '2022-01-06'),
('Database Design', 'Designing databases for your application', '2022-01-07', '/training_materials/database-design.pdf', '2022-01-07'),
('MySQL Fundamentals', 'Introduction to MySQL', '2022-01-08', '/training_materials/mysql-fundamentals.pdf', '2022-01-08'),
('Advanced MySQL', 'Advanced MySQL concepts', '2022-01-09', '/training_materials/mysql-advanced.pdf', '2022-01-09'),
('Building Web Applications with Ruby on Rails', 'Learn to build web applications with Ruby on Rails', '2022-01-10', '/training_materials/ruby-on-rails.pdf', '2022-01-10');

INSERT INTO training_material (title, description, date, file_path, uploaded)
VALUES
('Introduction to React', 'Learn the basics of React', '2022-01-15', 'files/react-intro.pdf', '2022-01-15'),
('JavaScript for Beginners', 'A beginner-friendly guide to JavaScript', '2022-02-01', 'files/js-for-beginners.pdf', '2022-02-01'),
('Node.js Crash Course', 'A fast-paced introduction to Node.js', '2022-02-15', 'files/nodejs-crash-course.pdf', '2022-02-15'),
('Python for Data Science', 'Learn how to use Python for data analysis', '2022-03-01', 'files/python-data-science.pdf', '2022-03-01'),
('HTML and CSS Basics', 'A beginner-friendly guide to HTML and CSS', '2022-03-15', 'files/html-css-basics.pdf', '2022-03-15');

select * from training_material tm 
