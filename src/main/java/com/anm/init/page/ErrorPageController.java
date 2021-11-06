package com.anm.init.page;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@Controller
public class ErrorPageController implements ErrorController {

    @GetMapping("/error")
    public ModelAndView handleError(HttpServletRequest request, ModelMap model) {

        HttpStatus httpStatus = Optional.ofNullable(request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE))
                .map(status -> HttpStatus.valueOf(Integer.parseInt(status.toString())))
                .orElse(HttpStatus.SEE_OTHER);

        switch (httpStatus) {
            case NOT_FOUND:
                String redirectUri = (String) request.getAttribute(RequestDispatcher.FORWARD_REQUEST_URI);
                model.addAttribute("redirect", redirectUri);
                return new ModelAndView("redirect:/", model);
            case INTERNAL_SERVER_ERROR:
                return new ModelAndView("error-500", model);
            default:
                return new ModelAndView("error", model);
        }
    }
}
