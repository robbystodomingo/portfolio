package com.xxvi.sample.controller;

import com.xxvi.sample.dto.JWTAuthenticationResponse;
import com.xxvi.sample.dto.RefreshTokenRequest;
import com.xxvi.sample.dto.SignInRequest;
import com.xxvi.sample.dto.SignUpRequest;
import com.xxvi.sample.entities.User;
import com.xxvi.sample.services.AuthenticationService;
import com.xxvi.sample.services.JWTService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin()
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    private final JWTService jwtService;



    @PostMapping("/signup")
    public ResponseEntity<JWTAuthenticationResponse> signup(@RequestBody SignUpRequest signUpRequest){
        return ResponseEntity.ok(authenticationService.signup(signUpRequest));
    }

    @PostMapping("/signin")
    public ResponseEntity<JWTAuthenticationResponse> signin(@RequestBody SignInRequest signInRequest){
        return ResponseEntity.ok(authenticationService.signin(signInRequest));
    }

    @PostMapping("/refresh")
    public ResponseEntity<JWTAuthenticationResponse> refresh(@RequestBody RefreshTokenRequest refreshTokenRequest){
        return ResponseEntity.ok(authenticationService.refreshToken(refreshTokenRequest));
    }

}
