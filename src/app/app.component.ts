import { Component } from '@angular/core';
import { DUMMY_USERS } from "./shared/dummy-users";
import { User } from "./user/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((u: User) => u.id === this.selectedUserId);
  }

  onSelectUser(id: string): void {
    this.selectedUserId = id;
  }
}
