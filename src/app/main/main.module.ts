import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing';
import { MainComponent } from './main.component';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        // CommonModule,
        // SharedeModule
        MainRoutingModule
     ],
    exports: [
        MainComponent
    ],
    providers: [],
})
export class MainModule {
}
