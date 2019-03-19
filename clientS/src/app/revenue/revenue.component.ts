import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.tabs.forEach(item => {
      let steps: any = parseInt((item['count'] / 50).toFixed(0));

      let closeI = setInterval(() => {

        if (item['dynamic'] < item['count'])
          item['dynamic'] += steps;
        else {
          item['dynamic'] = item['count'];
          clearInterval(closeI);
        }

      }, 50);
    });

  }

  tabs: Array<object> = [
    { icon: 'pie_chart', title: 'Total Remaining', count: 312, dynamic: 0 },
    { icon: 'monetization_on', title: 'Total Spent', count: 3426, dynamic: 0 },
    { icon: 'cloud', title: 'Total Expenditure', count: 9867, dynamic: 0 }
  ];
  tab_colors: Array<string> = ['tab1', 'tab2', 'tab1'];

  userList: any = [
    { pic: '', name: 'Avinash Sharma', remaining: 0, spent: 412, gender: 'male' },
    { pic: '', name: 'Amit Dhiman', remaining: 0, spent: 412, gender: 'male' },
    { pic: '', name: 'Rohit Sharma', remaining: 0, spent: 412, gender: 'male' },
    { pic: '', name: 'Ayush Pratap', remaining: 0, spent: 412, gender: 'male' },
    { pic: '', name: 'Lavanya Reddy', remaining: 0, spent: 412, gender: 'female' },
    { pic: '', name: 'Aftab Khan', remaining: 0, spent: 412, gender: 'male' },
    { pic: '', name: 'Mayank Jain', remaining: 0, spent: 412, gender: 'male' }
  ];

  dynamicCalculateCount(num) {
    console.log(num)
    return num;
  }
}
