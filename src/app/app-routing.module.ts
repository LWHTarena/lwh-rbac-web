import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'main/index', pathMatch: 'full'},
  {path: '', component: MainComponent,
    children: [
      {path: 'main' , loadChildren: './main/main.module#MainModule'},
      {path: 'back' , loadChildren: './back/back.module#BackModule'}
    ]
  },
  {path: 'login', redirectTo: '/login'},
  {path: 'register', redirectTo: '/register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
