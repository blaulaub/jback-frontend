import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-role-actions',
  templateUrl: './role-actions.component.html',
  styleUrls: ['./role-actions.component.scss']
})
export class RoleActionsComponent implements OnInit {

  @Output() roleChangedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.roleChangedEvent.emit("No Role");
  }

}
