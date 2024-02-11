package com.backend.config;
//import org.springframework.security.authentication.AuthenticationProvider;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.backend.enums.Permission.*;
//import static com.backend.enums.Permission.;
import static com.backend.enums.Role.*;
import static org.springframework.http.HttpMethod.*;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {

    private static final String[] WHITE_LIST_URL = {"/api/v1/auth/**",
//            "/api/admin/**"
//            "/api/v1/Demo-controller",
    };
    private final JwtAuthentificationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
//    private Filter jwtAuthFilter;
//    private final LogoutHandler logoutHandler;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        var  = "/api/v1/management/**";
         var AdminURL  = "/api/v1/admin/**";
        http
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(req ->
                req
                    .requestMatchers(WHITE_LIST_URL).permitAll()
                        .requestMatchers("/api/v1/management/**").hasAnyRole(ADMIN.name(), MANAGER.name())

                        .requestMatchers(GET, "/api/v1/management/**").hasAnyAuthority(ADMIN_READ.name(), MANAGER_READ.name())
                        .requestMatchers(POST, "/api/v1/management/**").hasAnyAuthority(ADMIN_CREATE.name(), MANAGER_CREATE.name())
                        .requestMatchers(PUT, "/api/v1/management/**").hasAnyAuthority(ADMIN_UPDATE.name(), MANAGER_UPDATE.name())
                        .requestMatchers(DELETE, "/api/v1/management/**").hasAnyAuthority(ADMIN_DELETE.name(), MANAGER_DELETE.name())

//                        .requestMatchers(AdminURL).hasRole(ADMIN.name())
//
//                        .requestMatchers(GET, AdminURL).hasAuthority(ADMIN_READ.name())
//                        .requestMatchers(POST, AdminURL).hasAuthority(ADMIN_CREATE.name())
//                        .requestMatchers(PUT, AdminURL).hasAuthority(ADMIN_UPDATE.name())
//                        .requestMatchers(DELETE, AdminURL).hasAuthority(ADMIN_DELETE.name())
                    .anyRequest().authenticated()
            )
            .sessionManagement(s -> s.sessionCreationPolicy(STATELESS))
            .authenticationProvider(authenticationProvider) // specifying which authentication provider to use
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class); // use the jwtAuthFilter before the  UsernamePasswordAuthenticationFilter

        return http.build();
    }
}
