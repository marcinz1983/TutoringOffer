package com.anm.init.service;

import com.anm.init.security.registration.controller.request.AppUserRequest;


public interface AppUserService {

    void saveAppUser(AppUserRequest appUserRequest);
}
