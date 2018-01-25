import { RouterModule } from '@angular/router';

import { SignupComponent } from './membership/signup/signup.component';
import { SigninComponent } from './membership/signin/signin.component';
import { routerTransition } from './app.router.animations';

const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'sign-up', component: SignupComponent, data: { state: 'sign-up' } },
    { path: 'sign-in', component: SigninComponent, data: { state: 'sign-in' } },
    { path: '**', redirectTo: 'home' }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
    useHash: false,
    enableTracing: false
});
