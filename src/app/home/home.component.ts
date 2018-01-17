import { Component, OnInit } from '@angular/core';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild, } from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const homeTransition = trigger('homeTransition', [
  transition(':enter', [
    group([
      query('.white-paper *', style({ transform: 'translateY(200px)', opacity: 0 })),
      query('#ngxCarousel', stagger(300, [
        style({ transform: 'translateX(-200px)', opacity: 0}),
        animateChild(),
        animate('2s cubic-bezier(.75,-0.48,.26,1.52)', style('*')),
      ])),
      query('.white-paper', stagger(300, [
        animate('2s cubic-bezier(.75,-0.48,.26,1.52)', style('*')),
        query('.white-paper *', [
          stagger(10, [
            animate('1s cubic-bezier(0.35, 0, 0.25, 1)', style('*'))
          ])
        ])
      ]))
    ])
  ])
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ homeTransition ],
  host: {
    '[@homeTransition]': ''
  }
})


export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// export const homeTransitionold = trigger('homeTransition', [
//   transition(':enter', [
//     // query('.white-paper', stagger(300, [
//     //   style({ transform: 'translateY(200px)', opacity: 0}),
//     //   animate('2s cubic-bezier(.75,-0.48,.26,1.52)', style('*')),
//     // ])),
//     query('*', [
//       style({ transform: 'translateY(200px)', opacity: 0 }),
//       stagger(50, [
//         animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style('*'))
//       ])
//     ])
//   ]),
//   transition(':leave', [
//     query('.white-paper', stagger(300, [
//       animate('2s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(200px)', opacity: 0})),
//     ])),        
//   ])
// ]);