package com.BumbleBee.Backend_Crud.Exception;

public class productNotFoundException extends RuntimeException {
    public productNotFoundException(Long id){
        super("Could not found the user with id "+ id);
    }
}
