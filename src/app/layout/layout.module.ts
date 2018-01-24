import { NgModule } from '@angular/core';

import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { SideNavModule } from './sidenav/sidenav.module';
import { BurgerMenuModule } from './burger-menu/burger-menu.module';

import { LayoutRoutingModule } from './layout-routing.module';

import { SidenavService } from './sidenav/';


@NgModule({
    imports: [
        FooterModule,
        HeaderModule,
        SideNavModule,
        LayoutRoutingModule,
        BurgerMenuModule
    ],
    exports: [],
    providers: [
        SidenavService
    ]
})

export class LayoutModule { }
