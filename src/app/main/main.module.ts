import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedeModule } from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        CoreModule,
        SharedeModule
     ],
    exports: [],
    providers: [],
})
export class MainModule {
}
