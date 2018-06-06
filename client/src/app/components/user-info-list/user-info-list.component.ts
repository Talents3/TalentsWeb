import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-info-list',
  templateUrl: './user-info-list.component.html',
  styleUrls: ['./user-info-list.component.css']
})

export class UserInfoListComponent implements OnInit {
    users: User[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.users = this.dataService.getUsers();
    }
}
