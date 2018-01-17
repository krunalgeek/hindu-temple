import { Component, ElementRef } from '@angular/core';
import { routerTransition } from './app.router.animations';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ],
})
export class AppComponent {
  pageClass:String = "home";
  spinnerRunning: boolean;
  constructor(private router: Router) {
    router.events.subscribe((e) => {
      console.log('hellll', e);
        if(e instanceof  NavigationStart) {
          this.spinnerRunning = true;
        } else if(e instanceof NavigationEnd) {
          this.spinnerRunning = false;
        }
    });
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
