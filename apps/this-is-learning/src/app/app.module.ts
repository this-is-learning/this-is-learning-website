import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppScam } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppScam, AppRoutingModule, ScullyLibModule],
})
export class AppModule {}
