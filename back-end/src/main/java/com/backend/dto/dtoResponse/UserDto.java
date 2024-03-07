package com.backend.dto.dtoResponse;
import java.io.Serializable;

public record UserDto(  String firstname,
         String lastname,
        String email) implements Serializable {

}