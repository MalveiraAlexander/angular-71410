import { EventEmitter, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateChangesService {

  onSearch: EventEmitter<string> = new EventEmitter<string>();
  onSearchSignal = signal<string>(null);
}
