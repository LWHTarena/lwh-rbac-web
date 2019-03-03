import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BackComponent } from './back.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {path: 'back', component: LayoutComponent,
       children: [
           {path: '', component: BackComponent},
       ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BackRoutingModule {}
