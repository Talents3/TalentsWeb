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
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_register_module_register_module_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register-module/register-module.component */ "./src/app/components/register-module/register-module.component.ts");
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
                _components_register_module_register_module_component__WEBPACK_IMPORTED_MODULE_10__["RegisterModuleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]
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
        path: 'addUser',
        component: _components_register_module_register_module_component__WEBPACK_IMPORTED_MODULE_3__["RegisterModuleComponent"]
    },
    {
        path: '**',
        redirectTo: 'users'
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


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

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink = \"/problems\">About Us<span class=\"sr-only\">(current)</span></a></li>\n        <li><a routerLink = \"/newProblem\">Add New Problem</a></li>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </li>\n        <li><a href=\"/login\">Login</a></li>\n        <li><a href=\"/register\">Sign Up</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

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
    function NavbarComponent() {
        this.title = "Talents3";
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = ""

/***/ }),

/***/ "./src/app/components/register-module/register-module.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/register-module/register-module.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <form #formRef = \"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"userName\">User name</label>\n        <input name = \"userName\" id=\"userName\" class=\"form-control\"\n          type=\"text\" required placeholder=\"Please enter your name\"\n          [(ngModel)] = \"newUser.name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"userEducation\">education</label>\n        <textarea name = \"userEducation\" id=\"userEducation\" class=\"form-control\"\n         placeholder=\"Please enter your education\"\n          [(ngModel)] = \"newUser.education\" rows=\"2\">\n        </textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"userBlog\">blog</label>\n        <textarea name = \"userBlog\" id=\"userBlog\" class=\"form-control\"\n         placeholder=\"Please enter your blog\"\n          [(ngModel)] = \"newUser.blog\" rows=\"2\">\n        </textarea>\n      </div>\n      <div class=\"row\">\n        <div class = \"col-md-12\">\n          <button type=\"submit\" class=\"btn btn-primary pull-right\"\n            (click) = \"addUser()\"\n          > Add profile </button>\n        </div>\n      </div>\n    </form>\n  </div>\n"

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


