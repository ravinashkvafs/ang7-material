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
import { HttpConfigInterceptor } from './http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  exports: [
    SearchPipe
  ]
})
export class SharedModule { }
