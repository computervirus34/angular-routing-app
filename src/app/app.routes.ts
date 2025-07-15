import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { RemittanceComponent } from './pages/remittance/remittance';
import { SupportComponent } from './pages/support/support';
import { authGuard } from './core/guards/auth-guard';
import { AppLayoutComponent } from './layout/app-layout/app-layout';
import { ContactFormComponent } from './pages/contact-form/contact-form';
import { ContactAdminComponent } from './pages/contact-admin/contact-admin';
import { SubUserComponent } from './pages/sub-user/sub-user';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AppLayoutComponent,
    canActivateChild: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'remittance', component: RemittanceComponent },
      { path: 'support', component: SupportComponent },
      { path: 'contact', component: ContactFormComponent },
      { path: 'admin', component: ContactAdminComponent },
      { path: 'sub-user', component: SubUserComponent }
    ]
  }
];