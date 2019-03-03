import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { Router } from '@angular/router';

// function skuValidator(control: FormControl): any {
//   if (!control.value.match(/^[0-9]{10,}$/i))
//     return { invalidSku: true };
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;
  view: string = 'login';
  registration_fields = [
    { field: 'fullname', default: '', validation: [Validators.required, Validators.minLength(3)] },
    { field: 'mobile', default: 0, validation: [Validators.required, Validators.pattern('^[0-9]{10}$')] }
  ];

  constructor(private fb: FormBuilder, public authS: AuthenticationService, private dialog: MatDialog, private cdr: ChangeDetectorRef, private router: Router) {
    console.log('Loaded Login!');

    this.form = fb.group({
      loginid: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z]+[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_again: [''],
      // sku: ['', [Validators.required, skuValidator]]
    }, { validator: this.passwordMatchValidator('password', 'password_again') });

  }

  ngOnInit() {
    console.log('init called')
  }

  passwordMatchValidator(value1: string, value2: string) {
    return (group: FormGroup) => {
      if (this.view == 'register' && group.controls[value1].value !== group.controls[value2].value)
        return group.controls[value2].setErrors({ pswNoMatch: true });
      else
        return group.controls[value2].setErrors(null);
    }
  }

  getErrorMessage(key, validator, len) {
    switch (validator) {
      case 'required': return `${key} is required!`;
      case 'minLength': return `${key} length should be ${len} or more!`;
      case 'maxLength': return `${key} length should be ${len} or less!`;
      case 'pattern': return `${key} is not in proper format!`;
      case 'pswNoMatch': return `${key} Match Error!`;
      // case 'invalidSku': return `${key} is not in proper format!`;
      default: return `Error Undefined!`;
    }
  }

  // setValidators(key) {
  //   this.form.controls[key].setValidators([Validators.required, Validators.minLength(3)]);
  //   this.form.controls[key].updateValueAndValidity();
  // }

  // removeValidators(key) {
  //   this.form.controls[key].clearValidators();
  //   this.form.controls[key].updateValueAndValidity();
  // }

  doLogin() {
    switch (this.view) {
      case 'login':
        this.authS.doLogin(this.form.value)
          .subscribe(response => {
            console.log(response);
            this.authS.saveToken(response['data']['token']);
            this.router.navigate(['blog']);
          }, err => {
            console.log(err.error);
            this.openDialog(err.error.message, false);
          });
        break;
      case 'register':
        this.authS.doRegister(this.form.value)
          .subscribe(response => {
            console.log(response);
            this.authS.saveToken(response['data']['token']);
            this.router.navigate(['rest']);
          }, err => {
            console.log(err.error);
            this.openDialog(err.error.message, false);
          });
    }
  }

  switchViews() {
    switch (this.view) {
      case 'login':
        this.view = 'register';
        this.registration_fields.forEach(item => this.form.addControl(item['field'], new FormControl(item['default'], item['validation'])));
        break;
      case 'register':
        this.view = 'login';
        this.registration_fields.forEach(item => this.form.removeControl(item['field']));
    }
    this.cdr.detectChanges();
  }

  //Dialog
  openDialog(message, success) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '25vw';
    dialogConfig.data = { message, success };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }
}
