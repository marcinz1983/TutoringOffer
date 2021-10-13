package com.anm.init.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "OFFER")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", unique = true)
    private Long id;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name = "SHORT_DESCRIPTION")
    private String shortDescription;

    @Column(name = "LONG_DESCRIPTION")
    private String longDescription;

    @Column(name = "RATE_DESCRIPTION")
    private String rateDescription;

    @Column(name = "BACKGROUND_DESCRIPTION")
    private String backgroundDescription;

    @Column(name = "PRICE")
    private BigDecimal price;

}
