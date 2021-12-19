package com.anm.init.mapper;


import com.anm.init.controller.response.PublicOfferAndSpecializationByKeyWordResponse;
import com.anm.init.model.Offer;
import com.anm.init.model.Specialization;

public interface PublicOfferAndSpecializationByKeyWordMapper {

    PublicOfferAndSpecializationByKeyWordResponse mapEntityToResponse(Offer offer);
    PublicOfferAndSpecializationByKeyWordResponse mapEntityToResponse(Specialization specialization);
}
