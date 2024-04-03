package com.xxvi.sample.repository;

import com.xxvi.sample.entities.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    @Override
    List<Item> findAll();

    @Query("select t from Item t where " +
            "t.description like  %:description% or t.itemNumber = :itemNumber")
    List<Item> getItemByDescriptionOrItemNumber(@Param("description") String description,
                                           @Param("itemNumber") String itemNumber);



}
