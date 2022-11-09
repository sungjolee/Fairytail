package com.fairytail.user.security;

import com.fairytail.user.jpa.UserEntity;
import com.fairytail.user.jpa.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.env.Environment;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.Optional;

@Component
@Log4j2
@RequiredArgsConstructor
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {

    @Resource
    private Environment env;
    private final UserRepository userRepository;
    private final RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();

        String email = oAuth2User.getAttributes().get("email").toString();
        Optional<UserEntity> user = userRepository.findByEmail(email);

        // JWT - access token 만들기
        String token = "";
        if(!user.isEmpty()) {
            token = Jwts.builder()
                    .setSubject(email)
                    .setExpiration(new Date(System.currentTimeMillis() +
                            Long.parseLong(env.getProperty("token.expiration_time"))))
                    .signWith(SignatureAlgorithm.HS512, env.getProperty("token.secret")).compact();
        }

        String url = "http://localhost:3000";

        String uri = UriComponentsBuilder.fromUriString(url)
                .queryParam("accessToken", token)
                .queryParam("userId", user.get().getId())
                .build().toUriString();

        if (response.isCommitted()) {
           log.debug(
                    "Response has already been committed. Unable to redirect to "
                            + url);
            return;
        }

        redirectStrategy.sendRedirect(request, response, uri);
//        response.addHeader("token", token);
//        response.addHeader("userId", String.valueOf(user.get().getId()));
//        log.info("token----------------------" + token);
    }
}
