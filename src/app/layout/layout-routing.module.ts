import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutFooterRoutes, LayoutHeaderRoutes, LayoutSideNavRoutes, LayoutBurgerMenuRoutes } from './index';

@NgModule({
    imports: [
        RouterModule.forChild([
            ...LayoutFooterRoutes,
            ...LayoutHeaderRoutes,
            ...LayoutSideNavRoutes,
            ...LayoutBurgerMenuRoutes
        ]),
    ],
    exports: [
        RouterModule,
    ],
})

export class LayoutRoutingModule { }
