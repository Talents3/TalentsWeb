import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register-module',
  templateUrl: './register-module.component.html',
  styleUrls: ['./register-module.component.css']
})
export class RegisterModuleComponent implements OnInit {
// create a shadow copy of problem and assign it to newProblem
// Object.assign() copies property values. If the source value is a
//reference to an object, it only copies that reference value.
  signupData = { username:'', email: '' , password:''};
  confirmPassword = '';
  message = '';
  isValidEmail = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }


  check() {
    console.log(this.confirmPassword);
    console.log(this.signupData.password);
    if (this.confirmPassword !== this.signupData.password) {
      this.message = 'Password not match!!';
    } else {
      this.message = '';
    }
  }

  checkIfEmail(signupForm) {
    signupForm._directives[3].valid;
    if (signupForm._directives[3].valid == false){
      this.message = 'Invalid Password!';
    } else {
      this.message = '';
    }
  }

  signup() {
    this.authService.register(this.signupData).subscribe(res => {
      console.log(res);
      if (res.success){
        this.router.navigate(['login']);
      } else {
        this.message = res.msg;
      }
    }, err => {
      this.message = err.error.msg;
    });
  }
}
