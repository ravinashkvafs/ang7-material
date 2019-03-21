import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';
import { SharedMaterialModule } from './shared-material.module';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    BottomSheetComponent,
    DialogComponent,
    SearchPipe
  ],
  entryComponents: [
    BottomSheetComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    SearchPipe
  ]
})
export class SharedModule { }
