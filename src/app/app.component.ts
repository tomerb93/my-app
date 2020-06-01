import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const BACKEND_URL = environment.apiUrl + '/user/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: string[] = [];
  msg = '';

  ngOnInit() {
    this.http.get<{ users: any; msg: string }>(BACKEND_URL).subscribe((res) => {
      this.users = res.users;
      this.msg = res.msg;
    });
  }

  constructor(private http: HttpClient) {}
  // @todo - update environment files, continue test to see if express requests work
}
