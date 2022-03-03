import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css'],
})
export class ShowUserComponent implements OnInit {
  readonly rootUrl = 'https://localhost:44375/api/';
  users: any;
  userEmail = new FormControl();

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  ngOnInit(): void {}

  getUsers(): void {
    this.http
      .get(this.rootUrl + 'getUser', { observe: 'response' })
      .subscribe((res) => {
        this.users = res.body;
      });
  }
}
