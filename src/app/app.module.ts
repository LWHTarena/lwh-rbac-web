import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BackRoutingModule } from './back/backRouter.module';
import { FrontModule } from './front/front.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
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
