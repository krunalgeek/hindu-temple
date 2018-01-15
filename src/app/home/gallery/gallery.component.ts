import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry
        .addSvgIcon('pictures',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/pictures.svg'))
        .addSvgIcon('video',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/video.svg'))
        .addSvgIcon('audio',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/audio.svg'))
        .addSvgIcon('books',
            sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/books.svg'))
  }

  ngOnInit() {
  }

}
