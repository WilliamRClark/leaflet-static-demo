import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'map', component: MapComponent},
  {path: '**', component: MapComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
