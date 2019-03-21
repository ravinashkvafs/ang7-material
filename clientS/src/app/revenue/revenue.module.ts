import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueMaterialModule } from './revenue-material.module';
import { RevenueComponent } from './revenue.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '../shared/pipes/sort.pipe';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    RevenueComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    RevenueRoutingModule,
    RevenueMaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgxSpinnerModule,
    SharedModule
  ]
})
export class RevenueModule { }
