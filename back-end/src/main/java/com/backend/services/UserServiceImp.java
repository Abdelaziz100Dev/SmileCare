package com.backend.services;

import com.backend.dto.dtoResponse.PatientsResponseDto;
import com.backend.entities.User;
import com.backend.enums.Role;
import com.backend.mappers.MapperStruct;
import com.backend.repositories.UserRepository;
import com.backend.services.interfaces.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@RequiredArgsConstructor
@Service
public class UserServiceImp implements IUserService {
    private final  UserRepository userRepository;
    private final MapperStruct mapstruct;

    public User getUserById(Long id){
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
    }
    public Optional<User> findUserById(Long id) {
       return userRepository.findById(id);
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<PatientsResponseDto> getListOffPatients() {
        return mapstruct.toListOfPatientsResponseDto(userRepository.findUserByRole(Role.PATIENT));
    }
}
