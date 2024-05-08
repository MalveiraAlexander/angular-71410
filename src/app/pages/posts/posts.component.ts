import { Component, OnInit, inject } from '@angular/core';
import { StateChangesService } from 'src/app/services/state-changes.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  ngOnInit(): void {
    this.searchEvent();
  }
  stateChangesService = inject(StateChangesService); // Angular 16+ inject function
  query: string;
  searchEvent() {
    this.stateChangesService.onSearch.subscribe((data) => {
      console.log(data);

      this.query = data;
    });
  }
}
