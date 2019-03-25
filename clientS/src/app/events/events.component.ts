import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  list: any; newLI: any;

  ngOnInit() { }

  events: any = [
    { name: 'Avinash Sharma', statement: '2 Year(s) Work Anniversary', date_type: 'normal', date: '2017-03-17' },
    { name: 'Rohit Sharma', statement: 'Birth Anniversary', date_type: 'normal', date: '1995-11-27' },
    { name: 'Amit Dhiman', statement: '10 Year(s) Work Anniversary', date_type: 'normal', date: '2009-06-09' },
    { name: 'Rohit Sharma', statement: 'Birth Anniversary', date_type: 'normal', date: '1995-11-27' },
    { name: 'Amit Dhiman', statement: '10 Year(s) Work Anniversary', date_type: 'normal', date: '2009-06-09' },
    { name: 'Rohit Sharma', statement: 'Birth Anniversary', date_type: 'normal', date: '1995-11-27' },
    { name: 'Amit Dhiman', statement: '10 Year(s) Work Anniversary', date_type: 'normal', date: '2009-06-09' },
    { name: 'Rohit Sharma', statement: 'Birth Anniversary', date_type: 'normal', date: '1995-11-27' },
    { name: 'Amit Dhiman', statement: '10 Year(s) Work Anniversary', date_type: 'normal', date: '2009-06-09' },
    { name: 'Rohit Sharma', statement: 'Birth Anniversary', date_type: 'normal', date: '1995-11-27' },
    { name: 'Amit Dhiman', statement: '10 Year(s) Work Anniversary', date_type: 'normal', date: '2009-06-09' },
    { name: 'Rohit Sharma', statement: 'Birth Anniversary', date_type: 'normal', date: '1995-11-27' },
    { name: 'Amit Dhiman', statement: '10 Year(s) Work Anniversary', date_type: 'normal', date: '2009-06-09' }
  ];

  months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  giveMeDateMonth(date) {
    let t = date.split('-');
    return { d: t[2], m: this.months[parseInt(t[1])], y: t[0] };
  }

  add() {
    this.list = document.getElementById('list');
    this.newLI = document.createElement('li');
    this.newLI.innerHTML = 'A new item';
    this.list.appendChild(this.newLI);
    setTimeout(function () {
      this.newLI.className = this.newLI.className + " show";
    }, 10);
  }
}
