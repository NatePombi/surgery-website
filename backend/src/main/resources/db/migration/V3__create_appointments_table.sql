create table appointments(
    id BIGSERIAL primary key ,
    first_name varchar(50) not null ,
    surname varchar(50) not null ,
    email varchar(254) not null ,
    phone_number varchar(20) ,
    appointment_date Date not null ,
    appointment_time TIME with time zone not null ,
    status varchar(30) not null ,
    created_at Timestamp with time zone DEFAULT CURRENT_TIMESTAMP,

    constraint chk_appointment_status
                         check (
                             status in (
                                 'CONFIRMED',
                                 'NEED_RECEPTION_REVIEW',
                                 'CANCELLED'
                                 )
                             )
);

create index idx_appointments_id
on appointments(id)