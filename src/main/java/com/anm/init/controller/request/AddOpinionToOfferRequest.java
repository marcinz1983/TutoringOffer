package com.anm.init.controller.request;

import com.anm.init.controller.response.AddOpinionToOfferResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class AddOpinionToOfferRequest{
    private UUID offerUUID;
    private String title;
    private String content;
    private Integer rate;
}
