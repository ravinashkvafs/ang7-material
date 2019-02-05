import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatButtonModule } from '@angular/material';

const modules = [MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatButtonModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class AppMaterialModule { }
