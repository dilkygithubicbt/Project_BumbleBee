package com.BumbleBee.Backend_Crud.Repository;


import com.BumbleBee.Backend_Crud.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {



}
