import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const baseUrl = environment.uri;
const token_key = environment.token_name;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  // headers: Object = { headers: { 'Authorization': '' } };
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
    // token = `Bearer ${token}`
    localStorage.setItem(token_key, token);
    this.isLoggedIn = true;
    // this.headers['headers'][token_key] = token;
    this.router.navigate(['/dashboard']);
  }

  clearStorage(token) {
    localStorage.clear();
    this.isLoggedIn = false;
    // this.headers['headers'][token_key] = undefined;
    this.router.navigate(['/']);
  }

  giveUserToken() {
    return localStorage.getItem(token_key);
  }

  loadCredentials() {
    if (localStorage.getItem(token_key)) {
      // this.headers['headers'][token_key] = localStorage.getItem(token_key);
      this.isLoggedIn = true;
    }
    else {
      this.router.navigate(['/']);
    }
  }

  isAuth() {
    this.loadCredentials();
    return this.isLoggedIn;
  }
}