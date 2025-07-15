// File: src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
  <div class="row w-100 shadow rounded bg-white overflow-hidden" style="max-width: 1000px;">
    
    <!-- Left Panel -->
    <div class="col-md-6 d-flex flex-column align-items-center justify-content-center bg-white p-4">
      <img src="assets/bkb-logo.png" alt="Bangladesh Krishi Bank" class="img-fluid mb-3" style="max-height: 100px;">
      <h3 class="fw-bold">Sign in</h3>
      <p>Use your <strong>Partner Portal</strong> account</p>
    </div>

    <!-- Right Panel (Login) -->
    <div class="col-md-6 d-flex align-items-center justify-content-center bg-white p-4">
      <div class="w-100">
        <form (ngSubmit)="login()">
          <div class="mb-3">
            <label>Email</label>
            <input type="email" class="form-control" [(ngModel)]="username" name="username" required />
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input type="password" class="form-control" [(ngModel)]="password" name="password" required />
          </div>
          <div class="d-flex justify-content-end mb-2">
            <a href="#" class="text-decoration-none">Forgot password?</a>
          </div>
          <button class="btn btn-primary w-100" type="submit">Sign In</button>
          <p class="text-danger" *ngIf="error">{{ error }}</p>
        </form>

        <div class="mt-4 text-muted small text-center">
          Partner Portal offers 24/7 secure access to remittance services.
          <br />
          <a href="#">Learn more about Partner Portal</a>
        </div>
      </div>
    </div>

  </div>
</div>

  `
})
export class LoginComponent {
  username = '';
  password = '';
error = '';
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
        location.href = '/admin';
      },
      error: () => {
        this.error = 'Login failed';
      }
    });
  }
}