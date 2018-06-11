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
  _isLoggedIn: boolean;
  subscription: Subscription;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['users']);
  }

}
