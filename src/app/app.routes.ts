import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: 'resource',
    //     loadComponent: () => import('./pokemon/pokemon/pokemon.component')
    // },
    {
        path: 'update-source',
        loadComponent: () => import('./favorite-country/favorite-country.component')
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'update-source'
    },
    {
        path: '**',
        redirectTo: 'update-source'
    }
];

export const navLinks = [
    {
      link: 'Update source of linked signal',
      path: ['update-source'],
    },
    // {
    //   link: 'Pokemon Resource',
    //   path: ['resource'],
    // },
  ];
