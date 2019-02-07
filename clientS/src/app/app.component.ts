import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog, private bottomSheet: MatBottomSheet) { }

  panelOpenState = false;

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }

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

  fabButtons = [
    { icon: 'timeline' },
    { icon: 'view_headline' },
    { icon: 'room' },
    { icon: 'lightbulb_outline' },
    { icon: 'chat', badgeCount: 41 }
  ];

  buttons = [];
  fabTogglerState = 'inactive';

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }
}
