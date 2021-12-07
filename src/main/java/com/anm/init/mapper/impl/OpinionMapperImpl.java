package com.anm.init.mapper.impl;

import com.anm.init.controller.request.AddOpinionToOfferRequest;
import com.anm.init.controller.response.AddOpinionToOfferResponse;
import com.anm.init.controller.response.OpinionResponse;
import com.anm.init.mapper.OpinionMapper;
import com.anm.init.model.AppUser;
import com.anm.init.model.Offer;
import com.anm.init.model.Opinion;
import com.anm.init.security.auth.SecurityService;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class OpinionMapperImpl implements OpinionMapper {

    private SecurityService securityService;

    public OpinionMapperImpl(SecurityService securityService) {
        this.securityService = securityService;
    }

    @Override
    public OpinionResponse mapEntityToResponse(Opinion opinion) {
        return OpinionResponse.builder()
                .withName(opinion.getAppUser().getFirebaseName())
                .withTitle(opinion.getTitle())
                .withComment(opinion.getContent())
                .withImage(opinion.getAppUser().getFirebasePicture())
                .withRate(opinion.getRate())
                .build();
    }

    @Override
    public Opinion mapAddOpinionToOfferRequestToOpinionEntity(Offer offer, AddOpinionToOfferRequest request) {

        return Opinion.builder()
                .withTitle(request.getTitle())
                .withContent(request.getContent())
                .withRate(request.getRate())
                .withCreatedAt(LocalDateTime.now())
                .withAppUser(securityService.findAppUserByUser())
                .withOffer(offer)
                .build();
    }

    @Override
    public AddOpinionToOfferResponse mapDataToOfferResponse(AppUser appUser, Opinion newOpinion) {
        return AddOpinionToOfferResponse.builder()
                .withName(appUser.getFirebaseEmail())
                .withSurname(appUser.getFirebaseEmail())
                .withTitle(newOpinion.getTitle())
                .withContent(newOpinion.getContent())
                .withUserPicture(appUser.getFirebasePicture())
                .withRate(newOpinion.getRate())
                .build();


    }

}
