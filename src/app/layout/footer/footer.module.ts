import { NgModule } from '@angular/core';
import { FooterComponent } from './index';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        FooterComponent
    ],
    exports: [
        FooterComponent
    ],
    providers: []
})

export class FooterModule { }
