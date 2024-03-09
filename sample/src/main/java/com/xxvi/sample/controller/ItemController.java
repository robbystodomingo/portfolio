package com.xxvi.sample.controller;

import com.xxvi.sample.dto.ItemRequest;
import com.xxvi.sample.services.ItemService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/item")
@RequiredArgsConstructor
@CrossOrigin()
public class ItemController {

    private final ItemService itemService;

    @PostMapping("/addItem")
    public ResponseEntity<String> addItem(@RequestBody ItemRequest itemRequest){
        return ResponseEntity.ok(itemService.addItem(itemRequest));
    }

    @PutMapping("/updateItem/{id}")
    public ResponseEntity<String> updateItem(@RequestBody ItemRequest itemRequest, @PathVariable String id){
        return ResponseEntity.ok(itemService.updateItem(itemRequest, id));
    }
}
