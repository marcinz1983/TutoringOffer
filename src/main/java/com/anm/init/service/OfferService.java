package com.anm.init.service;


import com.anm.init.controller.request.OfferRequest;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.model.Offer;

import java.util.List;
import java.util.Optional;

public interface OfferService {

    void saveOffer(OfferRequest request);

    List<OfferResponse> findAll();

    Optional<Offer> findById(Long id);

    void deleteById(Long id);

}
