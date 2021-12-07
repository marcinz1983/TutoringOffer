package com.anm.init.security.auth;

import com.anm.init.exception.AppUserNotFoundException;
import com.anm.init.model.AppUser;
import com.anm.init.repository.AppUserRepository;
import com.anm.init.model.AppUser;
import com.anm.init.security.auth.models.Credentials;
import com.anm.init.security.auth.models.SecurityProperties;
import com.anm.init.security.auth.models.User;
import com.anm.init.security.utils.CookieUtils;
import org.springframework.cache.annotation.Cacheable;
import com.anm.init.service.AppUserService;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;


@Service
public class SecurityService {

    private final HttpServletRequest httpServletRequest;
    private final CookieUtils cookieUtils;
    private final SecurityProperties securityProps;
    private final AppUserRepository appUserRepository;

    public SecurityService(final HttpServletRequest httpServletRequest, final CookieUtils cookieUtils, final SecurityProperties securityProps, AppUserRepository appUserRepository) {
        this.httpServletRequest = httpServletRequest;
        this.cookieUtils = cookieUtils;
        this.securityProps = securityProps;
        this.appUserRepository = appUserRepository;
    }
    @Cacheable(cacheNames = "AppUserByUser")
    public AppUser findAppUserByUser() {
       return appUserRepository
               .findByFirebaseEmailEquals(getUser().getEmail())
               .orElseThrow(()->new AppUserNotFoundException("User not found!"));
    }
    public User getUser() {
        User userPrincipal = null;
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Object principal = securityContext.getAuthentication().getPrincipal();
        if (principal instanceof User) {
            userPrincipal = ((User) principal);
        }
        return userPrincipal;
    }

    public Credentials getCredentials() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        return (Credentials) securityContext.getAuthentication().getCredentials();
    }

    public boolean isPublic() {
        return securityProps.getAllowedPublicApis().contains(httpServletRequest.getRequestURI());
    }

    public String getBearerToken(HttpServletRequest request) {
        String bearerToken = null;
        String authorization = request.getHeader("Authorization");
        if (StringUtils.hasText(authorization) && authorization.startsWith("Bearer ")) {
            bearerToken = authorization.substring(7);
        }
        return bearerToken;
    }
}
