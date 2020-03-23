create table users (
    user_id serial primary key,
    username varchar(200),
    password (200)
);

create table mate_products (
    product_id serial primary key,
    name varchar(200),
    description(1000),
    price decimal
);

create table gourds (
    gourd_id serial primary key,
    name varchar(200),
    description varchar(1000),
    price decimal
);

create table bombillas (
    bombilla_id serial primary key,
    name varchar(200),
    description varchar(1000),
    price decimal
);

