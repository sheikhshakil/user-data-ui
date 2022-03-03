import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css'],
})
export class SaveUserComponent implements OnInit {
  readonly rootUrl = 'https://localhost:44375/api/';

  email = new FormControl();
  fullName = new FormControl();
  address = new FormControl();
  phone = new FormControl();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  saveUserInfo(): void {
    let data = {
      email: this.email.value,
      fullName: this.fullName.value,
      address: this.address.value,
      phone: this.phone.value,
    };

    console.log(data);

    this.http.post(this.rootUrl + 'saveUser', data, {observe : "response"}).subscribe((res) => {
      console.log(res);
      if(res.status == 200) {
        alert("Successfully saved data.");
      }
      else {
        alert("Failed to save data!");
      }
    });
  }
}
