import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './main/main.module#MainModule'},
  {path: 'login', redirectTo: '/login', pathMatch: 'full'},
  {path: 'back', redirectTo: '/back', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
