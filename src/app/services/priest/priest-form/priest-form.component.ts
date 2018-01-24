import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PRIESTSERVICES } from './mock-priest-services';
import { PriestReqest } from './priest-request';
@Component({
  selector: 'app-priest-form',
  templateUrl: './priest-form.component.html',
  styleUrls: ['./priest-form.component.scss']
})
export class PriestFormComponent implements OnInit {
  minDate = new Date();
  priestServices = PRIESTSERVICES;
  priestService: PriestReqest;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.priestService = form.value;
    console.log('form this submitting', this.priestService);
  }
}
