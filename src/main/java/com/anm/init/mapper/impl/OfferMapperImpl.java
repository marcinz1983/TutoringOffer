package com.anm.init.mapper.impl;

import com.anm.init.controller.request.OfferRequest;
import com.anm.init.mapper.OfferMapper;
import com.anm.init.model.Offer;
import org.springframework.stereotype.Component;

@Component
public class OfferMapperImpl implements OfferMapper {

    @Override
    public Offer mapRequestToEntity(OfferRequest request) {
        return Offer.builder()
                .withFirstName(request.getFirstName())
                .withLastName(request.getLastName())
                .withShortDescription(request.getShortDescription())
                .withLongDescription(request.getLongDescription())
                .withBackgroundDescription(request.getBackgroundDescription())
                .withRateDescription(request.getRateDescription())
                .withPrice(request.getPrice())
                .build();
    }
}
