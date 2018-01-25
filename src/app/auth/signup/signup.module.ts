import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import {
    SignupComponent,
    MembershipPaymentFormsComponent,
    YourfamilyFormsComponent,
    YourdetailFormsComponent
} from './index';


import { SignUpRoutingModule } from './signup-routing.module';

@NgModule({
    imports: [
        SharedModule,
        SignUpRoutingModule
    ],
    declarations: [
        SignupComponent,
        MembershipPaymentFormsComponent,
        YourfamilyFormsComponent,
        YourdetailFormsComponent
    ],
    exports: [
        SignupComponent,
        MembershipPaymentFormsComponent,
        YourfamilyFormsComponent,
        YourdetailFormsComponent
    ],
    providers: []
})

export class SignUpModule { }
