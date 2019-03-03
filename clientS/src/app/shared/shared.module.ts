import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';
import { SharedMaterialModule } from './shared-material.module';

@NgModule({
  declarations: [
    BottomSheetComponent,
    DialogComponent
  ],
  entryComponents: [
    BottomSheetComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule
  ]
})
export class SharedModule { }
