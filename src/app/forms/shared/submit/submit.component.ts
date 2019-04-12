import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  @Input('form') form: string;
  @Output() action: EventEmitter<any> = new EventEmitter();
  constructor() { }

  toggle() {
    this.action.emit();
  }
  ngOnInit() {
  }

}
