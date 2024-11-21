package com.xxvi.sample.repository;

import com.xxvi.sample.entities.BinLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface BinLocationRepository extends JpaRepository<BinLocation, Long> {

    @Override
    List<BinLocation> findAll();

}
