import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child22',
  templateUrl: './child22.component.html',
  styleUrls: ['./child22.component.scss']
})
export class Child22Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContent() {
    console.log("子组件ngAfterContent....");
  }

  ngAfterContentChecked() {
    console.log("子组件ngAfterContentChecked....");
  }

}
