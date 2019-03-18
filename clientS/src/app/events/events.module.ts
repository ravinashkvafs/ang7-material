import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventAnalsisComponent } from './event-analsis/event-analsis.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [EventAnalsisComponent, EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FlexLayoutModule
  ]
})
export class EventsModule { }
