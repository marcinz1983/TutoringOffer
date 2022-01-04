package com.anm.init.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "APP_USER")
@Builder(setterPrefix = "with")
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", unique = true)
    private Long id;
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
    @Column(name = "PHONE_NUMBER")
    private String phoneNumber;
    @OneToMany(
            mappedBy = "appUser",
            cascade = CascadeType.ALL)
    private List<Opinion> opinions;
    @OneToMany(
            mappedBy = "appUser",
            cascade = CascadeType.ALL)
    private List<Offer> offers;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "USER_ROLE",
            joinColumns = @JoinColumn(name = "USER_ID"),
            inverseJoinColumns = @JoinColumn(name = "ROLE_ID")
    )
    private Set<Role> roles = new HashSet<>();

}
