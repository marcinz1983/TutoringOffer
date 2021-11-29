package com.anm.init.controller.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class SearchPublicOfferRequest {

    @NotNull
    @Min(0)
    private Integer page;

    @NotNull
    @Min(1)
    private Integer size;

    @NotNull
    @Min(0)
    private BigDecimal minPrice;

    @NotNull
    @Min(1)
    private BigDecimal maxPrice;

    private String searchingString;

}
