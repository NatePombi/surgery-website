package com.nathan.surgery.doctor.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "doctors")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name",nullable = false,length = 80)
    private String name;


    public static Doctor createDoctor(String name){
        Doctor doctor = new Doctor();
        doctor.name = name;
        return doctor;
    }
}
