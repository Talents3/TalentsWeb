import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from'./app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserInfoListComponent } from './components/user-info-list/user-info-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

import{ DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserInfoListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
