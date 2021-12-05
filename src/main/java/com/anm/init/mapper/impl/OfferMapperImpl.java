package com.anm.init.mapper.impl;

import com.anm.init.controller.request.AddOfferRequest;
import com.anm.init.controller.request.EditOfferRequest;
import com.anm.init.controller.response.OfferPriceResponse;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.mapper.OfferMapper;
import com.anm.init.model.Offer;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

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
                .withPrices(null)
                .withAppUser(null)
                .withOpinions(null)
                .withUuid(UUID.randomUUID())
                .build();
    }

    @Override
    public OfferResponse mapEntityToResponse(Offer offer) {

        List<OfferPriceResponse> offerPricesList = offer.getPrices().stream().map(value -> {
            return new OfferPriceResponse(value.getDescription(), value.getPrice(), value.getCurrency(), value.isMainPrice());
        }).collect(Collectors.toList());

        return OfferResponse.builder()
                .withUuid(offer.getUuid())
                .withFirstName(offer.getFirstName())
                .withLastName(offer.getLastName())
                .withShortDescription(offer.getShortDescription())
                .withLongDescription(offer.getLongDescription())
                .withBackgroundDescription(offer.getBackgroundDescription())
                .withRateDescription(offer.getRateDescription())
                .withPrices(offerPricesList)
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
                .withPrices(null)
                .withUuid(editOfferRequest.getUuid())
                .build();
    }
}
