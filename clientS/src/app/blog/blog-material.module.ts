import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatButtonModule, MatExpansionModule, MatDialogModule, MatListModule, MatSlideToggleModule, MatRadioModule, MatCheckboxModule, MatBottomSheetModule, MatTooltipModule, MatProgressBarModule } from '@angular/material';

const modules = [MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatButtonModule, MatExpansionModule, MatDialogModule, MatListModule, MatSlideToggleModule, MatRadioModule, MatCheckboxModule, MatBottomSheetModule, MatTooltipModule, MatProgressBarModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class BlogMaterialModule { }
