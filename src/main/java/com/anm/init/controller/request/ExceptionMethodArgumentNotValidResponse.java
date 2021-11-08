package com.anm.init.controller.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder(setterPrefix = "with")
public final class ExceptionMethodArgumentNotValidResponse {
    private int code;
    private String message;
    private String error;
}
