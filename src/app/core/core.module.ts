import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SharedeModule } from '../shared/shared.module';
@NgModule({
    declarations: [
        NavComponent
    ],
    imports: [
        CommonModule,
        SharedeModule,
     ],
    exports: [
        NavComponent
    ],
    providers: [],
})
export class CoreModule {}
