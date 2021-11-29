package com.anm.init.mapper.impl;

import com.anm.init.controller.response.PriceResponse;
import com.anm.init.mapper.PriceMapper;
import com.anm.init.model.Price;
import org.springframework.stereotype.Component;


@Component
public class PriceMapperImpl implements PriceMapper {

    @Override
    public PriceResponse mapEntityToResponse(Price price) {
        return PriceResponse.builder()
                .withDescription(price.getDescription())
                .withPrice(price.getPrice())
                .withCurrency(price.getCurrency())
                .withMainPrice(price.isMainPrice())
                .build();
    }
}
