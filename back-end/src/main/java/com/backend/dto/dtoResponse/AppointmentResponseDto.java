package com.backend.dto.dtoResponse;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
public class AppointmentResponseDto {
    private UserDto patient;
    private LocalDateTime appointmentDateTime;
    private String reason;
}
