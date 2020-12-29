-- create database pharmacystore;
-- use pharmacystore;

-- @create tables

create table inventory(
inventory_ID int(4) not null auto_increment,
product_ID varchar(12) not null,
Quantity int(4) not null,
Cost decimal(10,2) not null,
primary key(inventory_ID));


create table products(
product_ID varchar(12) not null,
category_ID int(4) not null,
image_link varchar(130) not null,
product_name varchar(30) not null,
Details varchar(250) not null,
price decimal(10,2) not null,
packaging varchar(20) not null,
Manufactured Date not null,
Expiration Date not null,
primary key(product_ID));


create table category(
category_ID int(4) not null auto_increment,
category_name varchar(30) not null,
Details varchar(150) null,
primary key(category_ID));


create table orders(
order_ID int(4) not null auto_increment,
order_date_ID int(4) not null,
product_ID varchar(12) not null,
Amount int(3) not null,
price decimal(10,2) not null,
primary key(Order_ID, order_date_ID));

-- change drop
-- create table user_image(
-- image_ID int(4) not null auto_increment,
-- image varchar(100) not null,
-- size int null,
-- extension varchar(10) not null,
-- primary key(image_ID));

-- change drop
-- create table products_image(
-- image_ID int(4) not null auto_increment,
-- image varchar(100) not null,
-- size int null,
-- extension varchar(10) not null,
-- primary key(image_ID));


create table order_date(
order_date_ID int(4) not null auto_increment,
order_date date not null unique,
primary key(order_date_ID));

-- image_ID int(4) null, drop

create table User(
user_ID varchar(15) not null,
image_link varchar(130) null,
username varchar(20) not null,
password varchar(250) not null,
email varchar(50) not null,
role enum('user', 'admin') default 'user' not null,
primary key(user_ID));





-- @foreign keys

alter table inventory 
add constraint fk1 foreign key (product_ID)
references products(product_ID);

alter table orders
add constraint fk2 foreign key(product_ID)
references  products(product_ID);


alter table products
add constraint fk3 foreign key(category_ID)
references category(category_ID);

-- change
alter table products
add constraint fk4 foreign key(image_ID)
references products_image(image_ID);

alter table orders
add constraint fk5 foreign key(order_date_ID)
references order_date(order_date_ID);

-- change
alter table user
add constraint fk6 foreign key(image_ID)
references user_image(image_ID);


