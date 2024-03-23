package com.xxvi.sample.dto;

import com.xxvi.sample.entities.Item;
import com.xxvi.sample.entities.User;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
public class PurchaseOrderRequest {

    private Integer id;

    private String vendor;

    private String vendorAddress;

    private List<Item> items;

    private User approvedBy;

    private Date dateRequested;

    private Date dateApproved;

    private BigDecimal invoiceNumber;

    private boolean isReceived (){
        return false;
    }
}
