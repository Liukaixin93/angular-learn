import { Component, OnInit } from '@angular/core';
import { EventBusService } from './service/event-bus.service';

@Component({
  selector: 'app-brother-and-brother',
  templateUrl: './brother-and-brother.component.html',
  styleUrls: ['./brother-and-brother.component.scss'],
  providers: [EventBusService]
})
export class BrotherAndBrotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
