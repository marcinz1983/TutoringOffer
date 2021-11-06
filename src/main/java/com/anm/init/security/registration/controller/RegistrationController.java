package com.anm.init.security.registration.controller;

import com.anm.init.security.registration.controller.request.AppUserRequest;
import com.anm.init.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
public class RegistrationController {

    private final AppUserService appUserService;

    @Autowired
    public RegistrationController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping("/save")
    ResponseEntity<Void> saveAppUser(@Valid @RequestBody AppUserRequest appUserRequest) {
        appUserService.saveAppUser(appUserRequest);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
