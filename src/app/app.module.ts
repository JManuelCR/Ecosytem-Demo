import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardInsightsModule } from 'ngx-xchange-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardInsightsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
