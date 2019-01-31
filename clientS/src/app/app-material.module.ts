import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatCardModule, MatSidenavModule, MatListModule } from '@angular/material';

const modules = [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule, MatListModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class AppMaterialModule { }
