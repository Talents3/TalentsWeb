import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "Talents3";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    console.log(this.authService.getToken());
    console.log(this.authService.getEmail());
    this.authService.logout();
    this.router.navigate(['users']);
    console.log("logout");
  }
}
