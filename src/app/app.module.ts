import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontModule } from './front/front.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { SharedeModule } from './shared/shared.module';
import { BackModule } from './back/back.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedeModule,
    CoreModule,
    LoginModule,
    FrontModule,
    BackModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
