package com.anm.init.service;


import com.anm.init.controller.request.OfferRequest;
import com.anm.init.controller.response.OfferResponse;

import java.util.List;

public interface OfferService {

    void saveOffer(OfferRequest request);

    List<OfferResponse> findAll();
}
