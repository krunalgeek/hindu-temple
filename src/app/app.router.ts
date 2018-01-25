import { RouterModule } from '@angular/router';

import { routerTransition } from './app.router.animations';

const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
    useHash: false,
    enableTracing: false
});
