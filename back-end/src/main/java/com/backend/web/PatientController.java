package com.backend.web;

import com.backend.dto.dtoResponse.AppointmentResponseDto;
import com.backend.dto.dtoResponse.PatientsResponseDto;
import com.backend.services.UserServiceImp;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/patient")
@RequiredArgsConstructor
public class PatientController {
    final UserServiceImp userServiceImp;
    @GetMapping("/list")
//    @PostAuthorize("hasAuthority('MANAGER')")
    public ResponseEntity<List<PatientsResponseDto>> getPatients( ){

        List<PatientsResponseDto> j =   userServiceImp.getListOffPatients();

        return new ResponseEntity<>(j, HttpStatus.OK);
    }
}
