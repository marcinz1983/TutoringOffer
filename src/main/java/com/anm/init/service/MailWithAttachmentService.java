package com.anm.init.service;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import java.io.IOException;
import java.time.LocalDate;

public interface MailWithAttachmentService {

    void sendMail(String phoneNumber, String requestDescription, String requestEmail, LocalDate date) throws MessagingException, IOException;
}
