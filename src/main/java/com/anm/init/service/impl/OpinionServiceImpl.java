package com.anm.init.service.impl;

import com.anm.init.controller.response.OpinionResponse;
import com.anm.init.mapper.OpinionMapper;
import com.anm.init.repository.OpinionsRepository;
import com.anm.init.service.OpinionService;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OpinionServiceImpl implements OpinionService {

    private final OpinionsRepository opinionsRepository;
    private final OpinionMapper opinionMapper;

    @Autowired
    public OpinionServiceImpl(OpinionsRepository opinionsRepository, OpinionMapper opinionMapper) {
        this.opinionsRepository = opinionsRepository;
        this.opinionMapper = opinionMapper;
    }

    @Override
    public List<OpinionResponse> findByOffer(UUID offerUuid) {
        return opinionsRepository.findByOffer_Uuid(offerUuid).stream()
                .map(opinionMapper::mapEntityToResponse)
                .collect(Collectors.toList());
    }
}
