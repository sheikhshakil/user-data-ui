import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-deletor',
  templateUrl: './user-deletor.component.html',
  styleUrls: ['./user-deletor.component.css']
})
export class UserDeletorComponent implements OnInit {
  readonly rootUrl = 'https://localhost:44375/api/';

  @Input()
  email : any;

  constructor(private http:HttpClient, private router : Router) { }

  ngOnInit(): void {
  }

  //deleting users
  deleteUser(): void {
    this.http
      .get(this.rootUrl + `deleteUser?email=${this.email}`, {
        observe: 'response',
      })
      .subscribe((res) => {
        if (res.status == 200) {
          alert('Deleted successfully.');
          window.location.reload()
        } else {
          alert('Deletion failed!');
        }
      });

    console.log(this.email)
  }
}
