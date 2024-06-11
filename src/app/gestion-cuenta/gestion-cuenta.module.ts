import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCuentaRoutingModule } from './gestion-cuenta-routing.module';
import { GestionCuentaComponent } from './gestion-cuenta.component';


@NgModule({
  declarations: [
    GestionCuentaComponent
  ],
  imports: [
    CommonModule,
    GestionCuentaRoutingModule
  ]
})
export class GestionCuentaModule { }
