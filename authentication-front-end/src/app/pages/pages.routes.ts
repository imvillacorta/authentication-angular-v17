import { Routes } from '@angular/router';
import { authenticationGuard } from '../shared/guards/authentication.guard';

export const pagesRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./authentication/authentication.component')
    },
    {
        path: 'home',
        canActivate: [
            authenticationGuard
        ],
        loadComponent: () => import('./home/home.component')
    }
];