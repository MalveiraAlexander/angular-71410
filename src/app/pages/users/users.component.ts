import { User } from 'src/app/models';
import { UsersService } from './../../services/users.service';
import { Component, OnInit, inject } from '@angular/core';
import { StateChangesService } from 'src/app/services/state-changes.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [
    UsersService
  ]
})
export class UsersComponent implements OnInit{

  stateChangesService = inject(StateChangesService); // Angular 16+ inject function
  query: string;

  users: User[] = [];

  constructor(private usersService: UsersService) { }
  ngOnInit(): void {
    this.getUsers();
    this.searchEvent();
  }

  getUsers() {
    this.users = this.usersService.getUsers();
  }

  searchEvent() {
    this.stateChangesService.onSearch.subscribe((data) => {
      console.log(data);

      this.query = data;
    });

  }
}
