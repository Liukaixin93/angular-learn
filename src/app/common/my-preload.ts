import { Router, PreloadingStrategy } from "@angular/router";
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

// export class MyPreloading implements PreloadingStrategy {(
//     preload(route: Router, fn: () => Observable<any>):Observable<any> {
//         return route.data && route.data.preload ? fn():Observable.of(null),
//     }

// )}