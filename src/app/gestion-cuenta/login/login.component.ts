import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  constructor(private dialogRef: MatDialog) {}

  openDialogForget() {
    this.dialogRef.open(ForgetPasswordComponent, {
      panelClass: 'custom-dialog-container',
      width: '720px', 
      height: '703px', 
    });
  }

  

}
