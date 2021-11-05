package com.anm.init.model;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "APP_USER")
@Builder(setterPrefix = "with")
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", unique = true)
    private long id;
    @Column(name = "FIREBASE_UID")
    private String firebaseUid;
    @Column(name = "FIREBASE_NAME")
    private String firebaseName;
    @Column(name = "FIREBASE_EMAIL")
    private String firebaseEmail;
    @Column(name = "FIREBASE_PICTURE")
    private String firebasePicture;
    @Column(name = "FIREBASE_ISSUER")
    private String firebaseIssuer;
    @Column(name = "FIREBASE_EMAIL_VERIFIED")
    private boolean firebaseEmailVerified;
    @OneToMany(
            mappedBy = "appUser",
            cascade = CascadeType.ALL)
    private List<Offer> offers;

}
