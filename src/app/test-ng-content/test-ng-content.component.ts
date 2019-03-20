import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-content',
  templateUrl: './test-ng-content.component.html',
  styleUrls: ['./test-ng-content.component.scss']
})
export class TestNgContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public doSomething(data):void {
    console.log(data);
  }

}
