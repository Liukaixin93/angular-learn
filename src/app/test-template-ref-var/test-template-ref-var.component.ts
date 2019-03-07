import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-template-ref-var',
  templateUrl: './test-template-ref-var.component.html',
  styleUrls: ['./test-template-ref-var.component.scss']
})
export class TestTemplateRefVarComponent implements OnInit {

  public imgSrc="./assets/img/1.jpg";
  public fontSizePx: number = 16;

  constructor() { }

  ngOnInit() {
  }

  public sayHello(name:string):void {
    alert(name);
  }

  public changeSrc():void {
    if(Math.ceil(Math.random()*10000000)%2){
      this.imgSrc="./assets/img/2.jpg";
    }else {
      this.imgSrc="./assets/img/1.jpg";
    }
  }

  public click():void {
    console.log(event);
  }
  
  
}
