package com.anm.init.controller.request;


import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class SpecializationRequest {

    @NotNull
    @Size(min = 1, max = 150)
    private String shortName;

    @NotNull
    @Size(min = 1, max = 500)
    private String longName;

    @NotNull
    @Size(min = 1)
    private String iconImage;

}
