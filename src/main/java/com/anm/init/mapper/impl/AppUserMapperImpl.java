package com.anm.init.mapper.impl;

import com.anm.init.mapper.AppUserMapper;
import com.anm.init.model.AppUser;
import com.anm.init.security.registration.controller.request.AppUserRequest;
import org.springframework.stereotype.Component;

@Component
public class AppUserMapperImpl implements AppUserMapper {
    @Override
    public AppUser mapRequestToEntity(AppUserRequest appUserRequest) {
        return AppUser.builder()
                .withFirebaseName(appUserRequest.getFirebaseName())
                .withFirebaseEmail(appUserRequest.getFirebaseEmail())
                .withFirebaseEmailVerified(appUserRequest.isFirebaseEmailVerified())
                .withFirebaseIssuer(appUserRequest.getFirebaseIssuer())
                .withFirebasePicture(appUserRequest.getFirebasePicture())
                .withFirebaseUid(appUserRequest.getFirebaseUid())
                .build();
    }
}
