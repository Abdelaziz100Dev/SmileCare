package com.backend.web;

import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class UserController {
    @GetMapping("/hello")
    @PostAuthorize("hasAuthority('USER')")
    public Authentication hello(Authentication authentication){

        return authentication;
    }
}
