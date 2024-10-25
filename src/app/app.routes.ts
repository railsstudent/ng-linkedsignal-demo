import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'update-linked-signal',
        loadComponent: () => import('./pagination/pagination.component')
    },
    {
        path: 'update-shorthand',
        loadComponent: () => import('./favorite-country/favorite-country.component')
    },
    {
        path: 'reset-linked-signal',
        loadComponent: () => import('./shoe-sizes/shoe-sizes.component')
    },
    {
        path: 'linked-signal-in-store',
        loadComponent: () => import('./shoe-sizes-store/shoe-sizes-store.component')
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'update-linked-signal'
    },
    {
        path: '**',
        redirectTo: 'update-linked-signal'
    }
];

export const navLinks = [
    {
        link: 'The LinkedSignal with source and computation',
        path: ['update-linked-signal'],
    },
    {
      link: 'The shorthand version of the LinkedSignal',
      path: ['update-shorthand'],
    },
    {
        link: 'Reset LinkedSignal when source changes',
        path: ['reset-linked-signal'],
    },
    {
        link: 'LinkedSignal in store',
        path: ['linked-signal-in-store'],
    },
];
