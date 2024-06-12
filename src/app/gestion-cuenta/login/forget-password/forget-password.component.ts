import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

  mostrarComponente1: boolean = true;
  mostrarComponente2: boolean = false;
  mostrarComponente3: boolean = false;
  mostrarComponente4: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  continuar() {
    if (this.mostrarComponente1) {
      this.mostrarComponente1 = false;
      this.mostrarComponente2 = true;
    } else if (this.mostrarComponente2) {
      this.mostrarComponente2 = false;
      this.mostrarComponente3 = true;
    } else if (this.mostrarComponente3) {
      this.mostrarComponente3 = false;
      this.mostrarComponente4 = true;
    } else {
      
    }
  }
  

}
