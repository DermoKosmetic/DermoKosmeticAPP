import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionViewRoutingModule } from './question-view-routing.module';
import { QuestionViewComponent } from './question-view.component';
import { AnswerComponent } from './answer/answer.component';


@NgModule({
  declarations: [
    QuestionViewComponent,
    AnswerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuestionViewRoutingModule
  ]
})
export class QuestionViewModule { }
