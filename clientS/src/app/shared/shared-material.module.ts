import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatButtonModule, MatExpansionModule, MatDialogModule, MatListModule, MatSlideToggleModule, MatRadioModule, MatCheckboxModule, MatBottomSheetModule, MatTooltipModule, MatInputModule } from '@angular/material';

const modules = [MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatButtonModule, MatExpansionModule, MatDialogModule, MatListModule, MatSlideToggleModule, MatRadioModule, MatCheckboxModule, MatBottomSheetModule, MatTooltipModule, MatInputModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class SharedMaterialModule { }
