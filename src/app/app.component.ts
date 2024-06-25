import { Component } from '@angular/core';
import { RegisterComponent } from './gestion-cuenta/register/register.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './gestion-cuenta/login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DermoKosmetic_v1';

  constructor(private dialogRef: MatDialog) {}

  openDialogRegister() {
    this.dialogRef.open(RegisterComponent, {
      panelClass: 'custom-dialog-container',
      width: '720px', 
      height: '703px', 
    });
  }

  openDialogLogin() {
    this.dialogRef.open(LoginComponent, {
      panelClass: 'custom-dialog-container',
      width: '720px', 
      height: '703px', 
    });
  }




}
