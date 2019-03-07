import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.scss']
})
export class TestPipeComponent implements OnInit {

  public currentTime: any = new Date();
  public currentRace: any = null;
  // public currentRace: any = { name:"王者荣耀" };

  constructor() {
    setInterval(()=> {
      this.currentTime = new Date();
    })
  }

  ngOnInit() {
  }

}
