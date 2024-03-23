package com.xxvi.sample.repository;

import com.xxvi.sample.entities.Item;
import com.xxvi.sample.entities.PurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Long> {
}
