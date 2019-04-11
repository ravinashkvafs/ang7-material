import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AttendanceMaterialModule } from './attendance-material.module';

@NgModule({
  declarations: [AttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    AttendanceMaterialModule,
    FlexLayoutModule
  ]
})
export class AttendanceModule { }
