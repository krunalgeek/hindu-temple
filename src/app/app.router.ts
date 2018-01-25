import { RouterModule } from '@angular/router';

import { HallRentalComponent } from './services/hall-rental/hall-rental.component';

import { SignupComponent } from './membership/signup/signup.component';
import { SigninComponent } from './membership/signin/signin.component';
import { routerTransition } from './app.router.animations';

const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'hall-rental', component: HallRentalComponent, data: { state: 'hall-rental' } },
    { path: 'sign-up', component: SignupComponent, data: { state: 'sign-up' } },
    { path: 'sign-in', component: SigninComponent, data: { state: 'sign-in' } },
    { path: '**', redirectTo: 'home' }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
    useHash: false,
    enableTracing: false
});
