package com.anm.init.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class AddOpinionToOfferResponse {
    private String name;
    private String surname;
    private String title;
    private String content;
    private String userPicture;
    private Integer rate;

}
