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

  tab_colors = ['tab1', 'tab2', 'tab1'];
}
