import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SchedulesComponent } from 'src/app/schedules/schedules.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-scheduler-dialog',
  templateUrl: './scheduler-dialog.component.html',
  styleUrls: ['./scheduler-dialog.component.scss']
})
export class SchedulerDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<SchedulesComponent>, private fb: FormBuilder) {
    this.form = fb.group({});
  }

  ngOnInit() { }

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  type: string = '';
  form: any;

  eventSelect(type) {
    this.type = type;

    switch (type) {
      case 'anniversary':
        this.form.addControl('dob', new FormControl('', [Validators.required]));
        break;
      case 'event':
    }
  }
}
