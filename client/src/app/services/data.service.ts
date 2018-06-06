import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { USERS } from '../mock-user';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  users : User[] = USERS;

  constructor() { }

  getUsers() : User[] {
    return this.users;
  }

  getUser(id: number): User {
    return this.users.find( (user) => user.id === id);
  }

  getUserByName(name: String): User {
    return this.users.find((user) => user.name === name);
  }

  addUser(user: User) {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

}
