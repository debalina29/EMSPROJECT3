import { Component, OnInit } from '@angular/core';
import { Salary } from '../Salary';
import { ActivatedRoute } from '@angular/router';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrls: ['./salary-details.component.css']
})
export class SalaryDetailsComponent implements OnInit{


  sid!: number;
  salary!: Salary;
  image2:string="assets/images/employee9.jpg";
  constructor(private route: ActivatedRoute, private salaryService: SalaryService) { }

  ngOnInit(): void {
    this.sid = this.route.snapshot.params['sid'];

    this.salary = new Salary();
    this.salaryService.getSalaryById(this.sid).subscribe( data => {
      this.salary = data;
    });
  }

}


