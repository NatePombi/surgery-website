create table doctors_availability(
    id BIGSERIAL primary key ,
    doctor_id BIGINT references doctors(id) not null ,
    availability_date Date not null ,
    start_time Time with time zone not null ,
    end_time Time with time zone not null ,


    constraint chk_doctors_availability_hours
                                 check (
                                     start_time >= Time '09:00'
                                     AND end_time <= Time '17:00'
                                     AND start_time > end_time
                                     ),

    constraint uq_doctors_availability_range
                                 unique (doctor_id,availability_date,start_time,end_time)
);
create index idx_doctors_availability_id
on doctors_availability(id)