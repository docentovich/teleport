import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoTeleportModule } from 'do-teleport/do-teleport.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DoTeleportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
