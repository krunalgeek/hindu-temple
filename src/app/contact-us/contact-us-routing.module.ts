import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactUsComponent } from './index';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'contact-us',
                component: ContactUsComponent,
                data: { state: 'contact-us' }
            },
        ]),
    ],
    exports: [
        RouterModule,
    ],
})

export class ContactUsRoutingModule { }
