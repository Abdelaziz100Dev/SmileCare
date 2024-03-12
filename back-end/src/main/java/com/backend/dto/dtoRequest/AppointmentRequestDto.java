package com.backend.dto.dtoRequest;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@JsonIgnoreProperties(ignoreUnknown = true)
public class AppointmentRequestDto {
//    @JsonIgnore
    private Long id;
    private PatientRequestDto patient;
    private String appointmentDateTime;
    private String reason;
}