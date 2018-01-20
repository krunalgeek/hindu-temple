import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yourfamily-forms',
  templateUrl: './yourfamily-forms.component.html',
  styleUrls: ['./yourfamily-forms.component.scss']
})
export class YourfamilyFormsComponent implements OnInit {
  maxDate = new Date();
  maxDateChild = new Date();
  constructor() { }

  ngOnInit() {
  }

}
