import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'expose-previous',
        loadComponent: () => import('./pagination/pagination.component')
    },
    {
        path: 'update-shorthand',
        loadComponent: () => import('./favorite-country/favorite-country.component')
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
        link: 'Expose previous in the linked signal',
        path: ['expose-previous'],
    },
    {
      link: 'The shorthand version of the linked signal',
      path: ['update-shorthand'],
    },
];
