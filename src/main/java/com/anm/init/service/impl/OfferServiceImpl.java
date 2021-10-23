package com.anm.init.service.impl;

import com.anm.init.controller.request.EditOfferRequest;
import com.anm.init.controller.request.OfferRequest;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.exception.MissingOfferException;
import com.anm.init.exception.OfferNotFoundException;
import com.anm.init.mapper.OfferMapper;
import com.anm.init.mapper.impl.OfferMapperImpl;
import com.anm.init.model.Offer;
import com.anm.init.repository.OfferRepository;
import com.anm.init.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OfferServiceImpl implements OfferService {

    private final OfferMapper offerMapper;
    private final OfferRepository offerRepository;

    @Autowired
    public OfferServiceImpl(OfferMapperImpl offerMapper, OfferRepository offerRepository) {
        this.offerMapper = offerMapper;
        this.offerRepository = offerRepository;
    }

    @Override
    public void saveOffer(OfferRequest request) {
        Offer newOffer = offerMapper.mapRequestToEntity(request);
        offerRepository.save(newOffer);
    }

    @Override
    public List<OfferResponse> findAll() {
        return offerRepository.findAll().stream().map(offerMapper::mapEntityToResponse).collect(Collectors.toList());
    }

    @Override
    public Offer findById(Long id) {
        return offerRepository.findById(id).get();
    }

    @Override
    public void deleteById(Long id) {
        offerRepository.findById(id).orElseThrow(() -> new MissingOfferException("Offer with the given id does not exist !"));
    }

    @Override
    public void editOffer(EditOfferRequest editOfferRequest) throws OfferNotFoundException {
        Offer oldOffer = offerRepository.findByUuidEquals(editOfferRequest.getUuid()).orElseThrow(new OfferNotFoundException("offer not found"));
        oldOffer = offerMapper.mapEditOfferRequestToOffer(oldOffer, editOfferRequest);
        offerRepository.save(oldOffer);
    }

}
