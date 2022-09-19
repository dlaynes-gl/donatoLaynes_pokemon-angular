import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

import { UiModule } from "@pokemon-angular/ui"

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot({}, {}), RouterModule.forRoot([]), UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
