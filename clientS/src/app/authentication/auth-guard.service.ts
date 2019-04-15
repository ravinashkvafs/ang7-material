import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanLoad {

  constructor(private router: Router, private authS: AuthenticationService) { }

  canLoad(): any {
    console.log(jwt_decode(this.authS.giveUserToken()))
    if (!this.authS.isAuth())
      return this.router.navigate(['']);
    return true;
  }
}
