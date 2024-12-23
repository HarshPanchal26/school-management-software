import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'students',
        loadComponent: () => import('../../pages/students/student-dashboard/students-dashboard.component').then(m => m.StudentsComponent)
    },
    {
        path : 'classes',
        loadComponent: () => import('../../pages/classes/classes-dashboard/classes.dashboard.component').then(m => m.ClassesDaashboardComponent)
    },
    {
        path : 'employees',
        loadComponent: () => import('../../pages/employee/employee-dashboard/employee-dashboard.component').then(m => m.EmployeeDashboardComponent)
    },
    {
        path : 'subjects',
        loadComponent: () => import('../../pages/subjects/subject-dashboard/subject-dashboard.component').then(m => m.SubjectDashboardComponent)
    },
    {
        path : 'accounts',
        loadComponent: () => import('../../pages/students/student-dashboard/students-dashboard.component').then(m => m.StudentsComponent)
    },
    {
        path : 'fees',
        loadComponent: () => import('../../pages/students/student-dashboard/students-dashboard.component').then(m => m.StudentsComponent)
    },
    {
        path : 'activities',
        loadComponent: () => import('../../pages/students/student-dashboard/students-dashboard.component').then(m => m.StudentsComponent)
    },
    {
        path : 'exams',
        loadComponent: () => import('../../pages/students/student-dashboard/students-dashboard.component').then(m => m.StudentsComponent)
    },
    {
        path : 'reports',
        loadComponent: () => import('../../pages/students/student-dashboard/students-dashboard.component').then(m => m.StudentsComponent)
    },
    {
        path : 'settings',
        loadComponent: () => import('../../pages/settings/setting-dashboard/setting-dashboard.component').then(m => m.SettingDashboardComponent),
        children: [
          {
            path: '',
            loadChildren: () => import('../../pages/settings/setting-dashboard/setting-dashboard.component.routes').then(m => m.routes)
          }
        ]
      },
    {
      path: '**',
      redirectTo: 'dashboard'
    }
  ];