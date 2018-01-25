import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { SigninFormComponent } from './index';
import { SigninComponent } from './index';

import { SignInRoutingModule } from './signin-routing.module';

@NgModule({
    imports: [
        SharedModule,
        SignInRoutingModule
    ],
    declarations: [
        SigninFormComponent,
        SigninComponent
    ],
    exports: [
        SigninFormComponent,
        SigninComponent
    ],
    providers: []
})

export class SignInModule { }
