import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './core/components/home/home.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { MaterialModule } from './modules/material/material.module';


const customModules = [MaterialModule];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...customModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
