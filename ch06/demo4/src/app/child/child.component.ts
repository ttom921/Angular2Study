import { Component, OnInit, AfterContentInit, AfterContentChecked ,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , AfterContentInit, AfterContentChecked,OnDestroy  {
  ngOnDestroy(): void {
    console.log("child1 OnDestroy");
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log("子組件投影內容初始化完畢");
  }
  ngAfterContentChecked(): void {
    console.log("子組件投影內容變更檢測完畢");
  }
}
