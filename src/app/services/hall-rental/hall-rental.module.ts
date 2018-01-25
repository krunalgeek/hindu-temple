import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HallRentalComponent } from './hall-rental.component';
import { HallRentalFormComponent } from './hall-rental-form';

import { HallRentalRoutingModule } from './hall-rental.routing';



@NgModule({
    imports: [
        SharedModule,
        HallRentalRoutingModule
    ],
    declarations: [
        HallRentalComponent,
        HallRentalFormComponent
    ],
    exports: [
        HallRentalComponent,
        HallRentalFormComponent
    ],
    providers: []
})

export class HallRentalModule { }
