import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public carouselBanner: NgxCarousel;
  public carouselBannerItems: Array<any> = [
    {
      'xs': 'http://placehold.it/300x200',
      'sm': 'http://placehold.it/600x300',
      'lg': 'http://placehold.it/800x500',
    },
    {
      'xs': 'http://placehold.it/300x200',
      'sm': 'http://placehold.it/600x300',
      'lg': 'http://placehold.it/800x500',
    },
    {
      'xs': 'http://placehold.it/300x200',
      'sm': 'http://placehold.it/600x300',
      'lg': 'http://placehold.it/800x500',
    }
  ];
  constructor() { }
  

  ngOnInit() {
    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 11px 10px;
            transition: all 300ms linear;
            border-radius: 2px;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 12px;
              height: 12px;
              margin:11px 10px;
              transform:scale(1.5);
              margin-top:10px;
              box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
          }
        `
      },
      loop: true,
      touch: true,
      custom: 'banner'
    }
  }
  /* It will be triggered on every slide*/
  onmoveFn(data: NgxCarouselStore) {
  }
}

 // 'http://www.hindugodwallpaper.com/images/gods/zoom/3411_cute-bal-ganesh-wallpaper.jpg',