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
    { icon: 'pie_chart', title: 'Total Remaining' },
    { icon: 'monetization_on', title: 'Total Spent' },
    { icon: 'cloud', title: 'Total Expenditure' }
  ];
  tab_colors: Array<string> = ['tab1', 'tab2', 'tab1'];
}
