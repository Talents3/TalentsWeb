import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-info-list',
  templateUrl: './user-info-list.component.html',
  styleUrls: ['./user-info-list.component.css']
})

export class UserInfoListComponent implements OnInit {
    users: User[];
    subscriptionUsers: Subscription;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getUsers();
    }

    ngOnDestroy() {
        this.subscriptionUsers.unsubscribe();
    }

    getUsers() {
      this.subscriptionUsers = this.dataService.getUsers()
          .subscribe(users => this.users = users);
    }
}
