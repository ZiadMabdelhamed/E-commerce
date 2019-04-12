import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public name: string = "log_input";
  public type_pass: string = "password";
  public type_text: string = "text";
  public type_email: string = "email";
  public email: string = "Email";
  public password: string = "Password";
  public form_name: string = "!loginform.valid";

  loginform:FormGroup;



  constructor() {
    this.loginform = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
      ]),
      Password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
      ]),
    });


  }

  ngOnInit() {
  }


  login()
  {
    alert(this.loginform.value);
  }


}
