package com.anm.init.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class PublicOfferAndSpecializationByKeyWordResponse {

    private String type;
    private String fullNameOrSpecialization;
    private String iconOrUserAvatar;
    private UUID offerUuid;

}
