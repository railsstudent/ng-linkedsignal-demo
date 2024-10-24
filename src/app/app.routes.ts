import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'update-link-signal',
        loadComponent: () => import('./pagination/pagination.component')
    },
    {
        path: 'update-shorthand',
        loadComponent: () => import('./favorite-country/favorite-country.component')
    },
    {
        path: 'reset-link-signal',
        loadComponent: () => import('./shoe-sizes/shoe-sizes.component')
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'update-link-signal'
    },
    {
        path: '**',
        redirectTo: 'update-link-signal'
    }
];

export const navLinks = [
    {
        link: 'The linked signal with source and computation',
        path: ['update-link-signal'],
    },
    {
      link: 'The shorthand version of the linked signal',
      path: ['update-shorthand'],
    },
    {
        link: 'Reset link signal when source changes',
        path: ['reset-link-signal'],
    },
];
