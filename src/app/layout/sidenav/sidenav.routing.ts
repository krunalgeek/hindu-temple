import { Routes } from '@angular/router';
import { SidenavComponent } from './sidenav.component';

export const LayoutSideNavRoutes: Routes = [
    {
        path: '',
        component: SidenavComponent,
        outlet: 'sidenav'
    },
];
