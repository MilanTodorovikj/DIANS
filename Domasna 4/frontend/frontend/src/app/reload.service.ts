import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  constructor() {
  }

  reload$ = new Subject<void>();

  reload() {
    this.reload$.next();
  }
}
