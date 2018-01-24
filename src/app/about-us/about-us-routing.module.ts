import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutUsComponent } from './index';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'about-us',
                component: AboutUsComponent,
                data: { state: 'about-us' }
            },
        ]),
    ],
    exports: [
        RouterModule,
    ],
})

export class AboutUsRoutingModule { }
