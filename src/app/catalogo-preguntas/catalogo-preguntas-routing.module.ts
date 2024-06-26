import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoPreguntasComponent } from './catalogo-preguntas.component';
import { CreacionPreguntaComponent } from './creacion-pregunta/creacion-pregunta.component';

const routes: Routes = [
  { path: '', component: CatalogoPreguntasComponent},
  { path: 'creacion', component: CreacionPreguntaComponent }, 
  { path: ':id', loadChildren: () => import('../question-view/question-view.module').then(m => m.QuestionViewModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoPreguntasRoutingModule { }
