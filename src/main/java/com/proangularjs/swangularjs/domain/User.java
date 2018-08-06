package com.proangularjs.swangularjs.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.springframework.util.StringUtils;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-08-06 오전 7:57
 **/

@Getter @EqualsAndHashCode(of = {"id", "name", "password"})
public class User {
    public static final User ADMIN;

    static {
        ADMIN = new Builder()
                .id(1)
                .name("admin")
                .password("secret")
                .build();
    }

    private final Long id;
    private final String name;
    private final String password;

    private User(Builder builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.password = builder.password;
    }

    public boolean authenticate(String name, String password) {
        if(StringUtils.hasText(name) && StringUtils.hasText(password)) {
            return this.name.equals(name) && this.password.equals(password);
        }
        return false;
    }

    public static class Builder {
        private long id;
        private String name;
        private String password;

        private Builder id(long id) {
            this.id = id;
            return this;
        }
        private Builder name(String name) {
            this.name = name;
            return this;
        }
        private Builder password(String password) {
            this.password = password;
            return this;
        }
        private User build() {
            return new User(this);
        }
    }
}
