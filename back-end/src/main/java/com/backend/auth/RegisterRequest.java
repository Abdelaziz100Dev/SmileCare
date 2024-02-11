package com.backend.auth;

import com.backend.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.PackagePrivate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@PackagePrivate
public class RegisterRequest {
     String firstname;
     String lastname;
     String email;
     String password;
    private Role role;
}
