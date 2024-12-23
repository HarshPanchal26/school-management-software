import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./layout/saral-dashboard/saral-dashboard.component').then(m => m.SaralDashboardComponent),
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/saral-dashboard/saral-dashboard.routes').then(m => m.routes)
      }
    ]
  },
  // {
  //   path : 'settings',
  //   loadComponent: () => import('./pages/settings/setting-dashboard/setting-dashboard.component').then(m => m.SettingDashboardComponent),
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./pages/settings/setting-dashboard/setting-dashboard.component.routes').then(m => m.routes)
  //     }
  //   ]
  // },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];