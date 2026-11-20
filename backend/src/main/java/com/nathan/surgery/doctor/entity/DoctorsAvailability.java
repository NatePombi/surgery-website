package com.nathan.surgery.doctor.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "doctors_availability")
public class DoctorsAvailability {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "doctor_id",nullable = false)
    private Doctor doctor;
    @Column(name = "availability_date",nullable = false)
    LocalDate availabilityDate;
    @Column(name = "start_time",nullable = false)
    LocalTime startTime;
    @Column(name = "end_time",nullable = false)
    LocalTime endTime;


    public static DoctorsAvailability createDoctorsAvailability(Doctor doctor, LocalDate availabilityDate, LocalTime startTime, LocalTime endTime) {
        DoctorsAvailability doctorsAvailability = new DoctorsAvailability();
        doctorsAvailability.doctor = doctor;
        doctorsAvailability.availabilityDate = availabilityDate;
        doctorsAvailability.startTime = startTime;
        doctorsAvailability.endTime = endTime;
        return doctorsAvailability;
    }
}
