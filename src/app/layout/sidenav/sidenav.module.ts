import { NgModule } from '@angular/core';
import { SidenavComponent } from './index';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        SidenavComponent
    ],
    exports: [
        SidenavComponent
    ],
    providers: []
})

export class SideNavModule { }
