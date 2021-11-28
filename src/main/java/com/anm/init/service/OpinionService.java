package com.anm.init.service;

import com.anm.init.controller.response.OpinionResponse;

import java.util.List;
import java.util.UUID;

public interface OpinionService {
    List<OpinionResponse> findByOffer(UUID offerUuid);
}
