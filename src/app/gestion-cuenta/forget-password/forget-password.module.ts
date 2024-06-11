import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { ForgetPasswordComponent } from './forget-password.component';
import { HomeComponent } from './home/home.component';
import { InsertEmailComponent } from './insert-email/insert-email.component';
import { InsertCodeComponent } from './insert-code/insert-code.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    ForgetPasswordComponent,
    HomeComponent,
    InsertEmailComponent,
    InsertCodeComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ForgetPasswordRoutingModule
  ]
})
export class ForgetPasswordModule { }
