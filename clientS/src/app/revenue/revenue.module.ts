import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueMaterialModule } from './revenue-material.module';
import { RevenueComponent } from './revenue.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [RevenueComponent],
  imports: [
    CommonModule,
    RevenueRoutingModule,
    RevenueMaterialModule,
    FlexLayoutModule
  ]
})
export class RevenueModule { }
