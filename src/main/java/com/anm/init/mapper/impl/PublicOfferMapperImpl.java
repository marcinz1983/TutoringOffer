package com.anm.init.mapper.impl;

import com.anm.init.controller.response.AppUserResponse;
import com.anm.init.controller.response.PublicOfferResponse;
import com.anm.init.mapper.PublicOfferMapper;
import com.anm.init.model.Offer;
import org.springframework.stereotype.Component;

@Component
public class PublicOfferMapperImpl implements PublicOfferMapper {
    @Override
    public PublicOfferResponse mapEntityToResponse(Offer offer) {
        return PublicOfferResponse.builder()
                .withUuid(offer.getUuid())
                .withFirstName(offer.getFirstName())
                .withLastName(offer.getLastName())
                .withShortDescription(offer.getShortDescription())
                .withLongDescription(offer.getLongDescription())
                .withBackgroundDescription(offer.getBackgroundDescription())
                .withRateDescription(offer.getRateDescription())
                .withPriceList(offer.getPrices())
                .withAppUserResponse(AppUserResponse.builder()
                        .withFirebaseEmail(offer.getAppUser().getFirebaseEmail())
                        .withFirebaseEmailVerified(offer.getAppUser().isFirebaseEmailVerified())
                        .withFirebaseName(offer.getAppUser().getFirebaseName())
                        .withFirebaseIssuer(offer.getAppUser().getFirebaseIssuer())
                        .withFirebaseUid(offer.getAppUser().getFirebaseUid())
                        .withFirebasePicture(offer.getAppUser().getFirebasePicture())
                        .build())
                .build();
    }
}
