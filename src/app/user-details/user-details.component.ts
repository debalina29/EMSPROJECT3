import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  implements OnInit{


uid!: number;
  user!: User;
  image2:string="assets/images/image3.jpg";

  image10:string="/assets/images/logo5.png";
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.uid = this.route.snapshot.params['uid'];

    this.user = new User();
    this.userService.getUserById(this.uid).subscribe( data => {
      this.user= data;
    });
  }
}
