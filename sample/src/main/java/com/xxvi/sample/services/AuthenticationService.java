package com.xxvi.sample.services;

import com.xxvi.sample.dto.JWTAuthenticationResponse;
import com.xxvi.sample.dto.RefreshTokenRequest;
import com.xxvi.sample.dto.SignInRequest;
import com.xxvi.sample.dto.SignUpRequest;
import com.xxvi.sample.entities.User;

public interface AuthenticationService {

    User signup(SignUpRequest signUpRequest);

    JWTAuthenticationResponse signin(SignInRequest signInRequest);

    JWTAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);

}
