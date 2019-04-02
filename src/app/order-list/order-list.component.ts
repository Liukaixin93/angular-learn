import { Component, OnInit } from '@angular/core';
import { orderService } from './order-services/Order.service';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  private orderList: Array<any>;

  constructor(
    private orderService: orderService
  ) { }

  ngOnInit() {
    this.orderList = this.orderService.getOrderList();
  }

}
