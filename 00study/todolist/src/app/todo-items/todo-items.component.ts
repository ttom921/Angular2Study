import { TodoItem } from '../shared/todo-item';
import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() items:TodoItem[];
  @Output() outdelTodoItem= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ckclick(item:TodoItem){
      item.done=(!item.done);
      //console.log(item.done);
  }
  deltodoitem(item:TodoItem){
    console.log(item.value);
    this.outdelTodoItem.emit(item);
  }
  getBlueClass(){
    return 'blue';
  }
}
