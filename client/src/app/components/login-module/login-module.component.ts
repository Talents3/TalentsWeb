import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent implements OnInit {

  loginData = { email:'', password:'' };
  message = '';
  data: any;
  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginData).subscribe(resp => {
      this.data = resp;
      console.log(this.data);
      this.authService.authenticateUser(this.data.token, this.data.email);
      this.router.navigate(['users']);
    }, err => {
      this.message = err.error.msg;
    });
  }

}
