import { NgModule } from '@angular/core';
import { SignInModule } from './signin/signin.module';
import { SignUpModule } from './signup/signup.module';

@NgModule({
    imports: [
        SignInModule,
        SignUpModule
    ],
    declarations: [],
    exports: [],
    providers: []
})

export class AuthModule { }
