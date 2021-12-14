package com.anm.init.mapper.impl;

import com.anm.init.controller.request.SpecializationRequest;
import com.anm.init.controller.response.SpecializationResponse;
import com.anm.init.mapper.SpecializationMapper;
import com.anm.init.model.Specialization;
import org.springframework.stereotype.Component;

@Component
public class SpecializationMapperImpl implements SpecializationMapper {
    @Override
    public Specialization mapRequestToEntity(SpecializationRequest request) {
        return Specialization.builder()
                .withShortName(request.getShortName())
                .withLongName(request.getLongName())
                .withIconImage(request.getIconImage())
                .withVerified(true)
                .build();
    }

    @Override
    public SpecializationResponse mapEntityToResponse(Specialization specialization) {
        return SpecializationResponse.builder()
                .withShortName(specialization.getShortName())
                .withLongName(specialization.getLongName())
                .withIconImage(specialization.getIconImage())
                .withVerified(specialization.isVerified())
                .build();
    }
}
