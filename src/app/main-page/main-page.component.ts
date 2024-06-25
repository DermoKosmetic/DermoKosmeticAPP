import { Component } from '@angular/core';
import {PaginableArticuloModel} from "../models/paginable-articulo.model";
import {map} from "rxjs/operators";
import {EMPTY, Observable} from "rxjs";
import {MiniArticuloModel} from "../models/mini-articulo.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {TitlesModel} from "../models/titles.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  articulos$: Observable<MiniArticuloModel[]> = EMPTY;
  categorias$: Observable<string[]> = EMPTY;
  titles$: Observable<TitlesModel[]> = EMPTY;

  constructor(private http: HttpClient, private router: Router) {
    const body1 = {
      pageSize: 3,
      pageNum: 0,
    }
    const body2 = {
      pageSize: 6,
      pageNum: 0,
      orderBy: 'likes',
    }
    this.articulos$ = this.http.post<PaginableArticuloModel>('https://dk.singoe.tech/api/v1/articles/filter', body1)
      .pipe(map(data => {
        return data.content
      }))
    this.categorias$ = this.http.get<string[]>('https://dk.singoe.tech/api/v1/articles/types')
    let index = 0
    this.titles$ = this.http.post<PaginableArticuloModel>('https://dk.singoe.tech/api/v1/articles/filter', body2)
      .pipe(map(data => {
        return data.content.map(articulo => {
          index++;
          return {
            id: articulo.id,
            title: articulo.title,
            index: index
          }
        })
      }))
  }

  navigate(articulo: number){
    this.router.navigate(['/articulos/', articulo]);
  }
}
