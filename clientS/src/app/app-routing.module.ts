import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './authentication/authentication.module#AuthenticationModule' },
  { path: 'rest', loadChildren: './rest/rest.module#RestModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: 'events', loadChildren: './events/events.module#EventsModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
