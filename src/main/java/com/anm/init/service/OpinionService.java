package com.anm.init.service;

import com.anm.init.controller.request.AddOpinionToOfferRequest;
import com.anm.init.controller.response.AddOpinionToOfferResponse;
import com.anm.init.controller.response.OpinionResponse;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

public interface OpinionService {
    List<OpinionResponse> findByOffer(UUID offerUuid);

    AddOpinionToOfferResponse addOpinionToOffer(AddOpinionToOfferRequest request);
}
