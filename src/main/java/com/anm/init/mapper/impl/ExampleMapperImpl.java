package com.anm.init.mapper.impl;

import com.anm.init.controller.response.ExampleResponse;
import com.anm.init.mapper.ExampleMapper;
import com.anm.init.model.Example;
import org.springframework.stereotype.Component;

@Component
public class ExampleMapperImpl implements ExampleMapper {


    @Override
    public ExampleResponse mapEntityToResponse(Example example) {

        return ExampleResponse.builder()
                .withFirstName(example.getFirstName())
                .withLastName(example.getLastName())
                .withCareer(example.getCareer())
                .build();
    }
}
