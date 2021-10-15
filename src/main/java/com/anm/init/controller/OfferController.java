package com.anm.init.controller;

import com.anm.init.controller.request.OfferRequest;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.service.OfferService;
import com.anm.init.service.impl.OfferServiceImpl;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/get")
    ResponseEntity<List<OfferResponse>> getAll(){
        List<OfferResponse> allOffers = offerService.findAll();
        return new ResponseEntity<List<OfferResponse>>(allOffers, HttpStatus.OK);
    }
}
