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

  regesterform = new FormGroup({
    Email: new FormControl('', [
      Validators.required,
    ]),
    Password: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ]),
  });


  constructor() { }

  ngOnInit() {
  }
  regester()
  {

  }
}
