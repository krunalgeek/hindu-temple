import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-yourfamily-forms',
  templateUrl: './yourfamily-forms.component.html',
  styleUrls: ['./yourfamily-forms.component.scss']
})
export class YourfamilyFormsComponent implements OnInit {
  maxDate = new Date();
  family: FormGroup;
  maxDateChild = new Date();
  constructor() { }

  get getMember() { 
    return <FormArray>this.family.get("totalMembers"); 
  }

  ngOnInit() {
    this.family =  new FormGroup({
      'noOfFamilyMebmbers': new FormControl(1),
      'totalMembers': new FormArray([
          this.initFamily()
      ])
    });
    console.log('sdsd', this.family);
  }

  initFamily() {
    // initialize our family
    return new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+[\'-]?)+$')]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern('^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+[\'-]?)+$')]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('^\d{10}$')]),
      'dateOfBirth': new FormControl(null, Validators.required),
      'ocupation': new FormControl(null , Validators.required),
      'relationship': new FormControl("male" , Validators.required),
    })
  }
  onSubmit() {
    this.family.value.noOfFamilyMebmbers = this.family.value.noOfFamilyMebmbers.totalMembers.length;
    console.log("ehllo", this.family.value);
  }
  addMember() {
    const control = <FormArray>this.family.controls['totalMembers'];
    control.push(this.initFamily());
  }
  removeMember(index: number) {
    this.getMember.removeAt(index);
  }
}
