import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-rquest',
  templateUrl: './form-rquest.component.html',
  styleUrls: ['./form-rquest.component.scss']
})
export class FormRquestComponent implements OnInit {
  minDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
