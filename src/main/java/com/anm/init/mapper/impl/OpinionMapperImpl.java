package com.anm.init.mapper.impl;

import com.anm.init.controller.response.OpinionResponse;
import com.anm.init.mapper.OpinionMapper;
import com.anm.init.model.Opinion;
import org.springframework.stereotype.Component;

@Component
public class OpinionMapperImpl implements OpinionMapper {
    @Override
    public OpinionResponse mapEntityToResponse(Opinion opinion) {
        return OpinionResponse.builder()
                .withName(opinion.getAppUser().getFirebaseName())
                .withTitle(opinion.getTitle())
                .withComment(opinion.getContent())
                .withImage(opinion.getAppUser().getFirebasePicture())
                .withRate(opinion.getRate())
                .build();
    }
}
