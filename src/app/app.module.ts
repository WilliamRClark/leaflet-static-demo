import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    LeafletModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
