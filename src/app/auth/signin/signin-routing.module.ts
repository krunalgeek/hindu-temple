import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './index';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'sigin-in',
                component: SigninComponent,
                data: { state: 'sigin-in' }
            },
        ]),
    ],
    exports: [
        RouterModule,
    ],
})

export class SignInRoutingModule { }
