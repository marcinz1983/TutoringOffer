package com.anm.init.service;

import com.anm.init.controller.request.EditOfferRequest;
import com.anm.init.controller.request.AddOfferRequest;
import com.anm.init.controller.response.OfferResponse;

import java.util.List;
import java.util.UUID;

public interface OfferService {

    void saveOffer(AddOfferRequest request);

    List<OfferResponse> findAll();

    OfferResponse findByUUID(UUID uuid);

    void deleteByUUID(UUID uuid);

    void editOffer(EditOfferRequest editOfferRequest);

    OfferResponse findOfferByUUID(UUID offerId);
}
