package com.anm.init.service.impl;

import com.anm.init.controller.request.AddOfferRequest;
import com.anm.init.controller.request.EditOfferRequest;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.exception.OfferNotFoundException;
import com.anm.init.mapper.OfferMapper;
import com.anm.init.model.Offer;
import com.anm.init.model.Price;
import com.anm.init.repository.OfferRepository;
import com.anm.init.service.OfferService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OfferServiceImpl implements OfferService {

    private static final Logger LOG = LoggerFactory.getLogger(OfferServiceImpl.class);

    private static final String OFFER_NOT_FOUND_EXCEPTION_MESSAGE = "Offer not found!";

    private final OfferMapper offerMapper;
    private final OfferRepository offerRepository;

    @Autowired
    public OfferServiceImpl(final OfferMapper offerMapper, final OfferRepository offerRepository) {
        this.offerMapper = offerMapper;
        this.offerRepository = offerRepository;
    }

    @Override
    public void saveOffer(AddOfferRequest request) {
        Offer newOffer = offerMapper.mapRequestToEntity(request);
        List<Price> newOfferPricesList = request
                .getPrices()
                .stream()
                .map(value -> new Price(value.getDescription(), value.getPrice(), value.getCurrency(), value.isMainPrice(),newOffer))
                .collect(Collectors.toList());
        newOffer.setPrices(newOfferPricesList);
        offerRepository.save(newOffer);
    }

    @Override
    public List<OfferResponse> findAll() {
        return offerRepository
                .findAll()
                .stream()
                .map(offerMapper::mapEntityToResponse)
                .collect(Collectors.toList());
    }

    //TODO nie wiem czy ta metoda jest do czegoś potrzebna
    //TODO do sprwawdzenia
    @Override
    public OfferResponse findByUUID(UUID uuid) {
        OfferResponse offerResponse = offerRepository
                .findByUuidEquals(uuid)
                .map(offerMapper::mapEntityToResponse)
                .orElseThrow(() -> new OfferNotFoundException(OFFER_NOT_FOUND_EXCEPTION_MESSAGE));
        return offerResponse;
    }

    @Override
    public void deleteByUUID(UUID uuid) {
        Offer offer = offerRepository.findByUuidEquals(uuid)
                .orElseThrow(() -> new OfferNotFoundException(OFFER_NOT_FOUND_EXCEPTION_MESSAGE));
        offerRepository.delete(offer);
    }

    @Override
    public void editOffer(EditOfferRequest editOfferRequest) {
        Offer oldOffer = offerRepository
                .findByUuidEquals(editOfferRequest.getUuid())
                .orElseThrow(() -> new OfferNotFoundException(OFFER_NOT_FOUND_EXCEPTION_MESSAGE));
//        oldOffer = offerMapper.mapEditOfferRequestToOffer(oldOffer, editOfferRequest);

        List<Price> editOfferPricesList = editOfferRequest
                .getPrices()
                .stream()
                .map(value -> new Price(value.getDescription(), value.getPrice(), value.getCurrency(), value.isMainPrice(), offerMapper.mapEditOfferRequestToOffer(oldOffer, editOfferRequest)))
                .collect(Collectors.toList());
        oldOffer.setPrices(editOfferPricesList);
        offerRepository.save(oldOffer);
    }


    @Override
    public OfferResponse findOfferByUUID(UUID offerId) {

        LOG.debug("Finding offer with id: [{}]", offerId);

        Offer offer = offerRepository
                .findByUuidEquals(offerId)
                .orElseThrow(() -> new OfferNotFoundException(OFFER_NOT_FOUND_EXCEPTION_MESSAGE));

        return offerMapper.mapEntityToResponse(offer);
    }

}
