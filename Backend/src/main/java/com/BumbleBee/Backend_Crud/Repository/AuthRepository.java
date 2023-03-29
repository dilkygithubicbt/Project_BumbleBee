package com.BumbleBee.Backend_Crud.Repository;

import com.BumbleBee.Backend_Crud.Model.Auth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthRepository extends JpaRepository<Auth,Long> {

    Auth findByUserNameAndPassword(String userName,String password);
}
