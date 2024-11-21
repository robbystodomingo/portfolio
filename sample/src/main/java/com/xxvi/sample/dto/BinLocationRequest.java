package com.xxvi.sample.dto;

import lombok.Data;

import java.util.Date;

@Data
public class BinLocationRequest {

    private Integer id;

    private String binLocationCode;

    private boolean isDeleted;

    private Date createdDate;

    private Date editedDate;


}
