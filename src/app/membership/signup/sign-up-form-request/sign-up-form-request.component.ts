import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-form-request',
  templateUrl: './sign-up-form-request.component.html',
  styleUrls: ['./sign-up-form-request.component.scss']
})
export class SignUpFormRequestComponent implements OnInit {
  maxDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
