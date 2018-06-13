import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Router } from "@angular/router";
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  register(signupData): any {
    return this.httpClient.post('/api/v1/register', signupData);
  }

  login(loginData): any {
    return this.httpClient.post('/api/v1/login', loginData);
  }

  authenticateUser(token, email, username, userId): void {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
    localStorage.setItem('userId', userId);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
  }

  getId(): any {
    return localStorage.getItem('userId');
  }

  getEmail(): any {
    return localStorage.getItem('email');
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  getUsername(): any {
    return localStorage.getItem('username');
  }


}
