import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  // public title = "默认标题";
  @Input()
  public title: string = "默认标题";

  @Output()
  public myEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public sayHello():void {
    this.myEvent.emit('子组件触发事件，传参给父组件');
  }

}
