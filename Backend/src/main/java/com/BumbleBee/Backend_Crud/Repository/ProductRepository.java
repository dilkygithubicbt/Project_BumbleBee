package com.BumbleBee.Backend_Crud.Repository;

import com.BumbleBee.Backend_Crud.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository  extends JpaRepository<Product,Long> {

}
