import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password.component';
import { InsertCodeComponent } from './insert-code/insert-code.component';
import { InsertPasswordComponent } from './insert-password/insert-password.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: '', component: ForgetPasswordComponent },
  { path: 'code', component: InsertCodeComponent },
  { path: 'new-password', component: InsertPasswordComponent},
  { path: 'message', component: MessageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPasswordRoutingModule { }
