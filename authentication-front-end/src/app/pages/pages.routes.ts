import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./authentication/authentication.component')
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component')
    }
];