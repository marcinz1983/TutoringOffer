package com.anm.init.service.impl;

import com.anm.init.controller.response.PublicOfferResponse;
import com.anm.init.mapper.PublicOfferMapper;
import com.anm.init.repository.PublicOfferRepository;
import com.anm.init.service.PublicOfferService;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class PublicOfferServiceImpl implements PublicOfferService {

    private final PublicOfferRepository publicOfferRepository;
    private final PublicOfferMapper publicOfferMapper;

    @Autowired
    public PublicOfferServiceImpl(PublicOfferRepository publicOfferRepository, PublicOfferMapper publicOfferMapper) {
        this.publicOfferRepository = publicOfferRepository;
        this.publicOfferMapper = publicOfferMapper;
    }

    @Override
    public List<PublicOfferResponse> getAll(Integer page, Integer size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return publicOfferRepository.findAll(pageable).stream().map(publicOfferMapper::mapEntityToResponse).collect(Collectors.toList());
    }
}
