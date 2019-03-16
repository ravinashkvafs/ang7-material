import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';

const modules = [MatButtonModule, MatInputModule, MatIconModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class UsersMaterialModule { }
