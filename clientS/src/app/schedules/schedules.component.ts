import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

  constructor() { }

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

    this.intrvl = setInterval(() => {
      this.changeMonth(-1);
    }, 700);
  }

  nextMonth() {
    this.changeMonth(1);

    this.intrvl = setInterval(() => {
      this.changeMonth(1);
    }, 700);
  }

  removeInterval() {
    clearInterval(this.intrvl);
  }
}
