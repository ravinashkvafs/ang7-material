import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './authentication/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './authentication/authentication.module#AuthenticationModule', canLoad: [AuthGuardService] },
  { path: 'rest', loadChildren: './rest/rest.module#RestModule', canLoad: [AuthGuardService] },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule', canLoad: [AuthGuardService] },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuardService] },
  { path: 'users', loadChildren: './users/users.module#UsersModule', canLoad: [AuthGuardService] },
  { path: 'revenue', loadChildren: './revenue/revenue.module#RevenueModule', canLoad: [AuthGuardService] },
  { path: 'events', loadChildren: './events/events.module#EventsModule', canLoad: [AuthGuardService] },
  { path: 'schedules', loadChildren: './schedules/schedules.module#SchedulesModule', canLoad: [AuthGuardService] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
