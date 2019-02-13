import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      loginid: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z]+')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    console.log(Object.assign({}, this.form.controls['loginid']));
    // this.setValidators('loginid');
    // setTimeout(() => {
    //   this.removeValidators('loginid');
    // }, 10000);
  }

  getErrorMessage(key, validator, len) {
    switch (validator) {
      case 'required': return `${key} is required!`;
      case 'minLength': return `${key} length should be ${len} or more!`;
      case 'maxLength': return `${key} length should be ${len} or less!`;
      case 'pattern': return `${key} is not in proper format!`;
      default: return `Error Undefined!`;
    }
  }

  validateValue(key) {
    if (this.form.controls[key].hasError('required'))
      return true;
    else if (this.form.controls[key].hasError('minLength'))
      return true;

    return false;
  }

  setValidators(key) {
    this.form.controls[key].setValidators([Validators.required, Validators.minLength(3)]);
    this.form.controls[key].updateValueAndValidity();
  }

  removeValidators(key) {
    this.form.controls[key].clearValidators();
    this.form.controls[key].updateValueAndValidity();
  }

  //   onChanges() {
  //     this.addressForm.get('country').valueChanges
  //     .subscribe(selectedCountry => {
  //         if (selectedCountry != 'USA') {
  //             this.addressForm.get('state').reset();
  //             this.addressForm.get('state').disable();
  //         }
  //         else {
  //             this.addressForm.get('state').enable();
  //         }
  //     });
  // }

  ngOnInit() {
  }

}
