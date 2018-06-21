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
    debounceGetMoreSearchResults = _.debounce(() => this.getMoreSearchResult(this.searchType), 500, {});
    isSearchMode: boolean;

    constructor(private dataService: DataService, private searchService: SearchService) { }

    @HostListener("window:scroll", [])
    handleScroll() {
      let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50 )) {
          if (!this.isSearchMode) {
            this.debounceGetMoreUsers();
          } else {
            console.log("get more search result!!")
            this.debounceGetMoreSearchResults();
          }
      }
    }

    ngOnInit() {
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

        if (this.searchTerm == '') {
            this.dataService.getUsers();
            this.isSearchMode = false;
            return;
        }

        this.isSearchMode = true;
        this.getMoreSearchResult(this.searchType);
    }

    setSearchType(searchType: any) {
        this.searchType = searchType;
    }

    getMoreUsers() {
      console.log("s");
        this.dataService.getMoreUsers();
    }

    getMoreSearchResult(searchType) {
        switch(this.searchType) {
            case "People" : {
                //console.log("search People");
                this.searchService.getUsersByName(this.searchTerm);
                break;
            }

            case "Education" : {
                this.searchService.getUsersByEducation(this.searchTerm);
                break;
            }

            case "Experience" : {
                this.searchService.getUsersByExperience(this.searchTerm);
                break;
            }

            case "Skill" : {
                this.searchService.getUserBySkill(this.searchTerm);
                break;
            }
        }
    }


}
