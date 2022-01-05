package com.anm.init.controller.open;

import com.anm.init.controller.request.SearchPublicOfferRequest;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.controller.response.PublicOfferAndSpecializationByKeyWordResponse;
import com.anm.init.controller.response.PublicOfferResponse;
import com.anm.init.model.Offer;
import com.anm.init.service.PublicOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public/api/searchOffers")
public class PublicOfferController {

    private final PublicOfferService publicOfferService;

    @Autowired
    public PublicOfferController(PublicOfferService publicOfferService) {
        this.publicOfferService = publicOfferService;
    }

    @PostMapping
    ResponseEntity<List<PublicOfferResponse>> searchOffers(@Valid @RequestBody SearchPublicOfferRequest request) {
        List<PublicOfferResponse> all = publicOfferService.searchOffer(request);
        return new ResponseEntity<>(all, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<PublicOfferAndSpecializationByKeyWordResponse>> searchOffersByKeyWord(@RequestParam("keyWord") String keyWord) {
        List<PublicOfferAndSpecializationByKeyWordResponse> result = publicOfferService.searchOffersByKeyWord(keyWord);
        return new ResponseEntity<>( result,HttpStatus.OK);
    }

    @GetMapping("/{uuid}")
    public ResponseEntity<PublicOfferResponse> getOfferByID(@PathVariable("uuid") UUID id) {
        PublicOfferResponse offerById = publicOfferService.findOfferByUUID(id);
        return new ResponseEntity<>(offerById, HttpStatus.OK);
    }
}
