package com.backend.commons.responses;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Component
public class ErrorResponseSimpleFormat {

    private  LocalDateTime timestamp;
    private  String message;
    private  String path;
    private String status;
    private  List<String> details;
}