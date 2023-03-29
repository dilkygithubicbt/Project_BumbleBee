package com.BumbleBee.Backend_Crud.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String FirstName;
    private String LastName;
    private String Email;
    private Integer Mobile;
    private String Address;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String first_name) {
        FirstName = first_name;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String last_name) {
        LastName = last_name;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public Integer getMobile() {
        return Mobile;
    }

    public void setMobile(Integer mobile) {
        Mobile = mobile;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }
}
