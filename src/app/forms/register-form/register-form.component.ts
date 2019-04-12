import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public name: string = "log_input";
  public type_pass: string = "password";
  public type_text: string = "text";
  public type_email: string = "email";
  public form_name: string = "!regesterform.valid";
  public email: string = "Email";
  public password: string = "Password";

  public errors_array = [];

  regesterform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ]),
    fname: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ]),
    lname: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ]),
  });


  constructor(private router: Router) {

    var register_arr = localStorage.getItem('registers');

    if(!register_arr)
    {
      var reg_empty = [];
      localStorage.setItem('registers', JSON.stringify(reg_empty));
    }

  }

  ngOnInit() {
  }

  regester()
  {
    var reg_array = [];
    reg_array = JSON.parse(localStorage.getItem('registers'));

    const found = reg_array.some(el => el.email === this.regesterform.value.email);


    if(!found)
    {
      this.errors_array = [];
      reg_array.push(this.regesterform.value);
      localStorage.setItem('registers', JSON.stringify(reg_array));
      this.router.navigate(['/']);
    }

    else
    {
      var error = {
        "error" : "email already exist",
      }
      this.errors_array.push(error);
    }

  }
}
