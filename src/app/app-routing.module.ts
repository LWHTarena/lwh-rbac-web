import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', loadChildren: './main/main.module#MainModule'},
  {path: 'login', redirectTo: '/login'},
  {path: 'register', redirectTo: '/register'},
  {path: 'back', loadChildren: './back/back.module#BackModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
