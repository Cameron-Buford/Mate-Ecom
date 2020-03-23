create table users (
    user_id serial primary key,
    username varchar(200),
    password (200)
);

create table mate_products (
    product_id serial primary key,
    image varchar(500)
    name varchar(200),
    description(1000),
    price decimal
);

create table gourds (
    gourd_id serial primary key,
    product_id int references mate_products(product_id),
);

create table bombillas (
    bombilla_id serial primary key,
    product_id int references mate_products(product_id)
);

create table wishlist (
    wishlist_id serial primary key,
    user_id int references users(user_id),
    product_id int references mate_products(product_id)
);

create table cart (
    cart_id serial primary key,
    user_id int references user(user_id),
    product_id int references mate_products(product_id)
);