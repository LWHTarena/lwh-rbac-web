import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedeModule } from '../shared/shared.module';
import { BackComponent } from './back.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuCollapseComponent } from './menu/collapse/menu-collapse.component';
import { MenuItemComponent } from './menu/item/menu-item.component';
import { BackRoutingModule } from './backRouter.routing';

@NgModule({
    declarations: [
        BackComponent,
        MenuComponent,
        MenuCollapseComponent,
        MenuItemComponent,
        LayoutComponent,

    ],
    imports: [
        CommonModule,
        SharedeModule,
        BackRoutingModule
     ],
    exports: [
        BackComponent,
        MenuComponent,
        MenuCollapseComponent,
        MenuItemComponent,
        LayoutComponent,
    ],
    providers: [],
})
export class BackModule {
}