var DEFAULT_USER = Object.freeze({
    id: 0,
    username: '',
    password: '',
    image: '',
    backgroundImage: '',
    age: 0,
    adress: '',
    phone: '',
    email: '',
    isMale: false,
    description: '',
    usAuthorization: false,
    needVisaSponsor: false,
    newGrads: false,
    skills: [],
    links: [],
    certificates: [],
    experiences: [],
    educations: [],
    blogs: [],
});
var RegisterModuleComponent = /** @class */ (function () {
    function RegisterModuleComponent(dataService) {
        this.dataService = dataService;
        // create a shadow copy of problem and assign it to newProblem
        // Object.assign() copies property values. If the source value is a
        //reference to an object, it only copies that reference value.
        this.newUser = Object.assign({}, DEFAULT_USER);
    }
    RegisterModuleComponent.prototype.ngOnInit = function () {
    };
    RegisterModuleComponent.prototype.addUser = function () {
        // assign newProblem a new problem instance
        // Otherwise newProblem have same reference as the one we added to the list
        // then when next time add new problem, it will override the problem we
        //have already add into the problem list.
        this.dataService.addUser(this.newUser);
        this.newUser = Object.assign({}, DEFAULT_USER);
    };
    RegisterModuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-module',
            template: __webpack_require__(/*! ./register-module.component.html */ "./src/app/components/register-module/register-module.component.html"),
            styles: [__webpack_require__(/*! ./register-module.component.css */ "./src/app/components/register-module/register-module.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
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

module.exports = "#icon-element {\n  display:inline-block;\n  width: 5%;\n  margin-left:0px;\n}\n#detail-element {\n  display:inline-block;\n  width: 90%;\n  padding-left: 20px;\n  margin-right: 0px;\n}\n#edit {\n  white-space: nowrap;\n  display:inline-block;\n}\n#experience {\n  margin-top: 20px;\n}\n.sticky {\n  top: 0;\n  width: 100%\n}\n/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */\n.sticky + .content {\n  padding-top: 30px;\n}\n.floating-menu {\n  padding: 0px;\n  width: 130px;\n  z-index: 100;\n  position: fixed;\n}\n.img-responsive {\n  border-radius:50%;\n  width: 40%;\n}\n.menu-group-item {\n\n}\n.info-group-item {\n  white-space: nowrap;\n  background-color: transparent;\n  border: none;\n}\n.info {\n  margin-top: 50px;\n}\n.icon {\n  width: 5%;\n}\n.jumbotron {\n  background-color: lightblue;\n}\n.btn-outline-primary {\n  border-color: #57068c;\n  background-color: transparent;\n}\n.btn-outline-secondary {\n  float:right;\n  display: inline-block;\n  width: 10%;\n  border-color: #57068c;\n  background-color: transparent;\n}\n.tags-holder {\n  margin-top : 10px;\n}\n.tags-area {\n  margin-top: 20px;\n}\n.education-holder {\n  border: none;\n}\n.education {\n  background-color: transparent;\n  border: none;\n}\n.work-experience {\n  border: none;\n}\n.project {\n  border: none;\n}\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ffff;\n    margin: 1em 0;\n    padding: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-detail/user-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"floating-menu nav navbar-nav\" id=\"floating-menu\">\n  <button class=\"list-group-item menu-group-item active\">Contact</button>\n  <button class=\"list-group-item menu-group-item\">Education</button>\n  <button class=\"list-group-item menu-group-item\">Experience\n  </button>\n  <button class=\"list-group-item menu-group-item\"> Blogs</button>\n</nav>\n  <!-- now need to start to build the image and contact info division -->\n<div class=\"container\">\n    <div class=\"jumbotron\">\n        <div class=\"row\">\n          <!-- Left part-->\n          <div class=\"col-md-6\">\n            <div class=\"column\" align=\"center\">\n              <img class=\"img-responsive rounded float-left\" src=\"assets/images/profile_pic.jpg\">\n              <div class=\"lead\" align=\"center\">Youxing Gao</div>\n              <div align=\"center\">     <!-- hard code some data -->\n                <div>\n                  <h5 align=\"center\">New York Area</h5>\n                  <div align=\"center\">\n                    <a href=\"mailto:yg1497@nyu.edu\">Email: yg1497@nyu.edu</a>\n                  </div>\n                    <div align=\"center\">\n                  <a href=\"tel:6462098552\" align=\"center\"> Tel: 6462098552</a>\n                    </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- Right part-->\n          <div class=\"col-md-6 info\" id=\"experience\">\n            <div class=\"column\" align=\"center\">\n              <!-- Personal education and working Experience display-->\n              <div>\n                <div class=\"lead\" align=\"left\">Just graduated from NYU</div>\n                <div class=\"container\" align=\"left\">\n                  <button class=\"list-group-item info-group-item row\" align=\"center\">\n                      <img class=\"icon rounded float-left\" id=\"icon-element\" src=\"assets/images/education-icon.png\">\n                      <div id=\"detail-element\">New York University</div>\n                  </button>\n                  <button class=\"list-group-item info-group-item row\" align=\"center\">\n                      <img class=\"icon rounded float-left\" id=\"icon-element\" src=\"assets/images/work-icon.png\">\n                      <div id=\"detail-element\">Amazon Ltd.</div>\n                  </button>\n                  <button class=\"list-group-item info-group-item row\" align=\"center\">\n                      <img class=\"icon rounded float-left\" id=\"icon-element\" src=\"assets/images/blog-icon.png\">\n                      <div id=\"detail-element\">Blogs</div>\n                  </button>\n                </div>\n              </div>\n              <!-- Tag area -->\n              <div class=\"container tags-area\" align=\"left\">\n                <div align=\"left\">\n                  <div class= \"lead\" style=\"display: inline-block;\" align=\"left\">Tags</div>&nbsp;\n                  <button class=\"btn btn-outline-secondary btn-sm\" align=\"center\">edit</button>\n                </div>\n                <div class=\"tags-holder\" align=\"left\">\n                  <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" align=\"left\">Male</button>&nbsp;\n                  <button type=\"button\" class=\"btn btn-outline-primary btn-sm\" align=\"left\">Foreign Student</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"education-holder jumbotron\" id=\"education-holder\">\n      <div align=\"left\">\n        <div class= \"lead\" style=\"display: inline-block;\" align=\"left\">Education</div>&nbsp;\n        <button type=\"button\" class=\" btn btn-outline-secondary btn-sm\" align=\"center\">edit</button>\n      </div>\n      <!-- TODO:  -->\n      <div class=\"education\" id=\"first-education\">\n        <div class=\"lead\">New York University</div>\n        <div>Master of Science in Computer Science</div>\n        <div>GPA:3.99</div>\n        <div>Core Course: Java, Database</div>\n      </div>\n      <hr/>\n    </div>\n\n    <div class=\"work-experience-holder jumbotron\">\n      <div align=\"left\">\n        <div class= \"lead\" style=\"display: inline-block;\" align=\"left\">Work Experience</div>&nbsp;\n        <button type=\"button\" class=\" btn btn-outline-secondary btn-sm\" align=\"center\">edit</button>\n      </div>\n      <!-- TODO:  -->\n        <div class=\"work-experience\" id=\"first-education\">\n          <div class=\"lead\">Google</div>\n          <div>Software Developer</div>\n          <div>August 2016 - August 2017  1 year</div>\n        </div>\n      <hr/>\n    </div>\n\n    <div class=\"project-experience-holder jumbotron\">\n      <div align=\"left\">\n        <div class= \"lead\" style=\"display: inline-block;\" align=\"left\">Project Experience</div>&nbsp;\n        <button type=\"button\" class=\" btn btn-outline-secondary btn-sm\" align=\"center\">edit</button>\n      </div>\n      <!-- TODO:  -->\n      <div id=\"first-education\">\n        <div class=\"lead\">Alpha-Go Development</div>\n        <div>AI Developer</div>\n        <div>August 2016 - August 2017  1 year</div>\n      </div>\n      <hr/>\n    </div>\n</div>\n"

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

module.exports = "img {\n    border-radius: 50%;\n   \n    padding-top: 2px;\n    padding-bottom: 2px;\n\n    width: 100px;\n    height: 100px;\n};\na {\n\tpadding-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/user-info-list/user-info-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/user-info-list/user-info-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <div class=\"row text-center\" style=\"display:flex; flex-wrap: wrap;\">\n\n    <div class=\"col-md-3 col-sm-6\" *ngFor=\"let user of users\">\n    \t<div class=\"thumbnail\">\n\n            <div class=\"card\" style=\"background-color: white;\" >\n\n\t\t\t  <img class=\"card-img-top\" src=\"{{user.image}}\" alt=\"Card image cap\">\n\t\t\t  <div class=\"card-body\">\n\t\t\t    <h5 class=\"card-title\">{{user.username}}</h5>\n\t\t\t    <p class=\"card-text\">{{user.decription}}</p>\n\t\t\t    <ul class=\"list-group\">\n\t\t\t    <li  *ngFor=\"let experience of user.experience | slice:0:2; let i = index\" class=\"list-group-item\"> {{experience.companyName}} : {{experience.title}}</li>\n\t\t\t    </ul>\n\t\t\t    <a [routerLink]=\"['/users', user.id]\" class=\"btn btn-primary\" >Profile</a>\n\t\t\t  </div>\n\t\t    </div>\n\n\n\n<!-- \n\t        <h4 align=\"left\"> {{user.username}}</h4>\n\t        <div class=\"row\">\n\t            <div class = \"col align-self-start\"  >\n\t            \t<img src=\"{{user.image}}\"  >\n\t            </div>\n\t            <div  class=\"col align-self-start\">\n\t            \t<li  *ngFor=\"let experience of user.experience\"> {{experience.companyName}} : {{experience.title}}</li>\n\t            </div>\n\t        </div>\n\t\t    <a   [routerLink]=\"['/users', user.id]\">\n\t\t      <strong class=\"title\">Profile</strong>\n\t\t    </a> -->\n        </div>\n    </div>\n  </div>\n</div>\n"

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
        //return this.problems.find( (problem) => problem.id === id );
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