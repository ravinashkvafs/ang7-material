import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const baseUrl = environment.uri;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {
  token_key: string = 'ToKeN';
  headers: Object = { headers: { 'ToKeN': '' } };
  isLoggedIn: Boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // this.loadCredentials();
  }

  doLogin(obj) {
    return this.http.post(`${baseUrl}/user/auth/login`, obj);
  }

  doRegister(obj) {
    return this.http.post(`${baseUrl}/user/auth/register`, obj);
  }

  saveToken(token) {
    localStorage.setItem(this.token_key, token);
    this.isLoggedIn = true;
    this.headers['headers'][this.token_key] = token;
    this.router.navigate(['/dashboard']);
  }

  clearStorage(token) {
    localStorage.clear();
    this.isLoggedIn = false;
    this.headers['headers'][this.token_key] = undefined;
    this.router.navigate(['/']);
  }

  loadCredentials() {
    if (localStorage.getItem(this.token_key)) {
      this.headers['headers'][this.token_key] = localStorage.getItem(this.token_key);
      this.isLoggedIn = true;
    }
    else {
      this.router.navigate(['/']);
    }
  }

  isAuth() {
    this.loadCredentials();
    console.log(localStorage.getItem(this.token_key), this.isLoggedIn)
    return this.isLoggedIn;
  }
}