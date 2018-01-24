import { NgModule } from '@angular/core';
import { BurgerMenuComponent } from './index';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        BurgerMenuComponent
    ],
    exports: [
        BurgerMenuComponent
    ],
    providers: []
})

export class BurgerMenuModule { }
