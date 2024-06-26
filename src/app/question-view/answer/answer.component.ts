import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnswerRequestDTO, AnswerResponseDTO } from '../../models/answer.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  @Input() questionId!: number;
  respuestas: AnswerResponseDTO[] = [];
  nuevaRespuesta: string = '';
  respuestaCreada: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerRespuestas();
  }

  obtenerRespuestas() {
    this.http.get<AnswerResponseDTO[]>(`https://dermok.netlify.app/answers/question/${this.questionId}`)
      .subscribe(
        respuestas => this.respuestas = respuestas,
        error => console.error('Error al obtener las respuestas:', error)
      );
  }

  enviarRespuesta() {
    if (this.nuevaRespuesta.trim() !== '') {
      const nuevaRespuesta: AnswerRequestDTO = {
        content: this.nuevaRespuesta,
        parentCommentId: null,
        questionId: this.questionId,
        userId: 1 
      };

      this.http.post<AnswerResponseDTO>('https://dermok.netlify.app/answers', nuevaRespuesta)
        .pipe(
          catchError(error => {
            console.error('Error al crear la respuesta:', error);
            return of(null);
          })
        )
        .subscribe(respuesta => {
          if (respuesta) {
            this.respuestas.push(respuesta);
            this.nuevaRespuesta = '';
            this.respuestaCreada = true;
            setTimeout(() => this.respuestaCreada = false, 3000);
          }
        });
    }
  }
}
