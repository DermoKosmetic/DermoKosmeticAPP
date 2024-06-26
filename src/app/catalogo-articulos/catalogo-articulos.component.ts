import {Component, HostListener} from '@angular/core';
import { PaginableArticuloModel } from "../models/paginable-articulo.model";

import { HttpClient } from '@angular/common/http';
import {MiniArticuloModel} from "../models/mini-articulo.model";
import {EMPTY, Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'app-catalogo-articulos',
  templateUrl: './catalogo-articulos.component.html',
  styleUrl: './catalogo-articulos.component.css'
})
export class CatalogoArticulosComponent{

  articulos$: Observable<MiniArticuloModel[]> = EMPTY;

  maxPages: number = 1;

  pageSize: number = 6;
  pageNum: number = 0;
  orderBy: string = 'recent';
  types: string[] = [];
  allTypes: string[] = [];
  horizontal = false;

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<string[]>('https://dk.singoe.tech/api/v1/articles/types').subscribe(data => {
      console.log(data);
      this.allTypes = data;
    });
    this.fetchArticulos();
    this.horizontal = window.innerWidth < 1400;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event : any) {
    this.horizontal = event.target.innerWidth < 1400;
  }

  fetchArticulos(){
    const body = {
      pageSize: this.pageSize,
      pageNum: this.pageNum,
      orderBy: this.orderBy,
      categories: this.types
    }
    this.articulos$ = this.http.post<PaginableArticuloModel>('https://dk.singoe.tech/api/v1/articles/filter', body)
      .pipe(map(data => {
        this.maxPages = data.totalPages;
        return data.content
      }))
  }

  changePage(n: number){
    if(this.pageNum + n < 0 || this.pageNum + n >= this.maxPages) return;
    this.pageNum += n;
    this.fetchArticulos();
  }

  changeOrder(order: string){
    if(this.orderBy === order) return;
    this.orderBy = order;
    this.fetchArticulos();
  }

  handleChange(fruits: string[]){
    this.types = fruits;
    this.fetchArticulos();
  }

  navigate(articulo: MiniArticuloModel){
    console.log(articulo);
    this.router.navigate(['/articulos/', articulo.id]);
  }

  protected readonly innerWidth = innerWidth;
  protected readonly window = window;
}
