import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  constructor(private dialogRef: MatDialog, private router: Router) { }

  close():void{
    this.dialogRef.closeAll();
    this.router.navigate(['/login']);
  }

}
