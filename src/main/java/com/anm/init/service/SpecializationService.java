package com.anm.init.service;

import com.anm.init.controller.request.SpecializationRequest;
import com.anm.init.controller.response.SpecializationResponse;
import java.util.List;

public interface SpecializationService {

    List<SpecializationResponse> findAll();
    void save(SpecializationRequest specializationRequest);
}
