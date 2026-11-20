create table doctors(
    id BIGSERIAL primary key ,
    name varchar(80) not null
);
create index idx_doctor_id
on doctors(id);

insert into doctors(name)
values ('Ben'),('Dorsin'),('Carlos')