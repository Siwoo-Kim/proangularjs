package com.proangularjs.swangularjs;

import com.proangularjs.swangularjs.controller.ProductController;
import com.proangularjs.swangularjs.repository.ProductRepository;
import com.proangularjs.swangularjs.repository.SimpleProductRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

import javax.sql.DataSource;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-08-01 오전 8:01
 **/

@Configuration
public class DBConfig {

    @Bean
    DataSource dataSource() {
        return new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript("classpath:/sql/schema.sql")
                .build();
    }

    @Bean
    ProductRepository productRepository() {
        return new SimpleProductRepository();
    }

    @Bean
    ProductController productController() {
        return new ProductController();
    }

}
