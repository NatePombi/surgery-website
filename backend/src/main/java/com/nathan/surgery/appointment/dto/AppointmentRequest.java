package com.nathan.surgery.appointment.dto;

import jakarta.validation.constraints.*;

import java.time.LocalDate;
import java.time.LocalTime;

public record AppointmentRequest(
        @NotBlank(message = "First Name cannot be empty")
        @Size(max = 50)
        String firstName,
        @NotBlank(message = "Surname cannot be empty")
        @Size(max = 50)
        String surname,
        @NotBlank(message = "Email cannot be empty")
        @Email(message = "Invalid email")
        @Size(max = 254)
        String email,
        @Size(max = 20)
        String phoneNumber,
        @NotNull(message = "Appointment cannot be null")
        @FutureOrPresent(message = "Appointment Date cannot be before present day")
        LocalDate appointmentDate,
        @NotNull(message = "Appointment Time cannot be null")
        LocalTime appointmentTime

) {
}
