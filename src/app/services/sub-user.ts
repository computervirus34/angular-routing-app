import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubUserService {
  private apiUrl = 'http://localhost:5266/api/SubUsers';

  constructor(private http: HttpClient) {}

  getSubUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  createSubUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }
}