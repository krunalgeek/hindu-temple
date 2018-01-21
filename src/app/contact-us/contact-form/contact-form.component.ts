import { Component, OnInit } from '@angular/core';
import { ContactUsReqest } from './contact-us-request';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactUs: ContactUsReqest;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.contactUs = form.value;
    console.log("form this submitting", this.contactUs);
  }
}
