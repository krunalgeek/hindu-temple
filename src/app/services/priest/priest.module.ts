import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { PriestComponent } from './priest.component';
import { PriestFormComponent } from './priest-form';
import { PriestServiceListComponent } from './priest-service-list';

import { PriestRoutingModule } from './priest.routing';



@NgModule({
    imports: [
        SharedModule,
        PriestRoutingModule
    ],
    declarations: [
        PriestComponent,
        PriestFormComponent,
        PriestServiceListComponent
    ],
    exports: [
        PriestComponent,
        PriestFormComponent,
        PriestServiceListComponent
    ],
    providers: []
})

export class PriestModule { }
