package com.backend.services.interfaces;

import com.backend.dto.dtoResponse.PatientsResponseDto;
import com.backend.entities.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    User getUserById(Long id);
    Optional<User> findUserById(Long id);
    User addUser(User user);
    List<PatientsResponseDto> getListOffPatients();
}