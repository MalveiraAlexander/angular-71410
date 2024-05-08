import { Component, inject } from '@angular/core';
import { StateChangesService } from 'src/app/services/state-changes.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  query: string;

  private stateChangesService = inject(StateChangesService)

  search() {
    this.stateChangesService.onSearchSignal.set(this.query);
  }
}
