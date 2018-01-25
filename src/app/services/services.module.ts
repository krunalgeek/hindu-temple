import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DecorationsModule } from './docorations/decorations.module';
import { PriestModule } from './priest/priest.module';
import { FoodCateringModule } from './food-catering/food-catering.module';
import { HallRentalModule } from './hall-rental/hall-rental.module';

@NgModule({
    imports: [
        SharedModule,
        DecorationsModule,
        PriestModule,
        FoodCateringModule,
        HallRentalModule
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: []
})

export class ServicesModule { }
