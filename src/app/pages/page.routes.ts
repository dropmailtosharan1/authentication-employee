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
                data: { currentPath: 'Dashboard' }
            },
            {
                path: 'contact',
                loadComponent: () => import('./contact-us/contact-us.component').then(c => c.ContactUsComponent),
                data: { currentPath: 'Contact Us' }
            },
            {
                path: 'user',
                loadComponent: () => import('./user-profile/user-profile.component').then(c => c.UserProfileComponent),
                data: { currentPath: 'User Profile' }
            },
            {
                path: 'data',
                loadComponent: () => import('./data-display/data-display.component').then(c => c.DataDisplayComponent),
                data: { currentPath: 'Data Display' }
            },
            {
                path: 'mini-dashboard',
                loadComponent: () => import('./mini-dashboard/mini-dashboard.component').then(c => c.MiniDashboardComponent),
                data: { currentPath: 'mini-dashboard' }
            },
            {
              path: 'in-progress',
              loadComponent: () => import('./in-progress/in-progress.component').then(c => c.InProgressComponent),
              data: { currentPath: 'In Progress' }
            }
        ]
    }
];
