import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowHideCartService {

  status:boolean;
  show_hide_changes = new EventEmitter<boolean>();
  constructor() {
    this.status = false;
  }

  emit_change(status_now:boolean)
  {
    this.status = status_now;
    this.show_hide_changes.emit(this.status);
  }
}
