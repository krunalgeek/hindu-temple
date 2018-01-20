import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yourdetail-forms',
  templateUrl: './yourdetail-forms.component.html',
  styleUrls: ['./yourdetail-forms.component.scss']
})
export class YourdetailFormsComponent implements OnInit {
  maxDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
