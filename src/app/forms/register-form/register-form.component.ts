import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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


  constructor() { }

  ngOnInit() {
  }
  regester()
  {
    console.log(JSON.stringify(this.regesterform.value));
  }
}
