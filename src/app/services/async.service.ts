import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {


  passSubDataOne = new Subject<any>();

  passBehavDataOne = new BehaviorSubject<any>(null);

  constructor() { }

  setSubData(val:number) {
    this.passSubDataOne.next(val);
  }
  setBehavSubData(val: number) {
    this.passBehavDataOne.next(val);
  }
}
