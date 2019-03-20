import { Component, OnInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ChildFiveComponent } from '../child-five/child-five.component';

@Component({
  selector: 'child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.scss']
})
export class ChildFourComponent implements OnInit {

  // @ContentChild(ChildFiveComponent) childFive: ChildFiveComponent; //获取被投影的组件实例
  @ContentChildren(ChildFiveComponent) childrenFiveList: QueryList<ChildFiveComponent>; //获取多个被投影的组件实例

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() { //可以修改
    // console.log(this.childFive);
    // this.childFive.password = '456';
    // this.childFive.myEvent.subscribe((data) => {
    //   console.log(data);
    // })

    //批量处理
    this.childrenFiveList.forEach((item) => {
      console.log(item);
    });
  }

}
