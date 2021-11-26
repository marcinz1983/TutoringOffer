package com.anm.init.controller.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class OfferPriceRequest {

    private String description;
    private BigDecimal price;
    private String currency;
    private boolean mainPrice;

}
