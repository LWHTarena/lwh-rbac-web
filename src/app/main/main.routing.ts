import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'path2', component: Name2Component },
    // { path: 'path3', component: Name3Component },
    // { path: 'path4', component: Name4Component },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}
