import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueMaterialModule } from './revenue-material.module';
import { RevenueComponent } from './revenue.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../shared/pipes/search.pipe';

@NgModule({
  declarations: [RevenueComponent, SearchPipe],
  imports: [
    CommonModule,
    RevenueRoutingModule,
    RevenueMaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class RevenueModule { }
