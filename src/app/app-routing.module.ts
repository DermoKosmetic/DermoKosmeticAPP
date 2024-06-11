import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'gestion-cuenta', loadChildren: () => import('./gestion-cuenta/gestion-cuenta.module').then(m => m.GestionCuentaModule) }, { path: 'gestion-cuenta/register', loadChildren: () => import('./gestion-cuenta/register/register.module').then(m => m.RegisterModule) }, { path: 'gestion-cuenta/login', loadChildren: () => import('./gestion-cuenta/login/login.module').then(m => m.LoginModule) }, { path: 'gestion-cuenta/forget_password', loadChildren: () => import('./gestion-cuenta/forget-password/forget-password.module').then(m => m.ForgetPasswordModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
