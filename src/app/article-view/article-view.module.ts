import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleViewRoutingModule } from './article-view-routing.module';
import { ArticleViewComponent } from './article-view.component';
import { WriterCardComponent } from './writer-card/writer-card.component'
import {MaterialModule} from "../material/material.module";;


@NgModule({
  declarations: [
    ArticleViewComponent,
    WriterCardComponent
  ],
  imports: [
    CommonModule,
    ArticleViewRoutingModule,
    MaterialModule
  ]
})
export class ArticleViewModule { }
