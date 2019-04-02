import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { SchedulerDialogComponent } from '../shared/scheduler-dialog/scheduler-dialog.component';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() { }

  today: Date = new Date();
  days_count: number = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
  days: any = new Array(this.days_count).fill(0).map((item, i) => (i + 1));
  intrvl: any;
  weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  changeMonth(integer) {
    this.today = new Date(this.today.getFullYear(), this.today.getMonth() + integer, 1);
    this.days_count = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
    this.days = new Array(this.days_count).fill(0).map((item, i) => (i + 1));
  }

  prevMonth() {
    this.changeMonth(-1);
    clearInterval(this.intrvl);

    this.intrvl = setInterval(() => {
      this.changeMonth(-1);
    }, 700);
  }

  nextMonth() {
    this.changeMonth(1);
    clearInterval(this.intrvl);

    this.intrvl = setInterval(() => {
      this.changeMonth(1);
    }, 700);
  }

  removeInterval() {
    clearInterval(this.intrvl);
  }

  //Dialog
  addSchedule(date) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '25vw';
    // dialogConfig.minHeight = '80%';
    dialogConfig.data = {
      date,
      month: this.today.getMonth(),
      year: this.today.getFullYear()
    };

    const dialogRef = this.dialog.open(SchedulerDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });

  }
}
