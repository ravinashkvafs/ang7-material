import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';

const modules = [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatIconModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class AppMaterialModule { }
