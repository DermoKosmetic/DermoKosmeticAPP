import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule) },
  { path: 'gestion-cuenta', loadChildren: () => import('./gestion-cuenta/gestion-cuenta.module').then(m => m.GestionCuentaModule) },
  { path: 'register', loadChildren: () => import('./gestion-cuenta/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./gestion-cuenta/login/login.module').then(m => m.LoginModule) },
  { path: 'forget_password', loadChildren: () => import('./gestion-cuenta/login/forget-password/forget-password.module').then(m => m.ForgetPasswordModule) },
  { path: 'articulos', loadChildren: () => import('./catalogo-articulos/catalogo-articulos.module').then(m => m.CatalogoArticulosModule) },
  { path: 'article-view', loadChildren: () => import('./article-view/article-view.module').then(m => m.ArticleViewModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
