import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.scss']
})
export class AppetizersComponent implements OnInit {
  HEROES = [
      {id: 1, name: 'Superman'},
      {id: 2, name: 'Batman'},
      {id: 55, name: 'BatGirl'},
      {id: 37, name: 'Robin'},
      {id: 46, name: 'Flash'},
      {id: 15, name: 'Superman'},
      {id: 24, name: 'Batman'},
      {id: 52, name: 'BatGirl'},
      {id: 33, name: 'Robin'},
      {id: 44, name: 'Flash'},
      {id: 16, name: 'Superman'},
      {id: 26, name: 'Batman'},
      {id: 55, name: 'BatGirl'},
      {id: 34, name: 'Robin'},
      {id: 32, name: 'Flash'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
