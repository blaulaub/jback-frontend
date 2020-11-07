import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-login-actions',
  templateUrl: './login-actions.component.html',
  styleUrls: ['./login-actions.component.scss']
})
export class LoginActionsComponent implements OnInit {

  @Output() loginChangedEvent = new EventEmitter<string>();

  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {

    this.loginChangedEvent.emit("No Login");

    this.sessionService.getSessionInfo()
      .subscribe(result => console.log(result));

  }

}
