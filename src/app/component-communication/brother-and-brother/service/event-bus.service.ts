import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/*
    充当事件总线的service
*/
@Injectable()

export class EventBusService {

    public eventBus:Subject<string> = new Subject<string>();

    constructor() {

    }
}
