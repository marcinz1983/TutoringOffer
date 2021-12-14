package com.anm.init.controller.secured;

import com.anm.init.controller.request.AddOfferRequest;
import com.anm.init.controller.request.EditOfferRequest;
import com.anm.init.controller.response.OfferResponse;
import com.anm.init.service.OfferService;
import com.anm.init.service.impl.OfferServiceImpl;
import java.util.List;
import java.util.UUID;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    ResponseEntity<String> saveOffer(@Valid @RequestBody AddOfferRequest request) {

        return offerService.saveOffer(request)
                ? new ResponseEntity<>(HttpStatus.CREATED)
                : new ResponseEntity<>("User already has an Offer!",HttpStatus.FORBIDDEN);
    }

    @GetMapping("/get")
    ResponseEntity<List<OfferResponse>> getAll() {
        List<OfferResponse> allOffers = offerService.findAll();
        return new ResponseEntity<>(allOffers, HttpStatus.OK);
    }

    @DeleteMapping("/{uuid}")
    ResponseEntity<Void> deleteOffer(@PathVariable UUID uuid) {
        offerService.deleteByUUID(uuid);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/edit")
    ResponseEntity<Void> editOffer(@Valid @RequestBody EditOfferRequest editOfferRequest) {
        offerService.editOffer(editOfferRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{uuid}")
    public ResponseEntity<OfferResponse> getOfferByID(@PathVariable("uuid") UUID id) {
        OfferResponse offerById = offerService.findOfferByUUID(id);
        return new ResponseEntity<>(offerById, HttpStatus.OK);
    }

}
