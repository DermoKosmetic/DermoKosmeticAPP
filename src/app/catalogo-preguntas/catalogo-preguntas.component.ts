import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FilterQuestionModel, PaginableQuestionModel, QuestionModel } from '../models/question.model';

@Component({
  selector: 'app-catalogo-preguntas',
  templateUrl: './catalogo-preguntas.component.html',
  styleUrls: ['./catalogo-preguntas.component.css']
})
export class CatalogoPreguntasComponent implements OnInit {
  preguntas$: Observable<QuestionModel[]> = new Observable();
  maxPages: number = 1;
  pageSize: number = 5;
  pageNum: number = 0;
  orderBy: string = 'recent';
  types: string[] = [];
  allTypes: string[] = [];

  private apiUrl = 'https://dermok.netlify.app/questions';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadTypes();
    this.fetchPreguntas();
  }

  private loadTypes(): void {
    this.http.get<string[]>(`${this.apiUrl}/types`).subscribe(data => {
      this.allTypes = data;
    }, error => {
      console.error('Error fetching types:', error);
    });
  }

  private fetchPreguntas(): void {
    const filter: FilterQuestionModel = {
      categories: this.types,
      orderBy: this.orderBy,
      pageNum: this.pageNum,
      pageSize: this.pageSize
    };

    this.preguntas$ = this.http.post<PaginableQuestionModel>(`${this.apiUrl}/filter`, filter).pipe(
      map((data: PaginableQuestionModel) => {
        this.maxPages = data.totalPages;
        return data.content;
      })
    );
  }

  public changePage(n: number): void {
    if (this.pageNum + n < 0 || this.pageNum + n >= this.maxPages) return;
    this.pageNum += n;
    this.fetchPreguntas();
  }

  public changeOrder(order: string): void {
    if (this.orderBy === order) return;
    this.orderBy = order;
    this.fetchPreguntas();
  }

  public handleChange(types: string[]): void {
    this.types = types;
    this.fetchPreguntas();
  }

  public navigate(pregunta: QuestionModel): void {
    this.router.navigate(['/preguntas', pregunta.id]);
  }
}
