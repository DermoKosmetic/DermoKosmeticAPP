import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QuestionViewModel } from '../models/question.view.response';
import { AnswerResponseDTO, Page } from '../models/answer.model';
import { Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit {
  pregunta$: Observable<QuestionViewModel> = EMPTY;
  respuestas$: Observable<Page<AnswerResponseDTO>> = EMPTY;
  id: number = 0;
  nuevaRespuesta: string = '';

  private apiUrl = 'https://dermok.netlify.app/questions';
  private answersUrl = 'https://dermok.netlify.app/answers';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // Obtener el ID de la pregunta de los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.id = +id;
        // Obtener los detalles de la pregunta
        this.pregunta$ = this.http.get<QuestionViewModel>(`${this.apiUrl}/id/${this.id}`).pipe(
          map(question => question)
        );
        // Obtener las respuestas de la pregunta
        this.fetchRespuestas();
      }
    });
  }

  // Función para obtener las respuestas de la pregunta
  fetchRespuestas(): void {
    const listRequestDTO = {
      pageNum: 0,
      pageSize: 10
    };
    this.respuestas$ = this.http.post<Page<AnswerResponseDTO>>(`${this.answersUrl}/question/${this.id}`, listRequestDTO);
  }

  // Función para enviar una nueva respuesta
  enviarRespuesta(): void {
    const nuevaRespuesta = {
      content: this.nuevaRespuesta,
      parentCommentId: null,
      questionId: this.id,
      userId: 1 // Asumiendo que el usuario con ID 1 está respondiendo
    };

    this.http.post<AnswerResponseDTO>(this.answersUrl, nuevaRespuesta).subscribe(() => {
      // Actualizar las respuestas después de enviar una nueva
      this.fetchRespuestas();
      this.nuevaRespuesta = '';
    });
  }

  // Función para navegar a la página de responder
  responder(): void {
    this.router.navigate([`/responder/${this.id}`]);
  }
}
