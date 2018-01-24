import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DocorationsComponent } from './docorations.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'decorations',
                component: DocorationsComponent,
                data: { state: 'decorations' }
            },
        ]),
    ],
    exports: [
        RouterModule,
    ],
})

export class DecorationRoutes { }
