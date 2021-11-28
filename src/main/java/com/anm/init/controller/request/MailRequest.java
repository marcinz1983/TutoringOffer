package com.anm.init.controller.request;

import com.anm.init.CustomAnnotation.Annotation.ValidPhoneNumber;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(setterPrefix = "with")
public class MailRequest {


    @NotNull(message = "Phone number cannot be null")
    @ValidPhoneNumber(message = "Please provide a valid phone number")
    private String phoneNumber;

    @NotNull(message = "Description  cannot be null")
    private String requestDescription;

    //TODO  Email jest tymczasowy, do usunięcia gdy zostanie pobrany z appUsera.
    @NotNull(message = "Email cannot be null")
    @Email(message = "Email should be valid")
    private String requestEmail;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE, pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate myDate;


}
