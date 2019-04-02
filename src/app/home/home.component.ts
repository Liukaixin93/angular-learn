import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  manualNav() {
    this.router.navigate(["/jokes"], {
      queryParams: { userId: '111', userName: 'lkx123' }
    }); //手动触发调转到jokes
  }

}
