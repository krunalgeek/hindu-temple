import { Routes } from '@angular/router';
import { BurgerMenuComponent } from './burger-menu.component';

export const LayoutBurgerMenuRoutes: Routes = [
    {
        path: '',
        component: BurgerMenuComponent,
        outlet: 'burger-menu'
    },
];
