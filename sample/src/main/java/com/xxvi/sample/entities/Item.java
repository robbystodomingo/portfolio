package com.xxvi.sample.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "item")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer itemNumber;

    private String description;

    private String locationCode;

    private BigDecimal quantity;

    private BigDecimal unitAmount;

    private BigDecimal amount;

    private Date createdDate;

    private String createdBy;

    private String modifiedBy;

    private boolean isBlocked() {return false;}

}
