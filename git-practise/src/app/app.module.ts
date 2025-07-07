import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelIncComponent } from './travel-inc/travel-inc.component';
import { HealthIncComponent } from './health-inc/health-inc.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelIncComponent,
    HealthIncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
