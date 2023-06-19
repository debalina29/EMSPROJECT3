package com.project.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.exception.ResourceNotFoundException;
import com.project.model.User;
import com.project.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")

public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	

	@GetMapping("/user")
	public List<User> getAllEmployees(){
		
			return userRepository.findAll();
		
	}		
	
	
	@PostMapping("/user")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	
	@GetMapping("/user/{uid}")
	public ResponseEntity<User> getUserById(@PathVariable Long uid) {
		User user = userRepository.findById(uid)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + uid));
		return ResponseEntity.ok(user);
	}
	
	
	
	@PutMapping("/user/{uid}")
	public ResponseEntity<User> updateUser(@PathVariable Long uid, @RequestBody User userDetails){
		User user = userRepository.findById(uid)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + uid));
		
		user.setUsername(userDetails.getUsername());
		
		user.setUemailid(userDetails.getUemailid());
		
		
		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}

	@DeleteMapping("/user/{uid}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long uid){
		User user = userRepository.findById(uid)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + uid));
		
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
//	@PostMapping("/login")
//	public ResponseEntity<?>loginUser(@RequestBody User userData){
//		System.out.println(userData);
//	User user=userRepository.findById(userData.getUid());
//	if(user.getPassword().equals(userData.getPassword()))
//		return ResponseEntity.ok(user);
//	return (ResponseEntity<?>)ResponseEntity.internalServerError();
//	}
	


}
