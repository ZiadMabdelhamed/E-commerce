import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.scss']
})
export class NavigationLinksComponent implements OnInit {

  public login_user;
  constructor() {
    this.login_user = JSON.parse(localStorage.getItem('login'));
    console.log(this.login_user[0].email);
  }

  ngOnInit() {
  }

}
