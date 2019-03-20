import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child111',
  templateUrl: './child111.component.html',
  styleUrls: ['./child111.component.scss']
})
export class Child111Component implements OnInit {

  @Input()
  public userName:string="";
  @Input()
  public userObj:any={};


  constructor() { }

  ngOnInit() {
  }

  ngOnchanges() {
    console.log("子组件 ngOnChanges");
  }

  ngDoCheck() {
    console.log("子组件 ngDoCheck");
  }

  ngAfterViewInit() {
    // this.userName = "123"; //报错
  }

  ngAfterViewChecked() {
    // this.userName = "123"; //报错，Child111Component.html:4 ERROR Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'null: '. Current value: 'null: 123'.
  }

}
