import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/v1/user";

  constructor(private httpClient: HttpClient) { }
  
  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createUser(user:User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  getUserById(uid: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${uid}`);
  }

  updateUser(uid: number, user:User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${uid}`, user);
  }

  deleteUser(uid: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${uid}`);
  }
}



