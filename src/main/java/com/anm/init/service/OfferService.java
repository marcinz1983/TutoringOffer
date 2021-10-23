package com.anm.init.service;

import com.anm.init.controller.request.EditOfferRequest;
import com.anm.init.controller.request.OfferRequest;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.model.Offer;

import java.util.List;

public interface OfferService {

    void saveOffer(OfferRequest request);

    List<OfferResponse> findAll();

    Offer findById(Long id);

    void deleteById(Long id);

    void editOffer(EditOfferRequest editOfferRequest);

}
