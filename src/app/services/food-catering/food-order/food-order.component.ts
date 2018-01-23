import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-food-order',
  templateUrl: './food-order.component.html',
  styleUrls: ['./food-order.component.scss']
})
export class FoodOrderComponent implements OnInit {
  cateringOrderDetail: FormGroup;
  constructor() { }

  ngOnInit() {
    this.cateringOrderDetail =  new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+[\'-]?)+$')]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+[\'-]?)+$')]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('^\d{10}$')]),
      'address': new FormGroup({
        'addressLine1': new FormControl(null , Validators.required),
        'addressLine2': new FormControl(null),
        'city': new FormControl(null , Validators.required),
        'state': new FormControl(null , Validators.required),
        'zipCode': new FormControl(null , [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]),
      })
    });
  }

}
