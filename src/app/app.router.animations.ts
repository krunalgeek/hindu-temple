import {sequence, trigger, stagger, animate, style, group, state,  query as q, transition, keyframes, animateChild} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const routerTransition = trigger('routerTransition', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    animate('0.2s ease-in')
  ]),
  transition(':leave', [
    animate('0.5s ease-out', style({
      opacity: 0,
      transform: 'translateY(100%)'
    }))
  ])
]);