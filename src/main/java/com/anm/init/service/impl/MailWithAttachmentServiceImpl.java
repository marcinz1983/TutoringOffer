package com.anm.init.service.impl;

import com.anm.init.service.MailWithAttachmentService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;

import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Properties;

@NoArgsConstructor
@Controller
public class MailWithAttachmentServiceImpl implements MailWithAttachmentService {

    private String emailAddress;
    private String password;
    private String host;
    private String port;
    private static final String propTransferProtocol = "mail.smtp.auth";
    private static final String propStartTls = "mail.smtp.starttls.enable";
    private static final String propDnsName = "mail.smtp.host";
    private static final String propEmailPort = "mail.smtp.port";


    @Autowired
    public MailWithAttachmentServiceImpl(@Value("${mail.prop.emailAddress}") String emailAddress,
                                         @Value("${mail.prop.emailPassword}") String password,
                                         @Value("${mail.prop.emailHost}") String host,
                                         @Value("${mail.prop.emailPort}") String port) {
        this.emailAddress = emailAddress;
        this.password = password;
        this.host = host;
        this.port = port;
    }


    public void sendMail(String phoneNumber, String requestDescription, String requestEmail, LocalDate data) throws MessagingException, IOException {
        Message message = createMail(phoneNumber, requestDescription, requestEmail, data);
        Transport.send(message);
    }

    private Session getSession() {
        Properties props = new Properties();
        props.put(propTransferProtocol, "true");
        props.put(propStartTls, "true");
        props.put(propDnsName, this.host);
        props.put(propEmailPort, this.port);
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(emailAddress, password);
            }
        });
        return session;
    }

    private Message createMail(String phoneNumber, String requestDescription, String requestEmail, LocalDate date) throws MessagingException, IOException {
        Message message = new MimeMessage(getSession());
        message.setFrom(new InternetAddress(emailAddress));
        message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(requestEmail));
        message.setSubject("Zapytanie o oferte.");
        BodyPart messageBodyPart = new MimeBodyPart();
        messageBodyPart.setText(requestDescription +
                "\n Numer telefonu nadawcy : " + phoneNumber +
                "\n Proponowany termin zajec: " + date);
        Multipart multipart = new MimeMultipart();
        multipart.addBodyPart(messageBodyPart);
        message.setContent(multipart);
        return message;
    }

}