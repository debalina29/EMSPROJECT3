import { Component, OnInit } from '@angular/core';
import { Salary } from '../Salary';
import { SalaryService } from '../salary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-salary',
  templateUrl: './create-salary.component.html',
  styleUrls: ['./create-salary.component.css']
})
export class CreateSalaryComponent implements OnInit {

  image3:string="/assets/images/employee9.jpg";

  salary:Salary = new Salary();
  constructor(private salaryService: SalaryService,
    private router: Router) { }

  ngOnInit(): void {
  }
 

  saveSalary(){
    this.salaryService.createSalary(this.salary).subscribe( data =>{
      console.log(data);
      this.goToSalaryList();
    },
    error => console.log(error));
  }

  goToSalaryList(){
    this.router.navigate(['/salary']);
  }
  
  onSubmit(){
    alert("The form is submitted successfully")
    console.log(this.salary);
    this.saveSalary();
  }
}



