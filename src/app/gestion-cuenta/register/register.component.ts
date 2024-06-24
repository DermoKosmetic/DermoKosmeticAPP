import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    const isSubmitted = control && control.parent && control.parent.dirty;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

// Función para validar la coincidencia de contraseñas
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
  const password = control.get('password');
  const confirmPassword = control.get('passwordConfirm');
  if (!password || !confirmPassword) {
    return null;
  }
  return password.value && confirmPassword.value && password.value !== confirmPassword.value ? { 'passwordMismatch': true } : null;
};

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  passwordConfirmFormControl = new FormControl('', [
    Validators.required,
  ]);

  registerForm = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl,
    passwordConfirm: this.passwordConfirmFormControl,
  }, { validators: passwordMatchValidator });

  matcher = new MyErrorStateMatcher();
}
