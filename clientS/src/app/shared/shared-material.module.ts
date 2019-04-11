import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatButtonModule, MatExpansionModule, MatDialogModule, MatListModule, MatSlideToggleModule, MatRadioModule, MatCheckboxModule, MatBottomSheetModule, MatTooltipModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

const modules = [MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatButtonModule, MatExpansionModule, MatDialogModule, MatListModule, MatSlideToggleModule, MatRadioModule, MatCheckboxModule, MatBottomSheetModule, MatTooltipModule, MatInputModule, MatDatepickerModule, MatNativeDateModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class SharedMaterialModule { }
