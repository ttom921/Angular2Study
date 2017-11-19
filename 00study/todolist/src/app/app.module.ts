import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
//
import  {TodoListService} from './todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddFormComponent,
    TodoItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }