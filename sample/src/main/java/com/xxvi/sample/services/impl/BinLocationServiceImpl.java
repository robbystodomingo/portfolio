package com.xxvi.sample.services.impl;


import com.xxvi.sample.dto.BinLocationRequest;
import com.xxvi.sample.entities.BinLocation;
import com.xxvi.sample.repository.BinLocationRepository;
import com.xxvi.sample.services.BinLocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
@Component
@EnableAutoConfiguration
public class BinLocationServiceImpl implements BinLocationService {

    private final BinLocationRepository binLocationRepository;


    @Override
    public String addBinLocation(BinLocationRequest binLocationRequest){

        var binLoc = BinLocation.builder()
                .binLocationCode(binLocationRequest.getBinLocationCode())
                .createdDate(new Date())
                .editedDate(new Date())
                .build();

        var saveBinLoc = binLocationRepository.save(binLoc);

        return String.valueOf(saveBinLoc);

    }
}
