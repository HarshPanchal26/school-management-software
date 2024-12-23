import { Routes } from "@angular/router";

export const routes : Routes = [    
    {
        path : '',
        loadComponent: () => import('../pages/setting-options/setting-options.component').then(m => m.SettingOptionsComponent)
    },
    {
        path : 'general',
        loadComponent: () => import('../pages/general-settings/general-settings.component').then(m => m.GeneralSettingsComponent)
    },
    {
        path : 'academics',
        loadComponent: () => import('../pages/academics-settings/academics-settings.component').then(m => m.AcademicsSettingsComponent)
    },
]  