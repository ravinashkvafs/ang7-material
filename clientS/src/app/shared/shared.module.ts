import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';
import { SharedMaterialModule } from './shared-material.module';
import { SearchPipe } from './pipes/search.pipe';
import { RevenueDialogComponent } from './revenue-dialog/revenue-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BottomSheetComponent,
    DialogComponent,
    SearchPipe,
    RevenueDialogComponent
  ],
  entryComponents: [
    BottomSheetComponent,
    DialogComponent,
    RevenueDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    SearchPipe
  ]
})
export class SharedModule { }
