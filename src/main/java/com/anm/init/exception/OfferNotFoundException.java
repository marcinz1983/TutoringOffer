package com.anm.init.exception;

import java.util.function.Supplier;

public class OfferNotFoundException extends RuntimeException implements Supplier<OfferNotFoundException> {
    public OfferNotFoundException(String message) {
        super(message);
    }

    @Override
    public OfferNotFoundException get() {
        return new OfferNotFoundException("Offer not found");
    }
}
