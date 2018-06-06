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

  // getUser(id: number): User {
  //   return this.users.find( (user) => user.id === id);
  // }
  getUser(id: number): Promise<User> {
    //return this.problems.find( (problem) => problem.id === id );
    return this.httpClient.get(`api/v1/users/${id}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  // getUserByName(name: String): User {
  //   return this.users.find((user) => user.name === name);
  // }

  // addUser(user: User) {
  //   user.id = this.users.length + 1;
  //   this.users.push(user);
  // }

  addUser(user: User) {
    // problem.id = this.problems.length + 1;
    // this.problems.push(problem);
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.httpClient.post('api/v1/users', user, options)
      .toPromise()
      .then((res: any) => {
        //update the _userSource
        this.getUsers();

        return res;
      })
      .catch(this.handleError);
  }

  modifyUser(user: User) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.httpClient.put('api/v1/users', user, options)
      .toPromise()
      .then((res: any) => {
        this.getUsers();
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}
