import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  createdAt: Date;
  name: string;
  data: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
      this.data = data;
      this.createdAt = new Date(data['createdAt']);
      this.name = data['name'];
    })
  }

  goToUser(userId: number) {
    console.log(userId);

    this.router.navigateByUrl(`users/${userId}`);
  }

}
