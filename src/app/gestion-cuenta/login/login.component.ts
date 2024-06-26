import { LoginRequest } from './../../models/login-request.model';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  username: string = '';

  constructor(private authService: AuthService,private dialogRef: MatDialog) {}


  openDialogForget() {
    this.dialogRef.open(ForgetPasswordComponent, {
      panelClass: 'custom-dialog-container',
      width: '720px',
      height: '703px',
    });
  }


  login() {
    const LoginRequest: LoginRequest = { email: this.email, password: this.password, username:this.username };
    this.authService.validateUser(LoginRequest).subscribe(
      isValid => {
        if (isValid) {
          console.log('Inicio de sesión exitoso');
        } else {
          console.error('Error durante el inicio de sesión');
        }
      },
      error => {
        console.error('Error durante el inicio de sesión', error);
      }
    );
  }



}
