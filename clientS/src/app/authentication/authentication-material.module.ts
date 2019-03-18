import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';

const modules = [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class AuthMaterialModule { }