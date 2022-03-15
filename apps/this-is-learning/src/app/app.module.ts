import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NavbarModule } from '@this-is-learning/navbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ScullyLibModule,NavbarModule],
  declarations: [
    AppComponent, HomeComponent
  ],
})
export class AppModule { }
