import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    //获取路由传值长成这样 http://localhost:4200/user-list;userName=lkx
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
    })
  }

}
