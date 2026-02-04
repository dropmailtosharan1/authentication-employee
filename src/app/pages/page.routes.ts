import { Routes } from '@angular/router';
import { PageComponent } from './page.component';

export const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
                data: { breadcrumb: 'Dashboard' }
            },
            {
                path: 'contact',
                loadComponent: () => import('./contact-us/contact-us.component').then(c => c.ContactUsComponent),
                data: { breadcrumb: 'Contact Us' }
            },
            {
                path: 'user',
                loadComponent: () => import('./user-profile/user-profile.component').then(c => c.UserProfileComponent),
                data: { breadcrumb: 'User Profile Manager' }
            },
            {
                path: 'data',
                loadComponent: () => import('./data-display/data-display.component').then(c => c.DataDisplayComponent),
                data: { breadcrumb: 'Data Display' }
            },
            {
                path: 'mini-dashboard',
                loadComponent: () => import('./mini-dashboard/mini-dashboard.component').then(c => c.MiniDashboardComponent),
                data: { breadcrumb: 'mini-dashboard' }
            },
        ]
    }
];
