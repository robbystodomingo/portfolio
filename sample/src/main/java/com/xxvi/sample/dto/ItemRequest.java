package com.xxvi.sample.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class ItemRequest {

    private String id;

    private Integer itemNumber;

    private String description;

    private String locationCode;

    private BigDecimal quantity;

    private BigDecimal unitAmount;

    private BigDecimal amount;

    private Date createdDate = new Date();

    private String createdBy;

    private String modifiedBy;

    private Date modifiedDate;

    private boolean isBlocked() {return false;}
}
