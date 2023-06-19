package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.Salary;



public interface SalaryRepository  extends JpaRepository<Salary, Long>{

}
