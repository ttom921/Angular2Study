import { TodoAppModule } from './todo-app/todo-app.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//
import { BsButtonDirective } from './bs-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BsButtonDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TodoAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
