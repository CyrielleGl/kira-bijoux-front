import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _loading: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  get loading(): Observable<boolean> {
    return this._loading.asObservable();
  }

  public show(): void {
    this._loading.next(true);
  }

  public hide(): void {
    this._loading.next(false);
  }
}
