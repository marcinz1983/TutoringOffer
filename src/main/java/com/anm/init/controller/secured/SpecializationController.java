package com.anm.init.controller.secured;

import com.anm.init.controller.request.SpecializationRequest;
import com.anm.init.controller.response.SpecializationResponse;
import com.anm.init.service.SpecializationService;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/specialization")
public class SpecializationController {

    private final SpecializationService specializationService;

    @Autowired
    public SpecializationController(SpecializationService specializationService) {
        this.specializationService = specializationService;
    }

    @GetMapping
    ResponseEntity<List<SpecializationResponse>> findAll() {
        List<SpecializationResponse> all = specializationService.findAll();
        return new ResponseEntity<>(all, HttpStatus.OK);
    }

    @PostMapping
    ResponseEntity<Void> save(@Valid @RequestBody SpecializationRequest specializationRequest){
        specializationService.save(specializationRequest);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


}
