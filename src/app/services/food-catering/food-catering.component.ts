import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-food-catering',
  templateUrl: './food-catering.component.html',
  styleUrls: ['./food-catering.component.scss']
})
export class FoodCateringComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
        .addSvgIcon('appetizers',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/soups.svg'))
        .addSvgIcon('mainCourse',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/fork.svg'))
        .addSvgIcon('submitForm',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/submit-form.svg'));
  }

  ngOnInit() {
  }

}
