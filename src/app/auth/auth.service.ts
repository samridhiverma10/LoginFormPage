// services/custom.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(apiEndpoint: string, username: string, password: string): Observable<any> {
    return this.http.post(`${apiEndpoint}/login`, { username, password });
  }

  register(apiEndpoint: string, username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${apiEndpoint}/register`, { username, email, password });
  }

  resetPassword(apiEndpoint: string, email: string): Observable<any> {
    return this.http.post(`${apiEndpoint}/reset-password`, { email });
  }

  forgotPassword(apiEndpoint: string, email: string): Observable<any> {
    return this.http.post(`${apiEndpoint}/forgot-password`, { email });
  }
}