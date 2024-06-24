import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const emailValue = this.email?.value;
      if (emailValue) {
        // Aquí puedes manejar la lógica de recuperación de contraseña
        console.log('Correo electrónico para recuperar la contraseña:', emailValue);
        // Navegar a la página de verificación de código
        this.router.navigate(['/gestion-cuenta/forgot-password/code-verification']);
      }
    } else {
      console.log('Formulario inválido');
    }
  }
}
