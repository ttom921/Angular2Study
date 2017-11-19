import { Component } from '@angular/core';
import { TodoItem } from './shared/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todoItems:TodoItem[]=[{
    id:1,
    value:'To do Item No.1',
    done:false
  },{
    id:2,
    value:'To do Item No.2',
    done:false
  },{
    id:3,
    value:'To do Item No.3',
    done:false
  }];
  addTodo(text){
    this.todoItems.push({
      id:(new Date()).getTime(),
      value:text,
      done:false
    });
  }
  deltodoItem(item:TodoItem){
    console.log('del item='+item.value);
    this.todoItems= this.todoItems.filter( a=> a.id !== item.id);
  }
}
