import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from './message/message.component';
import { MessageErrorComponent } from './message-error/message-error.component';
import { SignupService } from '../services/signup.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { SignUpRequest } from '../../models/signup-request.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formCabecera = this.formBuilder.group({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    profilePic: new FormControl(''),
  });

  constructor(private dialogRef: MatDialog, private signUpService: SignupService,
    private formBuilder: FormBuilder
  ) {}

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

  logIn(){
    sessionStorage.setItem('userToken', '1');
    console.log(sessionStorage.getItem('userToken'));
  }

  onSave():void	{
    this.signUpService.createUser(this.formCabecera.getRawValue() as SignUpRequest).subscribe(
      (response) => {
        this.openDialogMessage();
      },
      (error) => {
        this.openDialogMessage_Error();
      }
    );
  }

}
