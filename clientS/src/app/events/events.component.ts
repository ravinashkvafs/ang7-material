import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  events: any = [
    { name: 'Avinash Sharma', statement: '2 Years Anniversary', date_type: 'normal', date: '2017-03-17' },
    { name: 'Rohit Sharma', statement: 'Birth Anniversary', date_type: 'normal', date: '1995-11-27' },
    { name: 'Amit Dhiman', statement: '10 Years Anniversary', date_type: 'normal', date: '2009-06-09' }
  ];
}
