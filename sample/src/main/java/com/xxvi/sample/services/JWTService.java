package com.xxvi.sample.services;

import com.xxvi.sample.entities.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Map;
import java.util.Optional;

public interface JWTService {

    String extractUserName(String token);

    String generateToken(UserDetails userDetails);

    boolean isTokenValid(String token, UserDetails userDetails);

    String generateRefreshToken(Map<String, Object> extraClaims, UserDetails userDetails);

}
