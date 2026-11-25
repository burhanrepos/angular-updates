import { Routes } from '@angular/router';
import { VERSIONS } from './versions';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: String(VERSIONS[0].version) },
  {
    path: ':version',
    loadComponent: () => import('./version-page').then((m) => m.VersionPage),
    title: (route) => `Angular ${route.paramMap.get('version')} updates`,
  },
];
