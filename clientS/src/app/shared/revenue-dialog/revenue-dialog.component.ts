import { Component, OnInit, Inject, OnChanges, Input, DoCheck } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-revenue-dialog',
  templateUrl: './revenue-dialog.component.html',
  styleUrls: ['./revenue-dialog.component.scss']
})
export class RevenueDialogComponent implements OnInit, DoCheck {

  @Input() amount: Array<string> = new Array(4).fill('0');
  method: string = 'add';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  ngDoCheck() {
    this.amount.forEach((item: any, indx: number) => {
      if (!Number.isInteger(parseInt(item))) {
        this.amount[indx] = '0';
        console.log('in', item, this.amount[indx])
      }
    })

    // if(this.user.firstName === 'Michael') {
    //   console.log('single property checked');
    // }

    // let changes = this.differ.diff(this.user);

    // if (changes) {
    // 	changes.forEachChangedItem(item => console.log('ngDoCheck, changed items ', item.currentValue));
    // 	changes.forEachAddedItem(item => console.log('ngDoCheck, added items ' + item.currentValue));
    // 	changes.forEachRemovedItem(item => console.log('ngDoCheck, removed items ' + item.currentValue));
    // } else {
    // 	console.log('no changes');
    // }
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
