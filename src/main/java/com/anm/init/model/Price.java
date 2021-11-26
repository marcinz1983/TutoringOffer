package com.anm.init.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "PRICE")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class Price {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", unique = true)
    private Long id;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "PRICE")
    private BigDecimal price;
    @Column(name = "CURRENCY")
    private String currency;
    @Column(name = "MAIN_PRICE")
    private boolean mainPrice;
    @ManyToOne
    @JoinColumn(name = "OFFER_ID")
    private Offer offer;

    public Price(String description, BigDecimal price, String currency, boolean mainPrice) {
        this.description = description;
        this.price = price;
        this.currency = currency;
        this.mainPrice = mainPrice;
    }

    public Price(String description, BigDecimal price, String currency, boolean mainPrice, Offer offer) {
        this.description = description;
        this.price = price;
        this.currency = currency;
        this.mainPrice = mainPrice;
        this.offer = offer;
    }
}
