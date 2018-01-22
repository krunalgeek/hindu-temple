import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-membership-payment-forms',
  templateUrl: './membership-payment-forms.component.html',
  styleUrls: ['./membership-payment-forms.component.scss']
})
export class MembershipPaymentFormsComponent implements OnInit {
  cardDetail:FormGroup;
  constructor() { }
  
  ngOnInit() {
    this.cardDetail =  new FormGroup({
      'cardNumber': new FormControl(null, [Validators.required, Validators.pattern('^\d{16}$')]),
      'expireMonthAndYear': new FormControl(null, Validators.required),
      'securityCode': new FormControl(null , Validators.required),
      'memberShipTerm': new FormControl(null, Validators.required),
      'amount': new FormControl({value: 100, disabled: true}, Validators.required)
    });
    this.cardDetail.get('memberShipTerm').valueChanges.subscribe(val => {
       if(val === 'Life time') {
          this.cardDetail.get('amount').setValue(5000);
       } else if(val === 'Yearly'){
          this.cardDetail.get('amount').setValue(100);
       }
    });
  }
  onSubmit() {
    console.log(this.cardDetail);
  }

 

  
}
