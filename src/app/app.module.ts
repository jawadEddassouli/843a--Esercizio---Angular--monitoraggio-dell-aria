import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherWidgetMainComponent } from './weather-widget-main/weather-widget-main.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent
  ],
  imports: [
    BrowserModule,
     // import HttpClientModule after BrowserModule.
     HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }