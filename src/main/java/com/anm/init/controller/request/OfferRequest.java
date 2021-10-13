package com.anm.init.controller.request;

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
public class OfferRequest {

    @NotNull
    @Size(min = 1, max = 20)
    private String firstName;

    @NotNull
    @Size(min = 1, max = 50)
    private String lastName;

    @NotNull
    @Size(min = 1, max = 150)
    private String shortDescription;

    @NotNull
    @Size(min = 1, max= 500)
    private String longDescription;

    @NotNull
    @Size(min = 1, max = 20)
    private String rateDescription;

    @NotNull
    @Size(min = 1,max = 500)
    private String backgroundDescription;

    @NotNull
    private BigDecimal price;
}
