package com.backend.web;

import com.backend.dto.dtoRequest.AppointmentRequestDto;
import com.backend.dto.dtoResponse.AppointmentForListResponseDto;
import com.backend.dto.dtoResponse.AppointmentResponseDto;
import com.backend.services.interfaces.IAppointmentService;
import jakarta.websocket.server.PathParam;
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
    public ResponseEntity<String>  deleteAppointment(@PathVariable Long id) {

        boolean deleted = appointmentService.deleteAppointment(id);

        // Check if the appointment was successfully deleted
        if (deleted) {
            return new ResponseEntity<>("Appointment with ID " + id + " deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Appointment with ID " + id + " not found", HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> updateAppointment(@PathVariable Long id, @RequestBody AppointmentRequestDto appointmentRequestDto) {
        boolean updated = appointmentService.updateAppointment(id, appointmentRequestDto);
        if (updated) {
            return new ResponseEntity<>("Appointment with ID " + appointmentRequestDto.getId() + " updated successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Appointment with ID " + appointmentRequestDto.getId() + " not found", HttpStatus.NOT_FOUND);
        }
    }


}
