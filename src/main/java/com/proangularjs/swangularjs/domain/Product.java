package com.proangularjs.swangularjs.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-08-01 오전 8:07
 **/
@Getter @Setter @ToString
public class Product {

    private String name;
    private String description;
    private double price;
    private String category;

    public Product(String name, String description, double price, String category) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
}
