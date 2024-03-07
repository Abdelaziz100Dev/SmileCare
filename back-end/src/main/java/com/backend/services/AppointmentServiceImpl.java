package com.backend.services;

import com.backend.dto.dtoRequest.AppointmentRequestDto;
import com.backend.dto.dtoResponse.AppointmentForListResponseDto;
import com.backend.dto.dtoResponse.AppointmentResponseDto;
import com.backend.entities.Appointment;
import com.backend.mappers.MapperStruct;
import com.backend.repositories.AppointmentRepository;
import com.backend.services.interfaces.IAppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class AppointmentServiceImpl implements IAppointmentService {
    private final AppointmentRepository appointmentRepository;
    private final MapperStruct mapperStruct;

    @Override
    public AppointmentResponseDto getAppointmentById(Long id) {
        return null;
    }

    @Override
    public AppointmentResponseDto addAppointment(AppointmentRequestDto appointmentDto) {
    //        validation(taskRequestDto);
        Appointment appointment1  = mapperStruct.toAppointmentEntity(appointmentDto);
        return mapperStruct.toAppointmentResponseDto( appointmentRepository.save(appointment1));

    }

@Override
public void deleteAppointment(Long id) {
    appointmentRepository.deleteById(id);
}

    @Override
    public AppointmentResponseDto updateAppointment(AppointmentRequestDto appointment) {
        return null;
    }

    @Override
    public List<AppointmentForListResponseDto> getAppointments() {
        List<AppointmentForListResponseDto> h = mapperStruct.toListOfAppointmentForListResponseDto(appointmentRepository.findAll());
        return h;
    }

    @Override
    public List<AppointmentResponseDto> getAppointmentsByDoctorId(Long doctorId) {
        return null;
    }

    @Override
    public List<AppointmentResponseDto> getAppointmentsByPatientId(Long patientId) {
        return null;
    }

    @Override
    public List<AppointmentResponseDto> getAppointmentsByDate(LocalDate date) {
        return null;
    }

    @Override
    public List<AppointmentResponseDto> getAppointmentsByDateAndDoctorId(LocalDate date, Long doctorId) {
        return null;
    }

    @Override
    public List<AppointmentResponseDto> getAppointmentsByDateAndPatientId(LocalDate date, Long patientId) {
        return null;
    }

    @Override
    public List<AppointmentResponseDto> getAppointmentsByDateAndDoctorIdAndPatientId(LocalDate date, Long doctorId, Long patientId) {
        return null;
    }
}
