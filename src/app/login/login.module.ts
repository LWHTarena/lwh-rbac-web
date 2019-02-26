import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoreModule } from '../core/core.module';
import { LoginRoutingModule } from './login-router.module';
import { SharedeModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        SharedeModule,
        CoreModule,
        LoginRoutingModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [],
})
export class LoginModule {
}
