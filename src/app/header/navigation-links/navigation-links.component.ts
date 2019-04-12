import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.scss']
})
export class NavigationLinksComponent implements OnInit {

  public login_user;
  constructor(private router:Router) {
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() );

    this.login_user = JSON.parse(localStorage.getItem('login'));
  }

  ngOnInit() {
  }

  handleRouteChange = () => {
    if (this.router.url.includes('/')) {
      this.login_user = JSON.parse(localStorage.getItem('login'));
    }
  }


}
