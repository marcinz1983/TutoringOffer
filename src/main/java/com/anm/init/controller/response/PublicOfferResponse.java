package com.anm.init.controller.response;

import java.util.List;
import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class PublicOfferResponse {

    private UUID uuid;
    private String firstName;
    private String lastName;
    private String shortDescription;
    private String longDescription;
    private String rateDescription;
    private String backgroundDescription;
    private List<PriceResponse> price;
    private Trainer trainer;
    private List<ExperienceResponse> sections;
}