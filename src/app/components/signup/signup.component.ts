import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "../../services/auth.service";
import { User } from '../../models/users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const user = new User(
      this.myForm.value.firstName,
      this.myForm.value.lastName,
      this.myForm.value.email,
      this.myForm.value.password,
    );
    this.auth.signUp(user).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this.myForm.reset();
  }

}
