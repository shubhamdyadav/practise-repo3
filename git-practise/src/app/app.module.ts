import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TravelIncComponent } from './travel-inc/travel-inc.component';
import { HealthIncComponent } from './health-inc/health-inc.component';
=======
import { MotorIncComponent } from './motor-inc/motor-inc.component';
>>>>>>> 888322a31ce76a8a9ff5e55997b865e0a0a9e680

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TravelIncComponent,
    HealthIncComponent
=======
    MotorIncComponent
>>>>>>> 888322a31ce76a8a9ff5e55997b865e0a0a9e680
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
