package com.proangularjs.swangularjs.domain;

import lombok.*;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-08-01 오전 8:07
 **/
@Getter @Setter @ToString
@EqualsAndHashCode(of = {"id", "name"})
@NoArgsConstructor
public class Product {

    public enum Category {
        Soccer, Chess, WaterSports
    }
    private Long id;
    private String name;
    private String description;
    private double price;
    private Category category;

    public Product(String name, String description, Category category, double price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
}
