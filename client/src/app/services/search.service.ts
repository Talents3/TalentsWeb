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

  constructor(private httpClient: HttpClient) { }

  getUsersByName(name): Promise<User[]> {
    return this.httpClient.get(`api/v1/users/name/${name}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getUsersByEducation(universityName):  Promise<User[]> {
    return this.httpClient.get(`api/v1/users/educations/${universityName}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getUsersByExperience(info):  Promise<User[]> {
    return this.httpClient.get(`api/v1/users/experiences/${info}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }
}
