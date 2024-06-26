import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creacion-pregunta',
  templateUrl: './creacion-pregunta.component.html',
  styleUrl: './creacion-pregunta.component.css'
})
export class CreacionPreguntaComponent {
  title: string = '';
  content: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  createQuestion() {
    const newQuestion = {
      title: this.title,
      content: this.content,
      userId: 1, 
    };

    this.http.post('https://dermok.netlify.app/questions', newQuestion)
      .subscribe(response => {
        console.log('Pregunta creada:', response);
        this.router.navigate(['/catalogo-preguntas']);
      }, error => {
        console.error('Error al crear la pregunta:', error);
      });
  }
}
