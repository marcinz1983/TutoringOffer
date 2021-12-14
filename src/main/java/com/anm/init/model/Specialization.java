package com.anm.init.model;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "SPECIALIZATION")
@Builder(setterPrefix = "with")
public class Specialization {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", unique = true)
    private Long id;
    @Column(name = "SHORT_NAME")
    private String shortName;
    @Column(name = "LONG_NAME")
    private String longName;
    @Column(name = "ICON_IMAGE")
    private String iconImage;
    @Column(name = "VERIFIED")
    private boolean verified;
    @ManyToMany(mappedBy = "specializations")
    private List<Offer> offers;
}