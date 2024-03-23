package com.xxvi.sample.services;

import com.xxvi.sample.dto.PurchaseOrderRequest;

public interface PurchaseOrderService {

    String createPurchaseOrder(PurchaseOrderRequest purchaseOrderRequest);
}
