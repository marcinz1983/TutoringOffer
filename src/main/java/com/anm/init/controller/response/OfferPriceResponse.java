package com.anm.init.controller.response;

import com.anm.init.model.Offer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

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
