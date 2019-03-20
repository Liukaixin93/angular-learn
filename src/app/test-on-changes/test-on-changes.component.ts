import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-on-changes',
  templateUrl: './test-on-changes.component.html',
  styleUrls: ['./test-on-changes.component.scss']
})
export class TestOnChangesComponent implements OnInit {

  public userName:string = "";
  public userObj:any = {};

  constructor() { }

  ngOnInit() {
  }

}
