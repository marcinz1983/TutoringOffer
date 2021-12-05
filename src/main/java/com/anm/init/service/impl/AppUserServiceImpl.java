package com.anm.init.service.impl;

import com.anm.init.controller.response.OfferResponse;
import com.anm.init.exception.OfferNotFoundException;
import com.anm.init.mapper.AppUserMapper;
import com.anm.init.model.AppUser;
import com.anm.init.repository.AppUserRepository;
import com.anm.init.controller.request.AppUserRequest;
import com.anm.init.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppUserServiceImpl implements AppUserService {

    private final AppUserRepository appUserRepository;
    private final AppUserMapper appUserMapper;

    @Autowired
    public AppUserServiceImpl(AppUserRepository appUserRepository, AppUserMapper appUserMapper) {
        this.appUserRepository = appUserRepository;
        this.appUserMapper = appUserMapper;
    }

    @Override
    public void saveAppUser(AppUserRequest appUserRequest) {
        AppUser newAppUser = appUserMapper.mapRequestToEntity(appUserRequest);
        appUserRepository.save(newAppUser);
    }

    @Override
    public AppUser findAppUserByFirebaseEmail(String email) {
        AppUser appUser = appUserRepository
                .findAppUserByFirebaseEmail(email)
                .orElseThrow(()-> new RuntimeException("Can't find appUser by this email:"+email));
        return appUser;
    }

}
