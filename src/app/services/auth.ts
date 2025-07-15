import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5266/api/Auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!this.getToken();
  }
   isCompanyAdmin(): boolean {
    const token = this.getToken();
    if (!token) return false;

    // Decode the JWT
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload));

    // Assume the role is in "role" or "UserRole"
    return decoded.role === 'CompanyAdmin' || decoded.UserRole === 'CompanyAdmin';
  }
}
