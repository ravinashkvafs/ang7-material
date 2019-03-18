import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventAnalsisComponent } from './event-analsis/event-analsis.component';
import { EventsComponent } from './events.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: EventsComponent },
  { path: 'event-analysis', component: EventAnalsisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
