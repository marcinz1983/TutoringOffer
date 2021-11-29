package com.anm.init.mapper;

import com.anm.init.controller.response.PriceResponse;
import com.anm.init.model.Price;

public interface PriceMapper {

    public PriceResponse mapEntityToResponse(Price price);
}
