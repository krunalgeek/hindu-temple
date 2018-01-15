import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
        .addSvgIcon('building',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/building.svg'))
        .addSvgIcon('decoration',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/decoration.svg'))
        .addSvgIcon('food',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/food.svg'))
        .addSvgIcon('worship',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/worship.svg'))
        .addSvgIcon('hand-pointer',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/hand-pointer.svg'))
        // .registerFontClassAlias('fontawesome', 'fa');
  }

  ngOnInit() {
  }

}
