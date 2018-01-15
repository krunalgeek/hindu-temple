import { Component, OnInit, Inject, HostListener, ElementRef} from '@angular/core';
import { PageEvent } from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: any, public el: ElementRef) { }
  navIsFixed: boolean;
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
      window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    const targetPos = this.document.querySelector('.mat-sidenav-content').scrollTop;
    if(targetPos > 2) {
      this.navIsFixed = true;
    } else {
      this.navIsFixed = false;
    }
  };
}


