package com.anm.init.mapper;

import com.anm.init.controller.response.PublicOfferResponse;
import com.anm.init.model.Offer;

public interface PublicOfferMapper {
    PublicOfferResponse mapEntityToResponse(Offer offer);
}
