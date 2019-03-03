import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseUrl = environment.uri;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token_key: string = 'ToKeN';

  constructor(private http: HttpClient) { }

  doLogin(obj) {
    return this.http.post(`${baseUrl}/user/auth/login`, obj);
  }

  doRegister(obj) {
    return this.http.post(`${baseUrl}/user/auth/register`, obj);
  }

  saveToken(token) {
    localStorage.setItem(this.token_key, token);
  }

  clearStorage(token) {
    localStorage.clear();
  }
}