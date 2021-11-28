package com.anm.init.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class OpinionResponse {
    private String name;
    private String title;
    private String comment;
    private String image;
    private Integer rate;
}
