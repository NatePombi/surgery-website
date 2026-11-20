package com.nathan.surgery.appointment.entity;

import com.nathan.surgery.appointment.enums.AppointmentStatus;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "appointments")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName;
    @Column(name = "surname", nullable = false, length = 50)
    private String surname;
    @Column(name = "email", nullable = false, length = 50)
    private String email;
    @Column(name = "phone_number",length = 20)
    private String phoneNumber;
    @Column(name = "appointment_date",nullable = false)
    private LocalDate appointmentDate;
    @Column(name = "appointment_time", nullable = false)
    private LocalTime appointmentTime;
    @Enumerated(EnumType.STRING)
    @Column(name = "status",length = 30)
    private AppointmentStatus status;
    @CreationTimestamp
    @Column(name = "created_at",nullable = false,updatable = false)
    private LocalDateTime createdAt;

    public static Appointment createAppointment(String firstName, String surname, String email, String phoneNumber,LocalDate appointmentDate,LocalTime appointmentTime) {
        Appointment appointment = new Appointment();
        appointment.firstName = firstName;
        appointment.surname = surname;
        appointment.email = email;
        appointment.phoneNumber = phoneNumber;
        appointment.status = AppointmentStatus.CONFIRMED;
        appointment.appointmentDate = appointmentDate;
        appointment.appointmentTime = appointmentTime;
        return appointment;
    }


    public void markForReceptionReview(){
        this.status = AppointmentStatus.NEED_RECEPTION_REVIEW;
    }

    public void rescheduleAppointment(LocalDate appointmentDate,LocalTime appointmentTime){
        this.appointmentDate = appointmentDate;
        this.appointmentTime = appointmentTime;
        this.status = AppointmentStatus.CONFIRMED;
    }

    public void cancelled(){
        this.status = AppointmentStatus.CANCELLED;
    }

}
