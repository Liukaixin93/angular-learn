import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    //获取点击过来的路由传值长这样 http://localhost:4200/jokes?userId=111&userName=lkx123
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
    });

    //监听路由事件
    this.router.events.subscribe((event) => {
      console.log(event);
    })

  }

}
