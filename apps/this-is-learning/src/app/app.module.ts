import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { AppScam } from './app/app.scam';

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ScullyLibModule, AppScam],
})
export class AppModule {}
