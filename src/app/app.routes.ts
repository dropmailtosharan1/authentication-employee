import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { AuthGuard } from './guards/auth.guard';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: EmployeeListComponent },
      { path: 'new', component: EmployeeFormComponent },
      { path: 'edit/:id', component: EmployeeFormComponent },
      { path: 'view/:id', component: EmployeeDetailComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
