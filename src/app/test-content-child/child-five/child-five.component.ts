import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-five',
  templateUrl: './child-five.component.html',
  styleUrls: ['./child-five.component.scss']
})
export class ChildFiveComponent implements OnInit {

  @Output()
  public myEvent: EventEmitter<string> = new EventEmitter<string>();

  public title: string = "默认标题";
  public username: string = "test";
  public password: string = "123";

  constructor() { }

  ngOnInit() {
  }

  public sayHello():void {
    this.myEvent.emit("派发子组件事件");
  }

}
