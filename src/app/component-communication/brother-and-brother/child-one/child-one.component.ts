import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
  providers: [EventBusService]
})
export class ChildOneComponent implements OnInit {

  public events:Array<any> = [];

  constructor(public eventBusService:EventBusService) { }

  ngOnInit() {
    
  }

  public triggerEventBus():void {
    this.eventBusService.eventBus.next("第一个组件触发的事件");
  }

}
