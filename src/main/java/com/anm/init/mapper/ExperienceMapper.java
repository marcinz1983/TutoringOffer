package com.anm.init.mapper;

import com.anm.init.controller.response.ExperienceResponse;
import com.anm.init.model.Experience;


public interface ExperienceMapper {

  ExperienceResponse mapEntityToResponse(Experience experience);
}
