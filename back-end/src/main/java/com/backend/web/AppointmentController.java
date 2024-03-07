package com.backend.web;

import com.backend.dto.dtoRequest.AppointmentRequestDto;
import com.backend.dto.dtoResponse.AppointmentForListResponseDto;
import com.backend.dto.dtoResponse.AppointmentResponseDto;
import com.backend.services.interfaces.IAppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/appointments")
public class AppointmentController {
    // service
    private final IAppointmentService appointmentService;

    @PostMapping
    public ResponseEntity<AppointmentResponseDto> addAppointment(@RequestBody AppointmentRequestDto appointmentRequestDto) {
        AppointmentResponseDto  appointment = appointmentService.addAppointment(appointmentRequestDto);
        return new ResponseEntity<>(appointment, HttpStatus.OK);
    }
    //get all appointments
    @GetMapping("")
    public ResponseEntity<List<AppointmentForListResponseDto>> getAllAppointments() {
        List<AppointmentForListResponseDto> appointments = appointmentService.getAppointments();
        return new ResponseEntity<>(appointments, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<AppointmentResponseDto> getAppointmentById(@RequestParam Long id) {
        AppointmentResponseDto appointment = appointmentService.getAppointmentById(id);
        return new ResponseEntity<>(appointment, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointment(@RequestParam Long id) {
        appointmentService.deleteAppointment(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
