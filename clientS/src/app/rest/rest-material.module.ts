import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatButtonModule, MatExpansionModule, MatDialogModule, MatListModule, MatSlideToggleModule, MatRadioModule, MatCheckboxModule, MatBottomSheetModule, MatTooltipModule } from '@angular/material';

const modules = [MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatButtonModule, MatExpansionModule, MatDialogModule, MatListModule, MatSlideToggleModule, MatRadioModule, MatCheckboxModule, MatBottomSheetModule, MatTooltipModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class RestMaterialModule { }
