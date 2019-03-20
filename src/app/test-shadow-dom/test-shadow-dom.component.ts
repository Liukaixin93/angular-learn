import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'test-shadow-dom',
  encapsulation: ViewEncapsulation.Native, //shadowdom模式
  templateUrl: './test-shadow-dom.component.html',
  styleUrls: ['./test-shadow-dom.component.scss']
})
export class TestShadowDomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
