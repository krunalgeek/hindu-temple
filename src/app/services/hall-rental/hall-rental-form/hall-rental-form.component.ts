import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HallRentalReqest } from './hall-rental-request';
@Component({
  selector: 'app-hall-rental-form',
  templateUrl: './hall-rental-form.component.html',
  styleUrls: ['./hall-rental-form.component.scss']
})
export class HallRentalFormComponent implements OnInit {
  minDate = new Date();
  hallRentalRequest:HallRentalReqest; 
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.hallRentalRequest = form.value;
    console.log("form this submitting", this.hallRentalRequest);
  }
}
