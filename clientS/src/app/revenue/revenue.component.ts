import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabs: Array<object> = [
    { icon: 'pie_chart', title: 'Total Remaining', count: 312 },
    { icon: 'monetization_on', title: 'Total Spent', count: 3426 },
    { icon: 'cloud', title: 'Total Expenditure', count: 9867 }
  ];
  tab_colors: Array<string> = ['tab1', 'tab2', 'tab1'];
}
