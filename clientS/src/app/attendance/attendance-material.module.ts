import { NgModule } from '@angular/core';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatListModule, MatTooltipModule, MatBadgeModule, MatRadioModule, MatCheckboxModule, MatSlideToggleModule, MatCardModule, MatButtonModule } from '@angular/material';

const modules = [MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatListModule, MatTooltipModule, MatBadgeModule, MatRadioModule, MatCheckboxModule, MatSlideToggleModule, MatCardModule, MatButtonModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class AttendanceMaterialModule { }
