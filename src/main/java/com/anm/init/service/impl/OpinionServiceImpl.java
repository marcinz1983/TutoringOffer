package com.anm.init.service.impl;

import com.anm.init.controller.request.AddOpinionToOfferRequest;
import com.anm.init.controller.response.AddOpinionToOfferResponse;
import com.anm.init.controller.response.OpinionResponse;
import com.anm.init.exception.IllegalOpinionOperationException;
import com.anm.init.exception.OfferNotFoundException;
import com.anm.init.mapper.OpinionMapper;
import com.anm.init.model.AppUser;
import com.anm.init.model.Offer;
import com.anm.init.model.Opinion;
import com.anm.init.repository.OfferRepository;
import com.anm.init.repository.OpinionsRepository;
import com.anm.init.security.auth.SecurityService;
import com.anm.init.service.OpinionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OpinionServiceImpl implements OpinionService {

    private final OpinionsRepository opinionsRepository;
    private final OpinionMapper opinionMapper;
    private final OfferRepository offerRepository;
    private final SecurityService securityService;

    @Autowired
    public OpinionServiceImpl(OpinionsRepository opinionsRepository, OpinionMapper opinionMapper, OfferRepository offerRepository, SecurityService securityService) {
        this.opinionsRepository = opinionsRepository;
        this.opinionMapper = opinionMapper;
        this.offerRepository = offerRepository;
        this.securityService = securityService;
    }

    @Cacheable(cacheNames = "ByOffer")
    @Override
    public List<OpinionResponse> findByOffer(UUID offerUuid) {
        return opinionsRepository.findByOffer_Uuid(offerUuid).stream()
                .map(opinionMapper::mapEntityToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public AddOpinionToOfferResponse addOpinionToOffer(AddOpinionToOfferRequest request) {

        AppUser appUser = securityService.findAppUserByUser();
        Offer offer = offerRepository
                .findByUuidEquals(request.getOfferUUID())
                .orElseThrow(() -> new OfferNotFoundException(OfferServiceImpl.OFFER_NOT_FOUND_EXCEPTION_MESSAGE));

        if (offer.getAppUser().equals(appUser))
            throw new IllegalOpinionOperationException("Offer Owner can't add opinion to own offer");
        else {
            Opinion newOpinion = opinionMapper.mapAddOpinionToOfferRequestToOpinionEntity(offer, request);
            opinionsRepository.save(newOpinion);
            return opinionMapper.mapDataToOfferResponse(appUser, newOpinion);
        }

    }

}
