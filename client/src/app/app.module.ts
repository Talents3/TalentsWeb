import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms';
import { routing } from'./app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserInfoListComponent } from './components/user-info-list/user-info-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { LoginModuleComponent } from './components/login-module/login-module.component';
import{ DataService } from './services/data.service';
import { RegisterModuleComponent } from './components/register-module/register-module.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserInfoListComponent,
    UserDetailComponent,
    RegisterModuleComponent,
    LoginModuleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
