import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, //脏检查策略
})
export class LifeCycleComponent implements OnInit {

  @Input() public title:string = "";

  public logs:Array<any> = [];

  constructor() {
    this.logs.push("constructor...");
  }

  ngOnchanges() {
    this.logs.push("ngOnchanges...");
  }

  ngOnInit() {
    this.logs.push("ngOnInit...");
  }

  ngDoCheck() {
    this.logs.push("ngDoCheck...");
  }

  ngAfterContentInit() {
    this.logs.push("ngAfterContentInit...");
  }

  ngAfterContentChecked() {
    this.logs.push("ngAfterContentChecked...");
  }

  ngAfterViewInit() {
    this.logs.push("ngAfterViewInit...");
  }

  ngAfterViewChecked() {
    this.logs.push("ngAfterViewChecked...");
  }

  ngOnDestroy() {
    this.logs.push("ngOnDestroy...");
  }



}
