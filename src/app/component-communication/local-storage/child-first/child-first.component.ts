import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-first',
  templateUrl: './child-first.component.html',
  styleUrls: ['./child-first.component.scss']
})
export class ChildFirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  writeData() {
    window.localStorage.setItem("username", "哈哈");
    window.localStorage.setItem("json", JSON.stringify({
      name: "欣欣宝宝",
      age: "18"
    }));
  }

}
