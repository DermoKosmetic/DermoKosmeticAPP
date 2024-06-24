import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from "@angular/common/http";

import { CatalogoArticulosRoutingModule } from './catalogo-articulos-routing.module';
import { CatalogoArticulosComponent } from './catalogo-articulos.component';
import { TarjetaArticuloComponent } from '../tarjeta-articulo/tarjeta-articulo.component';
import { SearchChipComponent} from "../search-chip/search-chip.component";


@NgModule({
  declarations: [
    CatalogoArticulosComponent
  ],
  imports: [
    CommonModule,
    CatalogoArticulosRoutingModule,
    TarjetaArticuloComponent,
    SearchChipComponent
  ],
  providers: [
    provideHttpClient()
  ]
})
export class CatalogoArticulosModule { }
