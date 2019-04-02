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
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
    });

    this.router.events.subscribe((event) => {
      console.log(event);
    })

    // this.router.events.subscribe();
    // console.log(this.router.events.subscribe());
  }

}
