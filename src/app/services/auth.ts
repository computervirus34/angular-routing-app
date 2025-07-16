import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5266/api/Auth';

  constructor(private http: HttpClient, private router: Router) { }

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
  private getDecodedToken(): any | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      return null;
    }
  }

  getTokenExpiration(): number | null {
    const token = this.getToken();
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp ? payload.exp * 1000 : null; // exp in seconds → ms
  }
  getPartnerId(): string {
   const decoded = this.getDecodedToken();
    return decoded?.partnerId || null;
  }

  getUserRole(): string | null {
    const decoded = this.getDecodedToken();
    return decoded?.role || null;
  }

  getCompanyCode(): string | null {
    const decoded = this.getDecodedToken();
    return decoded?.companyCode || null;
  }

  isBankAdmin(): boolean {
    return this.getUserRole() === 'BankAdmin';
  }

  isCompanyAdmin(): boolean {
    return this.getUserRole() === 'CompanyAdmin';
  }

  isSubUser(): boolean {
    return this.getUserRole() === 'SubUser';
  }
}
