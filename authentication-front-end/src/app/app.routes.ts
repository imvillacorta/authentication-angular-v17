import { Routes } from '@angular/router';
import { authenticationGuard } from './shared/guards/authentication.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/pages.routes').then((r) => r.pagesRoutes)
    },
    {
        path: '**',
        loadChildren: () => import('./pages/pages.routes').then((r) => r.pagesRoutes)
    }
];
