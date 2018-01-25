import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DecorationsModule } from './docorations/decorations.module';
import { PriestModule } from './priest/priest.module';
import { FoodCateringModule } from './food-catering/food-catering.module';

@NgModule({
    imports: [
        SharedModule,
        DecorationsModule,
        PriestModule,
        FoodCateringModule
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: []
})

export class ServicesModule { }
