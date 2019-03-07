import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-interpolation',
  templateUrl: './test-interpolation.component.html',
  styleUrls: ['./test-interpolation.component.scss']
})
export class TestInterpolationComponent implements OnInit {
  public isShow:boolean = true;
  public title:string = "angular demo";
  public raceList:Array<any>=[
    {name: "王者荣耀"},
    {name: "英雄联盟"},
    {name: "QQ炫舞"},
    {name: "天天酷跑"},
  ]
  public mapStatus:String = '进行中';

  public currentClass: {};
  public canSave: boolean = false;
  public isUnchanged: boolean = false;
  public isSpecial: boolean = false;

  public currentRace:any = { name: "123牵着手" };

  constructor() { }

  ngOnInit() {
  }

  public getVal():any {
    return 65535;
  }

  public toggleShow():void {
    this.isShow = !this.isShow;
  }

  setCurrentClass() {
    this.currentClass = {
      'saveable': this.canSave,
      'modified': this.isUnchanged,
      'special': this.isSpecial,
    }
  }

  changeCurrentClass() {
    this.currentClass = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '16px',
    }
  }

}
