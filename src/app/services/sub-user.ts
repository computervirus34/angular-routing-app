import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubUserService {
  private apiUrl = 'http://localhost:5266/api/partner';
  private companyUrl = 'http://localhost:5266/api/Partner/get-partners';

  constructor(private http: HttpClient) {}

  getSubUsers(organizationCode : any): Observable<any[]> {
    console.log('Fetching sub-users from:', this.apiUrl);
    return this.http.get<any[]>(`${this.apiUrl}?organizationCode=${organizationCode}`).pipe(
      tap(response => console.log('API Response:', response)),
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Failed to fetch sub-users'));
      })
    );
  }

  createSubUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-subuser`, data);
  }

  updateSubUser(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteSubUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.companyUrl}`);
  }
}