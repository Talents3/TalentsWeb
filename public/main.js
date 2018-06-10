(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_user_info_list_user_info_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-info-list/user-info-list.component */ "./src/app/components/user-info-list/user-info-list.component.ts");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ "./src/app/components/user-detail/user-detail.component.ts");
/* harmony import */ var _components_login_module_login_module_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login-module/login-module.component */ "./src/app/components/login-module/login-module.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_register_module_register_module_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register-module/register-module.component */ "./src/app/components/register-module/register-module.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_user_info_list_user_info_list_component__WEBPACK_IMPORTED_MODULE_7__["UserInfoListComponent"],
                _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailComponent"],
                _components_register_module_register_module_component__WEBPACK_IMPORTED_MODULE_11__["RegisterModuleComponent"],
                _components_login_module_login_module_component__WEBPACK_IMPORTED_MODULE_9__["LoginModuleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_info_list_user_info_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user-info-list/user-info-list.component */ "./src/app/components/user-info-list/user-info-list.component.ts");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ "./src/app/components/user-detail/user-detail.component.ts");
/* harmony import */ var _components_register_module_register_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register-module/register-module.component */ "./src/app/components/register-module/register-module.component.ts");
/* harmony import */ var _components_login_module_login_module_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login-module/login-module.component */ "./src/app/components/login-module/login-module.component.ts");





var routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: _components_user_info_list_user_info_list_component__WEBPACK_IMPORTED_MODULE_1__["UserInfoListComponent"]
    },
    {
        path: 'users/:id',
        component: _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailComponent"]
    },
    {
        path: 'register',
        component: _components_register_module_register_module_component__WEBPACK_IMPORTED_MODULE_3__["RegisterModuleComponent"],
        data: { title: 'Sign Up' }
    },
    {
        path: 'login',
        component: _components_login_module_login_module_component__WEBPACK_IMPORTED_MODULE_4__["LoginModuleComponent"],
        data: { title: 'Login' }
    },
    {
        path: '**',
        redirectTo: 'users'
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/login-module/login-module.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/login-module/login-module.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #eee;\n}\n\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n\n.form-signin .checkbox {\n  font-weight: normal;\n}\n\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.form-signin p {\n  margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/login-module/login-module.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/login-module/login-module.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form class=\"form-signin\" (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\n        <div class=\"alert alert-warning alert-dismissible\" role=\"alert\" *ngIf=\"message !== ''\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          {{message}}\n        </div>\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" [(ngModel)]=\"loginData.email\" name=\"email\" required/>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"loginData.password\" name=\"password\" required/>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">Sign in</button>\n        <p>\n            Not a member? <a [routerLink]=\"['/register']\">Signup here</a>\n        </p>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login-module/login-module.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/login-module/login-module.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModuleComponent", function() { return LoginModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginModuleComponent = /** @class */ (function () {
    function LoginModuleComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.loginData = { email: '', password: '' };
        this.message = '';
    }
    LoginModuleComponent.prototype.ngOnInit = function () {
    };
    LoginModuleComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.loginData).subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
            _this.authService.authenticateUser(_this.data.token, _this.data.email);
            _this.router.navigate(['users']);
        }, function (err) {
            _this.message = err.error.msg;
        });
    };
    LoginModuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-module',
            template: __webpack_require__(/*! ./login-module.component.html */ "./src/app/components/login-module/login-module.component.html"),
            styles: [__webpack_require__(/*! ./login-module.component.css */ "./src/app/components/login-module/login-module.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginModuleComponent);
    return LoginModuleComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #57068c;\n}\n\na.navbar-brand {\n    color: #ffff;\n    font-family: \"Comic Sans MS\", cursive, sans-serif\n}\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink = \"/problems\">About Us<span class=\"sr-only\">(current)</span></a></li>\n        <li><a routerLink = \"/newProblem\">Add New Problem</a></li>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </li>\n        <li><a [routerLink]=\"['/login']\">Login</a></li>\n        <li><a [routerLink]=\"['/register']\">Sign Up</a></li>\n        <li><a (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = "Talents3";
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        console.log(this.authService.getToken());
        console.log(this.authService.getEmail());
        this.authService.logout();
        this.router.navigate(['users']);
        console.log("logout");
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register-module/register-module.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/register-module/register-module.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.form-group {\n  padding: 5px;\n  border: none;\n}\n\n.signup_form {\n  padding: 20px;\n}\n\n.form-signin {\n  background-color: lightblue;\n  width: 40%;\n  padding: 20px;\n  border-radius: 5px;\n}\n\n.btn-primary {\n  padding : 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/register-module/register-module.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/register-module/register-module.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" align=\"center\">\n  <div class=\"jumbotron\">\n  <div class=\"login_form\">\n    <div class=\"inner\">\n      <form class=\"form-signin\" (ngSubmit)=\"signup()\" #signupForm=\"ngForm\">\n        <div class=\"alert alert-warning alert-dismissible\" role=\"alert\" *ngIf=\"message !== ''\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n              {{message}}\n        </div>\n        <div class=\"text-center mb-4\">\n          <h2 class=\"h3 mb-3 font-weight-normal\">Sign Up for Talents3</h2>\n        </div>\n\n        <div class=\"form-group\">\n          <input id=\"id_username\" minlength=\"1\" maxlength=\"25\" name=\"username\" type=\"text\" placeholder=\"Enter Your Name\" class=\"form-control\" [(ngModel)]=\"signupData.username\" required/>\n        </div>\n\n        <div class=\"form-group\">\n          <input id=\"id_password1\" name=\"password1\" type=\"password\" placeholder=\"Password\" class=\"form-control\" value=\"\" (keyup)=\"check()\" [(ngModel)]=\"signupData.password\" required/>\n        </div>\n\n        <div class=\"form-group\">\n          <input id=\"id_password2\" name=\"password2\" type=\"password\" placeholder=\"Confirm Password\" class=\"form-control\" value=\"\" (keyup)=\"check()\" [(ngModel)]=\"confirmPassword\" required/>\n          <span id='message'></span>\n        </div>\n\n        <div class=\"form-group\">\n          <input id=\"id_email\" type=\"email\" name=\"email\" placeholder=\"E-mail address\" class=\"form-control\" [(ngModel)]=\"signupData.email\" required/>\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!signupForm.form.valid\">Sign Up</button>\n        <p class=\"mt-5 mb-3 text-muted text-center\">copyright {{footer}} ©</p>\n      </form>\n  </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/register-module/register-module.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/register-module/register-module.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegisterModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModuleComponent", function() { return RegisterModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterModuleComponent = /** @class */ (function () {
    function RegisterModuleComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        // create a shadow copy of problem and assign it to newProblem
        // Object.assign() copies property values. If the source value is a
        //reference to an object, it only copies that reference value.
        this.signupData = { username: '', email: '', password: '' };
        this.confirmPassword = '';
        this.message = '';
    }
    RegisterModuleComponent.prototype.ngOnInit = function () {
    };
    RegisterModuleComponent.prototype.check = function () {
        console.log(this.confirmPassword);
        console.log(this.signupData.password);
        if (this.confirmPassword !== this.signupData.password) {
            this.message = 'Password not match!!';
        }
        else {
            this.message = '';
        }
    };
    RegisterModuleComponent.prototype.signup = function () {
        var _this = this;
        this.authService.register(this.signupData).subscribe(function (resp) {
            console.log(resp);
            _this.router.navigate(['login']);
        }, function (err) {
            _this.message = err.error.msg;
        });
    };
    RegisterModuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-module',
            template: __webpack_require__(/*! ./register-module.component.html */ "./src/app/components/register-module/register-module.component.html"),
            styles: [__webpack_require__(/*! ./register-module.component.css */ "./src/app/components/register-module/register-module.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterModuleComponent);
    return RegisterModuleComponent;
}());



/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/user-detail/user-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#icon-element {\n  display:inline-block;\n  width: 5%;\n  margin-left:0px;\n}\n#detail-element {\n  display:inline-block;\n  width: 90%;\n  padding-left: 20px;\n  margin-right: 0px;\n}\n#edit {\n  white-space: nowrap;\n  display:inline-block;\n}\n#experience {\n  margin-top: 20px;\n}\n#companyName {\n  font-size: 20px;\n}\n#universityName {\n  font-size: 20px;\n}\n.sticky {\n  top: 0;\n  width: 100%\n}\n/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */\n.sticky + .content {\n  padding-top: 30px;\n}\n.floating-menu {\n  padding: 0px;\n  width: 130px;\n  z-index: 100;\n  position: fixed;\n}\n.img-responsive {\n  border-radius:50%;\n  width: 40%;\n  height: 40%;\n}\n.menu-group-item {\n\n}\n.info-group-item {\n  white-space: nowrap;\n  background-color: transparent;\n  border: none;\n}\n.info {\n  margin-top: 50px;\n}\n.icon {\n  width: 5%;\n}\n.jumbotron {\n  background-color: lightblue;\n}\n.btn-outline-primary {\n  border-color: #57068c;\n  background-color: transparent;\n}\n.btn-outline-secondary {\n  display: inline-block;\n  width: 50px;\n  border-color: #57068c;\n  background-color: transparent;\n}\n.tags-holder {\n  margin-top : 10px;\n}\n.tags-area {\n  margin-top: 20px;\n}\n.education-holder {\n  border: none;\n}\n.education {\n  background-color: transparent;\n  border: none;\n}\n.work-experience {\n  border: none;\n}\n.project {\n  border: none;\n}\n.lead {\n  display: inline-block;\n  font-weight: bold;\n  color: purple;\n}\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ffff;\n    margin: 1em 0;\n    padding: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-detail/user-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"floating-menu nav navbar-nav\" id=\"floating-menu\">\n  <button class=\"list-group-item menu-group-item active\">Contact</button>\n  <button class=\"list-group-item menu-group-item\">Education</button>\n  <button class=\"list-group-item menu-group-item\">Experience\n  </button>\n  <button class=\"list-group-item menu-group-item\" [routerLink]=\"['/blogs']\"> Blogs</button>\n</nav>\n  <!-- now need to start to build the image and contact info division -->\n<div class=\"container\">\n    <div class=\"jumbotron\">\n        <div class=\"row\">\n          <!-- Left part-->\n          <div class=\"col-md-6\">\n            <div class=\"column\" align=\"center\">\n              <img class=\"float-left\" style=\" border-radius: 50%; \" src=\"{{user.image}}\">\n              <div class=\"lead\" align=\"center\">{{user.username}}</div>\n              <div align=\"center\">     <!-- hard code some data -->\n                <div>\n                  <h5 align=\"center\">{{user.adress}}</h5>\n                  <div align=\"center\">\n                    <a href=\"mailto:yg1497@nyu.edu\">Email: {{user.email}}</a>\n                  </div>\n                    <div align=\"center\">\n                  <a href=\"tel:6462098552\" align=\"center\"> Tel: {{user.phone}}</a>\n                    </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- Right part-->\n          <div class=\"col-md-6 info\" id=\"experience\">\n            <div class=\"column\" align=\"center\">\n              <!-- Personal education and working Experience display-->\n              <div>\n                <div class=\"userDescription\" align=\"left\" style=\"font-weight: bold; font-size: large;\">{{user.description}}</div>\n                <div class=\"container\" align=\"left\">\n                  <button class=\"list-group-item info-group-item row\" align=\"center\">\n                      <img class=\"icon rounded float-left\" id=\"icon-element\" src=\"assets/images/education-icon.png\">\n                      <div id=\"detail-element\">New York University</div>\n                  </button>\n                  <button class=\"list-group-item info-group-item row\" align=\"center\">\n                      <img class=\"icon rounded float-left\" id=\"icon-element\" src=\"assets/images/work-icon.png\">\n                      <div id=\"detail-element\">Amazon Ltd.</div>\n                  </button>\n                  <button class=\"list-group-item info-group-item row\" align=\"center\">\n                      <img class=\"icon rounded float-left\" id=\"icon-element\" src=\"assets/images/blog-icon.png\">\n                      <div id=\"detail-element\">Blogs</div>\n                  </button>\n                </div>\n              </div>\n              <!-- Tag area -->\n              <div class=\"container tags-area\" align=\"left\">\n                <div align=\"left\">\n                  <div class= \"lead\" style=\"display: inline-block;\" align=\"left\" style=\"font-weight: bold; color: purple\">Tags</div>&nbsp;\n\n                </div>\n                <div class=\"tags-holder\" align=\"left\">\n\n                    <button type=\"button\" disabled class=\"btn btn-outline-primary btn-sm\" align=\"left\" *ngIf = \"user.isMale\" style=\"background-color:yellow; padding-left: 20px;\" >Male</button>&nbsp;\n\n\n                    <button type=\"button\" disabled class=\"btn btn-outline-primary btn-sm\" align=\"left\" style=\"background-color:red;padding-left: 20px;\" *ngIf = \"!user.isMale\" >Female</button>&nbsp;\n\n                    <button type=\"button\" disabled class=\"btn btn-outline-primary btn-sm \" align=\"left\" *ngIf = \"user.needVisaSponsor\" style=\"background-color: #ff1a1a;padding-left: 20px; \" >Need Sponsorship</button>&nbsp;\n\n                    <button type=\"button\" disabled class=\"btn btn-outline-primary btn-sm\" align=\"left\" *ngIf = \"user.usAuthorization\" style=\"background-color: #ffbf00;padding-left: 20px; \" >Legally Work</button>&nbsp;\n                    <button type=\"button\" disabled class=\"btn btn-outline-primary btn-sm\" align=\"left\" *ngIf = \"user.newGrads\" style=\"background-color: #00ff00; padding-left: 20px;\" >New Grad</button>\n                </div>\n                 <button class=\"btn btn-outline-secondary btn-sm\" align=\"right\" >edit</button>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"education-holder jumbotron\" id=\"education-holder\">\n      <div align=\"left\">\n        <div class= \"lead\" align=\"left\">Education</div>\n        <div class=\"modificationButtons\" style=\"float:right;\">\n          <button type=\"button\" class=\" btn btn-outline-secondary btn-sm\" align=\"center\">add</button>&nbsp;\n          <button type=\"button\" class=\" btn btn-outline-secondary btn-sm\" align=\"center\">edit</button>\n        </div>\n      </div>\n      <div class=\"education\" id=\"first-education\" *ngFor=\"let education of user.education\">\n        <hr/>\n        <div id=\"universityName\">{{education.universityName}}</div>\n        <div>{{education.degreeType}}</div>\n        <div>{{education.major}}</div>\n        <div>GPA:3.99</div>\n        <div *ngFor=\"let course of education.courses\">Core Course: {{course.courseName}}  {{course.courseGrade}}</div>\n      </div>\n    </div>\n\n    <div class=\"work-experience-holder jumbotron\">\n      <div align=\"left\">\n        <div class= \"lead\" align=\"left\">Work Experience</div>\n        <div class=\"modificationButtons\" style=\"float:right;\">\n          <button type=\"button\" class=\" btn btn-outline-secondary btn-sm\" align=\"center\">add</button>&nbsp;\n          <button type=\"button\" class=\" btn btn-outline-secondary btn-sm\" align=\"center\">edit</button>\n        </div>\n      </div>\n        <div class=\"work-experience\" id=\"first-education\" *ngFor=\"let experience of user.experience\">\n          <hr/>\n          <div id=\"companyName\">{{experience.companyName}}</div>\n          <div id=\"experienceTitle\">{{experience.title}}</div>\n          <div id=\"experienceStartDate\">{{experience.startDate}}</div>&nbsp;\n        </div>\n\n    </div>\n\n    <div class=\"project-experience-holder jumbotron\">\n      <div align=\"left\">\n        <div class= \"lead\" align=\"left\">Project Experience</div>\n        <div class=\"modificationButtons\" style=\"float:right;\">\n          <button type=\"button\" class=\" btn btn-outline-secondary btn-sm\" align=\"center\">add</button>&nbsp;\n          <button type=\"button\" class=\" btn btn-outline-secondary btn-sm\" align=\"center\">edit</button>\n        </div>\n      </div>\n      <!-- TODO:  -->\n      <div id=\"first-education\">\n        <div class=\"lead\">Alpha-Go Development</div>\n        <div>AI Developer</div>\n        <div>August 2016 - August 2017  1 year</div>\n      </div>\n      <hr/>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-detail/user-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.getUser(+params['id'])
                .then(function (user) { return _this.user = user; });
        });
    };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/components/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/components/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/user-info-list/user-info-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/user-info-list/user-info-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    border-radius: 50%;\n   \n    padding-top: 2px;\n    padding-bottom: 2px;\n\n    width: 100px;\n    height: 100px;\n};\na {\n\tpadding-top: 10px;\n};\n.searchFilter {\n  height: 800px; \n  \n}\n.searchFilter.btn {\n    display: inline-block;\n    font-weight: 400;\n    line-height: 1.25;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: .5rem 1rem;\n    font-size: 16px;\n    border-radius: .25rem;\n    height: 100px;\n    min-width: 20px;\n}\n.searchFilter .btn-secondary {\n    color: #373a3c;\n    background-color: #fff;\n    border: 1px solid #ccc;\n}\n.searchFilter .btn-secondary:hover {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad;\n}\n.searchFilter .btn-search {\n  background-color: #00aced;\n  color: #fff;\n  border: 1px solid #00aced;\n}\n.searchFilter .btn-search:hover {\n  background-color: #b20a11;\n  color: #fff;\n  border: 1px solid #b20a11;\n}\n.searchFilter .label-icon {\n  display: none;  \n}\n.searchFilter .glyphicon {\n    margin-right: -15px;\n}\n.searchFilter .dropdown-menu .category_filters {\n  min-width: 178px;\n  width: 100%;\n  margin: 15px 0 0 -25px;\n}\n.searchFilter .dropdown-menu-right {\n    right: 170px;\n    min-width: 175px;\n  top: 90%;\n}\n.searchFilter .dropdown-menu .category_filters li {\n  list-style-type: none;\n  padding: 2px 10px;\n  font-size: 18px;\n}\n.searchFilter .dropdown-menu .category_filters label {\n  margin-left: 15px;\n}\n@media (min-width: 1400px) {\n  .ct-header .ct-jumbotron .inner {\n    max-width: 470px;\n    min-height: 230px;\n  }  \n}\n@media (max-width: 1400px) {\n  .ct-header-slider .item {\n    background-size:contain;\n    background-repeat: no-repeat;\n    background-position: center top;\n  }  \n}\n@media (min-width: 769px) and (max-width: 1400px) {\n  .ct-header-slider .item {\n    height: auto;  \n  }\n}\n@media (max-width: 1260px) {\n  #dots-container {\n    display: none;\n  }\n}\n@media (min-width: 992px){\n  .ct-footer2 .ct-newsletter {\n    max-width: 100%;\n  }\n  #dots-container {\n    bottom: 100px;\n  } \n}\n@media (min-width: 768px){\n  .ct-searchbar:before {\n    height: 92px;\n    bottom: -1px;\n  }\n  .page-scrolled .navbar .navbar-nav li > * {\n    min-height: 67px;\n    height: 67px;\n  }\n  .page-scrolled .navbar .navbar-nav {\n    height: 100%!important;\n  }\n  .ct-current-facts h2 {\n    margin: 0 auto 0px;\n  }\n  .contentNews .ct-recent-news {\n    flex-direction: inherit;\n  }\n  .contentFaq .faq_question .col-sm-11 {\n    padding-right: 0px;\n  }\n  .peopleDetail h2 {\n    margin-top: -5px;\n  }\n  .searchFilter .btn {\n    min-width: 172px;  \n  }\n  .searchFilter .label-icon {\n    display: inline-block;  \n  }\n  .searchFilter .glyphicon {\n    margin-right: -5px;\n  }\n  .ct-header .ct-jumbotron {\n    top: 0;\n    margin-top: 5%;\n  }\n  .ct-header .ct-jumbotron h1 {\n    font-size: 2.5em;\n  }\n  .ct-news.ct-news--bigger h3 {\n    font-size: 41px;\n    line-height: 1.4;\n  }\n}\n@media (max-width: 768px){\n  .ct-header .ct-jumbotron {  \n    width: 80%;\n    margin: 20px 10px;\n    top: 40%;\n    width: 95%;\n  }\n  .ct-header .ct-jumbotron .inner {\n    max-width: 100%;\n  }\n  #dots-container {\n    display: none;\n  }\n  .main-section {\n    margin-top: -80px;\n  }\n  .searchFilter .dropdown-menu-right {\n  right: 0px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/user-info-list/user-info-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/user-info-list/user-info-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n\n\n<div class=\"container\" style=\"padding-top:3%; padding-left: 3%;padding-right: 3%;\">\n\t <div class=\"row searchFilter\"  >\n         <div class=\"col-sm-12\" >\n          <div class=\"input-group\" >\n           <input id=\"table_filter\" type=\"text\" class=\"form-control\"  placeholder= \"Search\" aria-label=\"Text input with segmented button dropdown\" >\n           <div class=\"input-group-btn\" >\n            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" ><span class=\"label-icon\" >Category</span> <span class=\"caret\" >&nbsp;</span></button>\n            <div class=\"dropdown-menu dropdown-menu-right\" >\n               <ul class=\"category_filters\" >\n                <li >\n                 <input class=\"cat_type category-input\" data-label=\"All\" id=\"all\" value=\"\" name=\"radios\" type=\"radio\" ><label for=\"all\" >All</label>\n                </li>\n                <li >\n                 <input type=\"radio\" name=\"radios\" id=\"Design\" value=\"Design\" ><label class=\"category-label\" for=\"Design\" >People</label>\n                </li>\n                <li >\n                 <input type=\"radio\" name=\"radios\" id=\"Marketing\" value=\"Marketing\" ><label class=\"category-label\" for=\"Marketing\" >Experience</label>\n                </li>\n                <li >\n                 <input type=\"radio\" name=\"radios\" id=\"Programming\" value=\"Programming\" ><label class=\"category-label\" for=\"Programming\" >Education</label>\n                </li>\n                <li >\n                 <input type=\"radio\" name=\"radios\" id=\"Sales\" value=\"Sales\" ><label class=\"category-label\" for=\"Sales\" >Skill</label>\n                </li>\n                <li >\n                 <input type=\"radio\" name=\"radios\" id=\"Support\" value=\"Support\" ><label class=\"category-label\" for=\"Support\" >Project</label>\n                </li>\n               </ul>\n            </div>\n            <button id=\"searchBtn\" type=\"button\" class=\"btn btn-secondary btn-search\" ><span class=\"glyphicon glyphicon-search\" >&nbsp;</span> <span class=\"label-icon\" >Search</span></button>\n           </div>\n          </div>\n         </div>\n      </div>\n</div>\n\n   <div class=\"container\" style=\"padding-left: 8%; padding-top: 5%; padding-right: 8%;\">   \n   <div class=\"row text-center\" style=\"display:flex; flex-wrap: wrap;\">\n     \n   \n\n\n\n    <div class=\"col-md-3 col-sm-6\" *ngFor=\"let user of users\">\n    \t<div class=\"thumbnail\">\n\n            <div class=\"card\" style=\"background-color: white;\" >\n\n\t\t\t  <img class=\"card-img-top\" src=\"{{user.image}}\" alt=\"Card image cap\">\n\t\t\t  <div class=\"card-body\">\n\t\t\t    <h5 class=\"card-title\">{{user.username}}</h5>\n\t\t\t    <p class=\"card-text\">{{user.description}}</p>\n\t\t\t    <ul class=\"list-group\">\n\t\t\t    <li  *ngFor=\"let experience of user.experience | slice:0:2; let i = index\" class=\"list-group-item\"> {{experience.companyName}} : {{experience.title}}</li>\n\t\t\t    </ul>\n\t\t\t    <a [routerLink]=\"['/users', user.id]\" class=\"btn btn-primary\" >Profile</a>\n\t\t\t  </div>\n\t\t    </div>\n\n\n\n<!-- \n\t        <h4 align=\"left\"> {{user.username}}</h4>\n\t        <div class=\"row\">\n\t            <div class = \"col align-self-start\"  >\n\t            \t<img src=\"{{user.image}}\"  >\n\t            </div>\n\t            <div  class=\"col align-self-start\">\n\t            \t<li  *ngFor=\"let experience of user.experience\"> {{experience.companyName}} : {{experience.title}}</li>\n\t            </div>\n\t        </div>\n\t\t    <a   [routerLink]=\"['/users', user.id]\">\n\t\t      <strong class=\"title\">Profile</strong>\n\t\t    </a> -->\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-info-list/user-info-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/user-info-list/user-info-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserInfoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoListComponent", function() { return UserInfoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoListComponent = /** @class */ (function () {
    function UserInfoListComponent(dataService) {
        this.dataService = dataService;
    }
    UserInfoListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserInfoListComponent.prototype.ngOnDestroy = function () {
        this.subscriptionUsers.unsubscribe();
    };
    UserInfoListComponent.prototype.getUsers = function () {
        var _this = this;
        this.subscriptionUsers = this.dataService.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    UserInfoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info-list',
            template: __webpack_require__(/*! ./user-info-list.component.html */ "./src/app/components/user-info-list/user-info-list.component.html"),
            styles: [__webpack_require__(/*! ./user-info-list.component.css */ "./src/app/components/user-info-list/user-info-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UserInfoListComponent);
    return UserInfoListComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
    }
    AuthService.prototype.register = function (signupData) {
        return this.httpClient.post('/api/v1/register', signupData);
    };
    AuthService.prototype.login = function (loginData) {
        return this.httpClient.post('/api/v1/login', loginData);
    };
    AuthService.prototype.authenticateUser = function (token, email) {
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
    };
    AuthService.prototype.isUserAuthenticated = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    };
    AuthService.prototype.getEmail = function () {
        return localStorage.getItem('email');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        this._userSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    // getUsers() : User[] {
    //   return this.users;
    // }
    DataService.prototype.getUsers = function () {
        var _this = this;
        this.httpClient.get('api/v1/users')
            .toPromise()
            .then(function (res) {
            _this._userSource.next(res);
        })
            .catch(this.handleError);
        return this._userSource.asObservable();
    };
    // getUser(id: number): User {
    //   return this.users.find( (user) => user.id === id);
    // }
    DataService.prototype.getUser = function (id) {
        return this.httpClient.get("api/v1/users/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    // getUserByName(name: String): User {
    //   return this.users.find((user) => user.name === name);
    // }
    // addUser(user: User) {
    //   user.id = this.users.length + 1;
    //   this.users.push(user);
    // }
    DataService.prototype.addUser = function (user) {
        var _this = this;
        // problem.id = this.problems.length + 1;
        // this.problems.push(problem);
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.httpClient.post('api/v1/users', user, options)
            .toPromise()
            .then(function (res) {
            //update the _userSource
            _this.getUsers();
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.modifyUser = function (user) {
        var _this = this;
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.httpClient.put('api/v1/users', user, options)
            .toPromise()
            .then(function (res) {
            _this.getUsers();
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        return Promise.reject(error.body || error);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gaoyouxing/Desktop/Web/TalentsWeb/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map