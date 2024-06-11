import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionCuentaComponent } from './gestion-cuenta.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  { path: '', component: GestionCuentaComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget_password', component: ForgetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCuentaRoutingModule { }
