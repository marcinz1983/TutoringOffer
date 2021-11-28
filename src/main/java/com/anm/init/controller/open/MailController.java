package com.anm.init.controller.open;

import com.anm.init.controller.request.MailRequest;
import com.anm.init.service.impl.MailWithAttachmentServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequestMapping("/mail")
public class MailController {

    private final MailWithAttachmentServiceImpl mailWithAttachmentService;

    public MailController(MailWithAttachmentServiceImpl mailWithAttachmentService) {
        this.mailWithAttachmentService = mailWithAttachmentService;
    }

    @PostMapping("/send")
    ResponseEntity<Void> sendEmail(@Valid @RequestBody MailRequest request) throws MessagingException, IOException {
        mailWithAttachmentService.sendMail( request.getPhoneNumber(), request.getRequestDescription(), request.getRequestEmail(),request.getMyDate());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
