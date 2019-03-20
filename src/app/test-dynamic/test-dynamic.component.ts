import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { Child1Component } from './child1/child1.component'

@Component({
  selector: 'test-dynamic',
  templateUrl: './test-dynamic.component.html',
  styleUrls: ['./test-dynamic.component.scss']
})
export class TestDynamicComponent implements OnInit {

  @ViewChild('dynContent', {read: ViewContainerRef})
  dynContent: ViewContainerRef;

  public showChild;
  public comp1: ComponentRef<Child1Component>;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  //动态创建组件
  ngAfterContentInit() {
    const childComp = this.resolver.resolveComponentFactory(Child1Component);
    this.comp1 = this.dynContent.createComponent(childComp);
    this.comp1.instance.title = "父组件动态创建标题";

    this.comp1.instance.myEvent.subscribe((value) => {
      this.showChild = value;
      // console.log(value);
    });

    // let comp2 = this.dynContent.createComponent(childComp);
    // comp2.instance.title = "我是第二个组件";
    // let comp3 = this.dynContent.createComponent(childComp);
    // comp3.instance.title = "我是第三个组件";
    // let comp4 = this.dynContent.createComponent(childComp, 0); //将第四个组件渲染到第一个位置
    // comp4.instance.title = "我是第四个组件";
  }

  //动态销毁组件
  public deleteComp():void {
    console.log(123);
    this.comp1.destroy();
  }

}
