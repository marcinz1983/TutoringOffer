package com.anm.init.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.List;
import java.util.UUID;

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

    @OneToMany(mappedBy = "offer",cascade = CascadeType.ALL)
    private List<Price> prices;

    @Column(name = "UUID")
    private UUID uuid;

    @ManyToOne
    @JoinColumn(name = "APP_USER_ID")
    private AppUser appUser;

    @OneToMany(
            mappedBy = "offer",
            cascade = CascadeType.ALL)
    private List<Opinion> opinions;

    @OneToMany(
            mappedBy = "offer",
            cascade = CascadeType.ALL
    )
    private List<Experience> experiences;

    @ManyToMany
    @JoinTable(
            joinColumns = {@JoinColumn(name = "OFFER_ID")},
            inverseJoinColumns = {@JoinColumn(name = "SPECIALIZATION_ID")}
    )
    private List<Specialization> specializations;
}
