import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { RemittanceComponent } from './pages/remittance/remittance';
import { SupportComponent } from './pages/support/support';
//import { AuthGuard } from './core/auth.guard';
import { AppLayoutComponent } from './layout/app-layout/app-layout';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AppLayoutComponent,
    //canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'remittance', component: RemittanceComponent },
      { path: 'support', component: SupportComponent }
    ]
  }
];