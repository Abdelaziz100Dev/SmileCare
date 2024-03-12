package com.backend.mappers;

import com.backend.dto.dtoRequest.AppointmentRequestDto;
import com.backend.dto.dtoResponse.AppointmentForListResponseDto;
import com.backend.dto.dtoResponse.AppointmentResponseDto;
import com.backend.dto.dtoResponse.PatientsResponseDto;
import com.backend.entities.Appointment;
import com.backend.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Mapper(componentModel = "spring")
public interface MapperStruct {
// @Mapping(source = "id", target = "id", defaultValue = "null")
 @Mapping(target = "id", source = "id", qualifiedByName = "mapId")
 Appointment toAppointmentEntity(AppointmentRequestDto appointmentRequestDto);
 @Named("mapId")
 default Long mapId(Long id) {
  return StringUtils.isEmpty(id) ? null : id;
 }
 AppointmentResponseDto toAppointmentResponseDto(Appointment appointment);
 List<PatientsResponseDto> toListOfPatientsResponseDto(List<User> user);
 List<AppointmentResponseDto> toListOfAppointmentResponseDto(List<Appointment> appointments);
 @Mapping(source = "patient.firstname", target = "name")
 @Mapping(source = "patient.email", target = "email")
 @Mapping(source = "appointmentDateTime", target = "appointmentDate")
 @Mapping(source = "appointmentDateTime", target = "appointmentTime", qualifiedByName = "mapToTime")
 AppointmentForListResponseDto toAppointmentForListResponseDto(Appointment appointment);
 List<AppointmentForListResponseDto> toListOfAppointmentForListResponseDto(List<Appointment> appointments);
 @Named("mapToTime")
 default LocalTime mapToTime(LocalDateTime value) {
  return value.toLocalTime();
 }

}
