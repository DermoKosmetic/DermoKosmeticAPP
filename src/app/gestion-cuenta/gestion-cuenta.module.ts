import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GestionCuentaRoutingModule } from './gestion-cuenta-routing.module';
import { GestionCuentaComponent } from './gestion-cuenta.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CodeVerificationComponent } from './forgot-password/code-verification/code-verification.component';
import { ResetPasswordComponent } from './forgot-password/reset-password/reset-password.component';


@NgModule({
  declarations: [
    GestionCuentaComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    CodeVerificationComponent,
    ResetPasswordComponent
    
  ],
  imports: [
    CommonModule,
    GestionCuentaRoutingModule, 
    ReactiveFormsModule,
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatIconModule
  ]
})
export class GestionCuentaModule { }
