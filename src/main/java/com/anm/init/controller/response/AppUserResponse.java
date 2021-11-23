package com.anm.init.controller.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class AppUserResponse {

    private String firebaseUid;
    private String firebaseName;
    private String firebaseEmail;
    private String firebasePicture;
    private String firebaseIssuer;
    private boolean firebaseEmailVerified;
}
