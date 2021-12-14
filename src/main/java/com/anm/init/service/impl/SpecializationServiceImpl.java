package com.anm.init.service.impl;

import com.anm.init.controller.request.SpecializationRequest;
import com.anm.init.controller.response.SpecializationResponse;
import com.anm.init.mapper.SpecializationMapper;
import com.anm.init.repository.SpecializationRepository;
import com.anm.init.service.SpecializationService;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpecializationServiceImpl implements SpecializationService {

    private final SpecializationRepository specializationRepository;
    private final SpecializationMapper specializationMapper;

    @Autowired
    public SpecializationServiceImpl(SpecializationRepository specializationRepository, SpecializationMapper specializationMapper) {
        this.specializationRepository = specializationRepository;
        this.specializationMapper = specializationMapper;
    }

    @Override
    public List<SpecializationResponse> findAll() {
        return specializationRepository.findAll().stream()
                .map(specializationMapper::mapEntityToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public void save(SpecializationRequest specializationRequest) {
        specializationRepository.save(specializationMapper.mapRequestToEntity(specializationRequest));
    }
}
