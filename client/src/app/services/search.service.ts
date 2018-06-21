import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _searchUserSource = new BehaviorSubject<User[]>([]);
  private _emptyUsers: User[] = [];

  constructor(private httpClient: HttpClient) { }

  getSearchUsers(): Observable<User[]> {
    return this._searchUserSource.asObservable();
  }

  getUsersByName(name): Promise<User[]> {
    return this.httpClient.get(`api/v1/users/name/${name}/nums/${this._searchUserSource.value.length}`)
      .toPromise()
      .then((users: any) => {
        this._searchUserSource.next(this._searchUserSource.value.concat(users));
        return users;
      })
      .catch(this.handleError);
  }

  getUsersByEducation(universityName): Promise<User[]> {
    return this.httpClient.get(`api/v1/users/educations/${universityName}/nums/${this._searchUserSource.value.length}`)
      .toPromise()
      .then((users: any) => {
        this._searchUserSource.next(this._searchUserSource.value.concat(users));
        return users;
      })
      .catch(this.handleError);
  }

  getUsersByExperience(info):  Promise<User[]> {
    return this.httpClient.get(`api/v1/users/experiences/${info}/nums/${this._searchUserSource.value.length}`)
      .toPromise()
      .then((users: any) => {
        this._searchUserSource.next(this._searchUserSource.value.concat(users));
        return users;
      })
      .catch(this.handleError);
  }

  getUserBySkill(skill): void {
    this.httpClient.get(`api/v1/users/experiences/${skill}/nums/${this._searchUserSource.value.length}`)
      .toPromise()
      .then((users: any) => this._searchUserSource.next(this._searchUserSource.value.concat(users)))
      .catch(this.handleError);
  }

  resetSearchSource(): void {
      this._searchUserSource.next(this._emptyUsers);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }
}
