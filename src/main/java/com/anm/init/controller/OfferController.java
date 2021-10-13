package com.anm.init.controller;

import com.anm.init.controller.request.OfferRequest;
import com.anm.init.service.OfferService;
import com.anm.init.service.impl.OfferServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/offer")
public class OfferController {

    private final OfferService offerService;

    @Autowired
    public OfferController(OfferServiceImpl offerService) {
        this.offerService = offerService;
    }

    @PostMapping("/save")
    ResponseEntity<Void> saveOffer(@RequestBody OfferRequest request){
        offerService.saveOffer(request);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
