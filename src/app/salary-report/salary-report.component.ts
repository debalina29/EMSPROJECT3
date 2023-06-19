import { Component, OnInit } from '@angular/core';

import { SalaryService } from '../salary.service';
import { Router } from '@angular/router';
import { Salary } from '../Salary';


@Component({
  selector: 'app-salary-report',
  templateUrl: './salary-report.component.html',
  styleUrls: ['./salary-report.component.css']
})
export class SalaryReportComponent implements OnInit{
  salarys!: Salary[];
  constructor(private salaryservice:SalaryService, private router:Router){}
  ngOnInit(): void {
    this.getSalary();
    
    
  }
  private getSalary(){
    this.salaryservice.getSalaryList().subscribe(data =>{
      this.salarys=data;
    });

  }
  salaryDetails(sid: number){
    this.router.navigate(['salary-details', sid]);
  }

  updateSalary(sid: number){
    this.router.navigate(['update-salary', sid]);
  }

  deleteSalary(sid: number){
    this.salaryservice.deleteSalary(sid).subscribe( data => {
      alert("This employee deleted successfully!!!")
      console.log(data);
      this.getSalary();
    })
  }


}

 
    

