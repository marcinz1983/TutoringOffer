package com.anm.init.controller.open;

import com.anm.init.controller.request.SearchPublicOfferRequest;
import com.anm.init.controller.response.PublicOfferResponse;
import com.anm.init.service.PublicOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import javax.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
}
