import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionViewComponent } from './question-view.component';

const routes: Routes = [
  { path: '', component: QuestionViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionViewRoutingModule { }
