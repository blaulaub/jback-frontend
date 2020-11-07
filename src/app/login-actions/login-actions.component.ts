import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-actions',
  templateUrl: './login-actions.component.html',
  styleUrls: ['./login-actions.component.scss']
})
export class LoginActionsComponent implements OnInit {

  @Output() loginChangedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.loginChangedEvent.emit("No Login");
  }

}
