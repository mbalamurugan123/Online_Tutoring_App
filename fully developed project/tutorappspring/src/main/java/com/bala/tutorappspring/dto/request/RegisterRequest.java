package com.bala.tutorappspring.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    private String name;
    private String lastname;
    private String email;
    private String contuct;
    private String collegename;
    private String age;
    private String password;
}
