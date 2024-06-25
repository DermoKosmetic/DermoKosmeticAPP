import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { MessageErrorComponent } from './message-error/message-error.component';


@NgModule({
  declarations: [
    RegisterComponent,
    HomeComponent,
    MessageComponent,
    MessageErrorComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
