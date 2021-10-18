package com.anm.init.exeption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class MissingOfferException extends RuntimeException {

    public MissingOfferException(String errorMessage) {
        super(errorMessage);
    }

}
