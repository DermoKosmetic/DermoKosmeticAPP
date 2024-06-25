import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { provideHttpClient } from "@angular/common/http";

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import {TarjetaArticuloComponent} from "../tarjeta-articulo/tarjeta-articulo.component";


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    TarjetaArticuloComponent,
    NgOptimizedImage
  ],
  providers: [
    provideHttpClient()
  ]
})
export class MainPageModule { }
