package com.anm.init.controller.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class AppUserRequest {

    @NotNull(message = "Uid cannot be null")
    private String firebaseUid;

    @NotNull(message = "Name cannot be null")
    private String firebaseName;

    @NotNull(message = "Email cannot be null")
    @Email(message = "Email should be valid")
    private String firebaseEmail;

    @NotNull(message = "Picture cannot be null")
    private String firebasePicture;

    @NotNull(message = "Issuer cannot be null")
    private String firebaseIssuer;

    @NotNull(message = "Email Verified cannot be null")
    private boolean firebaseEmailVerified;

    @NotNull(message = "Phone Number cannot be null")
    private String phoneNumber;

}
