import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BackRoutingModule } from './back/backRouter.module';
import { FrontModule } from './front/front.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { ElModule } from 'element-angular';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    /** 将 element-angular 引入根模块后，可以在任意组件中使用 **/
    ElModule.forRoot(),
    CoreModule,
    LoginModule,
    BackRoutingModule,
    FrontModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
