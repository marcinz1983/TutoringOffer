package com.anm.init.service;

import com.anm.init.controller.request.SearchPublicOfferRequest;
import com.anm.init.controller.response.PublicOfferResponse;
import java.util.List;

public interface PublicOfferService {

    List<PublicOfferResponse> searchOffer(SearchPublicOfferRequest request);
}
