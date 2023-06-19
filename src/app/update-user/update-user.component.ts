import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  image5:string="/assets/images/employee1.png";



uid!: number;
  user: User = new User();
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.uid = this.route.snapshot.params['uid'];

    this.userService.getUserById(this.uid).subscribe(data => {
      this.user= data;
    }, error => console.log(error));
  }

  onSubmit(){
    alert("This form updated successfully!!")
    this.userService.updateUser(this.uid, this.user).subscribe( data =>{
      this.goToUserList();
    }
    , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/user']);
  }
}
