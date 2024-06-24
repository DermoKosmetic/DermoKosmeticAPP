import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-verification',
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.css']
})
export class CodeVerificationComponent {
  codeVerificationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.codeVerificationForm = this.fb.group({
      verificationCode: ['', Validators.required]
    });
  }

  get verificationCode() {
    return this.codeVerificationForm.get('verificationCode');
  }

  onSubmit() {
    if (this.codeVerificationForm.valid) {
      // Aquí puedes agregar la lógica para verificar el código
      console.log('Código de verificación:', this.verificationCode?.value);
      this.router.navigate(['/gestion-cuenta/forgot-password/reset-password']);
    }
  }
}