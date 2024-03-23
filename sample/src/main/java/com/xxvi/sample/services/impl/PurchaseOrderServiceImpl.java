package com.xxvi.sample.services.impl;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xxvi.sample.dto.PurchaseOrderRequest;
import com.xxvi.sample.entities.Item;
import com.xxvi.sample.entities.PurchaseOrder;
import com.xxvi.sample.repository.PurchaseOrderRepository;
import com.xxvi.sample.services.PurchaseOrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;

@Service
@RequiredArgsConstructor
@Component
@EnableAutoConfiguration
public class PurchaseOrderServiceImpl implements PurchaseOrderService {
    private final PurchaseOrderRepository purchaseOrderRepository;


    @Override
    public String createPurchaseOrder(PurchaseOrderRequest purchaseOrderRequest){
        var purOrder = PurchaseOrder.builder()
                .vendor(purchaseOrderRequest.getVendor())
                .vendorAddress((purchaseOrderRequest.getVendorAddress()))
                .approvedBy(purchaseOrderRequest.getApprovedBy())
                .dateRequested(new Date())
                .invoiceNumber(purchaseOrderRequest.getInvoiceNumber())
                .items(purchaseOrderRequest.getItems())
                .build();

        var processPurchaseOrder = purchaseOrderRepository.save(purOrder);

        return String.valueOf(processPurchaseOrder);
    }
}
