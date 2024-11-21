package com.xxvi.sample.controller;


import com.xxvi.sample.dto.BinLocationRequest;
import com.xxvi.sample.services.BinLocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/binLocation")
@RequiredArgsConstructor
@CrossOrigin()
public class BinLocationController {

    private final BinLocationService binLocationService;

    @PostMapping("/addBinLocation")
    public ResponseEntity<String> addBinLocation(@RequestBody BinLocationRequest binLocationRequest) {
        return ResponseEntity.ok(binLocationService.addBinLocation(binLocationRequest));
    }
}
