import { Component, OnInit, Output,  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter();
  sideNavOpened: Boolean = false;
  constructor() { }
  
  ngOnInit() {
  }
  sidenavToggle() {
    this.sideNavOpened = !this.sideNavOpened;
    this.sideNavToggle.emit();
  }
}
