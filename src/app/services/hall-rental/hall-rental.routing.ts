import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HallRentalComponent } from './hall-rental.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'hall-rental',
                component: HallRentalComponent,
                data: { state: 'hall-rental' }
            },
        ]),
    ],
    exports: [
        RouterModule,
    ],
})

export class HallRentalRoutingModule { }
