import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-second',
  templateUrl: './child-second.component.html',
  styleUrls: ['./child-second.component.scss']
})
export class ChildSecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  readData() {
    let username = window.localStorage.getItem("username");
    let json = window.localStorage.getItem("json");
    console.log(JSON.parse(json));
    console.log(username);
    window.localStorage.removeItem("username");
  }

}
