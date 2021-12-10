package com.anm.init.mapper.impl;

import com.anm.init.controller.response.ExperienceResponse;
import com.anm.init.mapper.ExperienceMapper;
import com.anm.init.model.Experience;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ExperienceMapperImpl implements ExperienceMapper {

    @Override
    public ExperienceResponse mapEntityToResponse(Experience experience) {
        List<String> skillsValue = experience.getSkills().stream().map(value -> value.getValue()).collect(Collectors.toList());
        return ExperienceResponse.builder()
                .withTitle(experience.getName())
                .withProperties(skillsValue)
                .build();
    }
}
