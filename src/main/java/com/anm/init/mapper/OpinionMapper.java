package com.anm.init.mapper;

import com.anm.init.controller.response.OpinionResponse;
import com.anm.init.model.Opinion;

public interface OpinionMapper {


    OpinionResponse mapEntityToResponse(Opinion opinion);
}
