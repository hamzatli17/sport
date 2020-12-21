import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user:any={};
  constructor(
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user).subscribe(
      data => {
        if (data.message == 'Welcome') {
          this.router.navigate(['']);
        } 
      }
    )
  }

}
