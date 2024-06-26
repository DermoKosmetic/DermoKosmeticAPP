import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoPreguntasRoutingModule } from './catalogo-preguntas-routing.module';
import { CatalogoPreguntasComponent } from './catalogo-preguntas.component';
import { provideHttpClient } from '@angular/common/http';
import { SearchChipComponent} from "../search-chip/search-chip.component";
import { CreacionPreguntaComponent } from './creacion-pregunta/creacion-pregunta.component';


@NgModule({
  declarations: [
    CatalogoPreguntasComponent,
    CreacionPreguntaComponent
  ],
  imports: [
    CommonModule,
    CatalogoPreguntasRoutingModule,
    SearchChipComponent

  ],
  providers:[provideHttpClient()]
})
export class CatalogoPreguntasModule { }
