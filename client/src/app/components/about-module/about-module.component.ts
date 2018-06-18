import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about-module',
  templateUrl: './about-module.component.html',
  styleUrls: ['./about-module.component.css']
})
export class AboutModuleComponent implements OnInit {

  users: User[] = [];
  usersId : Array<number>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usersId = [4,5,6];
    this.getUsers();
  }

  getUsers() {
    this.usersId.forEach(userId => {
      this.dataService.getUser(userId).then(
        user => {
                    this.users.push(user);
      });
    });
  }

}
