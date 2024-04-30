import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId: number | string;

  constructor(private activatedRoute: ActivatedRoute,
              private titleService: Title,
              private location: Location) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data['id'];
      this.titleService.setTitle(`Usuario ${this.userId} - Clase 2`);
    })
  }

  back() {
    this.location.back();
  }

}
