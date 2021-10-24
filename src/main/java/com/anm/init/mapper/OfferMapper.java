package com.anm.init.mapper;

import com.anm.init.controller.request.EditOfferRequest;
import com.anm.init.controller.request.AddOfferRequest;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.model.Offer;

public interface OfferMapper {

    Offer mapRequestToEntity(AddOfferRequest request);

    OfferResponse mapEntityToResponse(Offer offer);

    Offer mapEditOfferRequestToOffer(Offer oldOffer, EditOfferRequest editOfferRequest);

}
