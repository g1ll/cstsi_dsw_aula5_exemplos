create table imc(
    id integer not null AUTO_INCREMENT PRIMARY KEY,
    name varchar(200) not null,
    altura numeric(10,5) not null,
    peso numeric(10,5) not null,
    imc numeric(10,5) not null
);
