import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './index';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'sing-up',
                component: SignupComponent,
                data: { state: 'sign-up' }
            },
        ]),
    ],
    exports: [
        RouterModule,
    ],
})

export class SignUpRoutingModule { }
