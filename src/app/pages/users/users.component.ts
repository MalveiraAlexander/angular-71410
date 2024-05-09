import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { RouterModule } from '@angular/router';
import { window } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [UsersService]
})
export class UsersComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  usersServices = inject(UsersService);
  showData = signal<boolean>(false);

  constructor() {
    console.log('Constructor');

  }
  ngOnInit(): void {
    console.log('OnInit');

  }
  ngOnDestroy(): void {
    console.log('OnDestroy');

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');

  }
  ngDoCheck(): void {
    console.log('DoCheck');
    alert('Me cambiaron algo!');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');

  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');

  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');

  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');

  }

  change() {
    this.showData.set(!this.showData());

    // TODO: No se deberia hacer esto
    let buttonElement = document.getElementById('post');
    if (buttonElement) {
      buttonElement.style.backgroundColor = 'black';
      buttonElement.style.color = 'white';
    }

  }

}
