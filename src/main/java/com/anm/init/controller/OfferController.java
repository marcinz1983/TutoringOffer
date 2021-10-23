package com.anm.init.controller;

import com.anm.init.controller.request.EditOfferRequest;
import com.anm.init.controller.request.OfferRequest;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.service.OfferService;
import com.anm.init.service.impl.OfferServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    ResponseEntity<Void> saveOffer(@Valid @RequestBody OfferRequest request){
        offerService.saveOffer(request);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/get")
    ResponseEntity<List<OfferResponse>> getAll(){
        List<OfferResponse> allOffers = offerService.findAll();
        return new ResponseEntity<>(allOffers, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteOffer(@PathVariable Long id){
        offerService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/edit")
    ResponseEntity<Void> editOffer(@Valid @RequestBody EditOfferRequest editOfferRequest) {
        offerService.editOffer(editOfferRequest);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

}
