package com.project.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "salary")
public class Salary {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long sid;
	
	@Column(name = "Name")
	private String Name;
	@Column(name="Department")
	private String Department;

	@Column(name = "Month")
	private String Month;
	
	@Column(name = "TotalPaidDays")
	private String totalpaiddays;
	

		
		@Column(name = "Basic")
		private String Basic;

		@Column(name = "HRA")
		private String HRA;
		
		@Column(name = "Total")
		private String Total;
		
		
		
		
	
	public Salary() {
			super();
			// TODO Auto-generated constructor stub
		}

	public Salary(long sid,String name, String month, String totalpaiddays, String basic, String hRA, String total,String Department) {
			super();
			this.Name = name;
			this.Month = month;
			this.totalpaiddays = totalpaiddays;
			this.Basic = basic;
			this.HRA = hRA;
			this.Total = total;
			this.Department=Department;
		}

	public String getDepartment() {
		return Department;
	}

	public void setDepartment(String department) {
		Department = department;
	}

	

	public long getSid() {
		return sid;
	}

	public void setSid(long sid) {
		this.sid = sid;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getMonth() {
		return Month;
	}

	public void setMonth(String month) {
		Month = month;
	}

	public String getTotalpaiddays() {
		return totalpaiddays;
	}

	public void setTotalpaiddays(String totalpaiddays) {
		this.totalpaiddays = totalpaiddays;
	}

	public String getBasic() {
		return Basic;
	}

	public void setBasic(String basic) {
		Basic = basic;
	}

	public String getHRA() {
		return HRA;
	}

	public void setHRA(String hRA) {
		HRA = hRA;
	}

	public String getTotal() {
		return Total;
	}

	public void setTotal(String total) {
		Total = total;
	}

	
		
		
}
		
	