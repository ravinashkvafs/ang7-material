import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanLoad {

  constructor(private route: Router, private authS: AuthenticationService) { }

  canLoad() {
    return this.authS.isAuth() ? true : false;
  }
}
