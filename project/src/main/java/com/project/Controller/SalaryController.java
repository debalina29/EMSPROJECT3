package com.project.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.project.model.Salary;
import com.project.repository.SalaryRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")

public class SalaryController {
	
	@Autowired
	private SalaryRepository salaryRepository;
	
	@GetMapping("/salary")
	public List<Salary> getAllSalary(){
		
			return salaryRepository.findAll();
		
	}
	
	@PostMapping("/salary")
	public Salary createSalary(@RequestBody Salary salary) {
		return salaryRepository.save(salary);
	}
	
	@GetMapping("/salary/{sid}")
	public ResponseEntity<Salary> getSalaryById(@PathVariable Long sid) {
		Salary salary = salaryRepository.findById(sid)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with sid :" + sid));
		return ResponseEntity.ok(salary);
	}
	@PutMapping("/salary/{sid}")
	public ResponseEntity<Salary> updateSalary(@PathVariable Long sid, @RequestBody Salary salaryDetails){
		Salary salary = salaryRepository.findById(sid)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with referencno :" + sid));
		
		salary.setName(salaryDetails.getName());
		salary.setMonth(salaryDetails.getMonth());
		salary.setTotalpaiddays(salaryDetails.getTotalpaiddays());
		salary.setDepartment(salaryDetails.getDepartment());
		salary.setBasic(salaryDetails.getBasic());
		salary.setHRA(salaryDetails.getHRA());
		salary.setTotal(salaryDetails.getTotal());
		
		
		Salary updatedSalary = salaryRepository.save(salary);
		return ResponseEntity.ok(updatedSalary);
	}
	
	
	@DeleteMapping("/salary/{sid}")
	public ResponseEntity<Map<String, Boolean>> deleteSalary(@PathVariable Long sid){
		Salary salary = salaryRepository.findById(sid)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + sid));
		
		salaryRepository.delete(salary);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	

}
