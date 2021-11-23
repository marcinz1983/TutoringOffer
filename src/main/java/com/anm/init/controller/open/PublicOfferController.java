package com.anm.init.controller.open;

import com.anm.init.controller.response.PublicOfferResponse;
import com.anm.init.service.PublicOfferService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public/api/offer")
public class PublicOfferController {

    private final PublicOfferService publicOfferService;

    @Autowired
    public PublicOfferController(PublicOfferService publicOfferService) {
        this.publicOfferService = publicOfferService;
    }

    @GetMapping
    ResponseEntity<List<PublicOfferResponse>> getAll(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(defaultValue = "firstName") String sortBy) {
        List<PublicOfferResponse> all = publicOfferService.getAll(page, size, sortBy);
        return new ResponseEntity<>(all, HttpStatus.OK);
    }
}
