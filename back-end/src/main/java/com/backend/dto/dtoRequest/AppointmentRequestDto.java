package com.backend.dto.dtoRequest;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AppointmentRequestDto {
    private PatientRequestDto patient;
    private String appointmentDateTime;
    private String reason;
}
//this to json
//{
//        "patientId": 1,
//        "appointmentDateTime": "2021-08-01T10:00:00",
//        "reason": "I have a headache"
//}