package com.anm.init.mapper.impl;

import com.anm.init.controller.response.PublicOfferAndSpecializationByKeyWordResponse;
import com.anm.init.mapper.PublicOfferAndSpecializationByKeyWordMapper;
import com.anm.init.model.Offer;
import com.anm.init.model.Specialization;
import org.springframework.stereotype.Component;

@Component
public class PublicOfferAndSpecializationByKeyWordMapperImpl implements PublicOfferAndSpecializationByKeyWordMapper {
    @Override
    public PublicOfferAndSpecializationByKeyWordResponse mapEntityToResponse(Offer offer) {
        return PublicOfferAndSpecializationByKeyWordResponse.builder()
                .withOfferUuid(offer.getUuid())
                .withType("PERSON")
                .withFullNameOrSpecialization(offer.getFirstName()+" "+offer.getLastName())
                .withIconOrUserAvatar("not supported yet")
                .build();
    }

    @Override
    public PublicOfferAndSpecializationByKeyWordResponse mapEntityToResponse(Specialization specialization) {
        return PublicOfferAndSpecializationByKeyWordResponse.builder()
                .withOfferUuid(null)
                .withType("SPECIALIZATION")
                .withFullNameOrSpecialization(specialization.getLongName())
                .withIconOrUserAvatar(specialization.getIconImage())
                .build();
    }
}
