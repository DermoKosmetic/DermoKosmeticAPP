import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DermoKosmetic_v1';

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/gestion-cuenta/login']);
  }
}
