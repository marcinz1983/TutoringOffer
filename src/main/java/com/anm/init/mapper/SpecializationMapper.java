package com.anm.init.mapper;

import com.anm.init.controller.request.SpecializationRequest;
import com.anm.init.controller.response.SpecializationResponse;
import com.anm.init.model.Specialization;

public interface SpecializationMapper {

    Specialization mapRequestToEntity(SpecializationRequest request);

    SpecializationResponse mapEntityToResponse(Specialization specialization);
}
