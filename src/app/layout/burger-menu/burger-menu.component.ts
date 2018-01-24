import { Component, OnInit, Output,  EventEmitter} from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {
  sideNavOpened: Boolean;
  constructor(
    private sidenavService: SidenavService,
    private router: Router,
  ) {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.sideNavOpened = false;
          this.sidenavService.close();
        }
      });
  }
  ngOnInit() {
  }
  public sidenavToggle() {
    this.sideNavOpened =  !this.sideNavOpened;
    this.sidenavService.toggle();
  }
}
