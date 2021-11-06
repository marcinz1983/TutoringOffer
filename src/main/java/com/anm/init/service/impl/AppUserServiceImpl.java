package com.anm.init.service.impl;

import com.anm.init.mapper.AppUserMapper;
import com.anm.init.model.AppUser;
import com.anm.init.repository.AppUserRepository;
import com.anm.init.security.registration.controller.request.AppUserRequest;
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
}
