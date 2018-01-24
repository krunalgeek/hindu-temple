import { Component, OnInit, Inject, OnDestroy} from '@angular/core';
import { PageEvent } from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private document: any) { }
  navIsFixed: boolean;
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
      window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    const targetPos = window.pageYOffset || window.document.documentElement.scrollTop || window.document.body.scrollTop || 0;
    if (targetPos > 2) {
      this.navIsFixed = true;
    } else {
      this.navIsFixed = false;
    }
  }
}


