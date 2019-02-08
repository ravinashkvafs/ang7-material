import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestRoutingModule } from './rest-routing.module';
import { OthersComponent } from './others/others.component';
import { RestMaterialModule } from './rest-material.module';

@NgModule({
  declarations: [OthersComponent],
  imports: [
    CommonModule,
    RestRoutingModule,
    RestMaterialModule
  ]
})
export class RestModule { }
