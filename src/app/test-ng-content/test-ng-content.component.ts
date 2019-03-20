import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-content',
  templateUrl: './test-ng-content.component.html',
  styleUrls: ['./test-ng-content.component.scss']
})
export class TestNgContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContent() {
    console.log("父组件ngAfterContent....");
  }

  ngAfterContentChecked() {
    console.log("父组件ngAfterContentChecked....");
  }

}
