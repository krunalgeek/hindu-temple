import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodCateringComponent } from './food-catering.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'food-catering',
                component: FoodCateringComponent,
                data: { state: 'food-catering' }
            },
        ]),
    ],
    exports: [
        RouterModule,
    ],
})

export class FoodCateringRoutingModule { }
