import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { RevenueDialogComponent } from '../shared/revenue-dialog/revenue-dialog.component';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  ngOnInit() {

    this.spinner.show();

    setTimeout(() => {

      this.spinner.hide();

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

    }, 1000);

  }

  tabs: Array<object> = [
    { icon: 'pie_chart', title: 'Total Remaining', count: 312, dynamic: 0 },
    { icon: 'monetization_on', title: 'Total Spent', count: 3426, dynamic: 0 },
    { icon: 'cloud', title: 'Total Expenditure', count: 9867, dynamic: 0 }
  ];
  tab_colors: Array<string> = ['tab1', 'tab2', 'tab1'];

  userList: any = [
    { pic: '', name: 'Avinash Sharma', remaining: 53, spent: 412, gender: 'male' },
    { pic: '', name: 'Amit Dhiman', remaining: 12, spent: 412, gender: 'male' },
    { pic: '', name: 'Rohit Sharma', remaining: 0, spent: 412, gender: 'male' },
    { pic: '', name: 'Ayush Pratap', remaining: 64, spent: 412, gender: 'male' },
    { pic: '', name: 'Lavanya Reddy', remaining: 12, spent: 412, gender: 'female' },
    { pic: '', name: 'Aftab Khan', remaining: 84, spent: 412, gender: 'male' },
    { pic: '', name: 'Mayank Jain', remaining: 124, spent: 412, gender: 'male' }
  ];

  dynamicCalculateCount(num) {
    // console.log(num)
    return num;
  }

  sort_on: string = 'name';
  reverse: boolean = false;

  sortMe(field) {
    this.reverse = this.sort_on == field ? !this.reverse : false;
    this.sort_on = field;
  }

  isActiveSort(field) {
    return this.sort_on == field;
  }

  //Dialog
  addExpenses(user) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '25vw';
    dialogConfig.data = user;

    const dialogRef = this.dialog.open(RevenueDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });

  }
}
