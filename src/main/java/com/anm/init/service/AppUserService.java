package com.anm.init.service;

import com.anm.init.controller.request.AppUserRequest;
import com.anm.init.model.AppUser;


public interface AppUserService {

    void saveAppUser(AppUserRequest appUserRequest);

    AppUser findAppUserByFirebaseEmail(String email);
}
