package com.xxvi.sample.repository;

import com.xxvi.sample.entities.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    @Override
    List<Item> findAll();




}
