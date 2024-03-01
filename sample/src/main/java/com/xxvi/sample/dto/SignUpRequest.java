package com.xxvi.sample.dto;

import lombok.Data;

@Data
public class SignUpRequest {

    private String firstName;

    private String lastName;

    private String email;

    private String password;

}