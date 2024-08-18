import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  current = new BehaviorSubject<number>(0);

  constructor(  ) {
    setInterval(() => {
      this.current.next( this.current.value + 1 ) ;
    }, 1000);
  }
}
