package com.anm.init.mapper;

import com.anm.init.controller.response.ExampleResponse;
import com.anm.init.model.Example;

public interface ExampleMapper {

    ExampleResponse mapEntityToResponse(Example example);
}
