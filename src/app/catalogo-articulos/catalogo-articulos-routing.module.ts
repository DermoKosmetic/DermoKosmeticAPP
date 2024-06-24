import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoArticulosComponent } from './catalogo-articulos.component';

const routes: Routes = [
  { path: '', component: CatalogoArticulosComponent },
  { path: ':id', loadChildren: () => import('../article-view/article-view.module').then(m => m.ArticleViewModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoArticulosRoutingModule { }
