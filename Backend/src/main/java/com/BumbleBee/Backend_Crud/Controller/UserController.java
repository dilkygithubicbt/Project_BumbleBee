package com.BumbleBee.Backend_Crud.Controller;

import com.BumbleBee.Backend_Crud.Exception.UserNotFoundException;
import com.BumbleBee.Backend_Crud.Model.Auth;
import com.BumbleBee.Backend_Crud.Model.User;
import com.BumbleBee.Backend_Crud.Repository.AuthRepository;
import com.BumbleBee.Backend_Crud.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthRepository authRepository;

    @CrossOrigin
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @CrossOrigin
    @GetMapping("/users")
    List<User> getAllUsers(){
       return userRepository.findAll();
    }

    @CrossOrigin
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @CrossOrigin
    @PostMapping("/login")
    Auth login(@RequestBody Auth auth) {

        Auth byUserNameAndPassword = authRepository.findByUserNameAndPassword(auth.getUserName(), auth.getPassword());
        if(byUserNameAndPassword==null){
            byUserNameAndPassword = new Auth();
            byUserNameAndPassword.setId(0L);
        }
        return  byUserNameAndPassword;
    }
}
