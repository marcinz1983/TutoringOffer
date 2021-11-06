package com.anm.init.mapper;

import com.anm.init.model.AppUser;
import com.anm.init.security.registration.controller.request.AppUserRequest;

public interface AppUserMapper {

    AppUser mapRequestToEntity(AppUserRequest appUserRequest);
}
