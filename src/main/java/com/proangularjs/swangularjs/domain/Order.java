package com.proangularjs.swangularjs.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-08-06 오전 7:49
 **/

@Getter
@Setter @ToString
public class Order {
    private Long id;
    private String name;
    private String street;
    private String city;
    private String state;
    private String zip;
    private String country;
    private boolean giftwrap;
    private List<OrderProduct> products = new ArrayList<>();

    @Getter @Setter
    public static class OrderProduct extends Product{
        private int count;
    }
}
