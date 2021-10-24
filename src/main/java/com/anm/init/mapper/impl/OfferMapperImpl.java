package com.anm.init.mapper.impl;

import com.anm.init.controller.request.EditOfferRequest;
import com.anm.init.controller.request.AddOfferRequest;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.mapper.OfferMapper;
import com.anm.init.model.Offer;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class OfferMapperImpl implements OfferMapper {

    @Override
    public Offer mapRequestToEntity(AddOfferRequest request) {
        return Offer.builder()
                .withFirstName(request.getFirstName())
                .withLastName(request.getLastName())
                .withShortDescription(request.getShortDescription())
                .withLongDescription(request.getLongDescription())
                .withBackgroundDescription(request.getBackgroundDescription())
                .withRateDescription(request.getRateDescription())
                .withPrice(request.getPrice())
                .withUuid(UUID.randomUUID())
                .build();
    }

    @Override
    public OfferResponse mapEntityToResponse(Offer offer) {
        return OfferResponse.builder()
                .withUuid(offer.getUuid())
                .withFirstName(offer.getFirstName())
                .withLastName(offer.getLastName())
                .withShortDescription(offer.getShortDescription())
                .withLongDescription(offer.getLongDescription())
                .withBackgroundDescription(offer.getBackgroundDescription())
                .withRateDescription(offer.getRateDescription())
                .withPrice(offer.getPrice())
                .build();
    }

    @Override
    public Offer mapEditOfferRequestToOffer(Offer oldOffer, EditOfferRequest editOfferRequest) {
        return Offer.builder()
                .withId(oldOffer.getId())
                .withFirstName(editOfferRequest.getFirstName())
                .withLastName(editOfferRequest.getLastName())
                .withShortDescription(editOfferRequest.getShortDescription())
                .withLongDescription(editOfferRequest.getLongDescription())
                .withBackgroundDescription(editOfferRequest.getBackgroundDescription())
                .withRateDescription(editOfferRequest.getRateDescription())
                .withPrice(editOfferRequest.getPrice())
                .withUuid(editOfferRequest.getUuid())
                .build();
    }
}
