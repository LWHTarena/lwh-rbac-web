import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BackComponent } from './back.component';

const routes: Routes = [
    {path: 'back', component: BackComponent},
    // {path: 'register', component: RegisterComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BackRoutingModule {}
