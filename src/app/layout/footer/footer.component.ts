import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry
        .addSvgIcon('facebook',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/facebook.svg'))
        .addSvgIcon('twitter',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/twitter.svg'))
        .addSvgIcon('google-plus',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/google-plus.svg'))
        .addSvgIcon('pinterest',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/pinterest.svg'))
        .addSvgIcon('youtube',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/youtube.svg'))
        .addSvgIcon('instagram',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/instagram.svg'))
  }

  ngOnInit() {
  }

}
