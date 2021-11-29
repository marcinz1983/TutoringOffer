package com.anm.init.service.impl;

import com.anm.init.controller.request.SearchPublicOfferRequest;
import com.anm.init.controller.response.PublicOfferResponse;
import com.anm.init.mapper.PublicOfferMapper;
import com.anm.init.repository.PublicOfferRepository;
import com.anm.init.service.PublicOfferService;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
    public List<PublicOfferResponse> searchOffer(SearchPublicOfferRequest request) {
        Pageable pageable = PageRequest.of(request.getPage(), request.getSize());
        if (request.getSearchingString().isEmpty()) {
            return publicOfferRepository.findAll(pageable)
                    .stream()
                    .filter(offer -> offer.getPrices().stream().allMatch(price -> price.getPrice().compareTo(request.getMinPrice()) >= 0 && price.getPrice().compareTo(request.getMaxPrice()) <= 0))
                    .map(publicOfferMapper::mapEntityToResponse)
                    .collect(Collectors.toList());
        }
        return publicOfferRepository.findAll(pageable)
                .stream()
                .filter(offer -> offer.getPrices().stream().allMatch(price -> price.getPrice().compareTo(request.getMinPrice()) >= 0 && price.getPrice().compareTo(request.getMaxPrice()) <= 0))
                .filter(offer -> offer.getShortDescription().toLowerCase().contains(request.getSearchingString().trim().toLowerCase()))
                .map(publicOfferMapper::mapEntityToResponse)
                .collect(Collectors.toList());
    }


}
