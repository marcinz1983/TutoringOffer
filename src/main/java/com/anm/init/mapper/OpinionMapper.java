package com.anm.init.mapper;

import com.anm.init.controller.request.AddOpinionToOfferRequest;
import com.anm.init.controller.response.AddOpinionToOfferResponse;
import com.anm.init.controller.response.OpinionResponse;
import com.anm.init.model.AppUser;
import com.anm.init.model.Offer;
import com.anm.init.model.Opinion;
import com.anm.init.security.auth.models.User;

public interface OpinionMapper {


    OpinionResponse mapEntityToResponse(Opinion opinion);

    Opinion mapAddOpinionToOfferRequestToOpinionEntity(Offer offer, AddOpinionToOfferRequest request);

    AddOpinionToOfferResponse mapDataToOfferResponse(AppUser appUser, Opinion newOpinion);
}
