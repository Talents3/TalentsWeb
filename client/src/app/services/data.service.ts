import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private _userSource = new BehaviorSubject<User[]>([]);

  constructor(private httpClient: HttpClient) { }

  // getUsers() : User[] {
  //   return this.users;
  // }
  getUsers(): Observable<User[]> {
    this.httpClient.get('api/v1/users')
      .toPromise()
      .then((res: any) => {
        this._userSource.next(res);
      })
      .catch(this.handleError);

      return this._userSource.asObservable();
  }

  getUser(id: number): Promise<User> {

    return this.httpClient.get(`api/v1/users/${id}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  modifyUser(user) {
    console.log("begin modify!");
    const options = { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + localStorage.getItem('token')})};
    return this.httpClient.put(`api/v1/users/${user.id}`, user, options)
      .toPromise()
      .then((res: any) => {
        this.getUsers();
        localStorage.setItem('username', user.username);
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}
