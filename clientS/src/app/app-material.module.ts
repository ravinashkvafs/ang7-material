import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatButtonModule, MatExpansionModule, MatDialogModule } from '@angular/material';

const modules = [MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatButtonModule, MatExpansionModule, MatDialogModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class AppMaterialModule { }
