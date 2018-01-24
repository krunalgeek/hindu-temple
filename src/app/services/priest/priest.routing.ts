import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PriestComponent } from './priest.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'priest',
                component: PriestComponent,
                data: { state: 'priest' }
            },
        ]),
    ],
    exports: [
        RouterModule,
    ],
})

export class PriestRoutingModule { }
