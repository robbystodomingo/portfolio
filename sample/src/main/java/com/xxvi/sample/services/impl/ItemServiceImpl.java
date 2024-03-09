package com.xxvi.sample.services.impl;

import com.xxvi.sample.dto.ItemRequest;
import com.xxvi.sample.entities.Item;
import com.xxvi.sample.repository.ItemRepository;
import com.xxvi.sample.services.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Component
@EnableAutoConfiguration
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;

    @Override
    public String addItem(ItemRequest itemRequest){

        var item = Item.builder()
                .itemNumber(itemRequest.getItemNumber())
                .description(itemRequest.getDescription())
                .locationCode(itemRequest.getLocationCode())
                .amount(itemRequest.getAmount())
                .quantity(itemRequest.getQuantity())
                .unitAmount(itemRequest.getUnitAmount())
                .createdDate(itemRequest.getCreatedDate())
                .build();

        var savedItem = itemRepository.save(item);

        return String.valueOf(savedItem);

    }


    @Override
    public String updateItem(ItemRequest itemRequest, String id) {
        if(id.equals(itemRequest.getId())){
            var item = Item.builder()
                    .itemNumber(itemRequest.getItemNumber())
                    .description(itemRequest.getDescription())
                    .locationCode(itemRequest.getLocationCode())
                    .amount(itemRequest.getAmount())
                    .quantity(itemRequest.getQuantity())
                    .unitAmount(itemRequest.getUnitAmount())
                    .createdDate(itemRequest.getModifiedDate())
                    .build();

            var updatedItem = itemRepository.save(item);
            return String.valueOf(updatedItem);
        }

        return "";

    }


}
