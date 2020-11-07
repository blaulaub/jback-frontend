import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  login: string = "Login";
  role: string = "Role";

  loginChanged(value: string) {
    this.login = value;
  }

  roleChanged(value: string) {
    this.role = value;
  }
}
