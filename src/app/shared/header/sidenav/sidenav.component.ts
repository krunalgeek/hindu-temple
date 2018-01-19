import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { MatSidenav } from '@angular/material';

import { NavigationStart, Router } from '@angular/router';
import { SidenavService } from './sidenav.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(
    private sidenavService: SidenavService,
    private router: Router,
  ) {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.sidenavService.close().then(() => { });
        }
      });
  }
  ngOnInit() {
  }
}
