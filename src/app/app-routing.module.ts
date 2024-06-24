import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'gestion-cuenta', loadChildren: () => import('./gestion-cuenta/gestion-cuenta.module').then(m => m.GestionCuentaModule) }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
