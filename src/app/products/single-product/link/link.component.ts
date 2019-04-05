import { Component, OnInit,Input ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input('pro_name') name: string[];

  @Output() singlepro: EventEmitter<any> = new EventEmitter();

  single_product_page()
  {
    this.singlepro.emit();

  }
  constructor() { }

  ngOnInit() {
  }

}
