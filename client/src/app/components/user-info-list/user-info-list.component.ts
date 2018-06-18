import { Component, OnInit, HostListener } from '@angular/core';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';


@Component({
  selector: 'app-user-info-list',
  templateUrl: './user-info-list.component.html',
  styleUrls: ['./user-info-list.component.css']
})

export class UserInfoListComponent implements OnInit {
    users: User[];
    searchUsers: User[];
    subscriptionUsers: Subscription;
    subscriptionSearchUsers: Subscription;
    searchType: string = 'Choose Search Type';
    searchTerm: string = '';
    debounceGetMoreUsers = _.debounce(() => this.getMoreUsers(), 500, {});
    debounceGetMoreSearchResults = _.debounce(() => this.getMoreSearchResult(), 500, {});
    isSearchMode: boolean;
    isReachTheEnd: boolean;

    constructor(private dataService: DataService, private searchService: SearchService) { }

    @HostListener("window:scroll", [])
    handleScroll() {
      let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
          if (!this.isSearchMode) {
            this.debounceGetMoreUsers();
          } else {
            this.debounceGetMoreSearchResults();
          }
      }
    }

    ngOnInit() {
        this.isReachTheEnd = false;
        this.isSearchMode = false;
        this.subscriptionUsers = this.dataService.getUsers()
            .subscribe(users => this.users = users);

        this.subscriptionSearchUsers = this.searchService.getSearchUsers()
            .subscribe(searchUsers => this.searchUsers = searchUsers);
    }

    ngOnDestroy() {
        this.subscriptionUsers.unsubscribe();
        this.subscriptionSearchUsers.unsubscribe();
    }

    getUsers() {
        this.subscriptionUsers = this.dataService.getUsers()
            .subscribe(users => this.users = users);
    }

    getSearchUsers() {
        console.log("searchType: " + this.searchType);
        console.log("searchTerm: " + this.searchTerm);
        this.searchService.resetSearchSource();
        this.isReachTheEnd = false;

        if (this.searchTerm == '') {
            this.dataService.getUsers();
            this.isSearchMode = false;
            return;
        }

        this.isSearchMode = true;
        this.getMoreSearchResult();
    }

    setSearchType(searchType: any) {
        this.searchType = searchType;
    }

    getMoreUsers() {
        if (this.isReachTheEnd) {
            return;
        }
        console.log("get More users");
        this.dataService.getMoreUsers().then(users => {
            if (users.length == 0) {
                this.isReachTheEnd = true;
            }
        });
    }

    getMoreSearchResult() {
        if (this.isReachTheEnd) {
            return;
        }
        console.log("get More result");
        switch(this.searchType) {
            case "People" : {
                this.searchService.getUsersByName(this.searchTerm).then(users => {
                    if (users.length == 0) {
                        this.isReachTheEnd = true;
                    }
                })
                break;
            }

            case "Education" : {
                this.searchService.getUsersByEducation(this.searchTerm).then(users => {
                    if (users.length == 0) {
                        this.isReachTheEnd = true;
                    }
                })
                break;
            }

            case "Experience" : {
                this.searchService.getUsersByExperience(this.searchTerm).then(users => {
                    if (users.length == 0) {
                        this.isReachTheEnd = true;
                    }
                })
                break;
            }
        }
    }


}
