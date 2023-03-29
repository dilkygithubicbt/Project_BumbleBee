package com.BumbleBee.Backend_Crud.Controller;

import com.BumbleBee.Backend_Crud.Exception.productNotFoundException;
import com.BumbleBee.Backend_Crud.Model.Product;
import com.BumbleBee.Backend_Crud.Repository.ProductRepository;
import com.BumbleBee.Backend_Crud.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @CrossOrigin
    @PostMapping("/product")
    Product newProduct(@RequestBody Product newProduct){
        return productRepository.save(newProduct);
    }

    @CrossOrigin
    @GetMapping("/products")
    List<Product> getAllProduct(){
        return productRepository.findAll();
    }

    @CrossOrigin
    @GetMapping("/product/{id}")
    Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new productNotFoundException(id));
    }

    @CrossOrigin
    @PutMapping("/editProduct/{id}")
    Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setProductName(newProduct.getProductName());
                    product.setProductCategory(newProduct.getProductCategory());
                    product.setProductPrice(newProduct.getProductPrice());
                    product.setDescription(newProduct.getDescription());
                    return productRepository.save(product);
                }).orElseThrow(() -> new productNotFoundException(id));
    }

    @CrossOrigin
    @DeleteMapping("/deleteProduct/{id}")
    String deleteProduct(@PathVariable Long id){
        if(!productRepository.existsById(id)){
            throw new productNotFoundException(id);
        }
        productRepository.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }
}
