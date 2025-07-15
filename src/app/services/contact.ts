import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:5266/api/contact';

  constructor(private http: HttpClient) { }

  submitForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getSubmissions(search = '', page = 1, pageSize = 10): Observable<any> {
    let params = new HttpParams()
      .set('search', search)
      .set('page', page)
      .set('pageSize', pageSize);

    return this.http.get<any>(this.apiUrl, { params });
  }

}

