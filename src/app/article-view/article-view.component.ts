import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ArticuloModel} from "../models/articulo.model";
import {EMPTY, Observable} from "rxjs";
import {WriterModel} from "../models/writer.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.css'
})
export class ArticleViewComponent {
  id: number = 0;
  articulo$ : Observable<ArticuloModel> = EMPTY
  writerIds : number[] = [];
  writers$ : Observable<WriterModel[]> = EMPTY;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.id = this.route.snapshot.params['id'];
    this.articulo$ = this.http.get<ArticuloModel>(`https://dk.singoe.tech/api/v1/articles/id/${this.id}`).pipe(map((article) => {
      this.writerIds = article.writerIds;
      this.getWriters()
      article.content = article.content.replace(/\\n/g, '<br><br>');
      console.log(article.content);
      return article;
    }))
  }

  getWriters(){
    this.writers$ = this.http.post<WriterModel[]>(`https://dk.singoe.tech/api/v1/writers/id`, this.writerIds);
  }





}
