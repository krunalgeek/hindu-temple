import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DecorationsModule } from './docorations/decorations.module';
import { PriestModule } from './priest/priest.module';

@NgModule({
    imports: [
        SharedModule,
        DecorationsModule,
        PriestModule
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: []
})

export class ServicesModule { }
