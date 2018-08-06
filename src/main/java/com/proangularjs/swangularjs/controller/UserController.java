package com.proangularjs.swangularjs.controller;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.proangularjs.swangularjs.domain.User.ADMIN;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-08-06 오전 8:26
 **/

@RestController
@RequestMapping("/users")
public class UserController {

    @Getter @Setter @ToString
    public static class Login {
        private String username;
        private String password;
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody Login login) {
        if(ADMIN.authenticate(login.getUsername(), login.getPassword())) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.UNAUTHORIZED);
    }
}
