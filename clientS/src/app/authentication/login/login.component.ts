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
      loginid: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    console.log(Object.assign({}, this.form.controls['loginid']));
    // this.setValidators('loginid');
    // setTimeout(() => {
    //   this.removeValidators('loginid');
    // }, 10000);
  }

  getErrorMessage(key) {
    console.log(key, this.form.controls[key].valid, this.form.controls[key].hasError('required'))
    if (this.form.get(key).hasError('required'))
      return `${key} is mandatory!`;
    console.log('yaha')
    if (this.form.controls[key].hasError('minLength'))
      return `Kindly fulfill need for ${key}`;
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
