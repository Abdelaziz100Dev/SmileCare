package com.backend.services.interfaces;

import com.backend.dto.dtoRequest.AppointmentRequestDto;
import com.backend.dto.dtoResponse.AppointmentForListResponseDto;
import com.backend.dto.dtoResponse.AppointmentResponseDto;

import java.time.LocalDate;
import java.util.List;

public interface IAppointmentService {
    AppointmentResponseDto getAppointmentById(Long id);
    AppointmentResponseDto addAppointment(AppointmentRequestDto appointment);
    void deleteAppointment(Long id);
    AppointmentResponseDto updateAppointment(AppointmentRequestDto appointment);
    List<AppointmentForListResponseDto> getAppointments();
    List<AppointmentResponseDto> getAppointmentsByDoctorId(Long doctorId);
    List<AppointmentResponseDto> getAppointmentsByPatientId(Long patientId);
    List<AppointmentResponseDto> getAppointmentsByDate(LocalDate date);
    List<AppointmentResponseDto> getAppointmentsByDateAndDoctorId(LocalDate date, Long doctorId);
    List<AppointmentResponseDto> getAppointmentsByDateAndPatientId(LocalDate date, Long patientId);
    List<AppointmentResponseDto> getAppointmentsByDateAndDoctorIdAndPatientId(LocalDate date, Long doctorId, Long patientId);
}
