import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);  

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  loginForm = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl,
  });

  matcher = new MyErrorStateMatcher();

  // Agregar el método onSubmit
  onSubmit() {
    if (this.loginForm.valid) {
      // Aquí puedes agregar la lógica para manejar el inicio de sesión
      console.log('Formulario válido, iniciar sesión:', this.loginForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
