import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class orderService {

  constructor() { }

  public getOrderList():Array<any> {
    return [
      {orderId: '111', userName: '111'},
      {orderId: '222', userName: '222'},
      {orderId: '333', userName: '333'},
      {orderId: '444', userName: '444'},
      {orderId: '555', userName: '555'},
    ];
  }
}
