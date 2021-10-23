package com.anm.init.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class OfferResponse {

    private Long id;
    private String firstName;
    private String lastName;
    private String shortDescription;
    private String longDescription;
    private String rateDescription;
    private String backgroundDescription;
    private BigDecimal price;
}
