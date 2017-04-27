import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {Router} from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { User } from '../../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  myForm: FormGroup;

  constructor(private  authService: AuthService, private router: Router){

  }

  onSubmit() {
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    this.authService.signIn(user).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.userId);
      this.router.navigate(['/']);
    }, error => console.log(error));
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

}
