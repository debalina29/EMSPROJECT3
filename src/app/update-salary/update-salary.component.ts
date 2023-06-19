import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../salary.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Salary } from '../Salary';

@Component({
  selector: 'app-update-salary',
  templateUrl: './update-salary.component.html',
  styleUrls: ['./update-salary.component.css']
})
export class UpdateSalaryComponent implements OnInit{

  image5:string="/assets/images/employee9.jpg";


  sid!: number;
  salary: Salary= new Salary();
  constructor(private salaryService: SalaryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.sid = this.route.snapshot.params['sid'];

    this.salaryService.getSalaryById(this.sid).subscribe(data => {
      this.salary = data;
    }, error => console.log(error));
  }

  onSubmit(){
    alert("This form updated successfully!!")
    this.salaryService.updateSalary(this.sid, this.salary).subscribe( data =>{
      this.goToSalaryList();
    }
    , error => console.log(error));
  }

  goToSalaryList(){
    this.router.navigate(['/salary']);
  }
}


