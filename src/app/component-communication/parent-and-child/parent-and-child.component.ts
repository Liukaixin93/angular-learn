import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent-and-child',
  templateUrl: './parent-and-child.component.html',
  styleUrls: ['./parent-and-child.component.scss']
})
export class ParentAndChildComponent implements OnInit {

  @ViewChild(ChildComponent) private child: ChildComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.child.childFn();
  }

  public doSomething():void {
    alert("收到子组件的自定义事件");
  }

}
