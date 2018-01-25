import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-yourdetail-forms',
  templateUrl: './yourdetail-forms.component.html',
  styleUrls: ['./yourdetail-forms.component.scss']
})
export class YourdetailFormsComponent implements OnInit {
  maxDate = new Date();
  applicantDetail: FormGroup;
  constructor() { }

  ngOnInit() {
    this.applicantDetail =  new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+[\'-]?)+$')]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+[\'-]?)+$')]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('^\d{10}$')]),
      'dateOfBirth': new FormControl(null, Validators.required),
      'address': new FormGroup({
        'addressLine1': new FormControl(null , Validators.required),
        'addressLine2': new FormControl(null),
        'city': new FormControl(null , Validators.required),
        'state': new FormControl(null , Validators.required),
        'zipCode': new FormControl(null , [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]),
      }),
      'occupation': new FormControl(null , Validators.required),
      'originState': new FormControl(null),
      'originVillage': new FormControl(null),
      'samaj': new FormControl(null, Validators.required),
      'volunteer': new FormControl("yes", Validators.required),
      'gender': new FormControl("male" , Validators.required),
    });
  }

  onSubmit() {
    console.log(this.applicantDetail);
  }
}
