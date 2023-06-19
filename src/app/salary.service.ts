import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salary } from './Salary';


@Injectable({
  providedIn: 'root'
})
export class SalaryService {
 
  private baseURL = "http://localhost:8080/api/v1/salary";

  constructor(private httpClient: HttpClient) { }
  getSalaryList():Observable<Salary[]>{
    return this.httpClient.get<Salary[]>(`${this.baseURL}`);
  }

  createSalary(salary:Salary): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, salary);
  }

  getSalaryById(sid: number): Observable<Salary>{
    return this.httpClient.get<Salary>(`${this.baseURL}/${sid}`);
  }

  updateSalary(sid: number, salary:Salary): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${sid}`, salary);
  }

  deleteSalary(sid: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${sid}`);
  }
}
  
  


  

