import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { routerTransition } from './app.router.animations';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { SidenavService } from './shared/header/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition],
  providers: [SidenavService]
})
export class AppComponent {
  @ViewChild('sidenav') public sidenav:MatSidenav;
  pageClass:String = "home";
  constructor(
    private router: Router, 
    private sidenavService: SidenavService
  ) {
  }

  /**
   * OnInit life cycle hook
   */
  public ngOnInit(): void {
    // Store sidenav to service
    this.sidenavService
      .setSidenav(this.sidenav);
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
