import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

  mostrarcontenido1: boolean = true;
  mostrarcontenido2: boolean = false;

  continuar(){
    this.mostrarcontenido1 = false;
    this.mostrarcontenido2 = true;
  }

  

}
