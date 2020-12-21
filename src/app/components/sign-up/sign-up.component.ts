import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../validators/mustMatch';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.minLength(4)],
      lastName: ['', Validators.minLength(5)],
      phone: ['', [Validators.required, Validators.maxLength(8)]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.minLength(8), Validators.required]],
      confirmPwd: ['', Validators.required]
    }, 
    { validator: MustMatch('pwd', 'confirmPwd')}
    );
  }

  signup(user){
    console.log('This is my user', user);
    this.userService.signUp(user).subscribe(
      (data) => {
        console.log('Here returned Data', data);   
      }
      
    );
    this.router.navigate(['/']);

  }

}
