import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';

const DEFAULT_USER: User = Object.freeze({
  id: 0,
  name: '',
  education:'',
  blog: ''
});

@Component({
  selector: 'app-register-module',
  templateUrl: './register-module.component.html',
  styleUrls: ['./register-module.component.css']
})
export class RegisterModuleComponent implements OnInit {
// create a shadow copy of problem and assign it to newProblem
// Object.assign() copies property values. If the source value is a
//reference to an object, it only copies that reference value.
  newUser: User = Object.assign({}, DEFAULT_USER);

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addUser() {
    // assign newProblem a new problem instance
    // Otherwise newProblem have same reference as the one we added to the list
    // then when next time add new problem, it will override the problem we
    //have already add into the problem list.
    this.dataService.addUser(this.newUser);
    this.newUser = Object.assign({}, DEFAULT_USER);
  }
}
