package com.anm.init.service;

import com.anm.init.controller.request.SearchPublicOfferRequest;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.controller.response.PublicOfferAndSpecializationByKeyWordResponse;
import com.anm.init.controller.response.PublicOfferResponse;
import com.anm.init.model.Offer;

import java.util.List;
import java.util.UUID;

public interface PublicOfferService {

    List<PublicOfferResponse> searchOffer(SearchPublicOfferRequest request);

    List<PublicOfferAndSpecializationByKeyWordResponse> searchOffersByKeyWord(String keyWord);

    PublicOfferResponse findOfferByUUID(UUID offerId);
}
