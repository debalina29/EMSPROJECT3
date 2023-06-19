import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


 user!: User[];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data => {
      this.user = data;
    });
  }

  userDetails(uid: number){
    this.router.navigate(['user-details', uid]);
  }

  updateUser(uid: number){
    this.router.navigate(['update-user', uid]);
  }

  deleteUser(uid: number){
    this.userService.deleteUser(uid).subscribe( data => {
      alert("This user deleted successfully!!!")
      console.log(data);
      this.getUsers();
    })
  }
}


