import {Component, OnDestroy} from '@angular/core';
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
export class ArticleViewComponent implements OnDestroy{
  id: number = 0;
  articulo$ : Observable<ArticuloModel> = EMPTY
  writerIds : number[] = [];
  writers$ : Observable<WriterModel[]> = EMPTY;
  liked$ : Observable<boolean> = EMPTY;
  isLiked : boolean = false;
  loaded = false;
  likes: number = 0;
  original : boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {

    this.id = this.route.snapshot.params['id'];
    this.articulo$ = this.http.get<ArticuloModel>(`https://dk.singoe.tech/api/v1/articles/id/${this.id}`).pipe(map((article) => {
      this.writerIds = article.writerIds;
      this.getWriters();
      this.likes = article.likes;
      article.content = article.content.replace(/\\n/g, '<br><br>');
      return article;
    }));
    this.loadLike();
  }

  getWriters(){
    this.writers$ = this.http.post<WriterModel[]>(`https://dk.singoe.tech/api/v1/writers/id`, this.writerIds);
  }

  loadLike(){
    let userToken = sessionStorage.getItem('userToken');
    console.log(userToken);
    if(userToken) {
      this.liked$ = this.http.get<boolean>(`https://dk.singoe.tech/api/v1/articles/like?articleId=${this.id}&userId=${userToken}`).pipe(map((liked) => {
        this.loaded = true;
        this.isLiked = liked;
        this.original = liked;
        console.log(liked);
        return liked;
      }));
      this.liked$.subscribe();
    }
  }

  like(){
    if(this.isLiked){
      this.likes--;
    }else{
      this.likes++;
    }
    this.isLiked = !this.isLiked;
  }

  ngOnDestroy() {
    if(this.isLiked == this.original) return;
    let userToken = sessionStorage.getItem('userToken');
    if(this.isLiked){
      const body = {
        articleId: this.id,
        userId: userToken
      }
      this.http.post(`https://dk.singoe.tech/api/v1/articles/like`, body).subscribe();
    }else{
      this.http.delete<boolean>(`https://dk.singoe.tech/api/v1/articles/like?articleId=${this.id}&userId=${userToken}`).subscribe();
    }
  }
}
