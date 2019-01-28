import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule } from '@angular/material';

const modules = [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class AppMaterialModule { }
