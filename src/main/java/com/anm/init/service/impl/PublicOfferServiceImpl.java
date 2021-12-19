package com.anm.init.service.impl;

import com.anm.init.controller.request.SearchPublicOfferRequest;
import com.anm.init.controller.response.PublicOfferAndSpecializationByKeyWordResponse;
import com.anm.init.controller.response.PublicOfferResponse;
import com.anm.init.mapper.PublicOfferAndSpecializationByKeyWordMapper;
import com.anm.init.mapper.PublicOfferMapper;
import com.anm.init.repository.PublicOfferRepository;
import com.anm.init.repository.SpecializationRepository;
import com.anm.init.service.PublicOfferService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PublicOfferServiceImpl implements PublicOfferService {

    private final PublicOfferRepository publicOfferRepository;
    private final SpecializationRepository specializationRepository;
    private final PublicOfferMapper publicOfferMapper;
    private final PublicOfferAndSpecializationByKeyWordMapper publicOfferAndSpecializationByKeyWordMapper;

    @Autowired
    public PublicOfferServiceImpl(PublicOfferRepository publicOfferRepository, SpecializationRepository specializationRepository, PublicOfferMapper publicOfferMapper, PublicOfferAndSpecializationByKeyWordMapper publicOfferAndSpecializationByKeyWordMapper) {
        this.publicOfferRepository = publicOfferRepository;
        this.specializationRepository = specializationRepository;
        this.publicOfferMapper = publicOfferMapper;
        this.publicOfferAndSpecializationByKeyWordMapper = publicOfferAndSpecializationByKeyWordMapper;
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

    @Override
    public List<PublicOfferAndSpecializationByKeyWordResponse> searchOffersByKeyWord(String keyWord) {
        List<PublicOfferAndSpecializationByKeyWordResponse> resultList = new ArrayList<>();
        if (!keyWord.isEmpty() && !keyWord.isBlank()) {
            List<PublicOfferAndSpecializationByKeyWordResponse> offerResult =
                    publicOfferRepository.findByFirstNameContainingOrLastNameContainingAllIgnoreCase(keyWord,keyWord).stream()
                    .map(publicOfferAndSpecializationByKeyWordMapper::mapEntityToResponse)
                    .collect(Collectors.toList());

            List<PublicOfferAndSpecializationByKeyWordResponse> specializationList =
                    specializationRepository.findByLongNameContainingOrShortNameContainingAllIgnoreCase(keyWord,keyWord).stream()
                                    .map(publicOfferAndSpecializationByKeyWordMapper::mapEntityToResponse)
                                            .collect(Collectors.toList());

            resultList.addAll(offerResult);
            resultList.addAll(specializationList);
        } else {
            Pageable pageable = PageRequest.of(1, 5);
            List<PublicOfferAndSpecializationByKeyWordResponse> emptyKeyWord = publicOfferRepository.findAll(pageable)
                    .stream()
                    .map(publicOfferAndSpecializationByKeyWordMapper::mapEntityToResponse)
                    .collect(Collectors.toList());
            resultList.addAll(emptyKeyWord);
        }
        return resultList;
    }

}
