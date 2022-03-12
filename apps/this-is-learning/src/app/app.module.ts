import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NavigationModule } from '@this-is-learning/navigation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ScullyLibModule,NavigationModule],
  declarations: [
    AppComponent, HomeComponent
  ],
})
export class AppModule { }
