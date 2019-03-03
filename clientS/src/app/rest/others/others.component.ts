import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog, MatDialogConfig, MatBottomSheet } from '@angular/material';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { BottomSheetComponent } from '../../shared/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent {

  constructor(public dialog: MatDialog, private bottomSheet: MatBottomSheet) {
    console.log('Loaded Others!');
  }

  panelOpenState = false;

  //Dialog
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.width = '25vw';
    dialogConfig.data = { message: 'Are you sure want to Sign-out?' };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if (result)
          alert('Sign-out Successfully!');
      });
  }

  //Bottom Sheet
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }

  //Menu
  menuList = [
    { icon: 'book', label: 'Menu 1', type: 'item', menuTrigger: false },
    { icon: 'description', label: 'Menu 2', type: 'item', menuTrigger: false },
    { icon: 'web', label: 'Menu 3', type: 'item', menuTrigger: false },
    {
      icon: 'assignment', label: 'Dropdown', type: 'dropdown', menuTrigger: true,
      subItems: [
        { icon: 'dialpad', label: 'Redial', type: 'item', menuTrigger: false },
        { icon: 'notifications_off', label: 'Disable alerts', type: 'item', menuTrigger: false }
      ]
    },
    {
      icon: 'assignment', label: 'Dropdown', type: 'dropdown', menuTrigger: true,
      subItems: [
        { icon: 'timeline', label: 'Timeline', type: 'item', menuTrigger: false },
        { icon: 'room', label: 'Room', type: 'item', menuTrigger: false }
      ]
    }
  ];

  //fab toggler
  fabButtons = [
    { icon: 'timeline', tooltip: 'Timeline' },
    { icon: 'view_headline', tooltip: 'Headline' },
    { icon: 'room', tooltip: 'Room' },
    { icon: 'lightbulb_outline', tooltip: 'Bulb' },
    { icon: 'chat', tooltip: 'Chat', badgeCount: 41 }
  ];

  buttons = [];
  // fabTogglerState = 'inactive';

  showItems() {
    // this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    // this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

}
