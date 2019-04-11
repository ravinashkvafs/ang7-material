import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';
import { SharedMaterialModule } from './shared-material.module';
import { SearchPipe } from './pipes/search.pipe';
import { RevenueDialogComponent } from './revenue-dialog/revenue-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulerDialogComponent } from './scheduler-dialog/scheduler-dialog.component';

@NgModule({
  declarations: [
    BottomSheetComponent,
    DialogComponent,
    SearchPipe,
    RevenueDialogComponent,
    SchedulerDialogComponent
  ],
  entryComponents: [
    BottomSheetComponent,
    DialogComponent,
    RevenueDialogComponent,
    SchedulerDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    SearchPipe
  ]
})
export class SharedModule { }
