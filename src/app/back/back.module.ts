import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedeModule } from '../shared/shared.module';
import { BackComponent } from './back.component';
import { BackRoutingModule } from './backRouter.module';
import { MenuComponent } from './menu/menu.component';
import { ContainComponent } from './contain/contain.component';

@NgModule({
    declarations: [
        BackComponent,
        MenuComponent,
        ContainComponent,
    ],
    imports: [
        CommonModule,
        CoreModule,
        SharedeModule,
        BackRoutingModule
     ],
    exports: [
        BackComponent,
        MenuComponent,
        ContainComponent,
    ],
    providers: [],
})
export class BackModule {
}
