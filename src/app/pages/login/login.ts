// File: src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService } from '../../core/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container-fluid min-vh-100 d-flex align-items-center bg-light">
      <div class="row w-100 shadow-lg rounded bg-white overflow-hidden">
        <div class="col-md-6 p-5 bg-white d-flex align-items-center justify-content-center">
          <img [src]="'assets/bkb-logo.png'" alt="Logo"  class="img-fluid" style="max-height: 200px;" />
          <p class="text-muted mb-4 text-center">Use your Partner Portal account</p>
        </div>
        <div class="col-md-6 p-5 bg-light d-flex align-items-center justify-content-center">
          <div class="w-100" style="max-width: 400px;">
            <h2 class="mb-4 text-center">Sign in</h2>
            <form (ngSubmit)="onLogin()">
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" [(ngModel)]="username" name="username" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" [(ngModel)]="password" name="password" required />
              </div>
              <div class="d-flex justify-content-between mb-3">
                <a href="#" class="small text-decoration-none">Forgot password?</a>
              </div>
              <button type="submit" class="btn btn-primary w-100">Sign In</button>
            </form>
            <p class="text-muted mt-4 small">
              Partner Portal offers 24/7 secure access to remittance services. <br />
              <a href="#">Learn more about Partner Portal</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  //constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
   /*  this.auth.login('mock-jwt-token');
    this.router.navigate(['/dashboard']); */
  }
}