package com.project.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "User")

public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long uid;
	
	@Column(name = "Username")
	private String Username;
//	@Column(name = "password")
//	private String password;

	
	@Column(name = "emailid")
	private String uemailid;
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	public User(String username, String password, String uemailid) {
		super();
		this.Username = username;
//		this.password=password;
//		
		this.uemailid = uemailid;
	}
	
	
	
//	public String getPassword() {
//		return password;
//	}
//
//
//
//	public void setPassword(String password) {
//		this.password = password;
//	}



	public long getUid() {
		return uid;
	}
	
	public void setUid(long uid) {
		this.uid = uid;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	
	public String getUemailid() {
		return uemailid;
	}
	public void setUemailid(String uemailid) {
		this.uemailid = uemailid;
	}



	




}
