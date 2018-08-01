package com.proangularjs.swangularjs;

import com.proangularjs.swangularjs.repository.ProductRepository;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import javax.sql.DataSource;

import static org.junit.Assert.assertNotNull;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-08-01 오전 8:05
 **/


public class TestDBConfig {

    ApplicationContext c;

    @Test
    public void beanTest() {
        c = new AnnotationConfigApplicationContext(DBConfig.class);
        assertNotNull(c.getBean(DataSource.class));
        assertNotNull(c.getBean(ProductRepository.class));
    }
}
