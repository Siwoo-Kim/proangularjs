package com.proangularjs.swangularjs.repository;

import com.proangularjs.swangularjs.domain.Product;

import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-08-01 오전 8:14
 **/


public interface ProductRepository {

    List<Product> getProducts();

}
