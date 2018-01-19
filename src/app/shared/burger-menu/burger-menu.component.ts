import { Component, OnInit, Output,  EventEmitter} from '@angular/core';
import { SidenavService } from '../header/sidenav/sidenav.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter();
  sideNavOpened: Boolean = false;
  constructor(
    private sidenavService: SidenavService,
    private router: Router,
  ) {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.sidenavService.close().then(() => {
            this.sideNavOpened = false;
          });
        }
      });
  }
  
  ngOnInit() {
  }
  public sidenavToggle() {
    this.sidenavService
      .toggle()
      .then(() => {
        this.sideNavOpened =  !this.sideNavOpened;
      });
  }
}
