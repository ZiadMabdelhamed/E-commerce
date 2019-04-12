import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from "@angular/router";

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
  public email: any = "email";
  public password: any = "password";
  public errors_array = [];

  loginform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  public form_name: any = this.loginform.valid;

  constructor(private router: Router) {

    var login = localStorage.getItem('login');

    if(!login)
    {
      var login_empty = [];
      localStorage.setItem('login', JSON.stringify(login_empty));
    }
  }

  ngOnInit() {
  }


  login()
  {
    var login = [];

    var reg_array = JSON.parse(localStorage.getItem('registers'));

    const found = reg_array.some(el => el.email === this.loginform.value.email &&  el.password === this.loginform.value.password);



    if(found)
    {
      this.errors_array = [];
      login.push(this.loginform.value);
      localStorage.setItem('login', JSON.stringify(login));
      this.router.navigate(['/']);
    }

    else
    {
      var error = {
        "error" : "account not found ",
      }
      this.errors_array.push(error);
    }

    console.log(JSON.stringify(this.loginform.value));
  }


}
