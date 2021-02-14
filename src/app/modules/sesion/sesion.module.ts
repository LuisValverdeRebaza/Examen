import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesionRoutingModule } from './sesion-routing.module';
import { SesionPageComponent } from './pages/sesion-page/sesion-page.component';


@NgModule({
  declarations: [SesionPageComponent],
  imports: [
    CommonModule,
    SesionRoutingModule
  ]
})
export class SesionModule { }
