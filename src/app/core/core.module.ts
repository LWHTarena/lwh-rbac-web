import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedeModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
    declarations: [
        NavComponent,
    ],
    imports: [
        CommonModule,
        SharedeModule,
     ],
    exports: [
        NavComponent,
    ],
    providers: [],
})
export class CoreModule {}
