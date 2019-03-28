import { Component, OnInit, Inject, OnChanges, Input, DoCheck } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material';
import { RevenueComponent } from 'src/app/revenue/revenue.component';

@Component({
  selector: 'app-revenue-dialog',
  templateUrl: './revenue-dialog.component.html',
  styleUrls: ['./revenue-dialog.component.scss']
})
export class RevenueDialogComponent implements OnInit {
  amount: Array<number> = new Array(4).fill(0);
  method: string = 'add';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<RevenueComponent>) { }

  ngOnInit() { }


  changeBox() {
    for (let i = 0; i < 4; i++)
      if (!this.amount[i] || !(this.amount[i] >= 0 && this.amount[i] <= 9))
        this.amount[i] = 0;
  }

  giveResult() {
    let result = parseInt(this.amount.join(''));
    this.dialogRef.close(this.method == 'add' ? result : -1 * result);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.myNum && !changes.myNum.isFirstChange()) {
  //     // exteranl API call or more preprocessing...
  //   }

  //   for (let propName in changes) {
  //     let change = changes[propName];
  //     console.dir(change);
  //     if (change.isFirstChange()) {
  //       console.log(`first change: ${propName}`);
  //     } else {
  //       console.log(`prev: ${change.previousValue}, cur: ${change.currentValue}`);
  //     }
  //   }
  // }
}
