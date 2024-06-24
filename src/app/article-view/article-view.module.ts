import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleViewRoutingModule } from './article-view-routing.module';
import { ArticleViewComponent } from './article-view.component';


@NgModule({
  declarations: [
    ArticleViewComponent
  ],
  imports: [
    CommonModule,
    ArticleViewRoutingModule
  ]
})
export class ArticleViewModule { }
