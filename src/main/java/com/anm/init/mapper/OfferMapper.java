package com.anm.init.mapper;
import com.anm.init.controller.request.OfferRequest;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.model.Offer;

public interface OfferMapper {

    Offer mapRequestToEntity(OfferRequest request);

    OfferResponse mapEntityToResponse(Offer offer);
}
