package com.xxvi.sample.services;

import com.xxvi.sample.dto.ItemRequest;

public interface ItemService {

         String addItem(ItemRequest itemRequest);

         String updateItem(ItemRequest itemRequest, String id);
}
