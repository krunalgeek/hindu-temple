import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ContactUsComponent } from './index';
import { ContactFormComponent } from './index';

import { ContactUsRoutingModule } from './contact-us-routing.module';

@NgModule({
    imports: [
        SharedModule,
        ContactUsRoutingModule
    ],
    declarations: [
        ContactUsComponent,
        ContactFormComponent
    ],
    exports: [
        ContactUsComponent,
        ContactFormComponent
    ],
    providers: []
})

export class ContactUsModule { }
