import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { SalaryReportComponent } from './salary-report/salary-report.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { UserComponent } from './user/user.component';
import { CreateSalaryComponent } from './create-salary/create-salary.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'salary',component:SalaryReportComponent},
  {path:'create-salary',component:CreateSalaryComponent},
  {path:'update-salary/:sid',component:UpdateSalaryComponent},
  {path:'salary-details/:sid',component:SalaryDetailsComponent},
  {path:'user',component:UserComponent},
  {path:'create-user',component:AddUserComponent},
  {path:'update-user/:uid',component:UpdateUserComponent},
  {path:'user-details/:uid',component:UserDetailsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
