import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private _userSource = new BehaviorSubject<User[]>([]);

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    if (this._userSource.value.length == 0) {
      this.httpClient.get('api/v1/users')
        .toPromise()
        .then((res: any) => {
          this._userSource.next(res);
        })
        .catch(this.handleError);
    }

    return this._userSource.asObservable();
  }

  getUser(id: number): Promise<User> {
    return this.httpClient.get(`api/v1/users/${id}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getMoreUsers(): Promise<User[]> {
    return this.httpClient.get(`api/v1/users/nums/${this._userSource.value.length}`)
      .toPromise()
      .then((users: any) => {
        this._userSource.next(this._userSource.value.concat(users));
        return users;
      })
      .catch(this.handleError);
  }

  modifyUser(user): Promise<User> {
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

  addEducation(education): Promise<Education> {
      console.log('add Education');
      const options = { headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('token')})};
      return this.httpClient.post('api/v1/educations', education, options)
        .toPromise()
        .then((res: any) => {
          return res;
        })
        .catch(this.handleError);
  }

  deleteEducation(_id): Promise<Education> {
      console.log("deleteEducation");
      const options = { headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('token')})};
      return this.httpClient.delete(`api/v1/educations/${_id}`, options)
        .toPromise()
        .then((res: any) => {
          return res;
        })
        .catch(this.handleError);
  }

  modifyEducation(education): Promise<Education> {
      console.log('add Education');
      const options = { headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('token')})};
      return this.httpClient.put(`api/v1/educations/${education._id}`, education, options)
        .toPromise()
        .then((res: any) => {
          return res;
        })
        .catch(this.handleError);
  }

  addExperience(experience): Promise<Experience> {
    console.log("add Experience");
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('token')
      })
    };
    return this.httpClient.post(`api/v1/experiences`, experience, options)
                          .toPromise()
                          .then((res: any) => {
                            return res;
                          })
                          .catch(this.handleError);
  }


  deleteExperience(_id): Promise<Experience> {
    console.log("delete Experience");
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('token')
      })
    };
    return this.httpClient.delete(`api/v1/experiences/${_id}`, options)
                          .toPromise()
                          .then((res: any) => {
                            return res;
                          })
                          .catch(this.handleError);
  }

  modifyExperience(experience): Promise<Experience> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('token')
      })
    };
    console.log(experience);
    return this.httpClient.put(`api/v1/experiences/${experience._id}`, experience, options)
                          .toPromise()
                          .then((res: any) => {
                            return res;
                          })
                          .catch(this.handleError);
  }

  addProject(project): Promise<Project> {
    console.log("add Project");
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('token')
      })
    };
    return this.httpClient.post(`api/v1/projects`, project, options)
                          .toPromise()
                          .then((res: any) => {
                            return res;
                          })
                          .catch(this.handleError);
  }


  deleteProject(_id): Promise<Project> {
    console.log("delete Proejct");
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('token')
      })
    };
    return this.httpClient.delete(`api/v1/projects/${_id}`, options)
                          .toPromise()
                          .then((res: any) => {
                            return res;
                          })
                          .catch(this.handleError);
  }

  modifyProject(project): Promise<Project> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + localStorage.getItem('token')
      })
    };
    console.log(project);
    return this.httpClient.put(`api/v1/projects/${project._id}`, project, options)
                          .toPromise()
                          .then((res: any) => {
                            return res;
                          })
                          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}
