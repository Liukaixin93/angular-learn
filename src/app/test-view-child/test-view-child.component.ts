import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ChildFiveComponent } from '../test-content-child/child-five/child-five.component';

@Component({
  selector: 'test-view-child',
  templateUrl: './test-view-child.component.html',
  styleUrls: ['./test-view-child.component.scss']
})
export class TestViewChildComponent implements OnInit {
  // @ViewChild(ChildFiveComponent) childFive:ChildFiveComponent;
  @ViewChildren(ChildFiveComponent) childrenFiveList: QueryList<ChildFiveComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //不可以修改input值，可以使用setTimeOut的方式
    // console.log(this.childFive);
    // this.childFive.password = '456';
    // this.childFive.myEvent.subscribe((data) => {
    //   console.log(data);
    // })

    console.log(this.childrenFiveList);
    //批量处理
    this.childrenFiveList.forEach((item) => {
      console.log(item);
    });

  }

}
