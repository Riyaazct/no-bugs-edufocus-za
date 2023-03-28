create table users (
user_id serial primary key,
firstname varchar (50) not null,
lastname varchar(50) not null,
phone_number int not null,
email varchar(200) unique not null,
user_role varchar(50) not null,
username varchar unique not null,
password varchar(50) not null,
photo varchar(200) not null
)
--ADJUSTMENTS TO USERS TABLE
alter table users
rename column user_role to role;


create table donors (
firstname varchar(50) not null,
lastname varchar(50) not null,
email varchar(200) unique not null,
donation_amount int not null,
donation_date date not null,
donationation_history varchar(200) not null,
user_id int references users(user_id)
)
--ADJUSTMENTS TO DONORS TABLE
alter table donors add column id serial primary key;
alter table donors 
rename column donationation_history to donation_history;

create table events (
id serial primary key,
name varchar(50) not null,
description varchar(50) not null,
date date not null,
time time not null,
location varchar(200) not null,
max_attendees int not null,
user_id int references users(user_id)
)

create table training_material (
id serial primary key,
title varchar(200) not null,
description varchar(200) not null,
file_path varchar(200) not null,
date date not null,
user_id int references users(user_id)
)

create table registrations (
id serial primary key,
user_id int references users(user_id),
donor_id int references donors(id)
)


create table photos (
id serial primary key,
event text not null,
date varchar(20) not null,
location varchar(200) not null,
images text[] not null,
user_id int references users(user_id),
event_id int references events(id),
date_captured date default current_date
)



insert into photos(event, date, location, images)
values('EduFocus Projects Launch', '12 March 2022', 'CPUT Hotel School, Granger Bay',
		array[
		'api/images/gallery/01 launch 2022/01.jpg',
		'api/images/gallery/01 launch 2022/02.jpg',
		'api/images/gallery/01 launch 2022/03.jpg',
		'api/images/gallery/01 launch 2022/04.jpg',
		'api/images/gallery/01 launch 2022/05.jpg',
		'api/images/gallery/01 launch 2022/06.jpg',
		'api/images/gallery/01 launch 2022/07.jpg',
		'api/images/gallery/01 launch 2022/08.jpg',
		'api/images/gallery/01 launch 2022/09.jpg',
		'api/images/gallery/01 launch 2022/010.jpg',
		'api/images/gallery/01 launch 2022/011.jpg',
		'api/images/gallery/01 launch 2022/012.jpg',
		'api/images/gallery/01 launch 2022/013.jpg',
		'api/images/gallery/01 launch 2022/014.jpg',
		'api/images/gallery/01 launch 2022/015.jpg'
		])
		
insert into photos (event, date, location, images	)
values(
		'Teachers Tea Time with a Difference',
		'27 august 2022',
		'Ottery Youth Centre',
  array[ 
		'api/images/gallery/02 teachers tea time with a difference 2022/01.jpg',		'api/images/gallery/02 teachers tea time with a difference 2022/02.jpg',		'api/images/gallery/02 teachers tea time with a difference 2022/03.jpg',		'api/images/gallery/02 teachers tea time with a difference 2022/04.jpg',		'api/images/gallery/02 teachers tea time with a difference 2022/05.jpg',		'api/images/gallery/02 teachers tea time with a difference 2022/06.jpg',		'api/images/gallery/02 teachers tea time with a difference 2022/07.jpg'
	])
	
	insert into photos(event, date, location, images)
	values(
			'EduFocus Projects Inaugural Gala & Awards Event', 
			'05 November 2022', 'Krystal Beach Hotel',
 	   array[  
 	    'api/images/gallery/03 inaugural  gala & awards event 2022/01.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/02.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/03.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/04.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/05.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/06.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/07.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/08.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/09.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/010.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/011.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/012.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/013.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/014.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/015.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/016.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/017.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/018.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/019.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/020.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/021.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/022.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/023.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/024.jpg',		'api/images/gallery/03 inaugural  gala & awards event 2022/025.jpg'
 	   ]);
 	  
 	  select * from photos p















