import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './authentication/authentication.module#AuthenticationModule' },
  { path: 'rest', loadChildren: './rest/rest.module#RestModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
