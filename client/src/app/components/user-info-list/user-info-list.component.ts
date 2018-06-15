import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-info-list',
  templateUrl: './user-info-list.component.html',
  styleUrls: ['./user-info-list.component.css']
})

export class UserInfoListComponent implements OnInit {
    users: User[];
    searchUsers: User[];
    subscriptionUsers: Subscription;
    subscriptionSearchInput: Subscription;
    searchType: string = 'Choose Search Type';
    searchTerm: string = '';

    constructor(private dataService: DataService, private searchService: SearchService) { }

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

    getSearchUsers() {
        console.log("searchType: " + this.searchType);
        console.log("searchTerm: " + this.searchTerm);
        if (this.searchTerm == '') {
            this.dataService.getUsers();
            return;
        }

        switch(this.searchType) {
            case "People" : {
                console.log("search People");
                this.searchService.getUsersByName(this.searchTerm)
                  .then(users => {
                      this.users = users;
                  })
                break;
            }

            case "Education" : {
                this.searchService.getUsersByEducation(this.searchTerm)
                  .then(users => {
                      this.users = users;
                  })
                break;
            }

            case "Experience" : {
                this.searchService.getUsersByExperience(this.searchTerm)
                  .then(users => {
                      this.users = users;
                  })
                break;
            }
        }
    }

    setSearchType(searchType: any) {
        this.searchType = searchType;
    }
}
