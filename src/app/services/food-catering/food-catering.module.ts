import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AppetizersComponent } from './appetizers';
import { FoodOrderComponent } from './food-order';
import { MainDisesComponent } from './main-dises';
import { FoodCateringComponent } from './food-catering.component';

import { FoodCateringRoutingModule } from './food-catering.routing';


@NgModule({
    imports: [
        SharedModule,
        FoodCateringRoutingModule
    ],
    declarations: [
        AppetizersComponent,
        FoodOrderComponent,
        MainDisesComponent,
        FoodCateringComponent
    ],
    exports: [
        AppetizersComponent,
        FoodOrderComponent,
        MainDisesComponent,
        FoodCateringComponent
    ],
    providers: []
})

export class FoodCateringModule { }
