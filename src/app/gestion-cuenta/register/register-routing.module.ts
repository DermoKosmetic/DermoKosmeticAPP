import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { MessageErrorComponent } from './message-error/message-error.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'succesfully', component: MessageComponent },
  { path: 'error', component: MessageErrorComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
