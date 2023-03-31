package com.example.bumblebeebackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bumblebeebackend.model.Customer;
import com.example.bumblebeebackend.repository.CustomerRepository;

@RestController
@RequestMapping("/api/v1")
public class BumbleBeeController {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	//get all customers
	@GetMapping("/customers")
	public List<Customer> getAllCustomers(){
		return customerRepository.findAll();
	}
	
	// create customer rest api
	@PostMapping("/customers")
	public Customer RegisterCustomer(Customer customer) {
		return customerRepository.save(customer);
	}
}
