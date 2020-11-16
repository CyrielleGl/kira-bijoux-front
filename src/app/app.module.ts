import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './public/core/core.module';
import { HomeComponent } from './public/home/home.component';
import { NouveautesComponent } from './public/nouveautes/nouveautes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NouveautesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
