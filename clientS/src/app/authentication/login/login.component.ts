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
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
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
