package com.anm.init.CustomAnnotation.Validator;

import com.anm.init.CustomAnnotation.Annotation.ValidPhoneNumber;
import org.springframework.beans.factory.annotation.Configurable;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Configurable
public class PhoneNumberValidator implements ConstraintValidator<ValidPhoneNumber, String> {


    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        return whenMatchesPhoneNumber_thenCorrect(s);
    }


    private boolean whenMatchesPhoneNumber_thenCorrect(String phoneNumber) {
        String patterns
                = "|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?){2}\\d{3}$"
                + "|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?)(\\d{2}[ ]?){2}\\d{2}$"
                + "|^[0-9]+-[0-9]+-[0-9]+$"
                + "|^[0-9]+\\s+[0-9]+\\s+[0-9]+$"
                + "|^$1$1\\d\\d$1\\s+\\d\\d\\d\\d\\d\\d\\d\\d\\d$";

        Pattern pattern = Pattern.compile(patterns);
        Matcher matcher = pattern.matcher(phoneNumber);
        return matcher.matches();
    }
}