package com.backend.dto.dtoResponse;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@Setter
public class AppointmentForListResponseDto {
    private Long id;
    private String name;
    private String email;
    private String reason;
    private LocalDate appointmentDate;
    private LocalTime appointmentTime;
}
