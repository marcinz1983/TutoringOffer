package com.anm.init.service.impl;

import com.anm.init.controller.request.OfferRequest;
import com.anm.init.mapper.OfferMapper;
import com.anm.init.model.Offer;
import com.anm.init.repository.OfferRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
class OfferServiceImplTest {

    OfferServiceImpl testedService;

    @Mock
    OfferMapper offerMapper;

    @Mock
    OfferRepository offerRepository;


    @BeforeEach
    void setUp() {
        testedService = new OfferServiceImpl(offerMapper, offerRepository);
    }

    @Test
    void test_saveOffer_givenValidOfferRequest_saveNewOffer() {
        //given
        OfferRequest offerRequest = OfferRequest.builder()
                .withBackgroundDescription("BackgroundDescription")
                .withFirstName("FirstName")
                .withLastName("LastName")
                .withLongDescription("LongDesc")
                .build();

        when(offerRepository.save(any())).thenReturn(new Offer());
        //when
        testedService.saveOffer(offerRequest);

        //then
        Mockito.verify(offerRepository, times(1))
                .save(any());
    }

    @Test
    void test_findAll() {
        //given

        //when

        //then
    }

    @Test
    void test_findById() {
        //given

        //when

        //then
    }

    @Test
    void test_deleteById() {
        //given

        //when

        //then
    }

    @Test
    void test_editOffer() {
        //given

        //when

        //then
    }
}