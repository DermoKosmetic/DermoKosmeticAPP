import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from './message/message.component';
import { MessageErrorComponent } from './message-error/message-error.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private dialogRef: MatDialog) {}  

  openDialogMessage() {
    this.dialogRef.open(MessageComponent, {
      panelClass: 'custom-dialog-container',
      width: '365px', 
      height: '236px', 
    });
  }

  openDialogMessage_Error() {
    this.dialogRef.open(MessageErrorComponent, {
      panelClass: 'custom-dialog-container',
      width: '365px', 
      height: '236px', 
    });
  }

}
