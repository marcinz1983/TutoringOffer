package com.anm.init.controller.response;

import java.math.BigDecimal;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class OfferPriceResponse {

    private String description;
    private BigDecimal price;
    private String currency;
    private boolean mainPrice;

}
