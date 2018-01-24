import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { DocorationsComponent } from './docorations.component';
import { DecorationRoutes } from './decorations.routing';

@NgModule({
    imports: [
        SharedModule,
        DecorationRoutes
    ],
    declarations: [
        DocorationsComponent
    ],
    exports: [
        DocorationsComponent
    ],
    providers: []
})

export class DecorationsModule { }
