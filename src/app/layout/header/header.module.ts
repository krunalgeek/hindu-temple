import { NgModule } from '@angular/core';
import { HeaderComponent } from './index';
import { NavBarComponent } from './nav-bar/';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        HeaderComponent,
        NavBarComponent
    ],
    exports: [
        HeaderComponent,
        NavBarComponent
    ],
    providers: []
})

export class HeaderModule { }
