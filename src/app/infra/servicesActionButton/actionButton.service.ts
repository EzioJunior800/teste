import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// add TAB

export class ActionButtonService {
  private functionToExecute = new Subject<void>();

  executeFunction(teste: any) {
    this.functionToExecute.next(teste);
  }

  getFunctionToExecute() {
    return this.functionToExecute.asObservable();
  }
}
