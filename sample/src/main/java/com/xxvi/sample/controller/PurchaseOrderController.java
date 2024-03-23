package com.xxvi.sample.controller;


import com.xxvi.sample.dto.PurchaseOrderRequest;
import com.xxvi.sample.services.PurchaseOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/purchaseOrder")
@RequiredArgsConstructor
@CrossOrigin()
public class PurchaseOrderController {

    private final PurchaseOrderService purchaseOrderService;

    @PostMapping("/createPurchaseOrder")
    public ResponseEntity<String> createPurchaseOrder(@RequestBody PurchaseOrderRequest purchaseOrderRequest){
        return ResponseEntity.ok(purchaseOrderService.createPurchaseOrder(purchaseOrderRequest));
    }
}
