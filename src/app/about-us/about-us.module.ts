import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AboutUsComponent } from './index';
import { AboutUsRoutingModule } from './about-us-routing.module';

@NgModule({
    imports: [
        SharedModule,
        AboutUsRoutingModule
    ],
    declarations: [
        AboutUsComponent
    ],
    exports: [
        AboutUsComponent
    ],
    providers: []
})

export class AboutUsModule { }
