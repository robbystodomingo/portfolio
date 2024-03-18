package com.xxvi.sample.services;

import com.xxvi.sample.dto.ItemRequest;
import com.xxvi.sample.entities.Item;

import java.util.List;

public interface ItemService {

    String addItem(ItemRequest itemRequest);

    String updateItem(ItemRequest itemRequest, Integer id);

    List<Item> getAllItems();


}
