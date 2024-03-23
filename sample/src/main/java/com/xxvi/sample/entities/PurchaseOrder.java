package com.xxvi.sample.entities;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Transactional
@Table(name = "purchase_orders")

public class PurchaseOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String vendor;

    private String vendorAddress;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_item_id", referencedColumnName = "id")
    private List<Item> items;

    @OneToOne
    private User approvedBy;

    private Date dateRequested;

    private Date dateApproved;

    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private BigDecimal invoiceNumber;

    private boolean isReceived (){
        return false;
    }

}
