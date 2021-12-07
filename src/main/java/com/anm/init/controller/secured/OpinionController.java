package com.anm.init.controller.secured;

import com.anm.init.controller.request.AddOpinionToOfferRequest;
import com.anm.init.controller.response.AddOpinionToOfferResponse;
import com.anm.init.controller.response.OpinionResponse;
import com.anm.init.service.OpinionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;



import java.security.Principal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/opinion")
public class OpinionController {

    private final OpinionService opinionService;

    @Autowired
    public OpinionController(OpinionService opinionService) {
        this.opinionService = opinionService;
    }

    @GetMapping("/{offerUuid}")
    public ResponseEntity<List<OpinionResponse>> findByOffer(@PathVariable UUID offerUuid) {
        List<OpinionResponse> opinion = opinionService.findByOffer(offerUuid);
        return new ResponseEntity<>(opinion, HttpStatus.OK);
    }

    @PostMapping("/addOpinion")
    public ResponseEntity<AddOpinionToOfferResponse> addOpinionToOffer(@RequestBody AddOpinionToOfferRequest request) {
        AddOpinionToOfferResponse response = opinionService.addOpinionToOffer(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}