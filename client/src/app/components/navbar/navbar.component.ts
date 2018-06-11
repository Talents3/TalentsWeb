import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "Talents3";
  _isLoggedIn: false;
  subscription: Subscription;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn();
  }


  logout() {
    console.log(this.authService.getToken());
    console.log(this.authService.getEmail());
    this.authService.logout();
    document.getElementById("logOutButton").style.display="none";
    document.getElementById("logInButton").style.display="inline";
    document.getElementById("SignUpButton").style.display="inline";
    this.router.navigate(['users']);
    console.log("logout");
  }

  loggedIn() {
    this.subscription = this.authService.isUserAuthenticated().subscribe(_isLoggedIn => this._isLoggedIn = _isLoggedIn);
    if (this.authService.isUserAuthenticated()) {
      document.getElementById("logInButton").style.display="none";
      document.getElementById("SignUpButton").style.display="none";
      document.getElementById("logOutButton").style.display="inline";
    };
  }

}
