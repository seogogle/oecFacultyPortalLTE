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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/login/login.component */ "./src/app/public/login/login.component.ts");
/* harmony import */ var _service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth-guard/auth-guard.service */ "./src/app/service/auth-guard/auth-guard.service.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [_service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'login', component: _public_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n    <!-- <ng-progress [color]=\"'red'\" [trickleSpeed]=\"500\"  [thick]=\"true\"></ng-progress> -->\n    <ng-progress #progressBar [color]=\"'red'\" [trickleSpeed]=\"500\" [meteor]=\"true\" [spinner]=\"false\" [thick]=\"true\"></ng-progress>\n</router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'ng6AdminLTE';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _public_public_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public/public.module */ "./src/app/public/public.module.ts");
/* harmony import */ var _private_private_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./private/private.module */ "./src/app/private/private.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _private_private_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./private/private.component */ "./src/app/private/private.component.ts");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/core/helper.service */ "./src/app/service/core/helper.service.ts");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var _service_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/interceptor/interceptor.service */ "./src/app/service/interceptor/interceptor.service.ts");
/* harmony import */ var _service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/auth-guard/auth-guard.service */ "./src/app/service/auth-guard/auth-guard.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./error404/error404.component */ "./src/app/error404/error404.component.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// import { FilterPipe } from './filter.pipe';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _private_private_component__WEBPACK_IMPORTED_MODULE_10__["PrivateComponent"],
                _error404_error404_component__WEBPACK_IMPORTED_MODULE_18__["Error404Component"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_22__["TestComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _public_public_module__WEBPACK_IMPORTED_MODULE_7__["PublicModule"],
                _private_private_module__WEBPACK_IMPORTED_MODULE_8__["PrivateModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot({
                    preventDuplicates: true,
                }),
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_19__["NgProgressModule"].forRoot(),
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_20__["NgProgressHttpModule"].forRoot(),
            ],
            providers: [_service_api_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _service_core_constant_service__WEBPACK_IMPORTED_MODULE_12__["ConstantService"], _service_core_helper_service__WEBPACK_IMPORTED_MODULE_13__["HelperService"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _service_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["InterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error404/error404.component.html":
/*!**************************************************!*\
  !*** ./src/app/error404/error404.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error404 works!\n</p>\n"

/***/ }),

/***/ "./src/app/error404/error404.component.scss":
/*!**************************************************!*\
  !*** ./src/app/error404/error404.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yNDA0L2Vycm9yNDA0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/error404/error404.component.ts":
/*!************************************************!*\
  !*** ./src/app/error404/error404.component.ts ***!
  \************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
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

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! ./error404.component.html */ "./src/app/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.scss */ "./src/app/error404/error404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/layout/asidenavbar/asidenavbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/asidenavbar/asidenavbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar elevation-4 sidebar-dark-info\" style=\"min-height: 313px;\">\n  <a href=\"javascrpit:void(0)\" class=\"brand-link bg-info\">\n    <img src=\"assets/dist/img/AdminLTELogo.png\" alt=\"AdminLTE Logo\" class=\"brand-image img-circle elevation-3\" style=\"opacity: .8\">\n    <span class=\"brand-text font-weight-light\"><b>Commission</b> Portal</span>\n  </a>\n\n  <div class=\"sidebar\">\n    <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n      <div class=\"image\">\n        <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle elevation-2\" alt=\"User Image\">\n      </div>\n      <div class=\"info\">\n        <a href=\"#\" routerLink=\"/profile\" class=\"d-block\">{{userName+' '+lastName}}</a>\n      </div>\n    </div>\n\n    <!-- Admin Menu Items -->\n    <nav class=\"mt-2\" *ngIf=\"userRoleId == 1\">\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\n        <li class=\"nav-item has-treeview\">\n          <a href=\"#\" class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"{{dashboardUrl}}\" [queryParams]=\"{userID:dashboardUserID,userRole:dashboardUserRole}\">\n            <i class=\"nav-icon fa fa-dashboard\"></i>\n            <p>\n              Dashboard\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-header\">MAIN NAVIGATION</li>\n        <li class=\"nav-item has-treeview\" [routerLinkActive]=\"['menu-open']\">\n          <a href=\"#\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-users\"></i>\n            <p>\n              Manage Users\n              <i class=\"right fa fa-angle-left\"></i>\n            </p>\n          </a>\n          <ul class=\"nav nav-treeview\">\n            <li class=\"nav-item\">\n              <a href=\"javascript:void(0)\" routerLink=\"/users/list\" routerLinkActive=\"active\" class=\"nav-link\">\n                <i class=\"fa fa-circle-o nav-icon\"></i>\n                <p>All Users</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"javascript:void(0)\" routerLink=\"/users/add\" routerLinkActive=\"active\" class=\"nav-link\">\n                <i class=\"fa fa-circle-o nav-icon\"></i>\n                <p>Add New User</p>\n              </a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n          <a href=\"#\" routerLink=\"/tiers/list\" [routerLinkActive]=\"['active']\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-list-alt\"></i>\n            <p>\n              Manager Tiers\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item has-treeview\" [routerLinkActive]=\"['menu-open']\">\n          <a href=\"#\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-list-alt\"></i>\n            <p>\n              Manage Rules\n              <i class=\"right fa fa-angle-left\"></i>\n            </p>\n          </a>\n          <ul class=\"nav nav-treeview\">\n            <li class=\"nav-item\">\n              <a href=\"javascript:void(0)\" routerLink=\"/rules/list\" [routerLinkActive]=\"['active']\" class=\"nav-link\">\n                <i class=\"fa fa-circle-o nav-icon\"></i>\n                <p>All Rules</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"javascript:void(0)\" routerLink=\"/rules/add\" [routerLinkActive]=\"['active']\" class=\"nav-link\">\n                <i class=\"fa fa-circle-o nav-icon\"></i>\n                <p>Add New Rule</p>\n              </a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"#\" routerLink=\"/settings\" [routerLinkActive]=\"['active']\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-cogs\"></i>\n            <p>\n              Settings\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-header\">QUICK LINKS</li>\n        <li class=\"nav-item\">\n          <a href=\"#\" routerLink=\"/profile\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-circle-o text-info\"></i>\n            <p class=\"text\">Profile</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" (click)=\"logout()\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-circle-o text-danger\"></i>\n            <p class=\"text\">Logout</p>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- End Admin Menu Items -->\n\n    <!-- Sales manager Menu Items -->\n    <nav class=\"mt-2\" *ngIf=\"userRoleId == 2\">\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\n        <li class=\"nav-item has-treeview\">\n          <a href=\"#\" class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"{{dashboardUrl}}\" [queryParams]=\"{userID:dashboardUserID,userRole:dashboardUserRole}\">\n            <i class=\"nav-icon fa fa-dashboard\"></i>\n            <p>\n              Dashboard\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-header\">MAIN NAVIGATION</li>\n        <li class=\"nav-item\">\n          <a href=\"#\" routerLink=\"/deals\" [routerLinkActive]=\"['active']\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-list-alt\"></i>\n            <p>\n              Manage Deals\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-header\">QUICK LINKS</li>\n        <li class=\"nav-item\">\n          <a href=\"#\" routerLink=\"/profile\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-circle-o text-info\"></i>\n            <p class=\"text\">Profile</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" (click)=\"logout()\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-circle-o text-danger\"></i>\n            <p class=\"text\">Logout</p>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- End Sales manager Menu Items -->\n\n    <!-- Start Fianance Manager menu items -->\n    <nav class=\"mt-2\" *ngIf=\"userRoleId == 3\">\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\n        <li class=\"nav-item has-treeview\">\n          <a href=\"#\" class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"{{dashboardUrl}}\" [queryParams]=\"{userID:dashboardUserID,userRole:dashboardUserRole}\">\n            <i class=\"nav-icon fa fa-dashboard\"></i>\n            <p>\n              Dashboard\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-header\">MAIN NAVIGATION</li>\n        <!-- <li class=\"nav-item\">\n          <a href=\"#\" routerLink=\"/deals\" [routerLinkActive]=\"['active']\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-list-alt\"></i>\n            <p>\n              Manage Deals\n            </p>\n          </a>\n        </li> -->\n        <li class=\"nav-header\">QUICK LINKS</li>\n        <li class=\"nav-item\">\n          <a href=\"#\" routerLink=\"/profile\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-circle-o text-info\"></i>\n            <p class=\"text\">Profile</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" (click)=\"logout()\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-circle-o text-danger\"></i>\n            <p class=\"text\">Logout</p>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- End finance Manager -->\n\n    <!-- Salesman Menu Items -->\n    <nav class=\"mt-2\" *ngIf=\"userRoleId == 4\">\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\n        <li class=\"nav-item has-treeview\">\n          <a href=\"#\" class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"{{dashboardUrl}}\" [queryParams]=\"{userID:dashboardUserID,userRole:dashboardUserRole}\">\n            <i class=\"nav-icon fa fa-dashboard\"></i>\n            <p>\n              Dashboard\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-header\">MAIN NAVIGATION</li>\n        <li class=\"nav-item\">\n          <a href=\"#\" routerLink=\"/deals\" [routerLinkActive]=\"['active']\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-list-alt\"></i>\n            <p>\n              Manage Deals\n            </p>\n          </a>\n        </li>\n\n        <li class=\"nav-header\">QUICK LINKS</li>\n        <li class=\"nav-item\">\n          <a href=\"#\" routerLink=\"/profile\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-circle-o text-info\"></i>\n            <p class=\"text\">Profile</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" (click)=\"logout()\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-circle-o text-danger\"></i>\n            <p class=\"text\">Logout</p>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- End Salesman Menu Items -->\n\n    <!-- Start Fianance Person menu items -->\n    <nav class=\"mt-2\" *ngIf=\"userRoleId == 5\">\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\n        <li class=\"nav-item has-treeview\">\n          <a href=\"#\" class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"{{dashboardUrl}}\" [queryParams]=\"{userID:dashboardUserID,userRole:dashboardUserRole}\">\n            <i class=\"nav-icon fa fa-dashboard\"></i>\n            <p>\n              Dashboard\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-header\">MAIN NAVIGATION</li>\n        <!-- <li class=\"nav-item\">\n          <a href=\"#\" routerLink=\"/deals\" [routerLinkActive]=\"['active']\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-list-alt\"></i>\n            <p>\n              Manage Deals\n            </p>\n          </a>\n        </li> -->\n        <li class=\"nav-header\">QUICK LINKS</li>\n        <li class=\"nav-item\">\n          <a href=\"#\" routerLink=\"/profile\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-circle-o text-info\"></i>\n            <p class=\"text\">Profile</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" (click)=\"logout()\" class=\"nav-link\">\n            <i class=\"nav-icon fa fa-circle-o text-danger\"></i>\n            <p class=\"text\">Logout</p>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- End finance Person -->\n\n  </div>\n</aside>"

/***/ }),

/***/ "./src/app/layout/asidenavbar/asidenavbar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/asidenavbar/asidenavbar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hc2lkZW5hdmJhci9hc2lkZW5hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/asidenavbar/asidenavbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/asidenavbar/asidenavbar.component.ts ***!
  \*************************************************************/
/*! exports provided: AsidenavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsidenavbarComponent", function() { return AsidenavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsidenavbarComponent = /** @class */ (function () {
    function AsidenavbarComponent(authSvc, helperSvc, route, router) {
        this.authSvc = authSvc;
        this.helperSvc = helperSvc;
        this.route = route;
        this.router = router;
    }
    AsidenavbarComponent.prototype.ngOnInit = function () {
        // console.log( this.helperSvc.lsGetItem('USERINFO'));
        this.userName = this.helperSvc.lsGetItem('USERINFO').first_name;
        this.lastName = this.helperSvc.lsGetItem('USERINFO').last_name;
        this.userRoleId = this.helperSvc.lsGetItem('USERINFO').role_id;
        // this.userRoleId = 4;
        console.log('in side bar section ', this.helperSvc.ssGetItem('userRole'));
        this.dashboardUrl = '/dashboard';
    };
    AsidenavbarComponent.prototype.logout = function () {
        this.authSvc.logout();
    };
    AsidenavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asidenavbar',
            template: __webpack_require__(/*! ./asidenavbar.component.html */ "./src/app/layout/asidenavbar/asidenavbar.component.html"),
            styles: [__webpack_require__(/*! ./asidenavbar.component.scss */ "./src/app/layout/asidenavbar/asidenavbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AsidenavbarComponent);
    return AsidenavbarComponent;
}());



/***/ }),

/***/ "./src/app/layout/footernavbar/footernavbar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/footernavbar/footernavbar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <strong>Copyright © 2017-2018 <a href=\"javascript:void(0)\" routerLink=\"/dashboard\">Commission Portal</a>.</strong>\n  All rights reserved.\n  <div class=\"float-right d-none d-sm-inline-block\">\n    <!-- <b>Version</b> 3.0.0-alpha -->\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/layout/footernavbar/footernavbar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/footernavbar/footernavbar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXJuYXZiYXIvZm9vdGVybmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/footernavbar/footernavbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/footernavbar/footernavbar.component.ts ***!
  \***************************************************************/
/*! exports provided: FooternavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooternavbarComponent", function() { return FooternavbarComponent; });
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

var FooternavbarComponent = /** @class */ (function () {
    function FooternavbarComponent() {
    }
    FooternavbarComponent.prototype.ngOnInit = function () {
    };
    FooternavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footernavbar',
            template: __webpack_require__(/*! ./footernavbar.component.html */ "./src/app/layout/footernavbar/footernavbar.component.html"),
            styles: [__webpack_require__(/*! ./footernavbar.component.scss */ "./src/app/layout/footernavbar/footernavbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooternavbarComponent);
    return FooternavbarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topnavbar/topnavbar.component */ "./src/app/layout/topnavbar/topnavbar.component.ts");
/* harmony import */ var _asidenavbar_asidenavbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asidenavbar/asidenavbar.component */ "./src/app/layout/asidenavbar/asidenavbar.component.ts");
/* harmony import */ var _footernavbar_footernavbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footernavbar/footernavbar.component */ "./src/app/layout/footernavbar/footernavbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            declarations: [
                _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__["TopnavbarComponent"],
                _asidenavbar_asidenavbar_component__WEBPACK_IMPORTED_MODULE_3__["AsidenavbarComponent"],
                _footernavbar_footernavbar_component__WEBPACK_IMPORTED_MODULE_4__["FooternavbarComponent"]
            ],
            exports: [
                _topnavbar_topnavbar_component__WEBPACK_IMPORTED_MODULE_2__["TopnavbarComponent"],
                _asidenavbar_asidenavbar_component__WEBPACK_IMPORTED_MODULE_3__["AsidenavbarComponent"],
                _footernavbar_footernavbar_component__WEBPACK_IMPORTED_MODULE_4__["FooternavbarComponent"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/topnavbar/topnavbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/topnavbar/topnavbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-header navbar navbar-expand border-bottom navbar-dark bg-info\">\n  <!-- Left navbar links -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fa fa-bars\"></i></a>\n    </li>\n    <!-- <li class=\"nav-item d-none d-sm-inline-block\">\n      <a href=\"javascrpit:void(0)\" class=\"nav-link\">Back To Home</a>\n    </li> -->\n    <!-- <li class=\"nav-item d-none d-sm-inline-block\">\n        <a href=\"javascrpit:void(0)\" class=\"nav-link\">Home</a>\n      </li>\n      <li class=\"nav-item d-none d-sm-inline-block\">\n        <a href=\"javascrpit:void(0)\" class=\"nav-link\">Contact</a>\n      </li> -->\n  </ul>\n\n  <!-- SEARCH FORM -->\n  <!-- <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fa fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form> -->\n\n  <!-- Right navbar links -->\n  <ul class=\"navbar-nav ml-auto\">\n    <!-- <li class=\"nav-item dropdown\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\">\n        <i class=\"fa fa-bell-o\"></i>\n        <span class=\"badge badge-warning navbar-badge\">15</span>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\n        <span class=\"dropdown-item dropdown-header\">15 Notifications</span>\n        <div class=\"dropdown-divider\"></div>\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" >\n          <i class=\"fa fa-envelope mr-2\"></i> 4 new messages\n          <span class=\"float-right text-muted text-sm\">3 mins</span>\n        </a>\n        <div class=\"dropdown-divider\"></div>\n        <a href=\"javascript:void(0)\" class=\"dropdown-item dropdown-footer\">See All Notifications</a>\n      </div>\n    </li> -->\n    <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\" routerLink=\"/dashboard\" href=\"javascript:void(0)\">\n        <i class=\"fa fa-home\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"userRoleId != 1\" [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\" routerLink=\"/deals\" href=\"#\">\n        <i class=\"fa fa-bar-chart\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"userRoleId == 1\" [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\" routerLink=\"/sales-report\" href=\"#\">\n        <i class=\"fa fa-bar-chart\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"userRoleId == 1\" [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\" routerLink=\"/settings\" href=\"javascript:void(0)\">\n        <i class=\"fa fa-cogs\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/layout/topnavbar/topnavbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/topnavbar/topnavbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.dropdown-item {\n  color: #000 !important; }\n\na.dropdown-item:focus {\n  color: #fff !important; }\n\n.navbar ul.navbar-nav.ml-auto li.nav-item.active {\n  height: 40px;\n  width: 40px;\n  text-align: center;\n  background-color: #00A1B9;\n  border: 2px solid #ffffff; }\n\n.navbar ul.navbar-nav.ml-auto li.nav-item.active a.nav-link {\n  text-align: center;\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RvcG5hdmJhci9DOlxcUHJvamVjdHNcXE5vZGVKU1xcQW5ndWxhcjZcXG5nNkFkbWluTFRFL3NyY1xcYXBwXFxsYXlvdXRcXHRvcG5hdmJhclxcdG9wbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBR0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdG9wbmF2YmFyL3RvcG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEuZHJvcGRvd24taXRlbXtcbiAgICBjb2xvcjojMDAwICFpbXBvcnRhbnQ7XG59XG5cbmEuZHJvcGRvd24taXRlbTpmb2N1c3tcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyIHVsLm5hdmJhci1uYXYubWwtYXV0byBsaS5uYXYtaXRlbS5hY3RpdmUge1xuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICMzNDNhNDA7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEExQjk7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbn1cblxuLm5hdmJhciB1bC5uYXZiYXItbmF2Lm1sLWF1dG8gbGkubmF2LWl0ZW0uYWN0aXZlIGEubmF2LWxpbmsge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/topnavbar/topnavbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/topnavbar/topnavbar.component.ts ***!
  \*********************************************************/
/*! exports provided: TopnavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavbarComponent", function() { return TopnavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_core_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/core/helper.service */ "./src/app/service/core/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopnavbarComponent = /** @class */ (function () {
    function TopnavbarComponent(helperSvc) {
        this.helperSvc = helperSvc;
    }
    TopnavbarComponent.prototype.ngOnInit = function () {
        this.userRoleId = this.helperSvc.lsGetItem('USERINFO').role_id;
        this.loggedInId = this.helperSvc.lsGetItem('USERINFO').id;
    };
    TopnavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topnavbar',
            template: __webpack_require__(/*! ./topnavbar.component.html */ "./src/app/layout/topnavbar/topnavbar.component.html"),
            styles: [__webpack_require__(/*! ./topnavbar.component.scss */ "./src/app/layout/topnavbar/topnavbar.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_service_core_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]])
    ], TopnavbarComponent);
    return TopnavbarComponent;
}());



/***/ }),

/***/ "./src/app/private/dashboard/admin-dashboard/admin-dashboard.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/private/dashboard/admin-dashboard/admin-dashboard.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1 class=\"m-0 text-dark\">Welcome to {{title}} Dashboard\n        </h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Home</a></li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-6\">\n        <div class=\"small-box bg-info\">\n          <div class=\"inner\">\n            <h3>{{totalSalesCount}}<sup style=\"font-size: 20px\">#</sup></h3>\n            <p>Total Sales</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-stats-bars\"></i>\n          </div>\n          <a href=\"javascript:void(0)\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n       \n        <div class=\"col-lg-3\">\n         \n          <!-- /.card -->\n\n          <div class=\"card\">\n            <div class=\"card-header no-border\">\n              <h3 class=\"card-title\">SalesMan Of Month</h3>\n            </div>\n            <div class=\"card-body p-0\">\n              <table class=\"table table-striped table-valign-middle\">\n                <thead>\n                  <tr>\n                    <th>Salesman</th>\n                    <th># of Sale</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let salemon of salesmanOfMonth\">\n                    <td>{{salemon.username}}</td>\n                    <td>{{salemon.salesman_count}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <!-- /.card -->\n        </div>\n        \n        <div class=\"col-lg-6\">\n          <!-- /.card -->\n          <div class=\"card\">\n            <div class=\"card-header no-border\">\n              <h3 class=\"card-title\">Sales</h3>\n            </div>\n            <div class=\"card-body p-0\">\n              <table class=\"table table-striped table-valign-middle\">\n                <thead>\n                <tr>\n                  <th>Type of Sale</th>\n                  <th># of Sale</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td>\n                    Outside Finance\n                  </td>\n                  <td>0</td>\n                </tr>\n                <tr>\n                  <td>\n                    Cash/Credit Unions\n                  </td>\n                  <td>{{totalDealsCountCash + totalDealsCountWholeSale}}</td>\n                </tr>\n                <tr>\n                  <td>\n                    In-House\n                  </td>\n                  <td>{{totalDealsCountInhouse}}</td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <!-- /.card -->\n        </div>\n     \n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"card\">\n        </div>\n        <!-- /.card -->\n      </div>\n      <!-- /.col-md-6 -->\n      <div class=\"col-md-6\">\n        <div class=\"card card-info card-outline\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">Sales Chart</h3>\n          </div>\n          <!-- /.card-header -->\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <div class=\"chart-responsive\">\n                  <canvas id=\"pieChart\" height=\"220\"></canvas>\n                </div>\n                <!-- ./chart-responsive -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-md-2\">\n                <ul class=\"chart-legend clearfix\">\n                  <li><i class=\"fa fa-circle-o text-jan\"></i> Jan</li>\n                  <li><i class=\"fa fa-circle-o text-feb\"></i> Feb</li>\n                  <li><i class=\"fa fa-circle-o text-mar\"></i> March</li>\n                  <li><i class=\"fa fa-circle-o text-apr\"></i> April</li>\n                  <li><i class=\"fa fa-circle-o text-may\"></i> May</li>\n                  <li><i class=\"fa fa-circle-o text-jun\"></i> June</li>\n                </ul>\n              </div>\n              <div class=\"col-md-2\">\n                <ul class=\"chart-legend clearfix\">\n                  <li><i class=\"fa fa-circle-o text-jul\"></i> July</li>\n                  <li><i class=\"fa fa-circle-o text-aug\"></i> Aug</li>\n                  <li><i class=\"fa fa-circle-o text-sep\"></i> Sep</li>\n                  <li><i class=\"fa fa-circle-o text-oct\"></i> Oct</li>\n                  <li><i class=\"fa fa-circle-o text-nov\"></i> Nov</li>\n                  <li><i class=\"fa fa-circle-o text-dec\"></i> Dec</li>\n                </ul>\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.card-body -->\n        </div>\n      </div>\n      <!-- /.col-md-6 -->\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/private/dashboard/admin-dashboard/admin-dashboard.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/private/dashboard/admin-dashboard/admin-dashboard.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-jan {\n  color: #736bae; }\n\n.text-feb {\n  color: #00d89e; }\n\n.text-mar {\n  color: #e76e6c; }\n\n.text-apr {\n  color: #3b9ea0; }\n\n.text-may {\n  color: #b47298; }\n\n.text-jun {\n  color: #bce150; }\n\n.text-jul {\n  color: #518fae; }\n\n.text-aug {\n  color: #e48444; }\n\n.text-sep {\n  color: #28c3a7; }\n\n.text-oct {\n  color: #936ea3; }\n\n.text-nov {\n  color: #ded459; }\n\n.text-dec {\n  color: #ce7083; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL0M6XFxQcm9qZWN0c1xcTm9kZUpTXFxBbmd1bGFyNlxcbmc2QWRtaW5MVEUvc3JjXFxhcHBcXHByaXZhdGVcXGRhc2hib2FyZFxcYWRtaW4tZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxjQUF3QixFQUFBOztBQUU1QjtFQUdJLGNBQXVCLEVBQUE7O0FBRTNCO0VBR0ksY0FBeUIsRUFBQTs7QUFFN0I7RUFHSSxjQUF3QixFQUFBOztBQUU1QjtFQUdJLGNBQXlCLEVBQUE7O0FBRTdCO0VBR0ksY0FBd0IsRUFBQTs7QUFFNUI7RUFHSSxjQUF3QixFQUFBOztBQUU1QjtFQUdJLGNBQXVCLEVBQUE7O0FBRTNCO0VBR0ksY0FBd0IsRUFBQTs7QUFFNUI7RUFHSSxjQUF5QixFQUFBOztBQUU3QjtFQUdJLGNBQXdCLEVBQUE7O0FBRTVCO0VBR0ksY0FBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1qYW5cbntcbiAgICAvLyBjb2xvcjojRTUyQjUwO1xuICAgIGNvbG9yOnJnYigxMTUsIDEwNywgMTc0KTsgICAgXG59XG4udGV4dC1mZWJcbntcbiAgICAvLyBjb2xvcjojRkZCRjAwOyAgICBcbiAgICBjb2xvcjogcmdiKDAsIDIxNiwgMTU4KTtcbn1cbi50ZXh0LW1hclxue1xuICAgIC8vIGNvbG9yOiM5OTY2Q0M7ICAgIFxuICAgIGNvbG9yOiByZ2IoMjMxLCAxMTAsIDEwOCk7XG59XG4udGV4dC1hcHJcbntcbiAgICAvLyBjb2xvcjojRkJDRUIxOyAgICBcbiAgICBjb2xvcjogcmdiKDU5LCAxNTgsIDE2MCk7XG59XG4udGV4dC1tYXlcbntcbiAgICAvLyBjb2xvcjojN0ZGRkQ0OyAgICBcbiAgICBjb2xvcjogcmdiKDE4MCwgMTE0LCAxNTIpO1xufVxuLnRleHQtanVuXG57XG4gICAgLy8gY29sb3I6IzAwN0ZGRjsgICAgXG4gICAgY29sb3I6IHJnYigxODgsIDIyNSwgODApO1xufVxuLnRleHQtanVsXG57XG4gICAgLy8gY29sb3I6Izg5Q0ZGMDsgICAgXG4gICAgY29sb3I6IHJnYig4MSwgMTQzLCAxNzQpO1xufVxuLnRleHQtYXVnXG57XG4gICAgLy8gY29sb3I6IzdGRkYwMDsgICAgXG4gICAgY29sb3I6cmdiKDIyOCwgMTMyLCA2OCkgO1xufVxuLnRleHQtc2VwXG57XG4gICAgLy8gY29sb3I6IzAwMDAwMDsgIFxuICAgIGNvbG9yOiByZ2IoNDAsIDE5NSwgMTY3KTsgIFxufVxuLnRleHQtb2N0XG57XG4gICAgLy8gY29sb3I6IzAwMDBGRjsgICAgXG4gICAgY29sb3I6IHJnYigxNDcsIDExMCwgMTYzKTtcbn1cbi50ZXh0LW5vdlxue1xuICAgIC8vIGNvbG9yOiMwMDk1QjY7ICBcbiAgICBjb2xvcjogcmdiKDIyMiwgMjEyLCA4OSk7IFxufVxuLnRleHQtZGVjXG57XG4gICAgLy8gY29sb3I6IzhBMkJFMjsgICAgXG4gICAgY29sb3I6IHJnYigyMDYsIDExMiwgMTMxKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/private/dashboard/admin-dashboard/admin-dashboard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/private/dashboard/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _assets_plugins_chartjs_old_Chart_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/plugins/chartjs-old/Chart.min.js */ "./src/assets/plugins/chartjs-old/Chart.min.js");
/* harmony import */ var _assets_plugins_chartjs_old_Chart_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_chartjs_old_Chart_min_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(apiSvc, constantSvc) {
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.totalSalesCount = 0;
        this.totalDealsCountWholeSale = 0;
        this.totalDealsCountCash = 0;
        this.totalDealsCountInhouse = 0;
        this.param = [];
        this.salesmanOfMonth = Array();
        this.mySalesCount = 0;
        this.teamSalesCount = 0;
        this.totalSalesOfMonth = Array();
        this.month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.title = 'Administration';
        this.chartLabel = 'pieChart';
        this.initChart();
        this.countTotalSaleMonth();
        this.countAllSales();
        this.getSalesmanOfMonth();
    };
    AdminDashboardComponent.prototype.getSalesmanOfMonth = function () {
        var _this = this;
        this.apiSvc.getService(this.constantSvc.APIConfig.SALESMANOFMONTH, this.param)
            .subscribe(function (data) {
            _this.salesmanOfMonth = data.salesman_of_month.length > 0 ? data.salesman_of_month : Array();
        }, function (error) {
        });
    };
    AdminDashboardComponent.prototype.countTotalSaleMonth = function () {
        var _this = this;
        this.apiSvc.getService(this.constantSvc.APIConfig.TOTALSALEOFMONTH, this.param)
            .subscribe(function (data) {
            _this.totalSalesOfMonth = data.sale_month_count;
            // console.log(data.sale_month_count);
            for (var k = 0; k < _this.month.length; k++) {
                _this.month[k] = k;
            }
            for (var i = 1, j = 0; i <= 12; i++) {
                if (_this.month[i] == _this.totalSalesOfMonth[j].month) {
                    _this.month[i] = _this.totalSalesOfMonth[j].sales_count;
                    if (j < (_this.totalSalesOfMonth.length - 1)) {
                        j++;
                    }
                }
                else {
                    _this.month[i] = 0;
                }
            }
            // console.log(this.month[10]);
            _this.initChart();
        }, function (error) {
        });
    };
    AdminDashboardComponent.prototype.countAllSales = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.TOTALSALES, this.param)
            .subscribe(function (data) {
            _this.totalSalesCount = data.deals_count;
            // this.initChart();
        }, function (error) {
        });
        this.apiSvc.getService(this.constantSvc.APIConfig.TOTALDEALS_WHOLESALE, this.param)
            .subscribe(function (data) {
            _this.totalDealsCountWholeSale = data.deals_count;
            // this.initChart();
        }, function (error) {
        });
        this.apiSvc.getService(this.constantSvc.APIConfig.TOTALDEALS_CASH, this.param)
            .subscribe(function (data) {
            _this.totalDealsCountCash = data.deals_count;
            // this.initChart();
        }, function (error) {
        });
        this.apiSvc.getService(this.constantSvc.APIConfig.TOTALDEALS_INHOUSE, this.param)
            .subscribe(function (data) {
            _this.totalDealsCountInhouse = data.deals_count;
            // this.initChart();
        }, function (error) {
        });
    };
    AdminDashboardComponent.prototype.countSalesBySalesTeam = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.COUNTSALESBYSALESTEAM, this.param)
            .subscribe(function (data) {
            _this.teamSalesCount = data.deals_count;
            // this.initChart();
        }, function (error) {
        });
    };
    AdminDashboardComponent.prototype.initChart = function () {
        // console.log('init chart called')
        var pieChartCanvas = $('#' + this.chartLabel).get(0).getContext('2d');
        var pieChart = new _assets_plugins_chartjs_old_Chart_min_js__WEBPACK_IMPORTED_MODULE_3__(pieChartCanvas);
        var PieData = [
            {
                value: this.month[1],
                color: 'rgb(115, 107, 174)',
                highlight: 'rgb(115, 107, 174)',
                label: 'Jan'
            },
            {
                value: this.month[2],
                color: 'rgb(0, 216, 158)',
                highlight: 'rgb(0, 216, 158)',
                label: 'Feb'
            },
            {
                value: this.month[3],
                color: 'rgb(231, 110, 108)',
                highlight: 'rgb(231, 110, 108)',
                label: 'March'
            },
            {
                value: this.month[4],
                color: 'rgb(59, 158, 160)',
                highlight: 'rgb(59, 158, 160)',
                label: 'April'
            },
            {
                value: this.month[5],
                color: 'rgb(180, 114, 152)',
                highlight: 'rgb(180, 114, 152)',
                label: 'May'
            },
            {
                value: this.month[6],
                color: 'rgb(188, 225, 80)',
                highlight: 'rgb(188, 225, 80)',
                label: 'June'
            },
            {
                value: this.month[7],
                color: 'rgb(81, 143, 174)',
                highlight: 'rgb(81, 143, 174)',
                label: 'July'
            },
            {
                value: this.month[8],
                color: 'rgb(228, 132, 68)',
                highlight: 'rgb(228, 132, 68)',
                label: 'Aug'
            },
            {
                value: this.month[9],
                color: 'rgb(40, 195, 167)',
                highlight: 'rgb(40, 195, 167)',
                label: 'Sep'
            },
            {
                value: this.month[10],
                color: 'rgb(147, 110, 163)',
                highlight: 'rgb(147, 110, 163)',
                label: 'Oct'
            },
            {
                value: this.month[11],
                color: 'rgb(222, 212, 89)',
                highlight: 'rgb(222, 212, 89)',
                label: 'Nov'
            },
            {
                value: this.month[12],
                color: 'rgb(206, 112, 131)',
                highlight: 'rgb(206, 112, 131)',
                label: 'Dec'
            }
        ];
        var pieOptions = {
            segmentShowStroke: true,
            segmentStrokeColor: '#fff',
            segmentStrokeWidth: 1,
            percentageInnerCutout: 0,
            animationSteps: 100,
            animationEasing: 'easeOutBounce',
            animateRotate: true,
            animateScale: false,
            responsive: true,
            maintainAspectRatio: false,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
            tooltipTemplate: '<%=value %> <%=label%> Sales',
        };
        pieChart.Doughnut(PieData, pieOptions);
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/private/dashboard/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.scss */ "./src/app/private/dashboard/admin-dashboard/admin-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/private/dashboard/dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/private/dashboard/dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-admin-dashboard *ngIf=\"showAdminDashboard\"></app-admin-dashboard>\n<app-salesmanager-dashboard *ngIf=\"showSalesmanagerDashboard\"></app-salesmanager-dashboard>\n<app-financemanager-dashboard *ngIf=\"showFinancemanagerDashboard\"></app-financemanager-dashboard>\n<app-salesman-dashboard *ngIf=\"showSalesmanDashboard\"></app-salesman-dashboard>\n<app-finance-person-dashboard *ngIf=\"showFinancepersonDashboard\"></app-finance-person-dashboard>"

/***/ }),

/***/ "./src/app/private/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/private/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/private/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/private/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(constantSvc, helperSvc, route, router) {
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.route = route;
        this.router = router;
        this.dashboard = 'admin';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //sessionStorage.setItem('dashboardUrl', this.router.url);
        this.dashboardUserID = this.route.snapshot.queryParamMap.get('userID');
        this.dashboardUserRole = this.route.snapshot.queryParamMap.get('userRole');
        if (this.dashboardUserID) {
            this.helperSvc.ssSetItem('userId', this.dashboardUserID);
            this.helperSvc.ssSetItem('userRole', this.dashboardUserRole);
            if (this.route.snapshot.queryParamMap.get('userRole') == '2')
                this.changeDashboard('salesmanager');
            else if (this.route.snapshot.queryParamMap.get('userRole') == '3')
                this.changeDashboard('financemanager');
            else if (this.route.snapshot.queryParamMap.get('userRole') == '4')
                this.changeDashboard('salesman');
            else if (this.route.snapshot.queryParamMap.get('userRole') == '5')
                this.changeDashboard('finance-person');
        }
        else {
            this.changeDashboard(this.helperSvc.ssGetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL));
            // this.changeDashboard(this.helperSvc.lsGetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL));
        }
    };
    Object.defineProperty(DashboardComponent.prototype, "showAdminDashboard", {
        get: function () {
            return this.dashboard === 'admin';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "showSalesmanagerDashboard", {
        get: function () {
            return this.dashboard === 'salesmanager';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "showSalesmanDashboard", {
        get: function () {
            return this.dashboard === 'salesman';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "showFinancemanagerDashboard", {
        get: function () {
            return this.dashboard === 'financemanager';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "showFinancepersonDashboard", {
        get: function () {
            return this.dashboard === 'finance-person';
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.changeDashboard = function (type) {
        this.dashboard = type;
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.helperSvc.lsRemoveItem('isUserDashboard');
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/private/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/private/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_core_constant_service__WEBPACK_IMPORTED_MODULE_1__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/private/dashboard/finance-person-dashboard/finance-person-dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/private/dashboard/finance-person-dashboard/finance-person-dashboard.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  finance-person-dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/private/dashboard/finance-person-dashboard/finance-person-dashboard.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/private/dashboard/finance-person-dashboard/finance-person-dashboard.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvZGFzaGJvYXJkL2ZpbmFuY2UtcGVyc29uLWRhc2hib2FyZC9maW5hbmNlLXBlcnNvbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/private/dashboard/finance-person-dashboard/finance-person-dashboard.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/private/dashboard/finance-person-dashboard/finance-person-dashboard.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: FinancePersonDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancePersonDashboardComponent", function() { return FinancePersonDashboardComponent; });
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

var FinancePersonDashboardComponent = /** @class */ (function () {
    function FinancePersonDashboardComponent() {
    }
    FinancePersonDashboardComponent.prototype.ngOnInit = function () {
    };
    FinancePersonDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finance-person-dashboard',
            template: __webpack_require__(/*! ./finance-person-dashboard.component.html */ "./src/app/private/dashboard/finance-person-dashboard/finance-person-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./finance-person-dashboard.component.scss */ "./src/app/private/dashboard/finance-person-dashboard/finance-person-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FinancePersonDashboardComponent);
    return FinancePersonDashboardComponent;
}());



/***/ }),

/***/ "./src/app/private/dashboard/financemanager-dashboard/financemanager-dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/private/dashboard/financemanager-dashboard/financemanager-dashboard.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  financemanager-dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/private/dashboard/financemanager-dashboard/financemanager-dashboard.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/private/dashboard/financemanager-dashboard/financemanager-dashboard.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvZGFzaGJvYXJkL2ZpbmFuY2VtYW5hZ2VyLWRhc2hib2FyZC9maW5hbmNlbWFuYWdlci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/private/dashboard/financemanager-dashboard/financemanager-dashboard.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/private/dashboard/financemanager-dashboard/financemanager-dashboard.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: FinancemanagerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancemanagerDashboardComponent", function() { return FinancemanagerDashboardComponent; });
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

var FinancemanagerDashboardComponent = /** @class */ (function () {
    function FinancemanagerDashboardComponent() {
    }
    FinancemanagerDashboardComponent.prototype.ngOnInit = function () {
    };
    FinancemanagerDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-financemanager-dashboard',
            template: __webpack_require__(/*! ./financemanager-dashboard.component.html */ "./src/app/private/dashboard/financemanager-dashboard/financemanager-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./financemanager-dashboard.component.scss */ "./src/app/private/dashboard/financemanager-dashboard/financemanager-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FinancemanagerDashboardComponent);
    return FinancemanagerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/private/dashboard/salesman-dashboard/salesman-dashboard.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/private/dashboard/salesman-dashboard/salesman-dashboard.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1 class=\"m-0 text-dark\">Welcome to {{title}} Dashboard\n        </h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Home</a></li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-6\">\n        <div class=\"small-box bg-danger\">\n          <div class=\"inner\">\n            <h3>{{mySalesCount}}<sup style=\"font-size: 20px\">#</sup></h3>\n            <p>My Sales</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-pie-graph\"></i>\n          </div>\n          <a href=\"javascript:void(0)\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-6\">\n        <div class=\"small-box bg-success\">\n          <div class=\"inner\">\n            <h3>{{teamSalesCount}}<sup style=\"font-size: 20px\">#</sup></h3>\n            <p>Team Sales</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-stats-bars\"></i>\n          </div>\n          <a href=\"javascript:void(0)\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-6\">\n        <div class=\"small-box bg-info\">\n          <div class=\"inner\">\n            <h3>{{totalSalesCount}}<sup style=\"font-size: 20px\">#</sup></h3>\n            <p>Total Sales</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-stats-bars\"></i>\n          </div>\n          <a href=\"javascript:void(0)\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-6\">\n        <div class=\"small-box bg-danger\">\n          <div class=\"inner\">\n            <h3>{{currentMonthTier}}</h3>\n            <p>Tier For Current Month</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-pie-graph\"></i>\n          </div>\n          <a href=\"javascript:void(0)\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- <div class=\"col-lg-6 col-6\">\n        Month Sales Vs Total Sales\n      </div> -->\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"card card-info card-outline\">\n          <div class=\"card-header border-transparent\">\n            <h3 class=\"card-title\">Latest Sales Records</h3>\n\n            <!-- <div class=\"card-tools\">\n              <button type=\"button\" class=\"btn btn-tool\" data-widget=\"collapse\">\n                <i class=\"fa fa-minus\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-tool\" data-widget=\"remove\">\n                <i class=\"fa fa-times\"></i>\n              </button>\n            </div> -->\n          </div>\n          <!-- /.card-header -->\n          <div class=\"card-body p-0\">\n            <div class=\"table-responsive\">\n              <table class=\"table m-0\">\n                <thead>\n                  <tr>\n                    <th>Deal ID</th>\n                    <th>Contract Date</th>\n                    <th>Stock #</th>\n                    <th>Customer Name</th>\n                    <th>Sale Type</th>\n                    <th>Lender</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let deal of deals | slice:0:5; let i = index\">\n                    <td><a href=\"javascript:void(0)\" [routerLink]=\"['/deals/getDeal']\" [queryParams]=\"{dealID:deal.id}\">{{\n                        deal.deal_id}}</a></td>\n                    <td>{{deal.deal_date}}</td>\n                    <td><span class=\"badge badge-success\">{{deal.Stock_Number}}</span></td>\n                    <td>{{deal.customer_name}}</td>\n                    <td>\n                      {{ deal.deal_type}}\n                    </td>\n                    <td>{{deal.lander_name}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <!-- /.table-responsive -->\n          </div>\n          <!-- /.card-body -->\n          <div class=\"card-footer clearfix\">\n            <!-- <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info float-left\">Place New Order</a> -->\n            <a href=\"javascript:void(0)\" routerLink=\"/deals\" class=\"btn btn-sm btn-secondary float-right\">View All\n              Sales</a>\n          </div>\n          <!-- /.card-footer -->\n        </div>\n        <!-- <div class=\"card card-info card-outline\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">Last 5 Sales Records</h3>\n          </div>\n          <div class=\"card-body\">\n            <table id=\"salesRecordTable\" class=\"table table-bordered table-hover\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Deal</th>\n                  <th>Customer Name</th>\n                  <th>Sale Type</th>\n                  <th>Lender</th>\n                  <th>Commission</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let deal of deals | slice:0:5; let i = index\">\n                  <td>{{ i + 1}}</td>\n                  <td>{{ deal.deal_id}}</td>\n                  <td>{{ deal.customer_name}}</td>\n                  <td>{{ deal.deal_type}}</td>\n                  <td>{{ deal.lander_name}}</td>\n                  <td>{{ deal.deal_amount}}</td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <th>#</th>\n                  <th>Deal</th>\n                  <th>Customer Name</th>\n                  <th>Sale Type</th>\n                  <th>Lender</th>\n                  <th>Commission</th>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n        </div> -->\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card card-info card-outline\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">Sales Chart</h3>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <div class=\"chart-responsive\">\n                  <canvas id=\"pieChart\" height=\"150\"></canvas>\n                </div>\n                <!-- ./chart-responsive -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-md-4\">\n                <ul class=\"chart-legend clearfix\">\n                  <li><i class=\"fa fa-circle-o text-danger\"></i> Sales</li>\n                  <li><i class=\"fa fa-circle-o text-success\"></i> Team Sales</li>\n                  <li><i class=\"fa fa-circle-o text-info\"></i> Total Sales</li>\n\n                </ul>\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.card-body -->\n          <div class=\"card-footer bg-white p-0\">\n            <ul class=\"nav nav-pills flex-column\">\n              <li class=\"nav-item\">\n                <a href=\"javascript:void(0)\" class=\"nav-link\">\n                  Total Month Sales\n                  <span class=\"float-right text-info\">\n                    <!-- <i class=\"fa fa-arrow-down text-sm\"></i> -->{{totalSalesCount}}\n                  </span>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"javascript:void(0)\" class=\"nav-link\">\n                  Total Team Month Sales\n                  <span class=\"float-right text-success\">\n                    <!-- <i class=\"fa fa-arrow-up text-sm\"></i> 4% -->{{teamSalesCount}}\n                  </span>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"javascript:void(0)\" class=\"nav-link\">\n                  My Month Total Sales\n                  <span class=\"float-right text-danger\">\n                    <!-- <i class=\"fa fa-arrow-left text-sm\"></i>--> {{mySalesCount}}\n                  </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/private/dashboard/salesman-dashboard/salesman-dashboard.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/private/dashboard/salesman-dashboard/salesman-dashboard.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvZGFzaGJvYXJkL3NhbGVzbWFuLWRhc2hib2FyZC9zYWxlc21hbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/private/dashboard/salesman-dashboard/salesman-dashboard.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/private/dashboard/salesman-dashboard/salesman-dashboard.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SalesmanDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesmanDashboardComponent", function() { return SalesmanDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/core/helper.service.js */ "./src/app/service/core/helper.service.js");
/* harmony import */ var _assets_plugins_chartjs_old_Chart_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/plugins/chartjs-old/Chart.min.js */ "./src/assets/plugins/chartjs-old/Chart.min.js");
/* harmony import */ var _assets_plugins_chartjs_old_Chart_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_chartjs_old_Chart_min_js__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalesmanDashboardComponent = /** @class */ (function () {
    function SalesmanDashboardComponent(apiSvc, constantSvc, helperSvc) {
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.param = [];
        this.deals = [];
        this.jsondata = {};
        this.mySalesCount = 0;
        this.teamSalesCount = 0;
        this.totalSalesCount = 0;
        this.currentMonthTier = 0;
    }
    SalesmanDashboardComponent.prototype.ngOnInit = function () {
        this.userRoleId = this.helperSvc.lsGetItem(this.constantSvc.tokenConfig.USER_INFO).role_id;
        this.loggedInId = this.helperSvc.lsGetItem(this.constantSvc.tokenConfig.USER_INFO).id;
        console.log(this.userRoleId, this.loggedInId);
        // this.userRoleId = 4;
        // this.loggedInId = 198;
        this.title = 'Salesman';
        this.chartLabel = 'pieChart';
        this.getCurrentMonthTier();
        this.countSalesBySalesman();
        this.countAllSales();
        this.countSalesBySalesTeam();
        this.getDealsList();
    };
    SalesmanDashboardComponent.prototype.getCurrentMonthTier = function () {
        var _this = this;
        this.apiSvc.getService(this.constantSvc.APIConfig.GETTIERFORSALESMAN, this.loggedInId)
            .subscribe(function (data) {
            console.log(data);
            _this.helperSvc.lsSetItem('tierId', data.tier[0]['id']);
            _this.helperSvc.lsSetItem('myTier', data.tier[0]['title']);
            _this.currentMonthTier = data.tier[0]['title'];
        }, function (error) {
        });
    };
    SalesmanDashboardComponent.prototype.countSalesBySalesman = function () {
        var _this = this;
        this.apiSvc.getService(this.constantSvc.APIConfig.COUNTSALESBYSALESMAN, this.loggedInId)
            .subscribe(function (data) {
            _this.mySalesCount = data.deals_count;
            _this.initChart();
        }, function (error) {
        });
    };
    SalesmanDashboardComponent.prototype.countSalesBySalesTeam = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.COUNTSALESBYSALESTEAM, this.param)
            .subscribe(function (data) {
            _this.teamSalesCount = data.deals_count;
            _this.initChart();
        }, function (error) {
        });
    };
    SalesmanDashboardComponent.prototype.countAllSales = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.TOTALSALES, this.param)
            .subscribe(function (data) {
            _this.totalSalesCount = data.deals_count;
            _this.initChart();
        }, function (error) {
        });
    };
    SalesmanDashboardComponent.prototype.getDealsList = function () {
        var _this = this;
        this.param = [];
        this.userInfo = { "login_id": this.loggedInId, "role_id": this.userRoleId };
        this.apiSvc.postService(this.constantSvc.APIConfig.DEALSLISTBYUSER, this.userInfo)
            .subscribe(function (data) {
            if (data.message) {
                _this.initSalesTable();
                _this.deals = data.deals;
            }
            else if (data.error) {
                _this.deals = null;
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
        });
    };
    SalesmanDashboardComponent.prototype.initChart = function () {
        var pieChartCanvas = $('#' + this.chartLabel).get(0).getContext('2d');
        var pieChart = new _assets_plugins_chartjs_old_Chart_min_js__WEBPACK_IMPORTED_MODULE_4__(pieChartCanvas);
        var PieData = [
            {
                value: this.mySalesCount,
                color: '#dc3545',
                highlight: '#dc3545',
                label: 'Sales'
            },
            {
                value: this.teamSalesCount,
                color: '#28a745',
                highlight: '#28a745',
                label: 'Team Sales'
            },
            {
                value: this.totalSalesCount,
                color: '#00c0ef',
                highlight: '#00c0ef',
                label: 'Total Sales'
            }
        ];
        var pieOptions = {
            segmentShowStroke: true,
            segmentStrokeColor: '#fff',
            segmentStrokeWidth: 1,
            percentageInnerCutout: 0,
            animationSteps: 100,
            animationEasing: 'easeOutBounce',
            animateRotate: true,
            animateScale: false,
            responsive: true,
            maintainAspectRatio: false,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
            tooltipTemplate: '<%=value %> <%=label%> '
        };
        pieChart.Doughnut(PieData, pieOptions);
    };
    SalesmanDashboardComponent.prototype.initSalesTable = function () {
        $(function () {
            $('#salesRecordTable').DataTable({
                "paging": false,
                "lengthChange": false,
                "searching": false,
                "ordering": true,
                "info": false,
                "autoWidth": true
            });
        });
    };
    SalesmanDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salesman-dashboard',
            template: __webpack_require__(/*! ./salesman-dashboard.component.html */ "./src/app/private/dashboard/salesman-dashboard/salesman-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./salesman-dashboard.component.scss */ "./src/app/private/dashboard/salesman-dashboard/salesman-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"],
            _service_core_helper_service_js__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
    ], SalesmanDashboardComponent);
    return SalesmanDashboardComponent;
}());



/***/ }),

/***/ "./src/app/private/dashboard/salesmanager-dashboard/salesmanager-dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/private/dashboard/salesmanager-dashboard/salesmanager-dashboard.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1 class=\"m-0 text-dark\">Welcome to {{title}} Dashboard\n        </h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Home</a></li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-6\">\n        <div class=\"small-box bg-info\">\n          <div class=\"inner\">\n            <h3>{{totalSalesCount}}<sup style=\"font-size: 20px\">#</sup></h3>\n            <p>Total Sales</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-stats-bars\"></i>\n          </div>\n          <a href=\"javascript:void(0)\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n       \n        <div class=\"col-lg-3\">\n         \n          <!-- /.card -->\n\n          <div class=\"card\">\n            <div class=\"card-header no-border\">\n              <h3 class=\"card-title\">SalesMan Of Month</h3>\n            </div>\n            <div class=\"card-body p-0\">\n              <table class=\"table table-striped table-valign-middle\">\n                <thead>\n                  <tr>\n                    <th>Salesman</th>\n                    <th># of Sale</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let salemon of salesmanOfMonth\">\n                    <td>{{salemon.username}}</td>\n                    <td>{{salemon.salesman_count}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <!-- /.card -->\n        </div>\n        \n        <div class=\"col-lg-6\">\n          <!-- /.card -->\n          <div class=\"card\">\n            <div class=\"card-header no-border\">\n              <h3 class=\"card-title\">Sales</h3>\n            </div>\n            <div class=\"card-body p-0\">\n              <table class=\"table table-striped table-valign-middle\">\n                <thead>\n                <tr>\n                  <th>Type of Sale</th>\n                  <th># of Sale</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td>\n                    Outside Finance\n                  </td>\n                  <td>0</td>\n                </tr>\n                <tr>\n                  <td>\n                    Cash/Credit Unions\n                  </td>\n                  <td>{{totalDealsCountCash + totalDealsCountWholeSale}}</td>\n                </tr>\n                <tr>\n                  <td>\n                    In-House\n                  </td>\n                  <td>{{totalDealsCountInhouse}}</td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <!-- /.card -->\n        </div>\n     \n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"card\">\n        </div>\n        <!-- /.card -->\n      </div>\n      <!-- /.col-md-6 -->\n      <div class=\"col-md-6\">\n        <div class=\"card card-info card-outline\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">Sales Chart</h3>\n          </div>\n          <!-- /.card-header -->\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <div class=\"chart-responsive\">\n                  <canvas id=\"pieChart\" height=\"220\"></canvas>\n                </div>\n                <!-- ./chart-responsive -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-md-2\">\n                <ul class=\"chart-legend clearfix\">\n                  <li><i class=\"fa fa-circle-o text-jan\"></i> Jan</li>\n                  <li><i class=\"fa fa-circle-o text-feb\"></i> Feb</li>\n                  <li><i class=\"fa fa-circle-o text-mar\"></i> March</li>\n                  <li><i class=\"fa fa-circle-o text-apr\"></i> April</li>\n                  <li><i class=\"fa fa-circle-o text-may\"></i> May</li>\n                  <li><i class=\"fa fa-circle-o text-jun\"></i> June</li>\n                </ul>\n              </div>\n              <div class=\"col-md-2\">\n                <ul class=\"chart-legend clearfix\">\n                  <li><i class=\"fa fa-circle-o text-jul\"></i> July</li>\n                  <li><i class=\"fa fa-circle-o text-aug\"></i> Aug</li>\n                  <li><i class=\"fa fa-circle-o text-sep\"></i> Sep</li>\n                  <li><i class=\"fa fa-circle-o text-oct\"></i> Oct</li>\n                  <li><i class=\"fa fa-circle-o text-nov\"></i> Nov</li>\n                  <li><i class=\"fa fa-circle-o text-dec\"></i> Dec</li>\n                </ul>\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.card-body -->\n        </div>\n      </div>\n      <!-- /.col-md-6 -->\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/private/dashboard/salesmanager-dashboard/salesmanager-dashboard.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/private/dashboard/salesmanager-dashboard/salesmanager-dashboard.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-jan {\n  color: #736bae; }\n\n.text-feb {\n  color: #00d89e; }\n\n.text-mar {\n  color: #e76e6c; }\n\n.text-apr {\n  color: #3b9ea0; }\n\n.text-may {\n  color: #b47298; }\n\n.text-jun {\n  color: #bce150; }\n\n.text-jul {\n  color: #518fae; }\n\n.text-aug {\n  color: #e48444; }\n\n.text-sep {\n  color: #28c3a7; }\n\n.text-oct {\n  color: #936ea3; }\n\n.text-nov {\n  color: #ded459; }\n\n.text-dec {\n  color: #ce7083; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9kYXNoYm9hcmQvc2FsZXNtYW5hZ2VyLWRhc2hib2FyZC9DOlxcUHJvamVjdHNcXE5vZGVKU1xcQW5ndWxhcjZcXG5nNkFkbWluTFRFL3NyY1xcYXBwXFxwcml2YXRlXFxkYXNoYm9hcmRcXHNhbGVzbWFuYWdlci1kYXNoYm9hcmRcXHNhbGVzbWFuYWdlci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxjQUF3QixFQUFBOztBQUU1QjtFQUdJLGNBQXVCLEVBQUE7O0FBRTNCO0VBR0ksY0FBeUIsRUFBQTs7QUFFN0I7RUFHSSxjQUF3QixFQUFBOztBQUU1QjtFQUdJLGNBQXlCLEVBQUE7O0FBRTdCO0VBR0ksY0FBd0IsRUFBQTs7QUFFNUI7RUFHSSxjQUF3QixFQUFBOztBQUU1QjtFQUdJLGNBQXVCLEVBQUE7O0FBRTNCO0VBR0ksY0FBd0IsRUFBQTs7QUFFNUI7RUFHSSxjQUF5QixFQUFBOztBQUU3QjtFQUdJLGNBQXdCLEVBQUE7O0FBRTVCO0VBR0ksY0FBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvZGFzaGJvYXJkL3NhbGVzbWFuYWdlci1kYXNoYm9hcmQvc2FsZXNtYW5hZ2VyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWphblxue1xuICAgIC8vIGNvbG9yOiNFNTJCNTA7XG4gICAgY29sb3I6cmdiKDExNSwgMTA3LCAxNzQpOyAgICBcbn1cbi50ZXh0LWZlYlxue1xuICAgIC8vIGNvbG9yOiNGRkJGMDA7ICAgIFxuICAgIGNvbG9yOiByZ2IoMCwgMjE2LCAxNTgpO1xufVxuLnRleHQtbWFyXG57XG4gICAgLy8gY29sb3I6Izk5NjZDQzsgICAgXG4gICAgY29sb3I6IHJnYigyMzEsIDExMCwgMTA4KTtcbn1cbi50ZXh0LWFwclxue1xuICAgIC8vIGNvbG9yOiNGQkNFQjE7ICAgIFxuICAgIGNvbG9yOiByZ2IoNTksIDE1OCwgMTYwKTtcbn1cbi50ZXh0LW1heVxue1xuICAgIC8vIGNvbG9yOiM3RkZGRDQ7ICAgIFxuICAgIGNvbG9yOiByZ2IoMTgwLCAxMTQsIDE1Mik7XG59XG4udGV4dC1qdW5cbntcbiAgICAvLyBjb2xvcjojMDA3RkZGOyAgICBcbiAgICBjb2xvcjogcmdiKDE4OCwgMjI1LCA4MCk7XG59XG4udGV4dC1qdWxcbntcbiAgICAvLyBjb2xvcjojODlDRkYwOyAgICBcbiAgICBjb2xvcjogcmdiKDgxLCAxNDMsIDE3NCk7XG59XG4udGV4dC1hdWdcbntcbiAgICAvLyBjb2xvcjojN0ZGRjAwOyAgICBcbiAgICBjb2xvcjpyZ2IoMjI4LCAxMzIsIDY4KSA7XG59XG4udGV4dC1zZXBcbntcbiAgICAvLyBjb2xvcjojMDAwMDAwOyAgXG4gICAgY29sb3I6IHJnYig0MCwgMTk1LCAxNjcpOyAgXG59XG4udGV4dC1vY3RcbntcbiAgICAvLyBjb2xvcjojMDAwMEZGOyAgICBcbiAgICBjb2xvcjogcmdiKDE0NywgMTEwLCAxNjMpO1xufVxuLnRleHQtbm92XG57XG4gICAgLy8gY29sb3I6IzAwOTVCNjsgIFxuICAgIGNvbG9yOiByZ2IoMjIyLCAyMTIsIDg5KTsgXG59XG4udGV4dC1kZWNcbntcbiAgICAvLyBjb2xvcjojOEEyQkUyOyAgICBcbiAgICBjb2xvcjogcmdiKDIwNiwgMTEyLCAxMzEpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/private/dashboard/salesmanager-dashboard/salesmanager-dashboard.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/private/dashboard/salesmanager-dashboard/salesmanager-dashboard.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SalesmanagerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesmanagerDashboardComponent", function() { return SalesmanagerDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/core/helper.service.js */ "./src/app/service/core/helper.service.js");
/* harmony import */ var _assets_plugins_chartjs_old_Chart_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/plugins/chartjs-old/Chart.min.js */ "./src/assets/plugins/chartjs-old/Chart.min.js");
/* harmony import */ var _assets_plugins_chartjs_old_Chart_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_chartjs_old_Chart_min_js__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalesmanagerDashboardComponent = /** @class */ (function () {
    function SalesmanagerDashboardComponent(apiSvc, constantSvc, helperSvc) {
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.totalSalesCount = 0;
        this.totalDealsCountWholeSale = 0;
        this.totalDealsCountCash = 0;
        this.totalDealsCountInhouse = 0;
        this.param = [];
        this.salesmanOfMonth = Array();
        this.mySalesCount = 0;
        this.teamSalesCount = 0;
        this.totalSalesOfMonth = Array();
        this.month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    SalesmanagerDashboardComponent.prototype.ngOnInit = function () {
        this.title = "Salesmanager";
        this.chartLabel = 'pieChart';
        this.initChart();
        this.countTotalSaleMonth();
        this.countAllSales();
        this.getSalesmanOfMonth();
    };
    SalesmanagerDashboardComponent.prototype.getSalesmanOfMonth = function () {
        var _this = this;
        this.apiSvc.getService(this.constantSvc.APIConfig.SALESMANOFMONTH, this.param)
            .subscribe(function (data) {
            _this.salesmanOfMonth = data.salesman_of_month.length > 0 ? data.salesman_of_month : Array();
        }, function (error) {
        });
    };
    SalesmanagerDashboardComponent.prototype.countTotalSaleMonth = function () {
        var _this = this;
        this.apiSvc.getService(this.constantSvc.APIConfig.TOTALSALEOFMONTH, this.param)
            .subscribe(function (data) {
            _this.totalSalesOfMonth = data.sale_month_count;
            for (var k = 0; k < _this.month.length; k++) {
                _this.month[k] = k;
            }
            for (var i = 1, j = 0; i <= 12; i++) {
                if (_this.month[i] == _this.totalSalesOfMonth[j].month) {
                    _this.month[i] = _this.totalSalesOfMonth[j].sales_count;
                    if (j < (_this.totalSalesOfMonth.length - 1)) {
                        j++;
                    }
                }
                else {
                    _this.month[i] = 0;
                }
            }
            _this.initChart();
        }, function (error) {
        });
    };
    SalesmanagerDashboardComponent.prototype.countSalesBySalesTeam = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.COUNTSALESBYSALESTEAM, this.param)
            .subscribe(function (data) {
            _this.teamSalesCount = data.deals_count;
            // this.initChart();
        }, function (error) {
        });
    };
    SalesmanagerDashboardComponent.prototype.countAllSales = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.TOTALSALES, this.param)
            .subscribe(function (data) {
            _this.totalSalesCount = data.deals_count;
            //this.initChart();
        }, function (error) {
        });
        this.apiSvc.getService(this.constantSvc.APIConfig.TOTALDEALS_WHOLESALE, this.param)
            .subscribe(function (data) {
            _this.totalDealsCountWholeSale = data.deals_count;
            //this.initChart();
        }, function (error) {
        });
        this.apiSvc.getService(this.constantSvc.APIConfig.TOTALDEALS_CASH, this.param)
            .subscribe(function (data) {
            _this.totalDealsCountCash = data.deals_count;
            // this.initChart();
        }, function (error) {
        });
        this.apiSvc.getService(this.constantSvc.APIConfig.TOTALDEALS_INHOUSE, this.param)
            .subscribe(function (data) {
            _this.totalDealsCountInhouse = data.deals_count;
            // this.initChart();
        }, function (error) {
        });
    };
    SalesmanagerDashboardComponent.prototype.initChart = function () {
        var pieChartCanvas = $('#' + this.chartLabel).get(0).getContext('2d');
        var pieChart = new _assets_plugins_chartjs_old_Chart_min_js__WEBPACK_IMPORTED_MODULE_4__(pieChartCanvas);
        var PieData = [
            {
                value: this.month[1],
                color: 'rgb(115, 107, 174)',
                highlight: 'rgb(115, 107, 174)',
                label: 'Jan'
            },
            {
                value: this.month[2],
                color: 'rgb(0, 216, 158)',
                highlight: 'rgb(0, 216, 158)',
                label: 'Feb'
            },
            {
                value: this.month[3],
                color: 'rgb(231, 110, 108)',
                highlight: 'rgb(231, 110, 108)',
                label: 'March'
            },
            {
                value: this.month[4],
                color: 'rgb(59, 158, 160)',
                highlight: 'rgb(59, 158, 160)',
                label: 'April'
            },
            {
                value: this.month[5],
                color: 'rgb(180, 114, 152)',
                highlight: 'rgb(180, 114, 152)',
                label: 'May'
            },
            {
                value: this.month[6],
                color: 'rgb(188, 225, 80)',
                highlight: 'rgb(188, 225, 80)',
                label: 'June'
            },
            {
                value: this.month[7],
                color: 'rgb(81, 143, 174)',
                highlight: 'rgb(81, 143, 174)',
                label: 'July'
            },
            {
                value: this.month[8],
                color: 'rgb(228, 132, 68)',
                highlight: 'rgb(228, 132, 68)',
                label: 'Aug'
            },
            {
                value: this.month[9],
                color: 'rgb(40, 195, 167)',
                highlight: 'rgb(40, 195, 167)',
                label: 'Sep'
            },
            {
                value: this.month[10],
                color: 'rgb(147, 110, 163)',
                highlight: 'rgb(147, 110, 163)',
                label: 'Oct'
            },
            {
                value: this.month[11],
                color: 'rgb(222, 212, 89)',
                highlight: 'rgb(222, 212, 89)',
                label: 'Nov'
            },
            {
                value: this.month[12],
                color: 'rgb(206, 112, 131)',
                highlight: 'rgb(206, 112, 131)',
                label: 'Dec'
            }
        ];
        var pieOptions = {
            segmentShowStroke: true,
            segmentStrokeColor: '#fff',
            segmentStrokeWidth: 1,
            percentageInnerCutout: 0,
            animationSteps: 100,
            animationEasing: 'easeOutBounce',
            animateRotate: true,
            animateScale: false,
            responsive: true,
            maintainAspectRatio: false,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
            tooltipTemplate: '<%=value %> <%=label%> '
        };
        pieChart.Doughnut(PieData, pieOptions);
    };
    SalesmanagerDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salesmanager-dashboard',
            template: __webpack_require__(/*! ./salesmanager-dashboard.component.html */ "./src/app/private/dashboard/salesmanager-dashboard/salesmanager-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./salesmanager-dashboard.component.scss */ "./src/app/private/dashboard/salesmanager-dashboard/salesmanager-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"],
            _service_core_helper_service_js__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
    ], SalesmanagerDashboardComponent);
    return SalesmanagerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/private/deals/list/list.component.html":
/*!********************************************************!*\
  !*** ./src/app/private/deals/list/list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#dealModal\">\n          Add Deal\n        </button>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\" href=\"javascript:void(0)\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Deals Record</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card card-info card-outline\">\n        <div class=\"card-header\">\n          <form>\n            <div class=\"row\">\n              <div class=\"col-sm-2\">\n                <select (change)=\"changeFilter($event.target.value)\" class=\"form-control\" style=\"width: 100%;\" tabindex=\"-1\"\n                  aria-hidden=\"true\">\n                  <option selected=\"selected\">Apply Filter By :</option>\n                  <option [value]=\"dateFilterOption\" *ngFor=\"let dateFilterOption of dateFilterOptions\">{{dateFilterOption}}</option>\n                </select>\n              </div>\n\n              <div class=\"col-md-2\" *ngIf=\"showYearly\">\n                <select name=\"yearFilter\" (change)=\"applyFilter()\" id=\"yearFilter\" class=\"form-control\" style=\"width: 100%;\"\n                  tabindex=\"-1\">\n                  <option value=\"\">Choose Year :</option>\n                  <option [value]=\"year\" *ngFor=\"let year of years\">{{year}}</option>\n                </select>\n              </div>\n\n              <div class=\"col-md-2\" *ngIf=\"showMonthly\">\n                <select (change)=\"applyFilter()\" name=\"monthInMonthYear\" id=\"monthInMonthYear\" class=\"form-control\"\n                  style=\"width: 100%;\" tabindex=\"-1\" aria-hidden=\"true\">\n                  <option selected=\"selected\" value=\"\">Choose Month :</option>\n                  <option [value]=\"month.value\" *ngFor=\"let month of months\">{{month.name}}</option>\n                </select>\n              </div>\n\n              <div class=\"col-md-2\" *ngIf=\"showMonthly\">\n                <select (change)=\"applyFilter()\" name=\"yearInMonthYear\" id=\"yearInMonthYear\" class=\"form-control\" style=\"width: 100%;\">\n                  <option selected value=\"\">Choose Year :</option>\n                  <option [value]=\"year\" *ngFor=\"let year of years\">{{year}}</option>\n                </select>\n              </div>\n\n              <div class=\"col-md-3\" *ngIf=\"showWeekly\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </span>\n                  </div>\n                  <input type=\"text\" class=\"form-control float-right\" id=\"dateRangePicker\">\n                </div>\n              </div>\n\n              <div class=\"col-md-2\" *ngIf=\"showDaily\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </span>\n                  </div>\n\n                  <input type=\"text\" name=\"bsDatepicker\" [(ngModel)]=\"bsDatepicker\" (ngModelChange)=\"applyFilter()\" id=\"bsDatepicker\"\n                    placeholder=\"0000/00/00\" class=\"form-control\" bsDatepicker [bsConfig]=\"bsConfig\">\n                </div>\n              </div>\n\n              <div class=\"col-md-2\" *ngIf=\"showCustom\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </span>\n                  </div>\n                  <input type=\"text\" name=\"minDate\" [(ngModel)]=\"minDate\" (ngModelChange)=\"applyFilter()\" id=\"minDate\"\n                    placeholder=\"0000/00/00\" class=\"form-control\" bsDatepicker [bsConfig]=\"bsConfig\">\n                </div>\n              </div>\n              <span *ngIf=\"showCustom\" style=\"padding-top:6px\">To</span>\n              <div class=\"col-md-2\" *ngIf=\"showCustom\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </span>\n                  </div>\n                  <input type=\"text\" name=\"maxDate\" [(ngModel)]=\"maxDate\" (ngModelChange)=\"applyFilter()\" id=\"maxDate\"\n                    placeholder=\"0000/00/00\" class=\"form-control\" bsDatepicker [bsConfig]=\"bsConfig\">\n                </div>\n              </div>\n\n              <div *ngIf=\"userRoleId != 4\" class=\"col-sm-2\" style=\"width: 100%;\" tabindex=\"-1\">\n                <select (change)=\"applyFilter()\" id=\"bySalesPerson\" class=\"form-control\">\n                  <option value=\"\">By Sales Person :</option>\n                  <option *ngFor=\"let salesPerson of salesPersons\">{{salesPerson.first_name}}</option>\n                </select>\n              </div>\n\n              <div class=\"col-sm-2\" style=\"width: 100%;\" tabindex=\"-1\">\n                <select name=\"bySaleType\" (change)=\"applyFilter()\" id=\"bySaleType\" class=\"form-control\">\n                  <option value=\"\">By Sale Type :</option>\n                  <option value=\"Finance Deal\">In-House Finance</option>\n                  <option value=\"Outside Deal\">Outside Finance</option>\n                  <option value=\"Cash Deal\">Cash Deal</option>\n                  <option value=\"Wholesale Deal\">WholeSale Deal</option>\n                </select>\n              </div>\n\n              <div class=\"col-sm-2\" style=\"width: 100%;\" tabindex=\"-1\">\n                <input class=\"form-control\" type=\"text\" (keyup)=\"filterByStock($event.target.value)\" id=\"byStock\"\n                  placeholder=\"Stock #\">\n              </div>\n              \n            </div>\n          </form>\n        </div>\n        <div class=\"card-body\" id=\"table\">\n          <table id=\"salesRecordTable\" class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Deal Id</th>\n                <th>Stock #</th>\n                <th>Contract Date</th>\n                <th>Customer Name</th>\n                <th>Customer State</th>\n                <th>Sales Person</th>\n                <th>Type Of Sale</th>\n                <th>Sale Price</th>\n                <th>Lender</th>\n                <th>LienHolder</th>\n                <th>Status</th>\n                <th>Commission</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let deal of deals; let i = index\">\n                <td></td>\n                <td><a href=\"javascript:void(0)\" [routerLink]=\"['/deals/getDeal']\" [queryParams]=\"{dealID:deal.id}\">{{ deal.deal_id}}</a></td>\n                <td>{{deal.Stock_Number}}</td>\n                <td>{{ deal.deal_date}}</td>\n                <td>{{ deal.customer_name}}</td>\n                <td>{{ deal.customer_state}}</td>\n                <td>{{ deal.sales_person }}</td>\n                <td>{{ deal.deal_type_desc}}</td>\n                <td>{{ deal.deal_amount}}</td>\n                <td>{{ deal.lander_name }}</td>\n                <td>{{ deal.ResLienHolder }}</td>\n                <td><span class=\"badge bg-info\">{{ deal.deal_status_desc}}</span></td>\n                <td>\n                  <!-- <span id=\"{{'indexButton'+i}}\">\n                    <a title=\"Generate Commission\" href=\"javascript:void(0)\" (click)=\"calculatCommission(i,deal.deal_id,deal.deal_type,deal.MR_Fee)\">\n                      <i class=\"fa fa-plus\" style=\"color:green;\"></i></a>\n                  </span> -->\n                  <span id=\"{{'indexNumber'+i}}\" style=\"margin-left:20px\"></span>\n                </td>\n              </tr>\n            </tbody>\n            <!-- <tfoot>\n              <tr>\n                <td colspan=\"4\"><span style=\"float:right;\"><b>Total Sales: </b></span></td>\n                <td colspan=\"2\"> <span style=\"float:right;\"><b>{{totalSales}}</b></span> </td>\n                <td colspan=\"2\"><span style=\"float:right;\"><b>Total Commission Due: </b></span></td>\n                <td><span><b>340</b></span></td>\n              </tr>\n            </tfoot> -->\n          </table>\n          <table style=\"float:right\">\n            <tr>\n              <td><span>Total Sales : </span></td>\n              <td> <span><b>{{totalSales}}</b></span> </td>\n              <td><span>Total Commission Due : </span></td>\n              <td><span><b>{{totalCummissionAmount}}</b></span></td>\n            </tr>\n          </table>\n        </div>\n        <!-- /.card-body -->\n        <div *ngIf=\"userRoleId == 1\" class=\"card-footer\">\n          <div id=\"buttons\"></div>\n        </div>\n      </div>\n      <!-- /.card -->\n    </div>\n    <!-- /.col -->\n  </div>\n  <!-- /.row -->\n</section>\n\n<div class=\"modal fade\" id=\"dealModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <form #rulesForm=\"ngForm\" (ngSubmit)=\"onSubmit(rulesForm)\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add New Deal</h5>\n          <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button> -->\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"box-body\">\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <label class=\"control-label col-md-4\">\n                  IDMS Deal Number :\n                </label>\n                <label class=\"col-md-8\">\n                  <input required #dealIdControl=\"ngModel\" [(ngModel)]=\"rulesForm.idms_id\" type=\"text\" (blur)=\"isExists(rulesForm)\"\n                    (keyup)=\"isExists(rulesForm)\" name=\"idms_id\" class=\"form-control\" placeholder=\"IDMS Deal Number\"\n                    [class.is-invalid]=\"dealIdControl.invalid && dealIdControl.touched\">\n                  <small class=\"text-danger\" *ngIf=\"dealIdControl.invalid && dealIdControl.touched\">\n                    IDMS Deal Number is required\n                  </small>\n                  <small *ngIf=\"isExistsMessage\" class=\"text-danger\">\n                    IDMS Deal Number Already Registered!\n                  </small>\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"resetForm(rulesForm)\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" [disabled]=\"rulesForm.invalid\" [attr.disabled]=\"buttonDisabled?'':null\" class=\"btn btn-primary\">Save\n            changes</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/private/deals/list/list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/private/deals/list/list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#table th {\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9kZWFscy9saXN0L0M6XFxQcm9qZWN0c1xcTm9kZUpTXFxBbmd1bGFyNlxcbmc2QWRtaW5MVEUvc3JjXFxhcHBcXHByaXZhdGVcXGRlYWxzXFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcml2YXRlL2RlYWxzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3RhYmxlIHRoIHtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/private/deals/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/private/deals/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: DealsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsListComponent", function() { return DealsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DealsListComponent = /** @class */ (function () {
    function DealsListComponent(apiSvc, constantSvc, helperSvc) {
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.colorTheme = 'theme-blue';
        this.param = [];
        this.deals = [];
        this.salesPersons = [];
        this.submitted = false;
        this.title = 'Add Deal';
        this.totalCummissionAmount = 0;
        this.dateFilterOptions = ['Yearly', 'Monthly', 'Daily', 'Custom'];
        this.years = ['2018', '2017', '2016', '2015'];
        this.months = [
            { name: 'January', value: '01' },
            { name: 'February', value: '02' },
            { name: 'March', value: '03' },
            { name: 'April', value: '04' },
            { name: 'May', value: '05' },
            { name: 'June', value: '06' },
            { name: 'July', value: '07' },
            { name: 'August', value: '08' },
            { name: 'September', value: '09' },
            { name: 'October', value: '10' },
            { name: 'November', value: '11' },
            { name: 'December', value: '12' },
        ];
        this.showYearly = false;
        this.showMonthly = false;
        this.showWeekly = false;
        this.showDaily = false;
        this.showCustom = false;
    }
    DealsListComponent.prototype.ngOnInit = function () {
        console.log('auth token', this.helperSvc.lsGetItem(this.constantSvc.tokenConfig.AUTH_TOKEN));
        this.bsConfig = Object.assign({}, {
            containerClass: this.colorTheme,
            showWeekNumbers: false,
            dateInputFormat: 'YYYY/MM/DD',
            rangeInputFormat: 'YYYY/MM/DD',
        });
        this.salesmanTier = this.helperSvc.lsGetItem('tierId');
        this.userRoleId = this.helperSvc.lsGetItem('USERINFO').role_id;
        this.loggedInId = this.helperSvc.lsGetItem('USERINFO').id;
        this.getDealsList();
        this.getSalesPersonsList();
        if (this.userRoleId == 4) {
            this.userGroup = 'A';
        }
    };
    DealsListComponent.prototype.applyFilter = function () {
        $.fn.dataTableExt.afnFiltering.push(function (oSettings, aData, iDataIndex) {
            var byYear = $("#yearFilter").val();
            var monthInMonthYear = $("#monthInMonthYear").val();
            var yearInMonthYear = $("#yearInMonthYear").val();
            var byDate = $("#bsDatepicker").val();
            var dateStart = $("#minDate").val();
            var dateEnd = $("#maxDate").val();
            var bySalesPerson = $("#bySalesPerson").val();
            var bySaleType = $("#bySaleType").val();
            // var byStock = this.customSearchValue;
            if (dateStart == undefined || dateStart == '') {
                dateStart = '';
            }
            if (dateEnd == undefined || dateEnd == '') {
                dateEnd = '';
            }
            if (byYear == undefined || byYear == '') {
                byYear = '';
            }
            if (monthInMonthYear == undefined || monthInMonthYear == '') {
                monthInMonthYear = '';
            }
            if (yearInMonthYear == undefined || yearInMonthYear == '') {
                yearInMonthYear = '';
            }
            if (byDate == undefined || byDate == '') {
                byDate = '';
            }
            if (bySalesPerson == undefined || bySalesPerson == '') {
                bySalesPerson = '';
            }
            if (bySaleType == undefined || bySaleType == '') {
                bySaleType = '';
            }
            var tableDate = new Date(aData[3]);
            var saleType = aData[6];
            var stock = aData[2];
            var salesPerson = aData[6];
            // console.log(saleType, bySaleType);
            var day = (tableDate.getDate() < 10 ? '0' : '') + tableDate.getDate();
            var month = ((tableDate.getMonth() + 1) < 10 ? '0' : '') + (tableDate.getMonth() + 1);
            var year = tableDate.getFullYear();
            var evalDate = year + '/' + month + '/' + day;
            if (dateStart === '' && dateEnd === '' && byYear === '' && monthInMonthYear === '' && yearInMonthYear === '' && byDate === '' && bySaleType === '' && bySalesPerson === '') {
                return true;
            }
            else if (evalDate == dateStart || evalDate == dateEnd || evalDate >= dateStart && evalDate <= dateEnd) {
                return true;
            }
            else if (year == byYear) {
                return true;
            }
            else if (monthInMonthYear == month && yearInMonthYear == year) {
                return true;
            }
            else if (evalDate == byDate) {
                return true;
            }
            else if (saleType == bySaleType) {
                return true;
            }
            else if (salesPerson == bySalesPerson) {
                return true;
            }
            // else if (year == byYear && saleType == bySaleType || saleType == bySaleType) {
            //   return true;
            // }
            else {
                return false;
            }
        });
        this.oTable.draw();
    };
    //tomorrow separate all filters than check 
    // filterBySale() {
    // }
    DealsListComponent.prototype.filterByStock = function (event) {
        this.oTable.column(2).search(event).draw();
    };
    DealsListComponent.prototype.getDealsList = function () {
        var _this = this;
        this.param = [];
        this.userInfo = { "login_id": this.loggedInId, "role_id": this.userRoleId };
        this.apiSvc.postService(this.constantSvc.APIConfig.DEALSLISTBYUSER, this.userInfo)
            .subscribe(function (data) {
            _this.initSalesTable();
            if (data.message) {
                console.log(data.deals);
                _this.deals = data.deals;
                _this.totalSales = data.deals.length;
                for (var i = 0; i < data.deals.length; i++) {
                    // console.log(data.deals[i]);
                    var deal_id = data.deals[i]['id'];
                    var deal_type = data.deals[i]['deal_type'];
                    var MR_Fee = data.deals[i]['MR_Fee'];
                    _this.calculatCommission(i, deal_id, deal_type, MR_Fee);
                }
            }
            else if (data.error) {
                _this.deals = null;
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
        });
    };
    DealsListComponent.prototype.getSalesPersonsList = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.GETSALESPERSONS, this.param)
            .subscribe(function (data) {
            if (data.message) {
                _this.salesPersons = data.salesPersons;
            }
            else {
                _this.salesPersons = null;
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : 'Something went wrong.');
        });
    };
    DealsListComponent.prototype.onSubmit = function (rulesForm) {
        var _this = this;
        this.submitted = true;
        if (rulesForm.invalid) {
            return;
        }
        this.data = { "idms_id": rulesForm.value.idms_id, "salesman_id": this.helperSvc.lsGetItem('USERINFO').id };
        this.apiSvc.postService(this.constantSvc.APIConfig.ADDDEAL, this.data)
            .subscribe(function (data) {
            if (data.message) {
                _this.helperSvc.notifySuccess(data.message ? data.message : 'success');
                _this.destroyTable();
                _this.getDealsList();
                $("#dealModal").modal("hide");
                _this.resetForm(rulesForm);
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : 'Something went wrong please try again');
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
        });
    };
    DealsListComponent.prototype.isExists = function (rulesForm) {
        var _this = this;
        this.apiSvc.isExists(this.constantSvc.APIConfig.ISUNIQIDMS, rulesForm.value)
            .subscribe(function (data) {
            if (data.message) {
                console.log(data);
                _this.isExistsMessage = '';
                _this.buttonDisabled = false;
            }
            else if (data.error) {
                _this.isExistsMessage = data.error;
                _this.buttonDisabled = true;
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "something went wrong please try again");
        });
    };
    DealsListComponent.prototype.initSalesTable = function () {
        var _this = this;
        $(function () {
            _this.oTable = $('#salesRecordTable').DataTable({
                "scrollX": true
            });
            _this.oTable.on('order.dt search.dt', function () {
                _this.oTable.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                    cell.innerHTML = i + 1;
                });
            }).draw();
            var buttons = new $.fn.dataTable.Buttons(_this.oTable, {
                buttons: [
                    {
                        extend: 'csv',
                        text: 'Export to CSV',
                        filename: function () {
                            var d = new Date();
                            var n = d.getTime();
                            return 'Deals_Report_' + n;
                        }
                    }
                ]
            }).container().appendTo($('#buttons'));
        });
    };
    DealsListComponent.prototype.destroyTable = function () {
        this.oTable.destroy();
    };
    DealsListComponent.prototype.resetForm = function (rulesForm) {
        rulesForm.reset();
        this.isExistsMessage = '';
    };
    //Commission Section
    DealsListComponent.prototype.calculatCommission = function (index, id, deal_type, MR_Fee) {
        var _this = this;
        this.jsonData = { "tier": this.salesmanTier, "deal_type": 'c', 'user_group': this.userGroup, 'deal_id': id, 'MR_Fee': MR_Fee };
        this.apiSvc.postService(this.constantSvc.APIConfig.CALCULATECOMMISSION, this.jsonData)
            .subscribe(function (data) {
            var div = document.getElementById("indexNumber" + index);
            div.innerHTML += '<span class="badge bg-info">' + data.commissionAmount + '<span>';
            _this.totalCummissionAmount += data.commissionAmount;
            // var buttonDiv = document.getElementById("indexButton" + index);
            // buttonDiv.parentNode.removeChild(buttonDiv);
        }, function (error) {
            console.log(error);
        });
    };
    //filter Section
    DealsListComponent.prototype.changeFilter = function (value) {
        if (value == 'Yearly') {
            this.showYearly = true;
            this.showMonthly = false;
            this.showWeekly = false;
            this.showDaily = false;
            this.showCustom = false;
        }
        else if (value == 'Monthly') {
            this.showYearly = false;
            this.showMonthly = true;
            this.showWeekly = false;
            this.showDaily = false;
            this.showCustom = false;
        }
        else if (value == 'Weekly') {
            this.showYearly = false;
            this.showMonthly = false;
            this.showWeekly = true;
            this.showDaily = false;
            this.showCustom = false;
            $(function () {
                // $('.select2').select2();
                $('#dateRangePicker').daterangepicker({
                    timePicker: false,
                    applyClass: "btn-primary",
                    format: 'YYYY/MM/DD'
                });
            });
        }
        else if (value == 'Daily') {
            this.showYearly = false;
            this.showMonthly = false;
            this.showWeekly = false;
            this.showDaily = true;
            this.showCustom = false;
            $(function () {
                $('#datePicker').daterangepicker({
                    timePicker: false,
                    singleDatePicker: true,
                    showDropdowns: true,
                    format: 'YYYY/MM/DD'
                });
            });
        }
        else if (value == 'Custom') {
            console.log('in custom');
            this.showYearly = false;
            this.showMonthly = false;
            this.showWeekly = false;
            this.showDaily = false;
            this.showCustom = true;
            $(function () {
                // $('.select2').select2();
                $('#dateRangePickerCustom').daterangepicker({
                    timePicker: false,
                    applyClass: "btn-primary",
                    format: 'YYYY/MM/DD'
                });
            });
        }
        else {
            this.showYearly = false;
            this.showMonthly = false;
            this.showWeekly = false;
            this.showDaily = false;
            this.showCustom = false;
        }
    };
    DealsListComponent.prototype.onSelect = function (deal) {
        console.log(deal);
    };
    //for calculating commission amount
    DealsListComponent.prototype.totalAmount = function () {
        $.fn.dataTable.Api.register('column().data().sum()', function () {
            return this.reduce(function (a, b) {
                var x = parseFloat(a) || 0;
                var y = parseFloat(b) || 0;
                return x + y;
            });
        });
        console.log(this.oTable.column(9).data().sum());
    };
    DealsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/private/deals/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/private/deals/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
    ], DealsListComponent);
    return DealsListComponent;
}());



/***/ }),

/***/ "./src/app/private/deals/view/view.component.html":
/*!********************************************************!*\
  !*** ./src/app/private/deals/view/view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Deal Information</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\" href=\"javascript:void(0)\">Home</a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\" routerLink=\"/deals\">Deals</a></li>\n          <li class=\"breadcrumb-item active\">Deal Information</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"callout callout-info\">\n          <h5><i class=\"fa fa-info\"></i> Note:</h5>\n          This page is sale Information page. if you have any query please add comments related to this deal.\n        </div>\n        <div class=\"invoice p-3 mb-3 card-info card-outline\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <h4>\n                <i class=\"fa fa-globe\"></i> Deal Info.\n                <small class=\"float-right\">Contract Date : {{contractDate}}</small>\n              </h4>\n            </div>\n          </div>\n          <div class=\"row invoice-info\">\n            <div class=\"col-sm-3 invoice-col\">\n              Customer Name\n              <address>\n                <strong>{{customerName}}</strong><br>\n\n              </address>\n              Lender Name\n              <address>\n                <strong>{{lenderName}}</strong>\n              </address>\n            </div>\n            <div class=\"col-sm-3 invoice-col\">\n              Sales Location\n              <address>\n                <strong>{{salesLocation}}</strong><br>\n\n              </address>\n              Lender Description\n              <address>\n                <strong>{{lenderDesc}}</strong>\n              </address>\n            </div>\n            <div class=\"col-sm-3 invoice-col\">\n              CB TotalDown\n              <address>\n                <strong>{{CBTotalDown}}</strong><br>\n\n              </address>\n              F&I Person Name\n              <address>\n                <strong>{{FIPersonName}}</strong>\n              </address>\n            </div>\n            <div class=\"col-sm-3 invoice-col\">\n              <b>iDMS Deal ID:</b> {{idmsID}}<br>\n              <b>Inst ID:</b> {{instID}}<br>\n              <b>Acct ID:</b> {{acctID}}<br>\n              <b>Lender ID:</b> {{lenderID}}\n              <br>\n            </div>\n          </div>\n\n          <!-- Table row -->\n          <div class=\"row\">\n            <div class=\"col-sm-12 table-responsive \">\n              <table class=\"table table-striped\">\n                <thead>\n                  <tr>\n                    <th>Stock #</th>\n                    <th>Vin Number</th>\n                    <th>vAuto price</th>\n                    <th>Sales Price</th>\n                    <th>Deal Type</th>\n                    <th>Deal Status</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>{{stockNumber}}</td>\n                    <td>{{vinNumber}}</td>\n                    <td>$ {{vAutoPrice}}</td>\n                    <td>$ {{dealAmount}}</td>\n                    <td>{{dealTypeDesc}}</td>\n                    <td>{{dealStatusDesc}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <!-- <div class=\"col-12\"> -->\n            <!-- <p class=\"lead\">Leave a comment:</p> -->\n            <!-- <div class=\"row\"> -->\n            <div class=\"col-sm-6\">\n              <p class=\"lead\">Leave a comment:</p>\n              <form #commentForm=\"ngForm\" (submit)=\"onSubmit(commentForm)\" novalidate>\n                <input type=\"hidden\" [(ngModel)]=\"deal_id\" name=\"deal_id\">\n                <input type=\"hidden\" [(ngModel)]=\"salesman_id\" name=\"salesman_id\">\n                <!-- text input -->\n                <div class=\"form-group\">\n                  <label>Title :</label>\n                  <input type=\"text\" [(ngModel)]=\"comment_title\" name=\"comment_title\" class=\"form-control\" placeholder=\"Enter title here...\">\n                </div>\n\n                <!-- textarea -->\n                <div class=\"form-group\">\n                  <label>Comment :</label>\n                  <textarea class=\"form-control\" [(ngModel)]=\"comment_text\" name=\"comment_text\" rows=\"3\" placeholder=\"Enter message here...\"\n                    required></textarea>\n                </div>\n                <div class=\"card-footer\">\n                  <button type=\"button\" (click)=\"resetForm(commentForm)\" class=\"btn btn-default\">Cancel</button>\n                  <button type=\"submit\" class=\"btn btn-info float-right\">Submit</button>\n                </div>\n              </form>\n            </div>\n\n            <div class=\"col-sm-6\">\n              <p class=\"lead\">Latest Comments :</p>\n              <div class=\"col-sm-12 comments-scroll\">\n                <div class=\"comments-box\" *ngFor=\"let comment of comments\" [@divState]=\"state\">\n                  <p><a href=\"javascript:void(0)\">{{comment.comment_text}}</a></p>\n                  <span class=\"time\">{{comment.comment_date}}</span>\n                </div>\n              </div>\n            </div>\n            <!-- </div> -->\n            <!-- </div> -->\n          </div>\n\n\n\n          <!-- /.row -->\n\n          <!-- this row will not appear when printing -->\n          <!-- <div class=\"row no-print\">\n            <div class=\"col-12\">\n              <a href=\"invoice-print.html\" target=\"_blank\" class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</a>\n              <button type=\"button\" class=\"btn btn-success float-right\"><i class=\"fa fa-credit-card\"></i> Submit\n                Payment\n              </button>\n              <button type=\"button\" class=\"btn btn-primary float-right\" style=\"margin-right: 5px;\">\n                <i class=\"fa fa-download\"></i> Generate PDF\n              </button>\n            </div>\n          </div> -->\n        </div>\n\n\n        <!-- /.invoice -->\n      </div><!-- /.col -->\n    </div><!-- /.row -->\n  </div><!-- /.container-fluid -->\n</section>"

/***/ }),

/***/ "./src/app/private/deals/view/view.component.scss":
/*!********************************************************!*\
  !*** ./src/app/private/deals/view/view.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comments-box {\n  display: block;\n  float: left; }\n\n.comments-box p, .comments-box span {\n  float: left;\n  padding: 6px 15px; }\n\n.comments-box {\n  display: block;\n  float: left;\n  margin: 5px 0px;\n  border: 1px solid #343a40;\n  width: 100%; }\n\n.comments-box p {\n  margin-bottom: 0px;\n  color: #000;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 63%; }\n\n.comments-box span {\n  width: 37%;\n  padding-right: 10px;\n  font-weight: 700; }\n\n.comments-scroll::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5; }\n\n.comments-scroll::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5; }\n\n.comments-scroll::-webkit-scrollbar-thumb {\n  background-color: #343a40; }\n\n.comments-scroll {\n  float: left;\n  max-height: 280px;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9kZWFscy92aWV3L0M6XFxQcm9qZWN0c1xcTm9kZUpTXFxBbmd1bGFyNlxcbmc2QWRtaW5MVEUvc3JjXFxhcHBcXHByaXZhdGVcXGRlYWxzXFx2aWV3XFx2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsY0FBYTtFQUFDLFdBQVUsRUFBQTs7QUFDdEM7RUFFQyxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBRWxCO0VBQWUsY0FBYztFQUFDLFdBQVc7RUFBQyxlQUFlO0VBQUMseUJBQXlCO0VBQUMsV0FBVyxFQUFBOztBQUMvRjtFQUNDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFFdkIsVUFBVSxFQUFBOztBQUVYO0VBRUMsVUFBUztFQUNULG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFJakI7RUFBMEMsb0RBQWlEO0VBQUMseUJBQXlCLEVBQUE7O0FBQ3JIO0VBQW9DLFVBQVU7RUFBQyx5QkFBeUIsRUFBQTs7QUFDeEU7RUFBMEMseUJBQXlCLEVBQUE7O0FBQ25FO0VBQ0MsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcml2YXRlL2RlYWxzL3ZpZXcvdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50cy1ib3h7ZGlzcGxheTpibG9jaztmbG9hdDpsZWZ0O31cbi5jb21tZW50cy1ib3ggcCwuY29tbWVudHMtYm94IHNwYW4gXG57XG5cdGZsb2F0OiBsZWZ0O1xuXHRwYWRkaW5nOiA2cHggMTVweDtcbn1cbi5jb21tZW50cy1ib3gge2Rpc3BsYXk6IGJsb2NrO2Zsb2F0OiBsZWZ0O21hcmdpbjogNXB4IDBweDtib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQwO3dpZHRoOiAxMDAlO31cbi5jb21tZW50cy1ib3ggcCB7XG5cdG1hcmdpbi1ib3R0b206IDBweDtcblx0Y29sb3I6ICMwMDA7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHQvLyB3aWR0aDogODAlO1xuXHR3aWR0aDogNjMlO1xufVxuLmNvbW1lbnRzLWJveCBzcGFuIHtcblx0Ly8gd2lkdGg6MjAlO1xuXHR3aWR0aDozNyU7XG5cdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdC8vIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG5cdC8vIGNvbG9yOiNmZmY7XG59XG4uY29tbWVudHMtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10cmFja3std2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO2JhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7fVxuLmNvbW1lbnRzLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6IDZweDtiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O31cbi5jb21tZW50cy1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7fVxuLmNvbW1lbnRzLXNjcm9sbCB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXgtaGVpZ2h0OiAyODBweDtcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXHRvdmVyZmxvdy14OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/private/deals/view/view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/private/deals/view/view.component.ts ***!
  \******************************************************/
/*! exports provided: DealsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsViewComponent", function() { return DealsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_core_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/core/helper.service */ "./src/app/service/core/helper.service.ts");
/* harmony import */ var src_app_service_core_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var src_app_service_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DealsViewComponent = /** @class */ (function () {
    function DealsViewComponent(route, helperSvc, constantSvc, apiSvc) {
        this.route = route;
        this.helperSvc = helperSvc;
        this.constantSvc = constantSvc;
        this.apiSvc = apiSvc;
        this.state = 'normal';
        this.wildState = 'normal';
        this.comments = [];
    }
    DealsViewComponent.prototype.ngOnInit = function () {
        this.dealId = this.route.snapshot.queryParamMap.get('dealID');
        this.loggedInId = this.helperSvc.lsGetItem('USERINFO').id;
        this.deal_id = this.dealId;
        this.salesman_id = this.loggedInId;
        this.getDealData();
        this.getLatestComments();
    };
    DealsViewComponent.prototype.getDealData = function () {
        var _this = this;
        this.apiSvc.getService(this.constantSvc.APIConfig.GETDEALDATA, this.dealId)
            .subscribe(function (data) {
            if (data.message) {
                _this.id = data.deal.id;
                _this.idmsID = data.deal.deal_id;
                _this.instID = data.deal.inst_id;
                _this.acctID = data.deal.acct_id;
                _this.customerName = data.deal.customer_name;
                _this.stockNumber = data.deal.Stock_Number;
                _this.lenderID = data.deal.lender_id;
                _this.lenderName = data.deal.lander_name;
                _this.lenderDesc = data.deal.lender_desc;
                _this.dealType = data.deal.deal_type;
                _this.dealTypeDesc = data.deal.deal_type_desc;
                _this.dealStatus = data.deal.deal_status;
                _this.dealStatusDesc = data.deal.deal_status_desc;
                _this.appType = data.deal.app_type;
                _this.appTypeDesc = data.deal.app_type_desc;
                _this.dealAmount = data.deal.deal_amount;
                _this.vAutoPrice = data.deal.vAutoPrice;
                _this.contractDate = data.deal.deal_date;
                _this.salesLocation = data.deal.sales_location;
                _this.vinNumber = data.deal.vin_number;
                _this.FIPersonName = data.deal.FIPersonName;
                _this.numPayments = data.deal.NumPayments;
                _this.CBTotalDown = data.deal.CB_TotalDown;
                _this.totalFees = data.deal.TotalFees;
                _this.totalTradeIn = data.deal.TotalTradeIn;
                _this.totalTradeInPayoff = data.deal.TotalTradeInPayoff;
                _this.resLienHolder = data.deal.ResLienHolder;
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : "something went wrong please try again");
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "something went wrong please try again");
        });
    };
    DealsViewComponent.prototype.onSubmit = function (commentForm) {
        var _this = this;
        this.apiSvc.postService(this.constantSvc.APIConfig.ADDCOMMENTS, commentForm.value)
            .subscribe(function (data) {
            if (data.message) {
                _this.getRecentComment();
                // this.helperSvc.notifySuccess(data.message ? data.message : 'comment successfully posted');
                _this.resetForm(commentForm);
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : 'Something went wrong. please try again');
            }
        }, function (error) {
            console.log(error.error.message);
        });
    };
    DealsViewComponent.prototype.getLatestComments = function () {
        var _this = this;
        this.apiSvc.getService(this.constantSvc.APIConfig.GETCOMMENTS, this.deal_id)
            .subscribe(function (data) {
            if (data.message) {
                _this.comments = data.comments;
            }
            else if (data.error) {
                _this.comments = null;
            }
        }, function (error) {
            console.log(error.error.message);
        });
    };
    DealsViewComponent.prototype.getRecentComment = function () {
        var _this = this;
        this.apiSvc.getService(this.constantSvc.APIConfig.GETRECENTCOMMENT, this.deal_id)
            .subscribe(function (data) {
            _this.comments.unshift(data.data);
            console.log('in array ', _this.comments);
        }, function (error) {
            console.log(error.error.message);
        });
    };
    DealsViewComponent.prototype.onAnimate = function () {
        this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    };
    DealsViewComponent.prototype.onShrink = function () {
        this.wildState == 'normal' ? this.wildState = 'shrunk' : this.wildState = 'normal';
    };
    DealsViewComponent.prototype.resetForm = function (commentForm) {
        commentForm.reset({ deal_id: this.dealId, salesman_id: this.loggedInId });
    };
    DealsViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/private/deals/view/view.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('divState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ backgroundColor: 'red', transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ backgroundColor: '#bee0ff', opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                        ]))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/private/deals/view/view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_service_core_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"],
            src_app_service_core_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"],
            src_app_service_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], DealsViewComponent);
    return DealsViewComponent;
}());



/***/ }),

/***/ "./src/app/private/private-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/private/private-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PrivateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoutingModule", function() { return PrivateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/private/dashboard/dashboard.component.ts");
/* harmony import */ var _private_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./private.component */ "./src/app/private/private.component.ts");
/* harmony import */ var _service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth-guard/auth-guard.service */ "./src/app/service/auth-guard/auth-guard.service.ts");
/* harmony import */ var _deals_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deals/list/list.component */ "./src/app/private/deals/list/list.component.ts");
/* harmony import */ var _users_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/list/list.component */ "./src/app/private/users/list/list.component.ts");
/* harmony import */ var _users_add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/add/add.component */ "./src/app/private/users/add/add.component.ts");
/* harmony import */ var _tiers_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tiers/list/list.component */ "./src/app/private/tiers/list/list.component.ts");
/* harmony import */ var _rules_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules/list/list.component */ "./src/app/private/rules/list/list.component.ts");
/* harmony import */ var _rules_add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rules/add/add.component */ "./src/app/private/rules/add/add.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/private/settings/settings.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/private/profile/profile.component.ts");
/* harmony import */ var _deals_view_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deals/view/view.component */ "./src/app/private/deals/view/view.component.ts");
/* harmony import */ var _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sales-report/sales-report.component */ "./src/app/private/sales-report/sales-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '', component: _private_component__WEBPACK_IMPORTED_MODULE_3__["PrivateComponent"], children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
            { path: 'dashboard/:id/:role', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
            {
                path: 'deals', canActivate: [_service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]], children: [
                    { path: '', redirectTo: '/deals/list', pathMatch: 'full' },
                    { path: 'list', component: _deals_list_list_component__WEBPACK_IMPORTED_MODULE_5__["DealsListComponent"] },
                    { path: 'getDeal', component: _deals_view_view_component__WEBPACK_IMPORTED_MODULE_13__["DealsViewComponent"] }
                ]
            },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
            {
                path: 'users', canActivate: [_service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]], children: [
                    { path: '', redirectTo: '/users/list', pathMatch: 'full' },
                    { path: 'list', component: _users_list_list_component__WEBPACK_IMPORTED_MODULE_6__["UsersListComponent"] },
                    { path: 'add', component: _users_add_add_component__WEBPACK_IMPORTED_MODULE_7__["UsersAddComponent"] }
                ]
            },
            {
                path: 'tiers', canActivate: [_service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]], children: [
                    { path: '', redirectTo: '/tiers/list', pathMatch: 'full' },
                    { path: 'list', component: _tiers_list_list_component__WEBPACK_IMPORTED_MODULE_8__["TiersListComponent"] }
                ]
            },
            {
                path: 'rules', canActivate: [_service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]], children: [
                    { path: '', redirectTo: '/rules/list', pathMatch: 'full' },
                    { path: 'list', component: _rules_list_list_component__WEBPACK_IMPORTED_MODULE_9__["rulesListComponent"] },
                    { path: 'add', component: _rules_add_add_component__WEBPACK_IMPORTED_MODULE_10__["rulesAddComponent"] }
                ]
            },
            { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], canActivate: [_service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
            { path: 'sales-report', component: _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_14__["SalesReportComponent"], canActivate: [_service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] }
        ]
    }
];
var PrivateRoutingModule = /** @class */ (function () {
    function PrivateRoutingModule() {
    }
    PrivateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PrivateRoutingModule);
    return PrivateRoutingModule;
}());



/***/ }),

/***/ "./src/app/private/private.component.html":
/*!************************************************!*\
  !*** ./src/app/private/private.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-topnavbar></app-topnavbar>\n  <app-asidenavbar></app-asidenavbar>\n  <div class=\"content-wrapper\" style=\"min-height: 226px;\">\n\n    <router-outlet></router-outlet>\n\n  </div>\n  <app-footernavbar></app-footernavbar>\n</div>"

/***/ }),

/***/ "./src/app/private/private.component.scss":
/*!************************************************!*\
  !*** ./src/app/private/private.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvcHJpdmF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/private/private.component.ts":
/*!**********************************************!*\
  !*** ./src/app/private/private.component.ts ***!
  \**********************************************/
/*! exports provided: PrivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateComponent", function() { return PrivateComponent; });
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

var PrivateComponent = /** @class */ (function () {
    function PrivateComponent() {
    }
    PrivateComponent.prototype.ngOnInit = function () {
        //window.dispatchEvent(new Event('resize'));
        document.body.className = 'hold-transition sidebar-mini';
        $.widget.bridge('uibutton', $.ui.button);
    };
    PrivateComponent.prototype.ngOnDestroy = function () {
        document.body.className = '';
    };
    PrivateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-private',
            template: __webpack_require__(/*! ./private.component.html */ "./src/app/private/private.component.html"),
            styles: [__webpack_require__(/*! ./private.component.scss */ "./src/app/private/private.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivateComponent);
    return PrivateComponent;
}());



/***/ }),

/***/ "./src/app/private/private.module.ts":
/*!*******************************************!*\
  !*** ./src/app/private/private.module.ts ***!
  \*******************************************/
/*! exports provided: PrivateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateModule", function() { return PrivateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var _private_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./private-routing.module */ "./src/app/private/private-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/private/dashboard/dashboard.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _deals_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deals/list/list.component */ "./src/app/private/deals/list/list.component.ts");
/* harmony import */ var _deals_view_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deals/view/view.component */ "./src/app/private/deals/view/view.component.ts");
/* harmony import */ var _users_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/list/list.component */ "./src/app/private/users/list/list.component.ts");
/* harmony import */ var _users_add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/add/add.component */ "./src/app/private/users/add/add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tiers_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tiers/list/list.component */ "./src/app/private/tiers/list/list.component.ts");
/* harmony import */ var _rules_list_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rules/list/list.component */ "./src/app/private/rules/list/list.component.ts");
/* harmony import */ var _rules_add_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rules/add/add.component */ "./src/app/private/rules/add/add.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/private/settings/settings.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/private/profile/profile.component.ts");
/* harmony import */ var _rules_forms_cash_deal_editor_cash_deal_editor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rules/forms/cash-deal-editor/cash-deal-editor.component */ "./src/app/private/rules/forms/cash-deal-editor/cash-deal-editor.component.ts");
/* harmony import */ var _rules_forms_finance_deal_editor_finance_deal_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rules/forms/finance-deal-editor/finance-deal-editor.component */ "./src/app/private/rules/forms/finance-deal-editor/finance-deal-editor.component.ts");
/* harmony import */ var _rules_forms_outside_finance_deal_editor_outside_finance_deal_editor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rules/forms/outside-finance-deal-editor/outside-finance-deal-editor.component */ "./src/app/private/rules/forms/outside-finance-deal-editor/outside-finance-deal-editor.component.ts");
/* harmony import */ var _dashboard_salesman_dashboard_salesman_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/salesman-dashboard/salesman-dashboard.component */ "./src/app/private/dashboard/salesman-dashboard/salesman-dashboard.component.ts");
/* harmony import */ var _dashboard_salesmanager_dashboard_salesmanager_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/salesmanager-dashboard/salesmanager-dashboard.component */ "./src/app/private/dashboard/salesmanager-dashboard/salesmanager-dashboard.component.ts");
/* harmony import */ var _dashboard_finance_person_dashboard_finance_person_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/finance-person-dashboard/finance-person-dashboard.component */ "./src/app/private/dashboard/finance-person-dashboard/finance-person-dashboard.component.ts");
/* harmony import */ var _dashboard_financemanager_dashboard_financemanager_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/financemanager-dashboard/financemanager-dashboard.component */ "./src/app/private/dashboard/financemanager-dashboard/financemanager-dashboard.component.ts");
/* harmony import */ var _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/admin-dashboard/admin-dashboard.component */ "./src/app/private/dashboard/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sales-report/sales-report.component */ "./src/app/private/sales-report/sales-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var PrivateModule = /** @class */ (function () {
    function PrivateModule() {
    }
    PrivateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _private_routing_module__WEBPACK_IMPORTED_MODULE_4__["PrivateRoutingModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot(),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _deals_list_list_component__WEBPACK_IMPORTED_MODULE_7__["DealsListComponent"],
                _users_list_list_component__WEBPACK_IMPORTED_MODULE_9__["UsersListComponent"],
                _users_add_add_component__WEBPACK_IMPORTED_MODULE_10__["UsersAddComponent"],
                _tiers_list_list_component__WEBPACK_IMPORTED_MODULE_12__["TiersListComponent"],
                _rules_list_list_component__WEBPACK_IMPORTED_MODULE_13__["rulesListComponent"],
                _rules_add_add_component__WEBPACK_IMPORTED_MODULE_14__["rulesAddComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
                _rules_forms_cash_deal_editor_cash_deal_editor_component__WEBPACK_IMPORTED_MODULE_18__["CashDealEditorComponent"],
                _rules_forms_finance_deal_editor_finance_deal_editor_component__WEBPACK_IMPORTED_MODULE_19__["FinanceDealEditorComponent"],
                _rules_forms_outside_finance_deal_editor_outside_finance_deal_editor_component__WEBPACK_IMPORTED_MODULE_20__["OutsideFinanceDealEditorComponent"],
                _dashboard_salesman_dashboard_salesman_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["SalesmanDashboardComponent"],
                _dashboard_salesmanager_dashboard_salesmanager_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["SalesmanagerDashboardComponent"],
                _dashboard_finance_person_dashboard_finance_person_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["FinancePersonDashboardComponent"],
                _dashboard_financemanager_dashboard_financemanager_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["FinancemanagerDashboardComponent"],
                _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["AdminDashboardComponent"],
                _deals_view_view_component__WEBPACK_IMPORTED_MODULE_8__["DealsViewComponent"],
                _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_26__["SalesReportComponent"],
            ]
        })
    ], PrivateModule);
    return PrivateModule;
}());



/***/ }),

/***/ "./src/app/private/profile/profile.component.html":
/*!********************************************************!*\
  !*** ./src/app/private/profile/profile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Profile</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\" href=\"javascript:void(0)\">Home</a></li>\n          <li class=\"breadcrumb-item active\">User Profile</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n\n        <div class=\"card card-primary card-outline\">\n          <div class=\"card-body box-profile\">\n            <div class=\"text-center\">\n              <img class=\"profile-user-img img-fluid img-circle\" src=\"assets/dist/img/user4-128x128.jpg\" alt=\"User profile picture\">\n            </div>\n\n            <h3 class=\"profile-username text-center\">{{userName+' '+lastName}}</h3>\n\n            <p class=\"text-muted text-center\">{{userRole}}</p>\n\n          </div>\n        </div>\n\n        <!-- About Me Box -->\n        <div class=\"card card-primary card-outline\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">About Me</h3>\n          </div>\n          <!-- /.card-header -->\n          <div class=\"card-body\">\n            <strong><i class=\"fa fa-book mr-1\"></i> Education</strong>\n\n            <p class=\"text-muted\">\n              B.S. in Computer Science from the University of Tennessee at Knoxville\n            </p>\n\n            <hr>\n\n            <strong><i class=\"fa fa-map-marker mr-1\"></i> Location</strong>\n\n            <p class=\"text-muted\">Malibu, California</p>\n\n            <hr>\n\n            <strong><i class=\"fa fa-pencil mr-1\"></i> Skills</strong>\n\n            <p class=\"text-muted\">\n              <span class=\"tag tag-danger\">UI Design</span>\n              <span class=\"tag tag-success\">Coding</span>\n              <span class=\"tag tag-info\">Javascript</span>\n              <span class=\"tag tag-warning\">PHP</span>\n              <span class=\"tag tag-primary\">Node.js</span>\n            </p>\n            <hr>\n            <strong><i class=\"fa fa-file-text-o mr-1\"></i> Notes</strong>\n            <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-9\">\n        <div class=\"card card-primary card-outline\">\n          <div class=\"card-header p-2\">\n            <ul class=\"nav nav-pills\">\n              <li class=\"nav-item\"><a class=\"nav-link active\" href=\"#settings\" data-toggle=\"tab\">Details</a></li>\n            </ul>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"tab-content\">\n\n              <div class=\"active tab-pane\" id=\"settings\">\n                <form class=\"form-horizontal\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n                  <div class=\"form-group\">\n                    <label for=\"inputName\" class=\"col-sm-2 control-label\">First Name</label>\n                    <div class=\"col-sm-10\">\n                      <input type=\"text\" formControlName=\"first_name\" class=\"form-control\" id=\"inputName\" placeholder=\"First Name\">\n                      <div *ngIf=\"userForm.controls['first_name'].invalid && (userForm.controls['first_name'].dirty || userForm.controls['first_name'].touched || userForm.controls['first_name'].untouched)\">\n                        <app-show-errors [control]=\"userForm.controls['first_name']\"></app-show-errors>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Last Name</label>\n\n                    <div class=\"col-sm-10\">\n                      <input type=\"text\" formControlName=\"last_name\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Last Name\">\n                      <div *ngIf=\"userForm.controls['last_name'].invalid && (userForm.controls['last_name'].dirty || userForm.controls['last_name'].touched || userForm.controls['last_name'].untouched)\">\n                        <app-show-errors [control]=\"userForm.controls['last_name']\"></app-show-errors>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"inputName\" class=\"col-sm-2 control-label\">Email</label>\n                    <div class=\"col-sm-10\">\n                      <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"inputName\" placeholder=\"Email\">\n                      <div *ngIf=\"userForm.controls['email'].invalid && (userForm.controls['email'].dirty || userForm.controls['email'].touched || userForm.controls['email'].untouched)\">\n                        <app-show-errors [control]=\"userForm.controls['email']\"></app-show-errors>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"inputName\" class=\"col-sm-2 control-label\">Phone</label>\n                    <div class=\"col-sm-10\">\n                      <input type=\"text\" formControlName=\"phone\" class=\"form-control\" id=\"inputName\" placeholder=\"Phone Number\">\n                      <div *ngIf=\"userForm.controls['phone'].invalid && (userForm.controls['phone'].dirty || userForm.controls['phone'].touched || userForm.controls['phone'].untouched)\">\n                        <app-show-errors [control]=\"userForm.controls['phone']\"></app-show-errors>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- <div class=\"form-group\">\n                    <label for=\"exampleInputFile\" class=\"col-sm-2 control-label\">Profile Picture</label>\n                    <div class=\"input-group col-sm-10\">\n                      <div class=\"custom-file\">\n                        <input type=\"file\" name=\"profile_image\" formControlName=\"profile_image\" class=\"custom-file-input\" id=\"exampleInputFile\">\n                        <label class=\"custom-file-label\" for=\"exampleInputFile\">Choose file</label>\n                      </div>\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\" id=\"\">Upload</span>\n                      </div>\n                    </div>\n                  </div> -->\n                  <div class=\"form-group\">\n                    <div class=\"col-sm-offset-2 col-sm-10\">\n                      <button type=\"submit\" class=\"btn btn-info\">Update</button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/private/profile/profile.component.scss":
/*!********************************************************!*\
  !*** ./src/app/private/profile/profile.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/private/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/private/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, router, route, apiSvc, constantSvc, helperSvc) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.userRole = 'Administrator';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.id = this.helperSvc.lsGetItem('USERINFO').id;
        this.userName = this.helperSvc.lsGetItem('USERINFO').first_name;
        this.lastName = this.helperSvc.lsGetItem('USERINFO').last_name;
        this.initForm();
        this.getUserDetails();
    };
    ProfileComponent.prototype.initForm = function () {
        this.userForm = this.fb.group({
            id: [],
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    };
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.userForm.valid) {
            this.apiSvc.putService(this.constantSvc.APIConfig.UPDATEPROFILE, this.userForm.value)
                .subscribe(function (data) {
                console.log(data);
                if (data.message) {
                    _this.helperSvc.lsSetItem(_this.constantSvc.tokenConfig.USER_INFO, data.userData);
                    _this.router.navigate(['/dashboard']);
                    _this.helperSvc.notifySuccess(data.message ? data.message : "success");
                }
                else if (data.error) {
                    _this.helperSvc.notifyError(data.error ? data.error : "something went wrong please try again");
                }
            }, function (error) {
                console.log(error.error.errorMessage);
            });
        }
    };
    ProfileComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.apiSvc.getService(this.constantSvc.APIConfig.GETUSER, this.id)
            .subscribe(function (data) {
            if (data.message) {
                _this.userForm.setValue({
                    id: data.userData.id,
                    first_name: data.userData.first_name,
                    last_name: data.userData.last_name,
                    email: data.userData.email,
                    phone: data.userData.phone
                });
                _this.helperSvc.notifySuccess(data.message ? data.message : "User Info");
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
            console.log('error ', error);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/private/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/private/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/private/rules/add/add.component.html":
/*!******************************************************!*\
  !*** ./src/app/private/rules/add/add.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Add New Commission Rule</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\" routerLink='/dashboard'><i class=\"fa fa-dashboard\"></i>\n              Home</a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\" routerLink='/rules'>Rules</a></li>\n          <li class=\"breadcrumb-item active\">Add New Commission Rules</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"card card-info card-outline\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Add Rule</h3>\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-3\"></div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Deal Type</label>\n              <select (change)=\"changeEditor($event.target.value)\" class=\"form-control select2\">\n                <option selected value=\"cash\">Cash/Wholesale</option>\n                <option value=\"finance\">In-House Finance</option>\n                <option value=\"outsude-finance\">Outside Finance</option>\n              </select>\n            </div>\n\n            <app-cash-deal-editor *ngIf=\"showCashEditor\"></app-cash-deal-editor>\n            <app-finance-deal-editor *ngIf=\"showFinanceEditor\"></app-finance-deal-editor>\n            <app-outside-finance-deal-editor *ngIf=\"showOutsidefinanceEditor\"></app-outside-finance-deal-editor>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/private/rules/add/add.component.scss":
/*!******************************************************!*\
  !*** ./src/app/private/rules/add/add.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvcnVsZXMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/private/rules/add/add.component.ts":
/*!****************************************************!*\
  !*** ./src/app/private/rules/add/add.component.ts ***!
  \****************************************************/
/*! exports provided: rulesAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rulesAddComponent", function() { return rulesAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var rulesAddComponent = /** @class */ (function () {
    function rulesAddComponent() {
        this.editor = 'cash';
    }
    rulesAddComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(rulesAddComponent.prototype, "showCashEditor", {
        get: function () {
            return this.editor === 'cash';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rulesAddComponent.prototype, "showFinanceEditor", {
        get: function () {
            return this.editor === 'finance';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(rulesAddComponent.prototype, "showOutsidefinanceEditor", {
        get: function () {
            return this.editor === 'outsude-finance';
        },
        enumerable: true,
        configurable: true
    });
    rulesAddComponent.prototype.changeEditor = function (type) {
        this.editor = type;
    };
    rulesAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/private/rules/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/private/rules/add/add.component.scss")]
        })
    ], rulesAddComponent);
    return rulesAddComponent;
}());



/***/ }),

/***/ "./src/app/private/rules/forms/cash-deal-editor/cash-deal-editor.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/private/rules/forms/cash-deal-editor/cash-deal-editor.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"rulesForm\" (ngSubmit)=\"onSubmit()\">\n  <input type=\"hidden\" formControlName=\"deal_type\" name=\"deal_type\">\n  <input type=\"hidden\" formControlName=\"commission_unit\" name=\"commission_unit\">\n  <div class=\"form-group\">\n    <label for=\"inputEmail3\">Group :</label>\n    <select name=\"group\" formControlName=\"group\" (change)=\"groupChangeEvent($event.target.value)\" class=\"form-control select2\"\n      style=\"width: 100%;\">\n      <option value=\"0\" selected=\"selected\">Please Select Group</option>\n      <option value=\"A\">Group A - Runner</option>\n      <option value=\"B\">Group B - Finance Manager</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"showMR\">\n    <label for=\"exampleInputPassword1\">MR Fee :</label> (Please Enter Price Range)\n    <div class=\"row\">\n      <div class=\"col-md-6 input-icon\">\n        <input type=\"text\" name=\"mr_fee_min\" formControlName=\"mr_fee_min\" class=\"form-control\" placeholder=\"0.00\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.mr_fee_min.errors }\" required>\n        <i>$</i>\n        <div *ngIf=\"submitted && f.mr_fee_min.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.mr_fee_min.errors.required\">\n            Please enter minimum amount\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 input-icon\">\n        <input type=\"text\" name=\"mr_fee_max\" formControlName=\"mr_fee_max\" class=\"form-control\" placeholder=\"0.00\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.mr_fee_max.errors }\" required>\n        <i>$</i>\n        <div *ngIf=\"submitted && f.mr_fee_max.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.mr_fee_max.errors.required\">\n            Please enter maximum amount\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"showTier\">\n    <label for=\"exampleInputEmail1\">Tier :</label>\n    <select class=\"form-control select2\" formControlName=\"tier_id\" style=\"width: 100%;\">\n      <option selected=\"selected\">Select Tier</option>\n      <option *ngFor=\"let tier of tiers\" [value]=\"tier.id\" [selected]=\"rulesForm.value.tier_id==tier.id\">{{tier.title}}\n        - {{tier.department}}</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"showCommissionA\">\n    <label for=\"exampleInputPassword1\">Commission :</label>\n    <div class=\"input-icon\">\n      <input type=\"text\" name=\"commission\" formControlName=\"commission\" class=\"form-control\" placeholder=\"0.00\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.commission.errors }\" required [attr.disabled]=\"commissinADisabled?'':null\">\n      <i>$</i>\n      <div *ngIf=\"submitted && f.commission.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.commission.errors.required\">\n          Commission is required\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"showCommissionB\">\n    <label for=\"exampleInputPassword1\">Commission :</label>\n    <span> (Percent of Profite)</span>\n    <div class=\"input-icon input-icon-right\">\n      <input type=\"text\" name=\"commission\" formControlName=\"commission\" class=\"form-control\" placeholder=\"00\" [ngClass]=\"{ 'is-invalid': submitted && f.commission.errors }\"\n        required [attr.disabled]=\"commissinBDisabled?'':null\">\n      <i>%</i>\n      <div *ngIf=\"submitted && f.commission.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.commission.errors.required\">\n          Commission is required\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"showExtendedCommission\">\n    <label for=\"exampleInputPassword1\">Extended Commission :</label>\n    <span> (Fixed Amount)</span>\n    <div class=\"input-icon\">\n      <input type=\"text\" name=\"extented_commission\" formControlName=\"extented_commission\" class=\"form-control\"\n        placeholder=\"0.00\" [ngClass]=\"{ 'is-invalid': submitted && f.extented_commission.errors }\" required>\n      <i>$</i>\n      <div *ngIf=\"submitted && f.extented_commission.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.extented_commission.errors.required\">\n          Extended Commission is required\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"box-footer\" *ngIf=\"showButton\">\n    <button type=\"button\" routerLink=\"/manage-rules/list\" class=\"btn btn-default\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-info pull-right\">Submit</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/private/rules/forms/cash-deal-editor/cash-deal-editor.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/private/rules/forms/cash-deal-editor/cash-deal-editor.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-icon {\n  position: relative; }\n\n.input-icon > i {\n  position: absolute;\n  display: block;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  top: 50%;\n  pointer-events: none;\n  width: 25px;\n  text-align: center;\n  font-style: normal; }\n\n.input-icon > input {\n  padding-left: 25px;\n  padding-right: 0; }\n\n.input-icon-right > i {\n  right: 0; }\n\n.input-icon-right > input {\n  padding-left: 0;\n  padding-right: 25px;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9ydWxlcy9mb3Jtcy9jYXNoLWRlYWwtZWRpdG9yL0M6XFxQcm9qZWN0c1xcTm9kZUpTXFxBbmd1bGFyNlxcbmc2QWRtaW5MVEUvc3JjXFxhcHBcXHByaXZhdGVcXHJ1bGVzXFxmb3Jtc1xcY2FzaC1kZWFsLWVkaXRvclxcY2FzaC1kZWFsLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNFLFFBQVEsRUFBQTs7QUFHVjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcml2YXRlL3J1bGVzL2Zvcm1zL2Nhc2gtZGVhbC1lZGl0b3IvY2FzaC1kZWFsLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5pbnB1dC1pY29uID4gaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIHRvcDogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICBcbiAgLmlucHV0LWljb24gPiBpbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5pbnB1dC1pY29uLXJpZ2h0ID4gaSB7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dC1pY29uLXJpZ2h0ID4gaW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/private/rules/forms/cash-deal-editor/cash-deal-editor.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/private/rules/forms/cash-deal-editor/cash-deal-editor.component.ts ***!
  \************************************************************************************/
/*! exports provided: CashDealEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashDealEditorComponent", function() { return CashDealEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CashDealEditorComponent = /** @class */ (function () {
    function CashDealEditorComponent(fb, router, apiSvc, constantSvc, helperSvc) {
        this.fb = fb;
        this.router = router;
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.param = [];
        this.tiers = [];
        this.submitted = false;
        this.showButton = false;
        this.showMR = false;
        this.showTier = false;
        this.showCommissionA = false;
        this.showCommissionB = false;
        this.showExtendedCommission = false;
        this.commissinADisabled = false;
        this.commissinBDisabled = false;
        this.rulesForm = this.fb.group({
            tier_id: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mr_fee_min: [''],
            mr_fee_max: [''],
            commission: [''],
            commission_unit: [''],
            extented_commission: [''],
            deal_type: ['D'],
            group: ['0'],
            trade_in: ['']
        });
    }
    Object.defineProperty(CashDealEditorComponent.prototype, "f", {
        get: function () { return this.rulesForm.controls; },
        enumerable: true,
        configurable: true
    });
    CashDealEditorComponent.prototype.ngOnInit = function () {
        this.getTiersList();
    };
    CashDealEditorComponent.prototype.getTiersList = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.TIERSLIST, this.param)
            .subscribe(function (data) {
            _this.tiers = data.tiers;
        }, function (error) {
        });
    };
    CashDealEditorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.rulesForm.invalid) {
            return;
        }
        //console.log(this.rulesForm.value);
        this.apiSvc.postService(this.constantSvc.APIConfig.ADDRULE, this.rulesForm.value)
            .subscribe(function (data) {
            if (data.message) {
                _this.router.navigate(['/rules/list']);
                _this.helperSvc.notifySuccess(data.message ? data.message : 'success');
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : 'Something went wrong please try again');
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
        });
    };
    CashDealEditorComponent.prototype.groupChangeEvent = function (value) {
        var _this = this;
        if (value == 'A') {
            this.rulesForm.controls['commission_unit'].setValue('fixed');
            setTimeout(function () {
                _this.showMR = true;
                _this.showTier = true;
                _this.showCommissionA = true;
                _this.showCommissionB = false;
                _this.showExtendedCommission = true;
                _this.showButton = true;
                _this.rulesForm.get("mr_fee_min").enable();
                _this.rulesForm.get("mr_fee_max").enable();
                _this.rulesForm.get("extented_commission").enable();
            }, 1000);
        }
        else if (value == 'B') {
            this.rulesForm.controls['commission_unit'].setValue('%');
            setTimeout(function () {
                _this.showMR = false;
                _this.showTier = true;
                _this.showCommissionA = false;
                _this.showCommissionB = true;
                _this.showExtendedCommission = false;
                _this.showButton = true;
                _this.rulesForm.get("mr_fee_min").disable();
                _this.rulesForm.get("mr_fee_max").disable();
                _this.rulesForm.get("extented_commission").disable();
            }, 1000);
        }
        else {
            setTimeout(function () {
                _this.showMR = false;
                _this.showTier = false;
                _this.showCommissionA = false;
                _this.showCommissionB = false;
                _this.showExtendedCommission = false;
                _this.showButton = false;
            }, 1000);
        }
    };
    CashDealEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cash-deal-editor',
            template: __webpack_require__(/*! ./cash-deal-editor.component.html */ "./src/app/private/rules/forms/cash-deal-editor/cash-deal-editor.component.html"),
            styles: [__webpack_require__(/*! ./cash-deal-editor.component.scss */ "./src/app/private/rules/forms/cash-deal-editor/cash-deal-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_4__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
    ], CashDealEditorComponent);
    return CashDealEditorComponent;
}());



/***/ }),

/***/ "./src/app/private/rules/forms/finance-deal-editor/finance-deal-editor.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/private/rules/forms/finance-deal-editor/finance-deal-editor.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"rulesForm\" (ngSubmit)=\"onSubmit()\">\n  <input type=\"hidden\" formControlName=\"deal_type\" name=\"deal_type\">\n  <input type=\"hidden\" formControlName=\"commission_unit\" name=\"commission_unit\">\n  <input type=\"hidden\" formControlName=\"flat_commission_unit\" name=\"flat_commission_unit\">\n  <div class=\"form-group\">\n    <label for=\"inputEmail3\">Group :</label>\n    <select name=\"group\" formControlName=\"group\" (change)=\"groupChangeEvent($event.target.value)\" class=\"form-control select2\"\n      style=\"width: 100%;\">\n      <option value=\"0\" selected=\"selected\">Please Select Group</option>\n      <option value=\"A\">Group A - Runner</option>\n      <option value=\"B\">Group B - Finance Manager</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"showMonths\">\n    <label for=\"inputEmail3\">Finanace Time In Months :</label>\n    <select name=\"group\" formControlName=\"months\" (change)=\"monthChangeEvent($event.target.value)\" class=\"form-control select2\"\n      style=\"width: 100%;\">\n      <option value=\"0\" selected=\"selected\">Please Select</option>\n      <option value=\"greater\">If customer wants greater then we allowed months</option>\n      <option value=\"less\">If customer wants less then we allowed months</option>\n      <option value=\"tradeIn\">If Trade In</option>\n    </select>\n  </div>\n\n\n  <div class=\"form-group\" *ngIf=\"showTier\">\n    <label for=\"exampleInputEmail1\">Tier :</label>\n    <select class=\"form-control select2\" formControlName=\"tier_id\" style=\"width: 100%;\">\n      <option selected=\"selected\">Select Tier</option>\n      <option *ngFor=\"let tier of tiers\" [value]=\"tier.id\" [selected]=\"rulesForm.value.tier_id==tier.id\">{{tier.title}}\n        - {{tier.department}}</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"showCommission\">\n    <label for=\"exampleInputPassword1\">Commission :</label>\n    <span> (Percent of Down Payment)</span>\n    <div class=\"input-icon input-icon-right\">\n      <input type=\"text\" name=\"commission\" formControlName=\"commission\" class=\"form-control\" placeholder=\"00\" [ngClass]=\"{ 'is-invalid': submitted && f.commission.errors }\"\n        required>\n      <i>%</i>\n      <div *ngIf=\"submitted && f.commission.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.commission.errors.required\">\n          Commission is required\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"showTrade\">\n    <label for=\"exampleInputPassword1\">Trade In :</label>\n    <span> (Percent of Trade In)</span>\n    <div class=\"input-icon input-icon-right\">\n      <input type=\"text\" name=\"commission\" formControlName=\"trade_in\" class=\"form-control\" placeholder=\"00\" [ngClass]=\"{ 'is-invalid': submitted && f.trade_in.errors }\"\n        required [attr.disabled]=\"tradeInDisabled?'':null\">\n      <i>%</i>\n      <div *ngIf=\"submitted && f.trade_in.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.trade_in.errors.required\">\n          Trade In is required\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"showflatCommission\">\n    <label for=\"exampleInputPassword1\">Commission :</label>\n    <span> (Flat Amount for Finance Manager)</span>\n    <div class=\"input-icon\">\n      <input type=\"text\" name=\"flat_commission\" formControlName=\"flat_commission\" class=\"form-control\" placeholder=\"0.00\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.flat_commission.errors }\" required [attr.readonly]=\"commissinForFlatReadonly?'':null\">\n      <i>$</i>\n      <div *ngIf=\"submitted && f.flat_commission.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.flat_commission.errors.required\">\n          Commission is required\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"box-footer\" *ngIf=\"showButton\">\n    <button type=\"button\" routerLink=\"/manage-rules/list\" class=\"btn btn-default\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-info pull-right\">Submit</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/private/rules/forms/finance-deal-editor/finance-deal-editor.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/private/rules/forms/finance-deal-editor/finance-deal-editor.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-icon {\n  position: relative; }\n\n.input-icon > i {\n  position: absolute;\n  display: block;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  top: 50%;\n  pointer-events: none;\n  width: 25px;\n  text-align: center;\n  font-style: normal; }\n\n.input-icon > input {\n  padding-left: 25px;\n  padding-right: 0; }\n\n.input-icon-right > i {\n  right: 0; }\n\n.input-icon-right > input {\n  padding-left: 0;\n  padding-right: 25px;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9ydWxlcy9mb3Jtcy9maW5hbmNlLWRlYWwtZWRpdG9yL0M6XFxQcm9qZWN0c1xcTm9kZUpTXFxBbmd1bGFyNlxcbmc2QWRtaW5MVEUvc3JjXFxhcHBcXHByaXZhdGVcXHJ1bGVzXFxmb3Jtc1xcZmluYW5jZS1kZWFsLWVkaXRvclxcZmluYW5jZS1kZWFsLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNFLFFBQVEsRUFBQTs7QUFHVjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcml2YXRlL3J1bGVzL2Zvcm1zL2ZpbmFuY2UtZGVhbC1lZGl0b3IvZmluYW5jZS1kZWFsLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5pbnB1dC1pY29uID4gaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIHRvcDogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICBcbiAgLmlucHV0LWljb24gPiBpbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5pbnB1dC1pY29uLXJpZ2h0ID4gaSB7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dC1pY29uLXJpZ2h0ID4gaW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/private/rules/forms/finance-deal-editor/finance-deal-editor.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/private/rules/forms/finance-deal-editor/finance-deal-editor.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FinanceDealEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceDealEditorComponent", function() { return FinanceDealEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FinanceDealEditorComponent = /** @class */ (function () {
    function FinanceDealEditorComponent(fb, router, apiSvc, constantSvc, helperSvc) {
        this.fb = fb;
        this.router = router;
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.param = [];
        this.tiers = [];
        this.submitted = false;
        this.tradeInDisabled = false;
        this.showButton = false;
        this.showTier = false;
        this.showCommission = false;
        this.showMonths = false;
        this.showTrade = false;
        this.showflatCommission = false;
        this.commissinForFlatReadonly = true;
        this.rulesForm = this.fb.group({
            tier_id: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deal_type: ['F'],
            group: ['0'],
            commission: [''],
            commission_unit: ['%'],
            trade_in: [''],
            months: ['0'],
            flat_commission: ['100'],
            flat_commission_unit: ['fixed'] //if rule is made for finance manager
        });
    }
    Object.defineProperty(FinanceDealEditorComponent.prototype, "f", {
        get: function () { return this.rulesForm.controls; },
        enumerable: true,
        configurable: true
    });
    FinanceDealEditorComponent.prototype.ngOnInit = function () {
        this.getTiersList();
    };
    FinanceDealEditorComponent.prototype.getTiersList = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.TIERSLIST, this.param)
            .subscribe(function (data) {
            _this.tiers = data.tiers;
        }, function (error) {
        });
    };
    FinanceDealEditorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.rulesForm.invalid) {
            return;
        }
        console.log(this.rulesForm.value);
        this.apiSvc.postService(this.constantSvc.APIConfig.ADDRULE, this.rulesForm.value)
            .subscribe(function (data) {
            if (data.message) {
                _this.router.navigate(['/rules/list']);
                _this.helperSvc.notifySuccess(data.message ? data.message : 'success');
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : 'Something went wrong please try again');
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
        });
    };
    FinanceDealEditorComponent.prototype.monthChangeEvent = function (value) {
        var _this = this;
        if (value == 'less') {
            setTimeout(function () {
                _this.showTier = true;
                _this.showCommission = true;
                _this.showTrade = false;
                _this.showButton = true;
                _this.rulesForm.get("trade_in").disable();
            }, 1000);
        }
        else if (value == 'greater') {
            setTimeout(function () {
                _this.showTier = true;
                _this.showCommission = true;
                _this.showTrade = false;
                _this.showButton = true;
                _this.rulesForm.get("trade_in").disable();
            }, 1000);
        }
        else if (value == 'tradeIn') {
            this.showTier = true;
            this.showCommission = true;
            this.showTrade = true;
            this.showButton = true;
            this.rulesForm.get("trade_in").enable();
        }
        else {
            setTimeout(function () {
                _this.showTier = false;
                _this.showCommission = false;
                _this.showTrade = false;
                _this.showButton = false;
            }, 1000);
        }
    };
    FinanceDealEditorComponent.prototype.groupChangeEvent = function (value) {
        if (value == 'A') {
            this.showMonths = true;
            //this.showButton = true;
        }
        else if (value == 'B') {
            this.showMonths = false;
            this.showTier = false;
            this.showCommission = false;
            this.showTrade = false;
            this.showButton = true;
            this.showflatCommission = true;
        }
        else {
            this.showMonths = false;
            this.showTier = false;
            this.showCommission = false;
            this.showTrade = false;
            this.showButton = false;
        }
    };
    FinanceDealEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finance-deal-editor',
            template: __webpack_require__(/*! ./finance-deal-editor.component.html */ "./src/app/private/rules/forms/finance-deal-editor/finance-deal-editor.component.html"),
            styles: [__webpack_require__(/*! ./finance-deal-editor.component.scss */ "./src/app/private/rules/forms/finance-deal-editor/finance-deal-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_4__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
    ], FinanceDealEditorComponent);
    return FinanceDealEditorComponent;
}());



/***/ }),

/***/ "./src/app/private/rules/forms/outside-finance-deal-editor/outside-finance-deal-editor.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/private/rules/forms/outside-finance-deal-editor/outside-finance-deal-editor.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"rulesForm\" (ngSubmit)=\"onSubmit()\">\n    <input type=\"hidden\" formControlName=\"deal_type\" name=\"deal_type\">\n    <input type=\"hidden\" formControlName=\"commission_unit\" name=\"commission_unit\">\n    \n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Tier :</label>\n      <select class=\"form-control select2\" formControlName=\"tier_id\" style=\"width: 100%;\">\n        <option selected=\"selected\">Select Tier</option>\n        <option *ngFor=\"let tier of tiers\" [value]=\"tier.id\" [selected]=\"rulesForm.value.tier_id==tier.id\">\n          {{tier.title}} - {{tier.department}}</option>\n      </select>\n    </div>\n  \n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Commission :</label>\n      <span> (Percent of Profite)</span>\n      <div class=\"input-icon input-icon-right\">\n        <input type=\"text\" name=\"commission\" formControlName=\"commission\" class=\"form-control\" placeholder=\"00\" [ngClass]=\"{ 'is-invalid': submitted && f.commission.errors }\"\n          required>\n        <i>%</i>\n        <div *ngIf=\"submitted && f.commission.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.commission.errors.required\">\n            Commission is required\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"box-footer\">\n      <button type=\"button\" routerLink=\"/manage-rules/list\" class=\"btn btn-default\">Cancel</button>\n      <button type=\"submit\" class=\"btn btn-info pull-right\">Submit</button>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/private/rules/forms/outside-finance-deal-editor/outside-finance-deal-editor.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/private/rules/forms/outside-finance-deal-editor/outside-finance-deal-editor.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-icon {\n  position: relative; }\n\n.input-icon > i {\n  position: absolute;\n  display: block;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  top: 50%;\n  pointer-events: none;\n  width: 25px;\n  text-align: center;\n  font-style: normal; }\n\n.input-icon > input {\n  padding-left: 25px;\n  padding-right: 0; }\n\n.input-icon-right > i {\n  right: 0; }\n\n.input-icon-right > input {\n  padding-left: 0;\n  padding-right: 25px;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9ydWxlcy9mb3Jtcy9vdXRzaWRlLWZpbmFuY2UtZGVhbC1lZGl0b3IvQzpcXFByb2plY3RzXFxOb2RlSlNcXEFuZ3VsYXI2XFxuZzZBZG1pbkxURS9zcmNcXGFwcFxccHJpdmF0ZVxccnVsZXNcXGZvcm1zXFxvdXRzaWRlLWZpbmFuY2UtZGVhbC1lZGl0b3JcXG91dHNpZGUtZmluYW5jZS1kZWFsLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNFLFFBQVEsRUFBQTs7QUFHVjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcml2YXRlL3J1bGVzL2Zvcm1zL291dHNpZGUtZmluYW5jZS1kZWFsLWVkaXRvci9vdXRzaWRlLWZpbmFuY2UtZGVhbC1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuaW5wdXQtaWNvbiA+IGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgICB0b3A6IDUwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB3aWR0aDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgXG4gIC5pbnB1dC1pY29uID4gaW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cblxuICAuaW5wdXQtaWNvbi1yaWdodCA+IGkge1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAuaW5wdXQtaWNvbi1yaWdodCA+IGlucHV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/private/rules/forms/outside-finance-deal-editor/outside-finance-deal-editor.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/private/rules/forms/outside-finance-deal-editor/outside-finance-deal-editor.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: OutsideFinanceDealEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutsideFinanceDealEditorComponent", function() { return OutsideFinanceDealEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OutsideFinanceDealEditorComponent = /** @class */ (function () {
    function OutsideFinanceDealEditorComponent(fb, router, apiSvc, constantSvc, helperSvc) {
        this.fb = fb;
        this.router = router;
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.param = [];
        this.tiers = [];
        this.submitted = false;
        this.rulesForm = this.fb.group({
            tier_id: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            deal_type: ['OF'],
            commission: [''],
            commission_unit: ['%'],
        });
    }
    Object.defineProperty(OutsideFinanceDealEditorComponent.prototype, "f", {
        get: function () { return this.rulesForm.controls; },
        enumerable: true,
        configurable: true
    });
    OutsideFinanceDealEditorComponent.prototype.ngOnInit = function () {
        this.getTiersList();
    };
    OutsideFinanceDealEditorComponent.prototype.getTiersList = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.TIERSLIST, this.param)
            .subscribe(function (data) {
            _this.tiers = data.tiers;
        }, function (error) {
        });
    };
    OutsideFinanceDealEditorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.rulesForm.invalid) {
            return;
        }
        console.log(this.rulesForm.value);
        this.apiSvc.postService(this.constantSvc.APIConfig.ADDRULE, this.rulesForm.value)
            .subscribe(function (data) {
            if (data.message) {
                _this.router.navigate(['/rules/list']);
                _this.helperSvc.notifySuccess(data.message ? data.message : 'success');
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : 'Something went wrong please try again');
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
        });
    };
    OutsideFinanceDealEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-outside-finance-deal-editor',
            template: __webpack_require__(/*! ./outside-finance-deal-editor.component.html */ "./src/app/private/rules/forms/outside-finance-deal-editor/outside-finance-deal-editor.component.html"),
            styles: [__webpack_require__(/*! ./outside-finance-deal-editor.component.scss */ "./src/app/private/rules/forms/outside-finance-deal-editor/outside-finance-deal-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
    ], OutsideFinanceDealEditorComponent);
    return OutsideFinanceDealEditorComponent;
}());



/***/ }),

/***/ "./src/app/private/rules/list/list.component.html":
/*!********************************************************!*\
  !*** ./src/app/private/rules/list/list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Manage Commission Rules</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\" href=\"javascript:void(0)\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Manage Commission Rules</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n    \n      <div class=\"card card-info card-outline\">\n        <div class=\"card-header\">\n          <h3 class=\"card-title\">Commission Rules List</h3>\n        </div>\n        <!-- /.card-header -->\n        <div class=\"card-body\">\n          <table id=\"rulesTable\" class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Tier</th>\n                <th>MR Fee</th>\n                <th>Commission</th>\n                <th>Extended Commission</th>\n                <th>Comm. Unit</th>\n                <th>Rule Group</th>\n                <th>Deal Type</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"todo-list\" *ngFor=\"let rule of rules; let i = index\" >\n                <td>{{ i+1 }}</td>\n                <td>{{ rule.tier_title }}</td>\n                <td>{{ rule.MR_fee_min }} - {{ rule.MR_fee_max }}</td>\n                <td>{{ rule.commission }}</td>\n                <td>{{ rule.extended_commission }}</td>\n                <td><span class=\"badge bg-info\">{{ rule.commission_unit }}</span></td>\n                <td><span class=\"badge bg-success\">{{ rule.rule_group }}</span></td>\n                <td><span class=\"badge bg-warning\">{{ rule.type }}</span></td>\n                <td>\n                  <div class=\"tools\">\n                    <a href=\"javascript:void(0)\"><i class=\"fa fa-edit\" style=\"color:green;\"></i></a>\n                    <a (click)=\"deleteEvent(rule.id)\" href=\"javascript:void(0)\"><i class=\"fa fa-trash-o\" style=\"color:red;\"></i></a>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr>\n                <th>#</th>\n                <th>Tier</th>\n                <th>MR Fee</th>\n                <th>Commission</th>\n                <th>Extended Commission</th>\n                <th>Comm. Unit</th>\n                <th>Rule Group</th>\n                <th>Deal Type</th>\n                <th>Action</th>\n              </tr>\n            </tfoot>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/private/rules/list/list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/private/rules/list/list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvcnVsZXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/private/rules/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/private/rules/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: rulesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rulesListComponent", function() { return rulesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// ES6 Modules or TypeScript

var rulesListComponent = /** @class */ (function () {
    function rulesListComponent(apiSvc, constantSvc, helperSvc) {
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.param = [];
        this.tiers = [];
    }
    rulesListComponent.prototype.ngOnInit = function () {
        this.getRulesList();
    };
    rulesListComponent.prototype.getRulesList = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.RULESLIST, this.param)
            .subscribe(function (data) {
            _this.initTable();
            if (data.message) {
                console.log(data);
                _this.rules = data.rules;
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : "No record found");
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
        });
    };
    rulesListComponent.prototype.deleteEvent = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'You will not be able to recover this record!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.apiSvc.deleteService(_this.constantSvc.APIConfig.DELETERULE, id)
                    .subscribe(function (data) {
                    if (data.message) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', data.message ? data.message : "Record deleted successfully", 'success');
                        _this.destroyTable();
                        _this.getRulesList();
                    }
                    else if (data.error) {
                        _this.helperSvc.notifyError(data.error ? data.error : "Something went wrong. please try again");
                    }
                }, function (error) {
                    _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Cancelled', 'Your record is safe :)', 'error');
            }
        });
    };
    rulesListComponent.prototype.initTable = function () {
        $(function () {
            $('#rulesTable').DataTable({
                "paging": true,
                "lengthChange": true,
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": true
            });
        });
    };
    rulesListComponent.prototype.destroyTable = function () {
        $(function () {
            var table = $('#rulesTable').DataTable();
            table.destroy();
        });
    };
    rulesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/private/rules/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/private/rules/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
    ], rulesListComponent);
    return rulesListComponent;
}());



/***/ }),

/***/ "./src/app/private/sales-report/sales-report.component.html":
/*!******************************************************************!*\
  !*** ./src/app/private/sales-report/sales-report.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\" href=\"javascript:void(0)\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Sales Report</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card card-info card-outline\">\n        <div class=\"card-header\">\n          <!-- <h3 class=\"card-title\">Deals Record</h3> -->\n\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-12 col-md-4 form-group\">\n\n            </div>\n            <div class=\"col-xs-12 col-12 col-md-4 form-group\">\n\n            </div>\n          </div>\n\n          <form>\n            <div class=\"row\">\n              <div class=\"col-sm-2\">\n                <select (change)=\"changeFilter($event.target.value)\" class=\"form-control\" style=\"width: 100%;\" tabindex=\"-1\"\n                  aria-hidden=\"true\">\n                  <option selected=\"selected\">Apply Filter By :</option>\n                  <option [value]=\"dateFilterOption\" *ngFor=\"let dateFilterOption of dateFilterOptions\">{{dateFilterOption}}</option>\n                </select>\n              </div>\n\n              <div class=\"col-md-2\" *ngIf=\"showYearly\">\n                <select name=\"yearFilter\" (change)=\"applyFilter()\" id=\"yearFilter\" class=\"form-control\" style=\"width: 100%;\"\n                  tabindex=\"-1\">\n                  <option value=\"\">Choose Year :</option>\n                  <option [value]=\"year\" *ngFor=\"let year of years\">{{year}}</option>\n                </select>\n              </div>\n\n              <div class=\"col-md-2\" *ngIf=\"showMonthly\">\n                <select (change)=\"applyFilter()\" name=\"monthInMonthYear\" id=\"monthInMonthYear\" class=\"form-control\"\n                  style=\"width: 100%;\" tabindex=\"-1\" aria-hidden=\"true\">\n                  <option selected=\"selected\" value=\"\">Choose Month :</option>\n                  <option [value]=\"month.value\" *ngFor=\"let month of months\">{{month.name}}</option>\n                </select>\n              </div>\n\n              <div class=\"col-md-2\" *ngIf=\"showMonthly\">\n                <select (change)=\"applyFilter()\" name=\"yearInMonthYear\" id=\"yearInMonthYear\" class=\"form-control\" style=\"width: 100%;\">\n                  <option selected value=\"\">Choose Year :</option>\n                  <option [value]=\"year\" *ngFor=\"let year of years\">{{year}}</option>\n                </select>\n              </div>\n\n              <div class=\"col-md-3\" *ngIf=\"showWeekly\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </span>\n                  </div>\n                  <input type=\"text\" class=\"form-control float-right\" id=\"dateRangePicker\">\n                </div>\n              </div>\n\n              <div class=\"col-md-2\" *ngIf=\"showDaily\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </span>\n                  </div>\n\n                  <input type=\"text\" name=\"bsDatepicker\" [(ngModel)]=\"bsDatepicker\" (ngModelChange)=\"applyFilter()\" id=\"bsDatepicker\"\n                    placeholder=\"0000/00/00\" class=\"form-control\" bsDatepicker [bsConfig]=\"bsConfig\">\n                </div>\n              </div>\n\n              <div class=\"col-md-2\" *ngIf=\"showCustom\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </span>\n                  </div>\n                  <input type=\"text\" name=\"minDate\" [(ngModel)]=\"minDate\" (ngModelChange)=\"applyFilter()\" id=\"minDate\"\n                    placeholder=\"0000/00/00\" class=\"form-control\" bsDatepicker [bsConfig]=\"bsConfig\">\n                </div>\n              </div>\n              <span *ngIf=\"showCustom\" style=\"padding-top:6px\">To</span>\n              <div class=\"col-md-2\" *ngIf=\"showCustom\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </span>\n                  </div>\n                  <input type=\"text\" name=\"maxDate\" [(ngModel)]=\"maxDate\" (ngModelChange)=\"applyFilter()\" id=\"maxDate\"\n                    placeholder=\"0000/00/00\" class=\"form-control\" bsDatepicker [bsConfig]=\"bsConfig\">\n                </div>\n              </div>\n\n              <div *ngIf=\"userRoleId != 4\" class=\"col-sm-2\" style=\"width: 100%;\" tabindex=\"-1\">\n                <select (change)=\"applyFilter()\" id=\"bySalesPerson\" class=\"form-control\">\n                  <option value=\"\">By Sales Person :</option>\n                  <option *ngFor=\"let salesPerson of salesPersons\">{{salesPerson.first_name}}</option>\n                </select>\n              </div>\n\n              <div class=\"col-sm-2\" style=\"width: 100%;\" tabindex=\"-1\">\n                <select name=\"bySaleType\" (change)=\"applyFilter()\" id=\"bySaleType\" class=\"form-control\">\n                  <option value=\"\">By Sale Type :</option>\n                  <option value=\"F\">In-House Finance</option>\n                  <option value=\"OF\">Outside Finance</option>\n                  <option value=\"C\">Cash Deal</option>\n                  <option value=\"D\">WholeSale Deal</option>\n                </select>\n              </div>\n\n              <div class=\"col-sm-2\" style=\"width: 100%;\" tabindex=\"-1\">\n                <input class=\"form-control\" type=\"text\" (keyup)=\"filterByStock($event.target.value)\" id=\"byStock\" placeholder=\"Stock #\">\n              </div>\n              <!-- <button (click)=\"clearFilter()\">Clear Filter</button> -->\n\n            </div>\n          </form>\n        </div>\n        <div class=\"card-body\" id=\"table\">\n          <table id=\"salesRecordTable\" class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Deal ID</th>\n                <th>Acct ID</th>\n                <th>Inst ID</th>\n                <th>Full Sale or Split</th>\n                <th>Contract Date</th>\n                <th>Stock #</th>\n                <th>Sales Person</th>\n                <th>Customer Name</th>\n                <th>Customer State</th>\n                <th>Sales Price</th>\n                <th>vAuto Price</th>\n                <th>MR Fee</th>\n                <th>Type Of Sale</th>\n                <th>Lender</th>\n                <th>P/U Note Balance</th>\n                <th># of Payments</th>\n                <th>Due Commission Amount</th>\n                <th>Eligible to pay</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let sale of sales; let i = index\">\n                <td></td>\n                <td><span class=\"badge bg-success\">{{sale.deal_id}}</span></td>\n                <td>{{sale.inst_id}}</td>\n                <td>{{sale.acct_id}}</td>\n                <td> - </td>\n                <td>{{ sale.deal_date }}</td>\n                <td>{{ sale.Stock_Number }}</td>\n                <td>{{ sale.sales_person }}</td>\n                <td>{{ sale.customer_name }}</td>\n                <td>{{ sale.customer_state }}</td>\n                <!-- <td>{{ sale.deal_amount }}</td> -->\n                <td><input class=\"editable-input\" type=\"text\" (blur)=\"valueUdateEvent(sale.id, $event.target.name, $event.target.value)\"\n                    name=\"deal_amount\" id=\"deal_amount\" value=\"{{sale.deal_amount}}\"></td>\n                <td>{{ sale.vAutoPrice }}</td>\n                <!-- <td>{{ sale.MR_Fee }}</td> -->\n                <td><input class=\"editable-input\" type=\"text\" (blur)=\"valueUdateEvent(sale.id, $event.target.name, $event.target.value)\"\n                    name=\"MR_Fee\" id=\"MR_Fee\" value=\"{{sale.MR_Fee}}\"></td>\n                <td>{{ sale.deal_type }}</td>\n                <td>{{ sale.lander_name }}</td>\n                <td> - </td>\n                <td>{{ sale.NumPayments }}</td>\n                <td> - </td>\n                <td> - </td>\n              </tr>\n            </tbody>\n            <!-- <tfoot>\n              <tr>\n                <td colspan=\"5\"><span style=\"float:right;\"><b>Total Sales: </b></span></td>\n                <td><span style=\"float:right;\"><b>{{totalSales}}</b></span> </td>\n                <td colspan=\"2\"><span><b>Total Commission Due: </b></span></td>\n                <td><span><b>340</b></span></td>\n              </tr>\n            </tfoot> -->\n          </table>\n          <table style=\"float:right\">\n            <tr>\n              <td><span>Total Sales : </span></td>\n              <td> <span><b>{{totalSales}}</b></span> </td>\n              <td><span>Total Amount To Pay : </span></td>\n              <td><span><b>{{totalCommissionDue}}</b></span></td>\n            </tr>\n          </table>\n        </div>\n        <!-- /.card-body -->\n        <div *ngIf=\"userRoleId == 1\" class=\"card-footer\">\n          <div id=\"buttons\"></div>\n        </div>\n      </div>\n      <!-- /.card -->\n    </div>\n    <!-- /.col -->\n  </div>\n  <!-- /.row -->\n</section>"

/***/ }),

/***/ "./src/app/private/sales-report/sales-report.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/private/sales-report/sales-report.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editable-input {\n  border: 0;\n  background: transparent; }\n\n#table th {\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9zYWxlcy1yZXBvcnQvQzpcXFByb2plY3RzXFxOb2RlSlNcXEFuZ3VsYXI2XFxuZzZBZG1pbkxURS9zcmNcXGFwcFxccHJpdmF0ZVxcc2FsZXMtcmVwb3J0XFxzYWxlcy1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFTO0VBQ1QsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0MsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcml2YXRlL3NhbGVzLXJlcG9ydC9zYWxlcy1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdGFibGUtaW5wdXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuI3RhYmxlIHRoIHtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/private/sales-report/sales-report.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/private/sales-report/sales-report.component.ts ***!
  \****************************************************************/
/*! exports provided: SalesReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReportComponent", function() { return SalesReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SalesReportComponent = /** @class */ (function () {
    function SalesReportComponent(apiSvc, constantSvc, helperSvc) {
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.colorTheme = 'theme-blue';
        this.param = [];
        this.sales = [];
        this.salesPersons = [];
        this.totalCommissionDue = 0;
        this.dateFilterOptions = ['Yearly', 'Monthly', 'Daily', 'Custom'];
        this.years = ['2018', '2017', '2016', '2015'];
        this.months = [
            { name: 'January', value: '01' },
            { name: 'February', value: '02' },
            { name: 'March', value: '03' },
            { name: 'April', value: '04' },
            { name: 'May', value: '05' },
            { name: 'June', value: '06' },
            { name: 'July', value: '07' },
            { name: 'August', value: '08' },
            { name: 'September', value: '09' },
            { name: 'October', value: '10' },
            { name: 'November', value: '11' },
            { name: 'December', value: '12' },
        ];
        this.showYearly = false;
        this.showMonthly = false;
        this.showWeekly = false;
        this.showDaily = false;
        this.showCustom = false;
    }
    SalesReportComponent.prototype.ngOnInit = function () {
        this.bsConfig = Object.assign({}, {
            containerClass: this.colorTheme,
            showWeekNumbers: false,
            dateInputFormat: 'YYYY/MM/DD',
            rangeInputFormat: 'YYYY/MM/DD',
        });
        this.userRoleId = this.helperSvc.lsGetItem('USERINFO').role_id;
        this.loggedInId = this.helperSvc.lsGetItem('USERINFO').id;
        this.getSalesList();
        this.getSalesPersonsList();
    };
    SalesReportComponent.prototype.getSalesList = function () {
        var _this = this;
        this.param = [];
        this.userInfo = { "login_id": this.loggedInId, "role_id": this.userRoleId };
        this.apiSvc.postService(this.constantSvc.APIConfig.DEALSLISTBYUSER, this.userInfo)
            .subscribe(function (data) {
            _this.initSalesTable();
            if (data.message) {
                // console.log(data.deals);
                _this.totalSales = data.deals.length;
                _this.sales = data.deals;
            }
            else if (data.error) {
                _this.sales = null;
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
        });
    };
    SalesReportComponent.prototype.getSalesPersonsList = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.GETSALESPERSONS, this.param)
            .subscribe(function (data) {
            if (data.message) {
                _this.salesPersons = data.salesPersons;
            }
            else {
                _this.salesPersons = null;
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : 'Something went wrong.');
        });
    };
    SalesReportComponent.prototype.initSalesTable = function () {
        var _this = this;
        $(function () {
            _this.oTable = $('#salesRecordTable').DataTable({
                "scrollX": true
            });
            _this.oTable.on('order.dt search.dt', function () {
                _this.oTable.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                    cell.innerHTML = i + 1;
                });
            }).draw();
            var buttons = new $.fn.dataTable.Buttons(_this.oTable, {
                buttons: [
                    {
                        extend: 'csv',
                        text: 'Export to CSV',
                        filename: function () {
                            var d = new Date();
                            var n = d.getTime();
                            return 'Sales_Report_' + n;
                        }
                    }
                ]
            }).container().appendTo($('#buttons'));
        });
    };
    SalesReportComponent.prototype.destroyTable = function () {
        this.oTable.destroy();
    };
    SalesReportComponent.prototype.applyFilter = function () {
        $.fn.dataTableExt.afnFiltering.push(function (oSettings, aData, iDataIndex) {
            var byYear = $("#yearFilter").val();
            var monthInMonthYear = $("#monthInMonthYear").val();
            var yearInMonthYear = $("#yearInMonthYear").val();
            var byDate = $("#bsDatepicker").val();
            var dateStart = $("#minDate").val();
            var dateEnd = $("#maxDate").val();
            var bySalesPerson = $("#bySalesPerson").val();
            var bySaleType = $("#bySaleType").val();
            if (dateStart == undefined || dateStart == '') {
                dateStart = '';
            }
            if (dateEnd == undefined || dateEnd == '') {
                dateEnd = '';
            }
            if (byYear == undefined || byYear == '') {
                byYear = '';
            }
            if (monthInMonthYear == undefined || monthInMonthYear == '') {
                monthInMonthYear = '';
            }
            if (yearInMonthYear == undefined || yearInMonthYear == '') {
                yearInMonthYear = '';
            }
            if (byDate == undefined || byDate == '') {
                byDate = '';
            }
            if (bySalesPerson == undefined || bySalesPerson == '') {
                bySalesPerson = '';
            }
            if (bySaleType == undefined || bySaleType == '') {
                bySaleType = '';
            }
            var tableDate = new Date(aData[5]);
            var saleType = aData[13];
            var stock = aData[2];
            var salesPerosn = aData[7];
            var day = (tableDate.getDate() < 10 ? '0' : '') + tableDate.getDate();
            var month = ((tableDate.getMonth() + 1) < 10 ? '0' : '') + (tableDate.getMonth() + 1);
            var year = tableDate.getFullYear();
            var evalDate = year + '/' + month + '/' + day;
            if (dateStart === '' && dateEnd === '' && byYear === '' && monthInMonthYear === '' && yearInMonthYear === '' && byDate === '' && bySaleType === '' && bySalesPerson === '') {
                return true;
            }
            else if (evalDate == dateStart || evalDate == dateEnd || evalDate >= dateStart && evalDate <= dateEnd) {
                return true;
            }
            else if (year == byYear) {
                return true;
            }
            else if (monthInMonthYear == month && yearInMonthYear == year) {
                return true;
            }
            else if (evalDate == byDate) {
                return true;
            }
            else if (saleType == bySaleType) {
                return true;
            }
            else if (salesPerosn == bySalesPerson) {
                return true;
            }
            else {
                return false;
            }
        });
        this.oTable.draw();
    };
    SalesReportComponent.prototype.filterByStock = function (event) {
        this.oTable.column(6).search(event).draw();
    };
    SalesReportComponent.prototype.clearFilter = function () {
        $.fn.dataTableExt.afnFiltering.length = 0;
        this.oTable.draw();
    };
    //filter Section
    SalesReportComponent.prototype.changeFilter = function (value) {
        if (value == 'Yearly') {
            this.showYearly = true;
            this.showMonthly = false;
            this.showWeekly = false;
            this.showDaily = false;
            this.showCustom = false;
        }
        else if (value == 'Monthly') {
            this.showYearly = false;
            this.showMonthly = true;
            this.showWeekly = false;
            this.showDaily = false;
            this.showCustom = false;
        }
        else if (value == 'Weekly') {
            this.showYearly = false;
            this.showMonthly = false;
            this.showWeekly = true;
            this.showDaily = false;
            this.showCustom = false;
            $(function () {
                $('#dateRangePicker').daterangepicker({
                    timePicker: false,
                    applyClass: "btn-primary",
                    format: 'YYYY/MM/DD'
                });
            });
        }
        else if (value == 'Daily') {
            this.showYearly = false;
            this.showMonthly = false;
            this.showWeekly = false;
            this.showDaily = true;
            this.showCustom = false;
            $(function () {
                $('#datePicker').daterangepicker({
                    timePicker: false,
                    singleDatePicker: true,
                    showDropdowns: true,
                    format: 'YYYY/MM/DD'
                });
            });
        }
        else if (value == 'Custom') {
            this.showYearly = false;
            this.showMonthly = false;
            this.showWeekly = false;
            this.showDaily = false;
            this.showCustom = true;
            $(function () {
                $('#dateRangePickerCustom').daterangepicker({
                    timePicker: false,
                    applyClass: "btn-primary",
                    format: 'YYYY/MM/DD'
                });
            });
        }
        else {
            this.showYearly = false;
            this.showMonthly = false;
            this.showWeekly = false;
            this.showDaily = false;
            this.showCustom = false;
        }
    };
    SalesReportComponent.prototype.valueUdateEvent = function (id, name, value) {
        var _this = this;
        this.jsonData = { "id": id, "column_name": name, "column_value": value };
        console.log(this.jsonData);
        this.apiSvc.putService(this.constantSvc.APIConfig.UPDATEDEAL, this.jsonData)
            .subscribe(function (data) {
            if (data.message) {
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
        });
    };
    SalesReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-report',
            template: __webpack_require__(/*! ./sales-report.component.html */ "./src/app/private/sales-report/sales-report.component.html"),
            styles: [__webpack_require__(/*! ./sales-report.component.scss */ "./src/app/private/sales-report/sales-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
    ], SalesReportComponent);
    return SalesReportComponent;
}());



/***/ }),

/***/ "./src/app/private/settings/settings.component.html":
/*!**********************************************************!*\
  !*** ./src/app/private/settings/settings.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>General Settings</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\" href=\"javascript:void(0)\">Home</a></li>\n          <li class=\"breadcrumb-item active\">General Settings</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<section class=\"content\">\n  <form [formGroup]=\"settingsForm\" novalidate>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card card-primary card-outline\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Basic Settings</h3>\n            </div>\n\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n                <label>Site Name</label>\n                <input type=\"text\" name=\"site_name\" (blur)=\"valueUdateEvent($event.target.name, $event.target.value)\"\n                  formControlName=\"site_name\" class=\"form-control\" placeholder=\"Site Name\">\n                <small *ngIf=\"settingsForm.controls['site_name'].invalid && (settingsForm.controls['site_name'].dirty || settingsForm.controls['site_name'].touched)\"\n                  class=\"form-text text-muted\">\n                  <app-show-errors [control]=\"settingsForm.controls['site_name']\"></app-show-errors>\n                </small>\n              </div>\n              <div class=\"form-group\">\n                <label>Site Email</label>\n                <input type=\"text\" name=\"site_email\" (blur)=\"valueUdateEvent($event.target.name, $event.target.value)\"\n                  formControlName=\"site_email\" class=\"form-control\" placeholder=\"Site Email\">\n                <small *ngIf=\"settingsForm.controls['site_email'].invalid && (settingsForm.controls['site_email'].dirty || settingsForm.controls['site_email'].touched)\"\n                  class=\"form-text text-muted\">\n                  <app-show-errors [control]=\"settingsForm.controls['site_email']\"></app-show-errors>\n                </small>\n              </div>\n              <div class=\"form-group\">\n                <label>Google API Key</label>\n                <input type=\"text\" name=\"google_api_key\" (blur)=\"valueUdateEvent($event.target.name, $event.target.value)\"\n                  formControlName=\"google_api_key\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Google API Key\">\n                <small *ngIf=\"settingsForm.controls['google_api_key'].invalid && (settingsForm.controls['google_api_key'].dirty || settingsForm.controls['google_api_key'].touched)\"\n                  class=\"form-text text-muted\">\n                  <app-show-errors [control]=\"settingsForm.controls['google_api_key']\"></app-show-errors>\n                </small>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"card card-success card-outline\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">IDMS Settings</h3>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n                <label>Username</label>\n                <input type=\"text\" name=\"idms_username\" (blur)=\"valueUdateEvent($event.target.name, $event.target.value)\"\n                  formControlName=\"idms_username\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Username\">\n                <small *ngIf=\"settingsForm.controls['idms_username'].invalid && (settingsForm.controls['idms_username'].dirty || settingsForm.controls['idms_username'].touched)\"\n                  class=\"form-text text-muted\">\n                  <app-show-errors [control]=\"settingsForm.controls['idms_username']\"></app-show-errors>\n                </small>\n              </div>\n              <div class=\"form-group\">\n                <label>Passwrod</label>\n                <input type=\"text\" name=\"idms_password\" (blur)=\"valueUdateEvent($event.target.name, $event.target.value)\"\n                  formControlName=\"idms_password\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Passwrod\">\n                <small *ngIf=\"settingsForm.controls['idms_password'].invalid && (settingsForm.controls['idms_password'].dirty || settingsForm.controls['idms_password'].touched)\"\n                  class=\"form-text text-muted\">\n                  <app-show-errors [control]=\"settingsForm.controls['idms_password']\"></app-show-errors>\n                </small>\n              </div>\n              <div class=\"form-group\">\n                <label>InstitutionID</label>\n                <input type=\"text\" name=\"idms_institution_id\" (blur)=\"valueUdateEvent($event.target.name, $event.target.value)\"\n                  formControlName=\"idms_institution_id\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"InstitutionID\">\n                <small *ngIf=\"settingsForm.controls['idms_institution_id'].invalid && (settingsForm.controls['idms_institution_id'].dirty || settingsForm.controls['idms_institution_id'].touched)\"\n                  class=\"form-text text-muted\">\n                  <app-show-errors [control]=\"settingsForm.controls['idms_institution_id']\"></app-show-errors>\n                </small>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"card card-info card-outline\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Email Settings</h3>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n                <label>Email Protocol</label>\n                <select name=\"email_protocol\" (blur)=\"valueUdateEvent($event.target.name, $event.target.value)\"\n                  formControlName=\"email_protocol\" class=\"form-control select2\" style=\"width: 100%;\">\n                  <option>Normal</option>\n                  <option>SMTP</option>\n                </select>\n                <small *ngIf=\"settingsForm.controls['email_protocol'].invalid && (settingsForm.controls['email_protocol'].dirty || settingsForm.controls['email_protocol'].touched)\"\n                  class=\"form-text text-muted\">\n                  <app-show-errors [control]=\"settingsForm.controls['email_protocol']\"></app-show-errors>\n                </small>\n              </div>\n              <div class=\"form-group\">\n                <label>SMTP Host</label>\n                <input type=\"text\" name=\"smtp_host\" (blur)=\"valueUdateEvent($event.target.name, $event.target.value)\"\n                  formControlName=\"smtp_host\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"SMTP Host\">\n                <small *ngIf=\"settingsForm.controls['smtp_host'].invalid && (settingsForm.controls['smtp_host'].dirty || settingsForm.controls['smtp_host'].touched)\"\n                  class=\"form-text text-muted\">\n                  <app-show-errors [control]=\"settingsForm.controls['smtp_host']\"></app-show-errors>\n                </small>\n              </div>\n              <div class=\"form-group\">\n                <label>SMTP Username</label>\n                <input type=\"text\" name=\"smtp_user\" (blur)=\"valueUdateEvent($event.target.name, $event.target.value)\"\n                  formControlName=\"smtp_user\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"SMTP Username\">\n                <small *ngIf=\"settingsForm.controls['smtp_user'].invalid && (settingsForm.controls['smtp_user'].dirty || settingsForm.controls['smtp_user'].touched)\"\n                  class=\"form-text text-muted\">\n                  <app-show-errors [control]=\"settingsForm.controls['smtp_user']\"></app-show-errors>\n                </small>\n              </div>\n              <div class=\"form-group\">\n                <label>SMTP Passwrod</label>\n                <input type=\"text\" name=\"smtp_password\" (blur)=\"valueUdateEvent($event.target.name, $event.target.value)\"\n                  formControlName=\"smtp_password\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"SMTP Passwrod\">\n                <small *ngIf=\"settingsForm.controls['smtp_password'].invalid && (settingsForm.controls['smtp_password'].dirty || settingsForm.controls['smtp_password'].touched)\"\n                  class=\"form-text text-muted\">\n                  <app-show-errors [control]=\"settingsForm.controls['smtp_password']\"></app-show-errors>\n                </small>\n              </div>\n              <div class=\"form-group\">\n                <label>SMTP post</label>\n                <input type=\"text\" name=\"smtp_port\" (blur)=\"valueUdateEvent($event.target.name, $event.target.value)\"\n                  formControlName=\"smtp_port\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"SMTP post\">\n                <small *ngIf=\"settingsForm.controls['smtp_port'].invalid && (settingsForm.controls['smtp_port'].dirty || settingsForm.controls['smtp_port'].touched)\"\n                  class=\"form-text text-muted\">\n                  <app-show-errors [control]=\"settingsForm.controls['smtp_port']\"></app-show-errors>\n                </small>\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <!--/.col (right) -->\n      </div>\n      <!-- /.row -->\n    </div><!-- /.container-fluid -->\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/private/settings/settings.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/private/settings/settings.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/private/settings/settings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/private/settings/settings.component.ts ***!
  \********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(fb, apiSvc, constantSvc, helperSvc) {
        this.fb = fb;
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.jsonData = {};
        this.eventValue = '';
        this.eventName = '';
        this.param = [];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getSettingsData();
    };
    SettingsComponent.prototype.initForm = function () {
        this.settingsForm = this.fb.group({
            site_name: [],
            site_email: [],
            google_api_key: [],
            idms_username: [],
            idms_password: [],
            idms_institution_id: [],
            email_protocol: [],
            smtp_host: [],
            smtp_user: [],
            smtp_password: [],
            smtp_port: []
        });
    };
    SettingsComponent.prototype.getSettingsData = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.GETSETTINGS, this.param)
            .subscribe(function (data) {
            _this.settingsForm.setValue({
                site_name: data.data[0].meta_value,
                site_email: data.data[1].meta_value,
                smtp_host: data.data[3].meta_value,
                email_protocol: data.data[4].meta_value,
                smtp_user: data.data[5].meta_value,
                smtp_password: data.data[6].meta_value,
                smtp_port: data.data[7].meta_value,
                google_api_key: data.data[22].meta_value,
                idms_username: data.data[23].meta_value,
                idms_institution_id: data.data[24].meta_value,
                idms_password: data.data[25].meta_value,
            });
        }, function (error) {
            console.log('error occurred!');
        });
    };
    SettingsComponent.prototype.valueUdateEvent = function (name, value) {
        var _this = this;
        this.eventValue = value;
        this.eventName = name;
        this.jsonData = { "name": this.eventName, "value": this.eventValue };
        this.apiSvc.putService(this.constantSvc.APIConfig.UPDATESETTINGS, this.jsonData)
            .subscribe(function (data) {
            if (data.message) {
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
        });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/private/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/private/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_4__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/private/tiers/list/list.component.html":
/*!********************************************************!*\
  !*** ./src/app/private/tiers/list/list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <!-- <h1>Manage Tiers</h1> -->\n        <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#tierModal\">\n          Add New\n        </button>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\" href=\"javascript:void(0)\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Manage Tiers</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card card-info card-outline\">\n        <div class=\"card-header\">\n          <h3 class=\"card-title\">Tiers List</h3>\n        </div>\n        <!-- /.card-header -->\n        <div class=\"card-body\">\n          <table id=\"tiersTable\" class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Title</th>\n                <th>Sale Limit Minimum</th>\n                <th>Sale Limit Maximum</th>\n                <th>Department</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let tier of tiers; let i = index\">\n                <td>{{ i+1 }}</td>\n                <td>{{ tier.title }}</td>\n                <td>{{ tier.sale_limit_min }}</td>\n                <td>{{ tier.sale_limit_max }}</td>\n                <td>{{ tier.department }}</td>\n                <td>\n                  <div class=\"tools\">\n                    <a href=\"javascript:void(0)\" (click)=\"onSelect(formData,tier)\" data-toggle=\"modal\" data-target=\"#tierModal\"><i\n                        class=\"fa fa-edit\" style=\"color:green;\"></i></a>\n                    <a (click)=\"deleteEvent(tier.id)\" href=\"javascript:void(0)\"><i class=\"fa fa-trash-o\" style=\"color:red;\"></i></a>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr>\n                <th>#</th>\n                <th>Title</th>\n                <th>Sale Limit Minimum</th>\n                <th>Sale Limit Maximum</th>\n                <th>Department</th>\n                <th>Actions</th>\n              </tr>\n            </tfoot>\n          </table>\n        </div>\n        <!-- /.card-body -->\n      </div>\n      <!-- /.card -->\n\n    </div>\n    <!-- /.col -->\n  </div>\n  <!-- /.row -->\n</section>\n\n\n<div class=\"modal fade\" id=\"tierModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <form #formData=\"ngForm\" (ngSubmit)=\"onSubmit(formData)\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{formTitle}}</h5>\n          <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button> -->\n        </div>\n        <div class=\"modal-body\">\n          <input type=\"hidden\" [(ngModel)]=\"formData.id\" name=\"id\" id=\"id\" class=\"form-control\">\n          <div class=\"box-body\">\n\n            <div class=\"form-group\">\n              <label class=\"control-label col-md-3\">\n                Department :\n              </label>\n              <label class=\"col-md-8\">\n                <div class=\"row\">\n                  <select [value]='Sales' required #departmentControl=\"ngModel\" [class.is-invalid]=\"departmentControl.invalid && departmentControl.touched\"\n                    name=\"department\" [(ngModel)]=\"formData.department\" class=\"form-control select2\" style=\"width: 100%;\">\n                    <!-- <option *ngFor=\"let department of departments\">{{department}}</option> -->\n                    <!-- <option value=\"0\">Please Select Department</option> -->\n                    <option value=\"Sales\">Sales Department</option>\n                    <option value=\"Finance\">Finance Department</option>\n                  </select>\n                  <small class=\"text-danger\" *ngIf=\"departmentControl.invalid && departmentControl.touched\">\n                    Please select department first\n                  </small>\n                </div>\n              </label>\n            </div>\n\n            <div class=\"form-group\">\n              <label class=\"col-sm-3 control-label\">Title: </label>\n              <label class=\"col-md-8\">\n                <div class=\"row\">\n                  <input required #titleControl=\"ngModel\" [(ngModel)]=\"formData.title\" type=\"text\" name=\"title\" class=\"form-control\"\n                    [class.is-invalid]=\"titleControl.invalid && titleControl.touched\" placeholder=\"Title\">\n                  <small class=\"text-danger\" *ngIf=\"titleControl.invalid && titleControl.touched\">\n                    Title is required\n                  </small>\n                </div>\n              </label>\n            </div>\n\n            <div class=\"form-group\">\n              <label class=\"col-sm-3 control-label\">Sale Limit :</label>\n              <label class=\"col-md-8\">\n                <div class=\"row\">\n                  <div class=\"col-md-6 input-icon\">\n                    <input #saleMinControl=\"ngModel\" [class.is-invalid]=\"saleMinControl.invalid && saleMinControl.touched\"\n                      [(ngModel)]=\"formData.sale_limit_min\" type=\"text\" name=\"sale_limit_min\" class=\"form-control\"\n                      placeholder=\"Minimum limit\" required>\n                    <small class=\"text-danger\" *ngIf=\"saleMinControl.invalid && saleMinControl.touched\">\n                      Min Sale limit required\n                    </small>\n                  </div>\n                  <div class=\"col-md-6 input-icon\">\n                    <input #saleMaxControl=\"ngModel\" [class.is-invalid]=\"saleMaxControl.invalid && saleMaxControl.touched\"\n                      [(ngModel)]=\"formData.sale_limit_max\" type=\"text\" name=\"sale_limit_max\" class=\"form-control\"\n                      placeholder=\"Maximum limit\" required>\n                    <small class=\"text-danger\" *ngIf=\"saleMaxControl.invalid && saleMaxControl.touched\">\n                      Max sale limit required\n                    </small>\n                  </div>\n                </div>\n              </label>\n            </div>\n            <!-- <div class=\"form-group\">\n                <label for=\"inputPassword3\" class=\"col-sm-3 control-label\">Sale Limit : </label>\n                <label class=\"col-md-8\">\n                  <div>\n                    <input type=\"number\" name=\"sale_limit\" formControlName=\"sale_limit\" class=\"form-control\" placeholder=\"Sale Limit\"\n                      [ngClass]=\"{ 'is-invalid': submitted && f.sale_limit.errors }\">\n                    <div *ngIf=\"submitted && f.sale_limit.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.sale_limit.errors.required\">\n                        Sale limit is required\n                      </div>\n                    </div>\n                  </div>\n                </label>\n              </div> -->\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"resetForm(formData)\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" [disabled]=\"formData.invalid\" class=\"btn btn-primary\">Save changes</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/private/tiers/list/list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/private/tiers/list/list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvdGllcnMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/private/tiers/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/private/tiers/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: TiersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiersListComponent", function() { return TiersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {
//   FormBuilder,
//   FormGroup,
//   Validators
// } from "@angular/forms";
// ES6 Modules or TypeScript




var TiersListComponent = /** @class */ (function () {
    // public departments = ["Select Department","Sales","Finance"]
    function TiersListComponent(
    // private fb: FormBuilder,
    apiSvc, constantSvc, helperSvc) {
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        // public tiersForm: FormGroup;
        this.formTitle = '';
        this.param = [];
        this.submitted = false;
    }
    TiersListComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getTiersList();
    };
    // get f() { return this.tiersForm.controls; }
    TiersListComponent.prototype.initForm = function () {
        this.formTitle = 'Add New Tier';
        // this.tiersForm = this.fb.group({
        //   id: [],
        //   title: ['', Validators.required],
        //   sale_limit: ['', Validators.required],
        //   department: ['', Validators.required]
        // });
    };
    TiersListComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.submitted = true;
        if (formData.invalid) {
            return;
        }
        this.apiSvc.postService(this.constantSvc.APIConfig.ADDTIER, formData.value)
            .subscribe(function (data) {
            if (data.message) {
                _this.destroyTable();
                _this.getTiersList();
                _this.helperSvc.notifySuccess(data.message ? data.message : 'Tier added successfully');
                _this.resetForm(formData);
                $("#tierModal").modal("hide");
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : 'Something went wrong please try again');
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
        });
    };
    TiersListComponent.prototype.resetForm = function (formData) {
        formData.reset({ department: 'Sales' });
        //this.tiersForm.reset({ department: 'Sales', tier: '', sale_limit: '' });
    };
    TiersListComponent.prototype.getTiersList = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.TIERSLIST, this.param)
            .subscribe(function (data) {
            _this.initTable();
            if (data.message) {
                _this.tiers = data.tiers;
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : "No record found");
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
        });
    };
    TiersListComponent.prototype.onSelect = function (formData, tier) {
        this.formTitle = 'Update Tier';
        formData.setValue({
            id: tier.id,
            title: tier.title,
            sale_limit_min: tier.sale_limit_min,
            sale_limit_max: tier.sale_limit_max,
            department: tier.department
        });
    };
    TiersListComponent.prototype.deleteEvent = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
            title: 'Are you sure?',
            text: 'You will not be able to recover this record!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.apiSvc.deleteService(_this.constantSvc.APIConfig.DELETETIER, id)
                    .subscribe(function (data) {
                    if (data.message) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()('Deleted!', data.message ? data.message : "Record deleted successfully", 'success');
                        _this.destroyTable();
                        _this.getTiersList();
                    }
                    else if (data.error) {
                        _this.helperSvc.notifyError(data.error ? data.error : "Something went wrong. please try again");
                    }
                }, function (error) {
                    _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()('Cancelled', 'Your record is safe :)', 'error');
            }
        });
    };
    TiersListComponent.prototype.initTable = function () {
        var _this = this;
        $(function () {
            _this.oTable = $('#tiersTable').DataTable();
        });
    };
    TiersListComponent.prototype.destroyTable = function () {
        console.log('destroyed function called');
        this.oTable.destroy();
    };
    TiersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/private/tiers/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/private/tiers/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
    ], TiersListComponent);
    return TiersListComponent;
}());



/***/ }),

/***/ "./src/app/private/users/add/add.component.html":
/*!******************************************************!*\
  !*** ./src/app/private/users/add/add.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Manage User</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\" routerLink='/dashboard'><i class=\"fa fa-dashboard\"></i>\n              Home</a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\" routerLink='/users'>Users</a></li>\n          <li class=\"breadcrumb-item active\">Manage User</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"content\">\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onClickSubmit()\">\n    <div class=\"container-fluid\">\n      <div class=\"card card-info card-outline\">\n        <div class=\"card-header\">\n          <h3 class=\"card-title\">Manage User</h3>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>First Name</label>\n                <input type=\"text\" name=\"first_name\" formControlName=\"first_name\" class=\"form-control\" id=\"first_name\"\n                  placeholder=\"Enter first name\" [ngClass]=\"{ 'is-invalid': submitted && f.first_name.errors }\">\n                <div *ngIf=\"submitted && f.first_name.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.first_name.errors.required\">\n                    First name is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Last Name</label>\n                <input type=\"text\" name=\"last_name\" formControlName=\"last_name\" class=\"form-control\" id=\"last_name\"\n                  placeholder=\"Enter last name\" [ngClass]=\"{ 'is-invalid': submitted && f.last_name.errors }\">\n                <div *ngIf=\"submitted && f.last_name.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.last_name.errors.required\">\n                    Last name is required\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"email\" name=\"email\" (blur)=\"isEmailExists()\" (keyup)=\"isEmailExists()\" formControlName=\"email\"\n                  class=\"form-control\" id=\"email\" placeholder=\"Enter email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors || isExistsMessage }\">\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                  <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                </div>\n                <div *ngIf=\"isExistsMessage\" style=\"font-size: 80%;color: #dc3545;\">\n                  Email address used by another user\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Phone</label>\n                <input type=\"text\" name=\"phone\" formControlName=\"phone\" class=\"form-control\" id=\"phone\" placeholder=\"Enter phone\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\">\n                <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.phone.errors.required\">\n                    Phone number is required\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Username</label>\n                <input type=\"text\" name=\"username\" formControlName=\"username\" class=\"form-control\" id=\"username\"\n                  placeholder=\"Enter username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.username.errors.required\">\n                    Username is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" name=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\"\n                  placeholder=\"Enter password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.password.errors.required\">\n                    Password is required\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label>Role</label>\n                <select (change)=\"onChange($event.target.value)\" class=\"form-control select2\" formControlName=\"role_id\"\n                  style=\"width: 100%;\">\n                  <option selected=\"selected\">Select role</option>\n                  <option *ngFor=\"let role of roles\" [value]=\"role.id\" [selected]=\"userForm.value.role_id==role.id\">{{role.title}}</option>\n                </select>\n                <div *ngIf=\"submitted && f.role_id.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.role_id.errors.required\">\n                    Role is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\" *ngIf=\"salesSelected\">\n                <label>Sales Manager</label>\n                <select class=\"form-control select2\" formControlName=\"parent_id\" style=\"width: 100%;\">\n                  <option value=\"0\" selected=\"selected\">Select Salesmanager</option>\n                  <option *ngFor=\"let salesmanager of salesmanagers\" [value]=\"salesmanager.id\" [selected]=\"userForm.value.parent_id==salesmanager.id\">{{salesmanager.first_name}}\n                    {{salesmanager.last_name}}\n                  </option>\n                </select>\n                <div *ngIf=\"submitted && f.parent_id.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.parent_id.errors.required\">\n                    Please Select Salesmanager\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\" *ngIf=\"financeSelected\">\n                <label>Finance Manager</label>\n                <select class=\"form-control select2\" formControlName=\"parent_id\" style=\"width: 100%;\">\n                  <option value=\"0\" selected=\"selected\">Select Finance Manager</option>\n                  <option *ngFor=\"let financemanger of financemangers\" [value]=\"financemanger.id\" [selected]=\"userForm.value.parent_id==financemanger.id\">\n                    {{financemanger.first_name}} {{financemanger.last_name}}\n                  </option>\n                </select>\n                <div *ngIf=\"submitted && f.parent_id.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.parent_id.errors.required\">\n                    Please Select Salesmanager\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" routerLink=\"/users\" class=\"btn btn-default\">Cancel</button>\n          <button type=\"submit\" [attr.disabled]=\"buttonDisabled?'':null\" class=\"btn btn-info pull-right\">Submit</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/private/users/add/add.component.scss":
/*!******************************************************!*\
  !*** ./src/app/private/users/add/add.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvdXNlcnMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/private/users/add/add.component.ts":
/*!****************************************************!*\
  !*** ./src/app/private/users/add/add.component.ts ***!
  \****************************************************/
/*! exports provided: UsersAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersAddComponent", function() { return UsersAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/api/api.service */ "./src/app/service/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersAddComponent = /** @class */ (function () {
    function UsersAddComponent(constantSvc, helperSvc, apiSvc, fb, router, route) {
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.apiSvc = apiSvc;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.param = [];
        this.roles = [];
        this.salesmanagers = [];
        this.financemangers = [];
        this.salesSelected = false;
        this.financeSelected = false;
    }
    UsersAddComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getRolesList();
        this.getSalesManagersList();
        this.getFinanaceManagersList();
    };
    Object.defineProperty(UsersAddComponent.prototype, "f", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    UsersAddComponent.prototype.initForm = function () {
        this.userForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role_id: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            parent_id: ['0'],
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    UsersAddComponent.prototype.getRolesList = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.ROLELIST, this.param)
            .subscribe(function (data) {
            _this.roles = data.roles;
        }, function (error) {
        });
    };
    UsersAddComponent.prototype.getSalesManagersList = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.SALESMANAGERLIST, this.param)
            .subscribe(function (data) {
            console.log(data);
            _this.salesmanagers = data.salesmanagers;
        }, function (error) {
        });
    };
    UsersAddComponent.prototype.getFinanaceManagersList = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.FINANCEMANGERLIST, this.param)
            .subscribe(function (data) {
            console.log(data);
            _this.financemangers = data.financemangers;
        }, function (error) {
        });
    };
    UsersAddComponent.prototype.onClickSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.apiSvc.postService(this.constantSvc.APIConfig.ADDUSER, this.userForm.value)
            .subscribe(function (data) {
            if (data.message) {
                _this.router.navigate(['users/list']);
                _this.helperSvc.notifySuccess(data.success ? data.success : "success");
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
        });
    };
    UsersAddComponent.prototype.isEmailExists = function () {
        var _this = this;
        this.apiSvc.isExists(this.constantSvc.APIConfig.ISUNIQEMAIL, this.userForm.value)
            .subscribe(function (data) {
            console.log(data);
            if (data.message) {
                _this.isExistsMessage = '';
                _this.buttonDisabled = false;
            }
            else if (data.error) {
                _this.isExistsMessage = data.error;
                _this.buttonDisabled = true;
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "something went wrong please try again");
        });
    };
    UsersAddComponent.prototype.onChange = function ($event) {
        if ($event == 4) {
            this.financeSelected = false;
            setTimeout(function () {
                this.salesSelected = true;
            }.bind(this), 1000);
        }
        else if ($event == 5) {
            this.salesSelected = false;
            setTimeout(function () {
                this.financeSelected = true;
            }.bind(this), 1000);
        }
        else {
            this.salesSelected = false;
            this.financeSelected = false;
        }
    };
    UsersAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/private/users/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/private/users/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_core_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"],
            _service_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UsersAddComponent);
    return UsersAddComponent;
}());



/***/ }),

/***/ "./src/app/private/users/list/list.component.html":
/*!********************************************************!*\
  !*** ./src/app/private/users/list/list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Users</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\" href=\"javascript:void(0)\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Users</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card card-info card-outline\">\n        <div class=\"card-header\">\n          <!-- <h3 class=\"card-title\">Users</h3> -->\n          <div class=\"row\">\n            <label style=\"padding-top:6px;\">Apply Filter By User Role: </label>\n            <div class=\"col-md-2\">\n              <select (change)=\"applyFilter()\" name=\"byUserRole\" id=\"byUserRole\" class=\"form-control\" style=\"width: 100%;\"\n                tabindex=\"-1\" aria-hidden=\"true\">\n                <option selected=\"selected\" value=\"\">Apply filter :</option>\n                <option [value]=\"userRole.value\" *ngFor=\"let userRole of userRoles\">{{userRole.name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <!-- /.card-header -->\n        <div class=\"card-body\">\n          <table id=\"usersRecordTable\" class=\"table table-bordered table-striped table-hover\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Username</th>\n                <th>Name</th>\n                <th>Email</th>\n                <th>Phone</th>\n                <th>Role</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let user of users; let i = index\">\n                <td></td>\n                <td>\n                  <a href=\"\" target=\"_blank\" [routerLink]=\"['/dashboard']\" [queryParams]=\"{userID:user.id,userRole:user.role_id}\">\n                    {{user.username }}\n                  </a></td>\n                <!-- <td><a href=\"http://localhost:4200/dashboard/{{user.id}}/{{user.role_id}}\" [target]=\"_blank\">{{ user.username }}</a></td> -->\n                <!-- <td><a href=\"\" (click)=\"openNewWindow(user)\" [target]=\"_blank\">{{ user.username }}</a></td> -->\n                <td><a href=\"javascript:void(0)\">{{ user.first_name }} {{ user.last_name }}</a></td>\n                <td>{{ user.email }}</td>\n                <td>{{ user.phone }}</td>\n                <td><span class=\"badge bg-info\">{{ user.role_name }}</span></td>\n                <td class=\"todo-list\">\n                  <div class=\"tools\">\n                    <a href=\"javascript:void(0)\" (click)=\"getUserData(user.id)\" data-toggle=\"modal\" data-target=\"#userModel\"><i\n                        class=\"fa fa-edit\" style=\"color:green;\"></i></a>\n                    <a (click)=\"deleteEvent(user.id)\" href=\"javascript:void(0)\"><i class=\"fa fa-trash-o\" style=\"color:red;\"></i></a>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr>\n                <th>#</th>\n                <th>Username</th>\n                <th>Name</th>\n                <th>Email</th>\n                <th>Phone</th>\n                <th>Role</th>\n                <th>Action</th>\n              </tr>\n            </tfoot>\n          </table>\n        </div>\n        <!-- /.card-body -->\n      </div>\n      <!-- /.card -->\n\n    </div>\n    <!-- /.col -->\n  </div>\n  <!-- /.row -->\n</section>\n\n\n<!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n  Launch demo modal\n</button> -->\n<div class=\"modal fade\" id=\"userModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <form class=\"form-horizontal\" [formGroup]=\"userForm\" (ngSubmit)=\"onClickSubmit()\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update User Information</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <input type=\"hidden\" formControlName=\"id\" class=\"form-control\">\n          <div class=\"box-body\">\n            <div class=\"form-group\">\n              <label class=\"control-label col-md-3\">\n                First Name :\n              </label>\n              <label class=\"col-md-8\">\n                <div>\n                  <input type=\"text\" name=\"first_name\" formControlName=\"first_name\" class=\"form-control\" id=\"first_name\"\n                    placeholder=\"Enter first name\" [ngClass]=\"{ 'is-invalid': submitted && f.first_name.errors }\">\n                  <div *ngIf=\"submitted && f.first_name.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.first_name.errors.required\">\n                      First name is required\n                    </div>\n                  </div>\n                </div>\n              </label>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"inputPassword3\" class=\"col-sm-3 control-label\">Last Name : </label>\n              <label class=\"col-md-8\">\n                <div>\n                  <input type=\"text\" name=\"last_name\" formControlName=\"last_name\" class=\"form-control\" id=\"last_name\"\n                    placeholder=\"Enter last name\" [ngClass]=\"{ 'is-invalid': submitted && f.last_name.errors }\">\n                  <div *ngIf=\"submitted && f.last_name.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.last_name.errors.required\">\n                      Last name is required\n                    </div>\n                  </div>\n                </div>\n              </label>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"inputPassword3\" class=\"col-sm-3 control-label\">Email : </label>\n              <label class=\"col-md-8\">\n                <div>\n                  <input type=\"email\" name=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                  </div>\n                </div>\n              </label>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"inputPassword3\" class=\"col-sm-3 control-label\">Phone : </label>\n              <label class=\"col-md-8\">\n                <div>\n                  <input type=\"text\" name=\"phone\" formControlName=\"phone\" class=\"form-control\" id=\"phone\" placeholder=\"Enter phone\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\">\n                  <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.phone.errors.required\">\n                      Phone number is required\n                    </div>\n                  </div>\n                </div>\n              </label>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"inputPassword3\" class=\"col-sm-3 control-label\">Role : </label>\n              <label class=\"col-md-8\">\n                <div>\n                  <select class=\"form-control select2\" formControlName=\"role_id\" style=\"width: 100%;\">\n                    <option selected=\"selected\">Select role</option>\n                    <option *ngFor=\"let role of roles\" [value]=\"role.id\" [selected]=\"userForm.value.role_id==role.id\">{{role.title}}</option>\n                  </select>\n                  <div *ngIf=\"submitted && f.role_id.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.role_id.errors.required\">\n                      Role is required\n                    </div>\n                  </div>\n                </div>\n              </label>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"inputPassword3\" class=\"col-sm-3 control-label\">Username : </label>\n              <label class=\"col-md-8\">\n                <div>\n                  <input type=\"text\" name=\"username\" formControlName=\"username\" class=\"form-control\" id=\"username\"\n                    placeholder=\"Enter username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\n                  <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">\n                      Username is required\n                    </div>\n                  </div>\n                </div>\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/private/users/list/list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/private/users/list/list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvdXNlcnMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/private/users/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/private/users/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// ES6 Modules or TypeScript


var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(constantSvc, helperSvc, apiSvc, fb, router) {
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.apiSvc = apiSvc;
        this.fb = fb;
        this.router = router;
        this.param = [];
        this.roles = [];
        this.submitted = false;
        this.jsonData = {};
        this.userRoles = [
            { name: "Sales Manager", value: "Sales Manager" },
            { name: "Finance Manager", value: "Finance Manager" },
            { name: "Sales Person", value: "Salesman" },
            { name: "Finance Person", value: "Finance Person" }
        ];
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.getUsersList();
        this.initForm();
        this.getRolesList();
    };
    Object.defineProperty(UsersListComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    UsersListComponent.prototype.initForm = function () {
        this.userForm = this.fb.group({
            id: [''],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role_id: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    };
    UsersListComponent.prototype.getUsersList = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.USERS, this.param)
            .subscribe(function (data) {
            _this.initTable();
            if (data.message) {
                _this.users = data.users;
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : "No record found");
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
        });
    };
    UsersListComponent.prototype.getRolesList = function () {
        var _this = this;
        this.param = [];
        this.apiSvc.getService(this.constantSvc.APIConfig.ROLELIST, this.param)
            .subscribe(function (data) {
            _this.roles = data.roles;
        }, function (error) {
        });
    };
    UsersListComponent.prototype.getUserData = function (userId) {
        var _this = this;
        this.apiSvc.getService(this.constantSvc.APIConfig.GETUSER, userId)
            .subscribe(function (data) {
            if (data.message) {
                _this.userForm.setValue({
                    id: data.userData.id,
                    username: data.userData.username,
                    role_id: data.userData.role_id,
                    first_name: data.userData.first_name,
                    last_name: data.userData.last_name,
                    email: data.userData.email,
                    phone: data.userData.phone
                });
                //this.helperSvc.notifySuccess(data.message ? data.message : "User Info");
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
            console.log('error ', error);
        });
    };
    UsersListComponent.prototype.onClickSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.apiSvc.putService(this.constantSvc.APIConfig.UPDATEUSER, this.userForm.value)
            .subscribe(function (data) {
            if (data.message) {
                _this.destroyTable();
                _this.getUsersList();
                $("#userModel").modal("hide");
                _this.helperSvc.notifySuccess(data.message ? data.message : "success");
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : "something went wrong please try again");
            }
        }, function (error) {
            console.log(error.error.errorMessage);
        });
    };
    UsersListComponent.prototype.deleteEvent = function (userId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Are you sure?',
            text: 'You will not be able to recover this record!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.apiSvc.deleteService(_this.constantSvc.APIConfig.DELETEUSER, userId)
                    .subscribe(function (data) {
                    if (data.message) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Deleted!', data.message ? data.message : "Record deleted successfully", 'success');
                        _this.destroyTable();
                        _this.getUsersList();
                    }
                    else if (data.error) {
                        _this.helperSvc.notifyError(data.error ? data.error : "Something went wrong. please try again");
                    }
                }, function (error) {
                    _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Cancelled', 'Your record is safe :)', 'error');
            }
        });
    };
    UsersListComponent.prototype.initTable = function () {
        var _this = this;
        $(function () {
            _this.oTable = $('#usersRecordTable').DataTable({
                "paging": true,
                "lengthChange": true,
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": true
            });
            _this.oTable.on('order.dt search.dt', function () {
                _this.oTable.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
                    cell.innerHTML = i + 1;
                });
            }).draw();
        });
    };
    UsersListComponent.prototype.destroyTable = function () {
        var _this = this;
        $(function () {
            _this.oTable.destroy();
        });
    };
    UsersListComponent.prototype.applyFilter = function () {
        $.fn.dataTableExt.afnFiltering.push(function (oSettings, aData, iDataIndex) {
            var byUserRole = $("#byUserRole").val();
            if (byUserRole == undefined || byUserRole == '') {
                byUserRole = '';
            }
            var userRole = aData[5];
            console.log(userRole);
            if (byUserRole === '') {
                return true;
            }
            else if (userRole == byUserRole) {
                return true;
            }
            else {
                return false;
            }
        });
        this.oTable.draw();
    };
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/private/users/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/private/users/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_core_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
            _service_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/public/forget/forget.component.html":
/*!*****************************************************!*\
  !*** ./src/app/public/forget/forget.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n  <div class=\"login-logo\">\n    <a href=\"javascript:void(0)\"><b>Commission</b>Portal</a>\n  </div>\n  <!-- /.login-logo -->\n  <div class=\"card\">\n    <div class=\"card-body login-card-body\">\n      <p class=\"login-box-msg\">Forget your password</p>\n\n      <form [formGroup]=\"forgetForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"input-group mb-3\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Your Email Address\" required formControlName=\"loginkey\"\n            [ngClass]=\"{'is-invalid': submitted && fc.loginkey.errors}\">\n          <div class=\"input-group-append\">\n            <span class=\"fa fa-envelope input-group-text\"></span>\n          </div>\n          <div *ngIf=\"submitted && fc.loginkey.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"fc.loginkey.errors.required\">\n              Email address is required\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-8\">\n\n          </div>\n          <!-- /.col -->\n          <div class=\"col-4\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Sign In</button>\n          </div>\n          <!-- /.col -->\n        </div>\n      </form>\n\n      <p class=\"mb-1\">\n        <a href=\"#\" routerLink=\"/login\">sign in as a different user</a>\n      </p>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/public/forget/forget.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/public/forget/forget.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9mb3JnZXQvZm9yZ2V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/public/forget/forget.component.ts":
/*!***************************************************!*\
  !*** ./src/app/public/forget/forget.component.ts ***!
  \***************************************************/
/*! exports provided: ForgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetComponent", function() { return ForgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgetComponent = /** @class */ (function () {
    function ForgetComponent(fb, router, apiSvc, constantSvc, helperSvc) {
        this.fb = fb;
        this.router = router;
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.submitted = false;
    }
    ForgetComponent.prototype.ngOnInit = function () {
        document.body.className = 'hold-transition login-page';
        this.initForm();
    };
    ForgetComponent.prototype.initForm = function () {
        this.forgetForm = this.fb.group({
            loginkey: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    };
    Object.defineProperty(ForgetComponent.prototype, "fc", {
        get: function () { return this.forgetForm.controls; },
        enumerable: true,
        configurable: true
    });
    ForgetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.forgetForm.invalid) {
            return;
        }
        this.apiSvc.postService(this.constantSvc.APIConfig.FORGET, this.forgetForm.value)
            .subscribe(function (data) {
            console.log(data);
            if (data.message) {
                _this.router.navigate(['/login']);
                _this.helperSvc.notifySuccess(data.message ? data.message : "Success");
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
            console.log('error ', error);
        });
    };
    ForgetComponent.prototype.ngOnDestroy = function () {
        document.body.className = '';
    };
    ForgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget',
            template: __webpack_require__(/*! ./forget.component.html */ "./src/app/public/forget/forget.component.html"),
            styles: [__webpack_require__(/*! ./forget.component.scss */ "./src/app/public/forget/forget.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_4__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
    ], ForgetComponent);
    return ForgetComponent;
}());



/***/ }),

/***/ "./src/app/public/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/public/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n  <div class=\"login-logo\">\n    <a href=\"javascript:void(0)\"><b>Commission</b>Portal</a>\n  </div>\n  <!-- /.login-logo -->\n  <div class=\"card\">\n    <div class=\"card-body login-card-body\">\n      <p class=\"login-box-msg\">Sign in to start your session</p>\n\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"input-group mb-3\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username or Email\" required formControlName=\"loginkey\"\n            [ngClass]=\"{'is-invalid': submitted && fc.loginkey.errors}\">\n          <div class=\"input-group-append\">\n            <span class=\"fa fa-envelope input-group-text\"></span>\n          </div>\n          <div *ngIf=\"submitted && fc.loginkey.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"fc.loginkey.errors.required\">\n              Username is required\n            </div>\n          </div>\n        </div>\n        <div class=\"input-group mb-3\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required formControlName=\"password\"\n            [ngClass]=\"{ 'is-invalid': submitted && fc.password.errors }\">\n          <div class=\"input-group-append\">\n            <span class=\"fa fa-lock input-group-text\"></span>\n          </div>\n          <div *ngIf=\"submitted && fc.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"fc.password.errors.required\">Password is required</div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-8\">\n\n          </div>\n          <!-- /.col -->\n          <div class=\"col-4\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Sign In</button>\n          </div>\n          <!-- /.col -->\n        </div>\n      </form>\n\n      <p class=\"mb-1\">\n        <a href=\"#\" routerLink=\"/forget\">I forgot my password</a>\n      </p>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/public/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/app/public/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/public/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/public/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _service_core_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _service_core_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/core/helper.service */ "./src/app/service/core/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, route, apiSvc, constantSvc, helperSvc) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.apiSvc = apiSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        document.body.className = 'hold-transition login-page';
        $(function () {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%'
            });
        });
        this.initForm();
    };
    Object.defineProperty(LoginComponent.prototype, "fc", {
        get: function () {
            return this.userForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.initForm = function () {
        this.userForm = this.fb.group({
            loginkey: ['shrawan', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['1234', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        console.log(this.userForm.value);
        this.apiSvc.postService(this.constantSvc.APIConfig.LOGIN, this.userForm.value)
            .subscribe(function (data) {
            if (data.message) {
                //console.log(data);
                _this.helperSvc.lsSetItem(_this.constantSvc.tokenConfig.AUTH_TOKEN, data.token);
                _this.helperSvc.lsSetItem(_this.constantSvc.tokenConfig.USER_INFO, data.userData);
                _this.helperSvc.lsSetItem(_this.constantSvc.tokenConfig.USER_ROLES, data.userData.role_desc);
                //add two variables (loggedInUserId) (loggedInUserRoleId)
                // sessionStorage.setItem('userId', data.userData.id);
                // sessionStorage.setItem('userRole', data.userData.role_id);
                _this.helperSvc.ssSetItem('userId', data.userData.id);
                _this.helperSvc.ssSetItem('userRole', data.userData.role_id);
                // console.log('session value is ',sessionStorage.getItem('userId'), ' role id ',sessionStorage.getItem('userRole'));
                // if (data.userData.role_id == 1)
                //   this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'admin');
                // else if (data.userData.role_id == 2)
                //   this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'salesmanager');
                // else if (data.userData.role_id == 3)
                //   this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'financemanager');
                // else if (data.userData.role_id == 4)
                //   this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'salesman');
                // else if (data.userData.role_id == 5)
                //   this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'finance-person');
                if (data.userData.role_id == 1)
                    _this.helperSvc.ssSetItem(_this.constantSvc.dashboardConfig.DASHBOARD_URL, 'admin');
                else if (data.userData.role_id == 2)
                    _this.helperSvc.ssSetItem(_this.constantSvc.dashboardConfig.DASHBOARD_URL, 'salesmanager');
                else if (data.userData.role_id == 3)
                    _this.helperSvc.ssSetItem(_this.constantSvc.dashboardConfig.DASHBOARD_URL, 'financemanager');
                else if (data.userData.role_id == 4)
                    _this.helperSvc.ssSetItem(_this.constantSvc.dashboardConfig.DASHBOARD_URL, 'salesman');
                else if (data.userData.role_id == 5)
                    _this.helperSvc.ssSetItem(_this.constantSvc.dashboardConfig.DASHBOARD_URL, 'finance-person');
                _this.router.navigate(['dashboard']);
                _this.helperSvc.notifySuccess(' Welcome Back ' + data.userData.first_name);
            }
            else if (data.error) {
                _this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
            }
        }, function (error) {
            _this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
            console.log('error ', error);
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        document.body.className = '';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/public/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/public/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _service_core_constant_service__WEBPACK_IMPORTED_MODULE_4__["ConstantService"],
            _service_core_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/public/public-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/public/public-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PublicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicRoutingModule", function() { return PublicRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/public/login/login.component.ts");
/* harmony import */ var _forget_forget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forget/forget.component */ "./src/app/public/forget/forget.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'forget', component: _forget_forget_component__WEBPACK_IMPORTED_MODULE_3__["ForgetComponent"] }
];
var PublicRoutingModule = /** @class */ (function () {
    function PublicRoutingModule() {
    }
    PublicRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PublicRoutingModule);
    return PublicRoutingModule;
}());



/***/ }),

/***/ "./src/app/public/public.module.ts":
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _public_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-routing.module */ "./src/app/public/public-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/public/login/login.component.ts");
/* harmony import */ var _forget_forget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget/forget.component */ "./src/app/public/forget/forget.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _public_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublicRoutingModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _forget_forget_component__WEBPACK_IMPORTED_MODULE_5__["ForgetComponent"]]
        })
    ], PublicModule);
    return PublicModule;
}());



/***/ }),

/***/ "./src/app/service/api/api.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/api/api.service.ts ***!
  \********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/helper.service */ "./src/app/service/core/helper.service.ts");
/* harmony import */ var _core_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/constant.service */ "./src/app/service/core/constant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http, helperSvc, constantSvc) {
        this.http = http;
        this.helperSvc = helperSvc;
        this.constantSvc = constantSvc;
    }
    ApiService.prototype.getEventMessage = function (event, file) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Sent:
                return "Uploading file \"" + file.name + "\" of size " + file.size + ".";
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                //compute and show the % done; 
                var percentDone = Math.round(100 * event.loaded / event.total);
                return "File \"" + file.name + "\" is " + percentDone + "% uploaded.";
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                return "File \"" + file.name + "\" was completely uploaded!";
            default:
                return "File \"" + file.name + "\" surprising upload event: " + event.type + ".";
        }
    };
    ApiService.prototype.uploadService = function (url, data) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.helperSvc.loaderStart();
            var fileObj = new FormData();
            for (var i = 0; i < data.length; i++) {
                fileObj.append("file", data[i]);
            }
            var uploadUrl = url;
            _this.postService(uploadUrl, fileObj).subscribe(function (res) {
                resolve(res);
            });
        });
        return promise;
    };
    ApiService.prototype.postService = function (url, data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.helperSvc.loaderStart();
            _this.http.post(_this.constantSvc.APIBaseURL + url, data)
                .subscribe(function (res) {
                observer.next(res);
                observer.complete();
                _this.helperSvc.loaderStop();
            }, function (err) {
                _this.helperSvc.errorHandler(err);
                observer.complete();
                _this.helperSvc.loaderStop();
            });
        });
    };
    ApiService.prototype.getService = function (url, params) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.helperSvc.loaderStart();
            _this.http.get(_this.constantSvc.APIBaseURL + url + params).subscribe(function (res) {
                observer.next(res);
                observer.complete();
                _this.helperSvc.loaderStop();
            }, function (err) {
                _this.helperSvc.errorHandler(err);
                observer.complete();
                _this.helperSvc.loaderStop();
            });
        });
    };
    ApiService.prototype.putService = function (url, data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.helperSvc.loaderStart();
            _this.http.put(_this.constantSvc.APIBaseURL + url, data)
                .subscribe(function (res) {
                observer.next(res);
                observer.complete();
                _this.helperSvc.loaderStop();
            }, function (err) {
                _this.helperSvc.errorHandler(err);
                observer.complete();
                _this.helperSvc.loaderStop();
            });
        });
    };
    ApiService.prototype.deleteService = function (url, params) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.helperSvc.loaderStart();
            _this.http.delete(_this.constantSvc.APIBaseURL + url + params).subscribe(function (res) {
                observer.next(res);
                observer.complete();
                _this.helperSvc.loaderStop();
            }, function (err) {
                _this.helperSvc.errorHandler(err);
                observer.complete();
                _this.helperSvc.loaderStop();
            });
        });
    };
    ApiService.prototype.isExists = function (url, data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // this.helperSvc.loaderStart();
            _this.http.post(_this.constantSvc.APIBaseURL + url, data)
                .subscribe(function (res) {
                observer.next(res);
                observer.complete();
                // this.helperSvc.loaderStop();
            }, function (err) {
                _this.helperSvc.errorHandler(err);
                observer.complete();
                // this.helperSvc.loaderStop();
            });
        });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
            _core_constant_service__WEBPACK_IMPORTED_MODULE_4__["ConstantService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/service/auth-guard/auth-guard.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/auth-guard/auth-guard.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _core_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/helper.service */ "./src/app/service/core/helper.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/service/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// @Injectable({
//   providedIn: 'root'
// })
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authSvc, constantSvc, helperSvc) {
        this.router = router;
        this.authSvc = authSvc;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
    }
    // canActivate() {
    //   if (this.authSvc.isAuthenticated()) {
    //     return true;
    //   } else {
    //     this.router.navigate(['/login']);
    //     return false;
    //   }
    // }
    AuthGuardService.prototype.canActivate = function (next, state) {
        if (this.authSvc.isAuthenticated()) {
            var roles = next.data['roles'];
            if (roles) {
                var match = this.authSvc.roleMatch(roles);
                if (match)
                    return true;
                else {
                    this.router.navigate(['/login']);
                    this.helperSvc.notifyError('forbidden access !');
                    return false;
                }
            }
            else
                return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService.prototype.canActivateChild = function () {
        if (this.authSvc.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _core_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"],
            _core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/service/auth/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/auth/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _core_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/helper.service */ "./src/app/service/core/helper.service.ts");
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
    function AuthService(router, constantSvc, helperSvc) {
        this.router = router;
        this.constantSvc = constantSvc;
        this.helperSvc = helperSvc;
    }
    AuthService.prototype.getToken = function () {
        return this.helperSvc.lsGetItem(this.constantSvc.tokenConfig.AUTH_TOKEN);
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = this.getToken();
        if (typeof token !== 'undefined' && token !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.roleMatch = function (allowedRoles) {
        var isMatch = false;
        var userRoles = this.helperSvc.lsGetItem(this.constantSvc.tokenConfig.USER_ROLES);
        allowedRoles.forEach(function (element) {
            if (userRoles.indexOf(element) > -1) {
                isMatch = true;
                return false;
            }
        });
        return isMatch;
    };
    AuthService.prototype.handleDirectPublicUrl = function () {
        if (this.isAuthenticated()) {
            this.router.navigate(['/dashboard']);
        }
    };
    AuthService.prototype.logout = function () {
        this.helperSvc.lsClear();
        this.helperSvc.ssClear();
        this.router.navigate(['/login']);
        this.helperSvc.notifySuccess('Your session is successfully destroyed!');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"],
            _core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/core/constant.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/core/constant.service.ts ***!
  \**************************************************/
/*! exports provided: ConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantService", function() { return ConstantService; });
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

var ConstantService = /** @class */ (function () {
    function ConstantService() {
        // ssh -i /var/www/html/pwnarnkeypair.pem ubuntu@18.218.127.149
        this.APIBaseURL = 'http://localhost/commission-portal/index.php/api/';
        //public APIBaseURL = 'http://18.218.127.149/commission-portal/api/'
        this.APIConfig = {
            //in auth class
            LOGIN: 'auth/login',
            FORGET: 'auth/forget',
            GETSETTINGS: 'auth/settings',
            UPDATESETTINGS: 'auth/settings/',
            UPDATEPROFILE: 'auth/profile',
            //testing function for open new window
            LOGINWITHUSERNAME: 'auth/login_by_username',
            //in member class
            USERS: 'members/users',
            ADDUSER: 'members/users',
            GETUSER: 'members/user/',
            DELETEUSER: 'members/user/',
            UPDATEUSER: 'members/user/',
            GETSALESPERSONS: 'members/salesPersonsList/',
            //in api class
            ADDTIER: 'api/tiers',
            TIERSLIST: 'api/tiers',
            DELETETIER: 'api/tier/',
            ROLELIST: 'api/roles',
            SALESMANAGERLIST: 'api/salesmanagers',
            FINANCEMANGERLIST: 'api/financemangers',
            ADDRULE: 'api/rules',
            RULESLIST: 'api/rules',
            DELETERULE: 'api/rule/',
            //DEALSLISTBYUSER: 'deal/deals/',
            DEALSLISTBYUSER: 'deal/deals_list/',
            ISUNIQEMAIL: 'api/isEmailRegisterd',
            //in deal class
            ADDDEAL: 'deal/deals/',
            ISUNIQIDMS: 'deal/isIDMSRegisterd',
            TOTALSALES: 'deal/count_all/',
            TOTALDEALS_CASH: 'deal/count_all_type/C',
            TOTALDEALS_WHOLESALE: 'deal/count_all_type/D',
            TOTALDEALS_INHOUSE: 'deal/count_all_type/F',
            COUNTSALESBYSALESMAN: 'deal/countDealsBySalesman/',
            COUNTSALESBYSALESTEAM: 'deal/count_deals_by_salesteam',
            GETTIERFORSALESMAN: 'deal/getTierForSalesman/',
            CALCULATECOMMISSION: 'deal/calculate_commission/',
            SALESMANOFMONTH: 'deal/salesman_of_month/',
            TOTALSALEOFMONTH: 'deal/count_month_sale/',
            GETDEALDATA: 'deal/deal/',
            UPDATEDEAL: 'deal/deal',
            ADDCOMMENTS: 'deal/comments/',
            GETCOMMENTS: 'deal/comments/',
            GETRECENTCOMMENT: 'deal/get_recent_comment/'
        };
        this.tokenConfig = {
            AUTH_TOKEN: 'AUTHTOKEN',
            USER_INFO: 'USERINFO',
            USER_ROLES: 'userRoles',
            VERIFY_DATA: 'VERIFY'
        };
        this.dashboardConfig = {
            DASHBOARD_URL: 'DASHBOARD'
        };
        this.errMsgConfig = {
            UNKNOWN_ERROR: 'Some Error Occured.'
        };
    }
    ConstantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConstantService);
    return ConstantService;
}());



/***/ }),

/***/ "./src/app/service/core/helper.service.js":
/*!************************************************!*\
  !*** ./src/app/service/core/helper.service.js ***!
  \************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NgProgress } from '@ngx-progressbar/core';

var HelperService = /** @class */ (function () {
    function HelperService(
    // private progressSvc: NgProgress,
    toasterSvc) {
        this.toasterSvc = toasterSvc;
    }
    HelperService.prototype.loaderStart = function () {
        //this.progressSvc.start();
    };
    HelperService.prototype.loaderStop = function () {
        //this.progressSvc.done();
    };
    HelperService.prototype.notifySuccess = function (msg) {
        if (msg === void 0) { msg = null; }
        this.toasterSvc.success(msg);
    };
    HelperService.prototype.notifyError = function (msg) {
        if (msg === void 0) { msg = null; }
        this.toasterSvc.error(msg);
    };
    HelperService.prototype.lsSetItem = function (key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    };
    HelperService.prototype.lsGetItem = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    HelperService.prototype.lsRemoveItem = function (key) {
        return localStorage.removeItem(key);
    };
    HelperService.prototype.lsClear = function () {
        return localStorage.clear();
    };
    HelperService.prototype.ssSetItem = function (key, value) {
        return sessionStorage.setItem(key, JSON.stringify(value));
    };
    HelperService.prototype.ssGetItem = function (key) {
        return JSON.parse(sessionStorage.getItem(key));
    };
    HelperService.prototype.ssRemoveItem = function (key) {
        return sessionStorage.removeItem(key);
    };
    HelperService.prototype.ssClear = function () {
        return sessionStorage.clear();
    };
    HelperService.prototype.errorHandler = function (error) {
        switch (error.status) {
            case 400:
                this.notifyError(error.statusText);
                break;
            case 401:
                this.notifyError(error.statusText);
                break;
            case 402:
                this.notifyError(error.statusText);
                break;
            case 403:
                this.notifyError(error.statusText);
                break;
            case 404:
                this.notifyError(error.statusText);
                break;
            default:
                break;
        }
    };
    HelperService.prototype.convertDatePickerTimeToMySQLTime = function (str) {
        var rawDate = new Date(str).toISOString().split('T');
        var date = "" + rawDate[0];
        var rawTime = rawDate[1].split(':');
        var time = (rawTime[0]) + ":" + rawTime[1];
        return date + "  " + time;
    };
    HelperService.prototype.diff = function (start, end) {
        var hours = 0;
        var mins = 0;
        if (start && end) {
            start = start.split(":");
            end = end.split(":");
            var startHM = parseInt(start[0]) * 60 + parseInt(start[1]);
            var endHM = parseInt(end[0]) * 60 + parseInt(end[1]);
            if (startHM > endHM) {
                endHM = endHM + 24 * 60;
            }
            var minDiff = endHM - startHM;
            var hours = Math.floor(minDiff / 60);
            var mins = Math.floor(minDiff % 60);
            return hours + ":" + mins;
        }
        else {
            return hours + ":" + mins;
        }
    };
    HelperService.prototype.convertTime24to12 = function (time24) {
        var tmpArr = time24.split(':'), time12;
        if (+tmpArr[0] == 12) {
            time12 = tmpArr[0] + ':' + tmpArr[1] + ' PM';
        }
        else {
            if (+tmpArr[0] == 0) {
                time12 = '12:' + tmpArr[1] + ' AM';
            }
            else {
                if (+tmpArr[0] > 12) {
                    time12 = (+tmpArr[0] - 12) + ':' + tmpArr[1] + ' PM';
                }
                else {
                    time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' AM';
                }
            }
        }
        return time12;
    };
    HelperService.prototype.getMonth = function () {
        return [
            {
                key: 0,
                value: 'January'
            },
            {
                key: 1,
                value: 'February'
            },
            {
                key: 2,
                value: 'March'
            },
            {
                key: 3,
                value: 'April'
            },
            {
                key: 4,
                value: 'May'
            },
            {
                key: 5,
                value: 'June'
            },
            {
                key: 6,
                value: 'July'
            },
            {
                key: 7,
                value: 'August'
            },
            {
                key: 8,
                value: 'September'
            },
            {
                key: 9,
                value: 'October'
            },
            {
                key: 10,
                value: 'November'
            },
            {
                key: 11,
                value: 'December'
            }
        ];
    };
    HelperService.prototype.getYear = function () {
        var y = 2000;
        var yearArray = [];
        for (y = 2000; y <= 2500; y++) {
            yearArray.push({ y: y });
        }
        return yearArray;
    };
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], HelperService);
    return HelperService;
}());

//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ "./src/app/service/core/helper.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/core/helper.service.ts ***!
  \************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NgProgress } from '@ngx-progressbar/core';

var HelperService = /** @class */ (function () {
    function HelperService(
    // private progressSvc: NgProgress,
    toasterSvc) {
        this.toasterSvc = toasterSvc;
    }
    HelperService.prototype.loaderStart = function () {
        //this.progressSvc.start();
    };
    HelperService.prototype.loaderStop = function () {
        //this.progressSvc.done();
    };
    HelperService.prototype.notifySuccess = function (msg) {
        if (msg === void 0) { msg = null; }
        this.toasterSvc.success(msg);
    };
    HelperService.prototype.notifyError = function (msg) {
        if (msg === void 0) { msg = null; }
        this.toasterSvc.error(msg);
    };
    HelperService.prototype.lsSetItem = function (key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    };
    HelperService.prototype.lsGetItem = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    HelperService.prototype.lsRemoveItem = function (key) {
        return localStorage.removeItem(key);
    };
    HelperService.prototype.lsClear = function () {
        return localStorage.clear();
    };
    HelperService.prototype.ssSetItem = function (key, value) {
        return sessionStorage.setItem(key, JSON.stringify(value));
    };
    HelperService.prototype.ssGetItem = function (key) {
        return JSON.parse(sessionStorage.getItem(key));
    };
    HelperService.prototype.ssRemoveItem = function (key) {
        return sessionStorage.removeItem(key);
    };
    HelperService.prototype.ssClear = function () {
        return sessionStorage.clear();
    };
    HelperService.prototype.errorHandler = function (error) {
        switch (error.status) {
            case 400:
                this.notifyError(error.statusText);
                break;
            case 401:
                this.notifyError(error.statusText);
                break;
            case 402:
                this.notifyError(error.statusText);
                break;
            case 403:
                this.notifyError(error.statusText);
                break;
            case 404:
                this.notifyError(error.statusText);
                break;
            default:
                break;
        }
    };
    HelperService.prototype.convertDatePickerTimeToMySQLTime = function (str) {
        var rawDate = new Date(str).toISOString().split('T');
        var date = "" + rawDate[0];
        var rawTime = rawDate[1].split(':');
        var time = (rawTime[0]) + ":" + rawTime[1];
        return date + "  " + time;
    };
    HelperService.prototype.diff = function (start, end) {
        var hours = 0;
        var mins = 0;
        if (start && end) {
            start = start.split(":");
            end = end.split(":");
            var startHM = parseInt(start[0]) * 60 + parseInt(start[1]);
            var endHM = parseInt(end[0]) * 60 + parseInt(end[1]);
            if (startHM > endHM) {
                endHM = endHM + 24 * 60;
            }
            var minDiff = endHM - startHM;
            var hours = Math.floor(minDiff / 60);
            var mins = Math.floor(minDiff % 60);
            return hours + ":" + mins;
        }
        else {
            return hours + ":" + mins;
        }
    };
    HelperService.prototype.convertTime24to12 = function (time24) {
        var tmpArr = time24.split(':'), time12;
        if (+tmpArr[0] == 12) {
            time12 = tmpArr[0] + ':' + tmpArr[1] + ' PM';
        }
        else {
            if (+tmpArr[0] == 0) {
                time12 = '12:' + tmpArr[1] + ' AM';
            }
            else {
                if (+tmpArr[0] > 12) {
                    time12 = (+tmpArr[0] - 12) + ':' + tmpArr[1] + ' PM';
                }
                else {
                    time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' AM';
                }
            }
        }
        return time12;
    };
    HelperService.prototype.getMonth = function () {
        return [
            {
                key: 0,
                value: 'January'
            },
            {
                key: 1,
                value: 'February'
            },
            {
                key: 2,
                value: 'March'
            },
            {
                key: 3,
                value: 'April'
            },
            {
                key: 4,
                value: 'May'
            },
            {
                key: 5,
                value: 'June'
            },
            {
                key: 6,
                value: 'July'
            },
            {
                key: 7,
                value: 'August'
            },
            {
                key: 8,
                value: 'September'
            },
            {
                key: 9,
                value: 'October'
            },
            {
                key: 10,
                value: 'November'
            },
            {
                key: 11,
                value: 'December'
            }
        ];
    };
    HelperService.prototype.getYear = function () {
        var y = 2000;
        var yearArray = [];
        for (y = 2000; y <= 2500; y++) {
            yearArray.push({ y: y });
        }
        return yearArray;
    };
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/service/interceptor/interceptor.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/interceptor/interceptor.service.ts ***!
  \************************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/constant.service */ "./src/app/service/core/constant.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/helper.service */ "./src/app/service/core/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InterceptorService = /** @class */ (function () {
    function InterceptorService(AuthSvc, constantSvc, router, helperSvc) {
        this.AuthSvc = AuthSvc;
        this.constantSvc = constantSvc;
        this.router = router;
        this.helperSvc = helperSvc;
    }
    InterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        if (this.AuthSvc.isAuthenticated()) {
            request = request.clone({
                setHeaders: {
                    token: "" + this.AuthSvc.getToken(),
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event) {
            }
        }, function (err) {
            if (err) {
                if (err.error.code === 401) {
                    _this.router.navigate(['/login']);
                    _this.helperSvc.lsRemoveItem(_this.constantSvc.tokenConfig.AUTH_TOKEN);
                    _this.helperSvc.lsRemoveItem(_this.constantSvc.tokenConfig.USER_INFO);
                }
            }
        }));
    };
    InterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _core_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _show_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-error.component */ "./src/app/shared/show-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [_show_error_component__WEBPACK_IMPORTED_MODULE_3__["ShowErrorsComponent"]],
            exports: [_show_error_component__WEBPACK_IMPORTED_MODULE_3__["ShowErrorsComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/show-error.component.ts":
/*!************************************************!*\
  !*** ./src/app/shared/show-error.component.ts ***!
  \************************************************/
/*! exports provided: ShowErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowErrorsComponent", function() { return ShowErrorsComponent; });
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

var ShowErrorsComponent = /** @class */ (function () {
    function ShowErrorsComponent() {
    }
    ShowErrorsComponent_1 = ShowErrorsComponent;
    ShowErrorsComponent.prototype.shouldShowErrors = function () {
        return this.control &&
            this.control.errors &&
            (this.control.dirty || this.control.touched || this.control.untouched);
    };
    ShowErrorsComponent.prototype.listOfErrors = function () {
        var _this = this;
        return Object.keys(this.control.errors)
            .map(function (field) { return _this.getMessage(field, _this.control.errors[field]); });
    };
    ShowErrorsComponent.prototype.getMessage = function (type, params) {
        if (ShowErrorsComponent_1.errorMessages[type]) {
            return ShowErrorsComponent_1.errorMessages[type](params);
        }
        else {
            console.log('Add new error message for given type: ' + type);
            return ShowErrorsComponent_1.errorMessages['somthing'](params);
        }
    };
    var ShowErrorsComponent_1;
    ShowErrorsComponent.errorMessages = {
        'required': function () { return 'This field is required'; },
        'minlength': function (params) { return 'Value must be of minimum ' + params.requiredLength + ' characters length'; },
        'maxlength': function (params) { return 'Value must be of maximum ' + params.requiredLength + ' characters length'; },
        'pattern': function (params) { return 'Invalid field value'; },
        'years': function (params) { return params.message; },
        'email': function (params) { return 'The required valid email id'; },
        'countryCity': function (params) { return params.message; },
        'uniqueName': function (params) { return params.message; },
        'telephoneNumbers': function (params) { return params.message; },
        'telephoneNumber': function (params) { return params.message; },
        'equalTo': function (params) { return 'Passwords do not match.'; },
        'validatePhone': function (params) { return 'Invalid phone number'; },
        'isGreaterCurrentDate': function (params) { return 'Date shouldnt be greater than current date'; },
        'isError': function (params) { return 'Date cant be less than date of joining'; },
        'minAgeError': function (params) { return 'Employee should be atleast 18 years old'; },
        'minMarriageError': function (params) { return 'Employee should be atleast 21 years old'; },
        'minBirthError': function (params) { return 'Date should not be less than birth date'; },
        'min': function (params) { return 'Number should be greater than ' + params.min; },
        'max': function (params) { return 'Number should be less than or equal to ' + params.max; },
        'somthing': function (params) { return 'Invalid field value'; },
        'expectedenddate': function (params) { return 'Expected End Date should be greater than Project Start Date.'; },
        'orderenddate': function (params) { return 'Order End Date should be greater than Sales Order Date.'; },
        'projectstartdate': function (params) { return 'Project Start Date should be greater than or equal to Sales Order Date.'; },
        'expectedenddateerror': function (params) { return 'Project Start Date should be smaller than Expected End Date.'; },
        'salesorderdate': function (params) { return 'Sales Order Date should be smaller than Order End Date.'; },
        'startdaterequired': function (params) { return 'Please fill Project Start Date before entering Expected End Date.'; },
        'dateofjoininglessthanshift': function (params) { return 'Shift From Date should be Greater than Date of Joining.'; },
        'shiftdaterequired': function (params) { return 'Shift From Date is required.'; }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ShowErrorsComponent.prototype, "control", void 0);
    ShowErrorsComponent = ShowErrorsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-errors',
            template: "\n    <span *ngIf=\"shouldShowErrors()\">\n      <li style=\"color: #d50000; list-style-type: none;\" *ngFor=\"let error of listOfErrors()\">{{error}}</li>\n    </span>\n  "
        })
    ], ShowErrorsComponent);
    return ShowErrorsComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestComponent = /** @class */ (function () {
    function TestComponent(route) {
        this.route = route;
        this.list = ['milk', 'sugar', 'flour'];
        this.state = 'normal';
        this.wildState = 'normal';
    }
    //@ViewChild('f') addForm: NgForm;
    TestComponent.prototype.onAdd = function (item) {
        if (item !== '' || item == this.list.indexOf(item)) {
            this.list.push(item);
            //this.addForm.reset();
        }
    };
    TestComponent.prototype.onDelete = function (item) {
        this.list.splice(this.list.indexOf(item), 1);
    };
    TestComponent.prototype.onAnimate = function () {
        this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    };
    TestComponent.prototype.onShrink = function () {
        this.wildState == 'normal' ? this.wildState = 'shrunk' : this.wildState = 'normal';
    };
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: "\n    <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <h1>Animations</h1>\n      <button class=\"btn btn-primary\" (click)=\"onAnimate()\">Animate!</button>\n      <button class=\"btn btn-primary\" (click)=\"onShrink()\">Shrink!</button>\n      <hr>\n      <div [@divState]=\"state\" style=\"width: 100px; height: 100px\">\n      </div>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n    <form #f=\"ngForm\" >\n      <input type=\"text\" #input name=\"inputVal\" ngModel class=\"form-control\">\n    \n      <button type=\"button\" (click)=\"onAdd(input.value)\" class=\"btn btn-primary\" >Add Item!</button>\n      </form>\n      <hr>\n      <ul class=\"list-group\">\n        <li [@divState]=\"state\"\n          class=\"list-group-item\"\n          (click)=\"onDelete(item)\"\n          *ngFor=\"let item of list; let i = index\" >\n          {{ item }}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n  ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('divState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'red', transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: '#bee0ff', opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/assets/plugins/chartjs-old/Chart.min.js":
/*!*****************************************************!*\
  !*** ./src/assets/plugins/chartjs-old/Chart.min.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
(function(){"use strict";var t=this,i=t.Chart,e=function(t){this.canvas=t.canvas,this.ctx=t;var i=function(t,i){return t["offset"+i]?t["offset"+i]:document.defaultView.getComputedStyle(t).getPropertyValue(i)},e=this.width=i(t.canvas,"Width"),n=this.height=i(t.canvas,"Height");t.canvas.width=e,t.canvas.height=n;var e=this.width=t.canvas.width,n=this.height=t.canvas.height;return this.aspectRatio=this.width/this.height,s.retinaScale(this),this};e.defaults={global:{animation:!0,animationSteps:60,animationEasing:"easeOutQuart",showScale:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleIntegersOnly:!0,scaleBeginAtZero:!1,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:!1,maintainAspectRatio:!0,showTooltips:!0,customTooltips:!1,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= value %>",multiTooltipKeyBackground:"#fff",onAnimationProgress:function(){},onAnimationComplete:function(){}}},e.types={};var s=e.helpers={},n=s.each=function(t,i,e){var s=Array.prototype.slice.call(arguments,3);if(t)if(t.length===+t.length){var n;for(n=0;n<t.length;n++)i.apply(e,[t[n],n].concat(s))}else for(var o in t)i.apply(e,[t[o],o].concat(s))},o=s.clone=function(t){var i={};return n(t,function(e,s){t.hasOwnProperty(s)&&(i[s]=e)}),i},a=s.extend=function(t){return n(Array.prototype.slice.call(arguments,1),function(i){n(i,function(e,s){i.hasOwnProperty(s)&&(t[s]=e)})}),t},h=s.merge=function(){var t=Array.prototype.slice.call(arguments,0);return t.unshift({}),a.apply(null,t)},l=s.indexOf=function(t,i){if(Array.prototype.indexOf)return t.indexOf(i);for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1},r=(s.where=function(t,i){var e=[];return s.each(t,function(t){i(t)&&e.push(t)}),e},s.findNextWhere=function(t,i,e){e||(e=-1);for(var s=e+1;s<t.length;s++){var n=t[s];if(i(n))return n}},s.findPreviousWhere=function(t,i,e){e||(e=t.length);for(var s=e-1;s>=0;s--){var n=t[s];if(i(n))return n}},s.inherits=function(t){var i=this,e=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return i.apply(this,arguments)},s=function(){this.constructor=e};return s.prototype=i.prototype,e.prototype=new s,e.extend=r,t&&a(e.prototype,t),e.__super__=i.prototype,e}),c=s.noop=function(){},u=s.uid=function(){var t=0;return function(){return"chart-"+t++}}(),d=s.warn=function(t){window.console&&"function"==typeof window.console.warn&&console.warn(t)},p=s.amd= true&&__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js"),f=s.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},g=s.max=function(t){return Math.max.apply(Math,t)},m=s.min=function(t){return Math.min.apply(Math,t)},v=(s.cap=function(t,i,e){if(f(i)){if(t>i)return i}else if(f(e)&&e>t)return e;return t},s.getDecimalPlaces=function(t){return t%1!==0&&f(t)?t.toString().split(".")[1].length:0}),S=s.radians=function(t){return t*(Math.PI/180)},x=(s.getAngleFromPoint=function(t,i){var e=i.x-t.x,s=i.y-t.y,n=Math.sqrt(e*e+s*s),o=2*Math.PI+Math.atan2(s,e);return 0>e&&0>s&&(o+=2*Math.PI),{angle:o,distance:n}},s.aliasPixel=function(t){return t%2===0?0:.5}),y=(s.splineCurve=function(t,i,e,s){var n=Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)),o=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)),a=s*n/(n+o),h=s*o/(n+o);return{inner:{x:i.x-a*(e.x-t.x),y:i.y-a*(e.y-t.y)},outer:{x:i.x+h*(e.x-t.x),y:i.y+h*(e.y-t.y)}}},s.calculateOrderOfMagnitude=function(t){return Math.floor(Math.log(t)/Math.LN10)}),C=(s.calculateScaleRange=function(t,i,e,s,n){var o=2,a=Math.floor(i/(1.5*e)),h=o>=a,l=g(t),r=m(t);l===r&&(l+=.5,r>=.5&&!s?r-=.5:l+=.5);for(var c=Math.abs(l-r),u=y(c),d=Math.ceil(l/(1*Math.pow(10,u)))*Math.pow(10,u),p=s?0:Math.floor(r/(1*Math.pow(10,u)))*Math.pow(10,u),f=d-p,v=Math.pow(10,u),S=Math.round(f/v);(S>a||a>2*S)&&!h;)if(S>a)v*=2,S=Math.round(f/v),S%1!==0&&(h=!0);else if(n&&u>=0){if(v/2%1!==0)break;v/=2,S=Math.round(f/v)}else v/=2,S=Math.round(f/v);return h&&(S=o,v=f/S),{steps:S,stepValue:v,min:p,max:p+S*v}},s.template=function(t,i){function e(t,i){var e=/\W/.test(t)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):s[t]=s[t];return i?e(i):e}if(t instanceof Function)return t(i);var s={};return e(t,i)}),w=(s.generateLabels=function(t,i,e,s){var o=new Array(i);return labelTemplateString&&n(o,function(i,n){o[n]=C(t,{value:e+s*(n+1)})}),o},s.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),-(s*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e)))},easeOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),s*Math.pow(2,-10*t)*Math.sin(2*(1*t-i)*Math.PI/e)+1)},easeInOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:2==(t/=.5)?1:(e||(e=.3*1.5),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),1>t?-.5*s*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e):s*Math.pow(2,-10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e)*.5+1)},easeInBack:function(t){var i=1.70158;return 1*(t/=1)*t*((i+1)*t-i)},easeOutBack:function(t){var i=1.70158;return 1*((t=t/1-1)*t*((i+1)*t+i)+1)},easeInOutBack:function(t){var i=1.70158;return(t/=.5)<1?.5*t*t*(((i*=1.525)+1)*t-i):.5*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)},easeInBounce:function(t){return 1-w.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*w.easeInBounce(2*t):.5*w.easeOutBounce(2*t-1)+.5}}),b=s.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),P=s.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),L=(s.animationLoop=function(t,i,e,s,n,o){var a=0,h=w[e]||w.linear,l=function(){a++;var e=a/i,r=h(e);t.call(o,r,e,a),s.call(o,r,e),i>a?o.animationFrame=b(l):n.apply(o)};b(l)},s.getRelativePosition=function(t){var i,e,s=t.originalEvent||t,n=t.currentTarget||t.srcElement,o=n.getBoundingClientRect();return s.touches?(i=s.touches[0].clientX-o.left,e=s.touches[0].clientY-o.top):(i=s.clientX-o.left,e=s.clientY-o.top),{x:i,y:e}},s.addEvent=function(t,i,e){t.addEventListener?t.addEventListener(i,e):t.attachEvent?t.attachEvent("on"+i,e):t["on"+i]=e}),k=s.removeEvent=function(t,i,e){t.removeEventListener?t.removeEventListener(i,e,!1):t.detachEvent?t.detachEvent("on"+i,e):t["on"+i]=c},F=(s.bindEvents=function(t,i,e){t.events||(t.events={}),n(i,function(i){t.events[i]=function(){e.apply(t,arguments)},L(t.chart.canvas,i,t.events[i])})},s.unbindEvents=function(t,i){n(i,function(i,e){k(t.chart.canvas,e,i)})}),R=s.getMaximumWidth=function(t){var i=t.parentNode;return i.clientWidth},T=s.getMaximumHeight=function(t){var i=t.parentNode;return i.clientHeight},A=(s.getMaximumSize=s.getMaximumWidth,s.retinaScale=function(t){var i=t.ctx,e=t.canvas.width,s=t.canvas.height;window.devicePixelRatio&&(i.canvas.style.width=e+"px",i.canvas.style.height=s+"px",i.canvas.height=s*window.devicePixelRatio,i.canvas.width=e*window.devicePixelRatio,i.scale(window.devicePixelRatio,window.devicePixelRatio))}),M=s.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},W=s.fontString=function(t,i,e){return i+" "+t+"px "+e},z=s.longestText=function(t,i,e){t.font=i;var s=0;return n(e,function(i){var e=t.measureText(i).width;s=e>s?e:s}),s},B=s.drawRoundedRectangle=function(t,i,e,s,n,o){t.beginPath(),t.moveTo(i+o,e),t.lineTo(i+s-o,e),t.quadraticCurveTo(i+s,e,i+s,e+o),t.lineTo(i+s,e+n-o),t.quadraticCurveTo(i+s,e+n,i+s-o,e+n),t.lineTo(i+o,e+n),t.quadraticCurveTo(i,e+n,i,e+n-o),t.lineTo(i,e+o),t.quadraticCurveTo(i,e,i+o,e),t.closePath()};e.instances={},e.Type=function(t,i,s){this.options=i,this.chart=s,this.id=u(),e.instances[this.id]=this,i.responsive&&this.resize(),this.initialize.call(this,t)},a(e.Type.prototype,{initialize:function(){return this},clear:function(){return M(this.chart),this},stop:function(){return P(this.animationFrame),this},resize:function(t){this.stop();var i=this.chart.canvas,e=R(this.chart.canvas),s=this.options.maintainAspectRatio?e/this.chart.aspectRatio:T(this.chart.canvas);return i.width=this.chart.width=e,i.height=this.chart.height=s,A(this.chart),"function"==typeof t&&t.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:c,render:function(t){return t&&this.reflow(),this.options.animation&&!t?s.animationLoop(this.draw,this.options.animationSteps,this.options.animationEasing,this.options.onAnimationProgress,this.options.onAnimationComplete,this):(this.draw(),this.options.onAnimationComplete.call(this)),this},generateLegend:function(){return C(this.options.legendTemplate,this)},destroy:function(){this.clear(),F(this,this.events);var t=this.chart.canvas;t.width=this.chart.width,t.height=this.chart.height,t.style.removeProperty?(t.style.removeProperty("width"),t.style.removeProperty("height")):(t.style.removeAttribute("width"),t.style.removeAttribute("height")),delete e.instances[this.id]},showTooltip:function(t,i){"undefined"==typeof this.activeElements&&(this.activeElements=[]);var o=function(t){var i=!1;return t.length!==this.activeElements.length?i=!0:(n(t,function(t,e){t!==this.activeElements[e]&&(i=!0)},this),i)}.call(this,t);if(o||i){if(this.activeElements=t,this.draw(),this.options.customTooltips&&this.options.customTooltips(!1),t.length>0)if(this.datasets&&this.datasets.length>1){for(var a,h,r=this.datasets.length-1;r>=0&&(a=this.datasets[r].points||this.datasets[r].bars||this.datasets[r].segments,h=l(a,t[0]),-1===h);r--);var c=[],u=[],d=function(){var t,i,e,n,o,a=[],l=[],r=[];return s.each(this.datasets,function(i){t=i.points||i.bars||i.segments,t[h]&&t[h].hasValue()&&a.push(t[h])}),s.each(a,function(t){l.push(t.x),r.push(t.y),c.push(s.template(this.options.multiTooltipTemplate,t)),u.push({fill:t._saved.fillColor||t.fillColor,stroke:t._saved.strokeColor||t.strokeColor})},this),o=m(r),e=g(r),n=m(l),i=g(l),{x:n>this.chart.width/2?n:i,y:(o+e)/2}}.call(this,h);new e.MultiTooltip({x:d.x,y:d.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:c,legendColors:u,legendColorBackground:this.options.multiTooltipKeyBackground,title:t[0].label,chart:this.chart,ctx:this.chart.ctx,custom:this.options.customTooltips}).draw()}else n(t,function(t){var i=t.tooltipPosition();new e.Tooltip({x:Math.round(i.x),y:Math.round(i.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:C(this.options.tooltipTemplate,t),chart:this.chart,custom:this.options.customTooltips}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),e.Type.extend=function(t){var i=this,s=function(){return i.apply(this,arguments)};if(s.prototype=o(i.prototype),a(s.prototype,t),s.extend=e.Type.extend,t.name||i.prototype.name){var n=t.name||i.prototype.name,l=e.defaults[i.prototype.name]?o(e.defaults[i.prototype.name]):{};e.defaults[n]=a(l,t.defaults),e.types[n]=s,e.prototype[n]=function(t,i){var o=h(e.defaults.global,e.defaults[n],i||{});return new s(t,o,this)}}else d("Name not provided for this chart, so it hasn't been registered");return i},e.Element=function(t){a(this,t),this.initialize.apply(this,arguments),this.save()},a(e.Element.prototype,{initialize:function(){},restore:function(t){return t?n(t,function(t){this[t]=this._saved[t]},this):a(this,this._saved),this},save:function(){return this._saved=o(this),delete this._saved._saved,this},update:function(t){return n(t,function(t,i){this._saved[i]=this[i],this[i]=t},this),this},transition:function(t,i){return n(t,function(t,e){this[e]=(t-this._saved[e])*i+this._saved[e]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return f(this.value)}}),e.Element.extend=r,e.Point=e.Element.extend({display:!0,inRange:function(t,i){var e=this.hitDetectionRadius+this.radius;return Math.pow(t-this.x,2)+Math.pow(i-this.y,2)<Math.pow(e,2)},draw:function(){if(this.display){var t=this.ctx;t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath(),t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.fillStyle=this.fillColor,t.fill(),t.stroke()}}}),e.Arc=e.Element.extend({inRange:function(t,i){var e=s.getAngleFromPoint(this,{x:t,y:i}),n=e.angle>=this.startAngle&&e.angle<=this.endAngle,o=e.distance>=this.innerRadius&&e.distance<=this.outerRadius;return n&&o},tooltipPosition:function(){var t=this.startAngle+(this.endAngle-this.startAngle)/2,i=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+Math.cos(t)*i,y:this.y+Math.sin(t)*i}},draw:function(t){var i=this.ctx;i.beginPath(),i.arc(this.x,this.y,this.outerRadius,this.startAngle,this.endAngle),i.arc(this.x,this.y,this.innerRadius,this.endAngle,this.startAngle,!0),i.closePath(),i.strokeStyle=this.strokeColor,i.lineWidth=this.strokeWidth,i.fillStyle=this.fillColor,i.fill(),i.lineJoin="bevel",this.showStroke&&i.stroke()}}),e.Rectangle=e.Element.extend({draw:function(){var t=this.ctx,i=this.width/2,e=this.x-i,s=this.x+i,n=this.base-(this.base-this.y),o=this.strokeWidth/2;this.showStroke&&(e+=o,s-=o,n+=o),t.beginPath(),t.fillStyle=this.fillColor,t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.moveTo(e,this.base),t.lineTo(e,n),t.lineTo(s,n),t.lineTo(s,this.base),t.fill(),this.showStroke&&t.stroke()},height:function(){return this.base-this.y},inRange:function(t,i){return t>=this.x-this.width/2&&t<=this.x+this.width/2&&i>=this.y&&i<=this.base}}),e.Tooltip=e.Element.extend({draw:function(){var t=this.chart.ctx;t.font=W(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign="center",this.yAlign="above";var i=this.caretPadding=2,e=t.measureText(this.text).width+2*this.xPadding,s=this.fontSize+2*this.yPadding,n=s+this.caretHeight+i;this.x+e/2>this.chart.width?this.xAlign="left":this.x-e/2<0&&(this.xAlign="right"),this.y-n<0&&(this.yAlign="below");var o=this.x-e/2,a=this.y-n;if(t.fillStyle=this.fillColor,this.custom)this.custom(this);else{switch(this.yAlign){case"above":t.beginPath(),t.moveTo(this.x,this.y-i),t.lineTo(this.x+this.caretHeight,this.y-(i+this.caretHeight)),t.lineTo(this.x-this.caretHeight,this.y-(i+this.caretHeight)),t.closePath(),t.fill();break;case"below":a=this.y+i+this.caretHeight,t.beginPath(),t.moveTo(this.x,this.y+i),t.lineTo(this.x+this.caretHeight,this.y+i+this.caretHeight),t.lineTo(this.x-this.caretHeight,this.y+i+this.caretHeight),t.closePath(),t.fill()}switch(this.xAlign){case"left":o=this.x-e+(this.cornerRadius+this.caretHeight);break;case"right":o=this.x-(this.cornerRadius+this.caretHeight)}B(t,o,a,e,s,this.cornerRadius),t.fill(),t.fillStyle=this.textColor,t.textAlign="center",t.textBaseline="middle",t.fillText(this.text,o+e/2,a+s/2)}}}),e.MultiTooltip=e.Element.extend({initialize:function(){this.font=W(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=W(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+1.5*this.titleFontSize,this.ctx.font=this.titleFont;var t=this.ctx.measureText(this.title).width,i=z(this.ctx,this.font,this.labels)+this.fontSize+3,e=g([i,t]);this.width=e+2*this.xPadding;var s=this.height/2;this.y-s<0?this.y=s:this.y+s>this.chart.height&&(this.y=this.chart.height-s),this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(t){var i=this.y-this.height/2+this.yPadding,e=t-1;return 0===t?i+this.titleFontSize/2:i+(1.5*this.fontSize*e+this.fontSize/2)+1.5*this.titleFontSize},draw:function(){if(this.custom)this.custom(this);else{B(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var t=this.ctx;t.fillStyle=this.fillColor,t.fill(),t.closePath(),t.textAlign="left",t.textBaseline="middle",t.fillStyle=this.titleTextColor,t.font=this.titleFont,t.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),t.font=this.font,s.each(this.labels,function(i,e){t.fillStyle=this.textColor,t.fillText(i,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(e+1)),t.fillStyle=this.legendColorBackground,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize),t.fillStyle=this.legendColors[e].fill,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}}),e.Scale=e.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}));this.yLabelWidth=this.display&&this.showLabels?z(this.ctx,this.font,this.yLabels):0},addXLabel:function(t){this.xLabels.push(t),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},fit:function(){this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,this.startPoint+=this.padding,this.endPoint-=this.padding;var t,i=this.endPoint-this.startPoint;for(this.calculateYRange(i),this.buildYLabels(),this.calculateXLabelRotation();i>this.endPoint-this.startPoint;)i=this.endPoint-this.startPoint,t=this.yLabelWidth,this.calculateYRange(i),this.buildYLabels(),t<this.yLabelWidth&&this.calculateXLabelRotation()},calculateXLabelRotation:function(){this.ctx.font=this.font;var t,i,e=this.ctx.measureText(this.xLabels[0]).width,s=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width;if(this.xScalePaddingRight=s/2+3,this.xScalePaddingLeft=e/2>this.yLabelWidth+10?e/2:this.yLabelWidth+10,this.xLabelRotation=0,this.display){var n,o=z(this.ctx,this.font,this.xLabels);this.xLabelWidth=o;for(var a=Math.floor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>a&&0===this.xLabelRotation||this.xLabelWidth>a&&this.xLabelRotation<=90&&this.xLabelRotation>0;)n=Math.cos(S(this.xLabelRotation)),t=n*e,i=n*s,t+this.fontSize/2>this.yLabelWidth+8&&(this.xScalePaddingLeft=t+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=n*o;this.xLabelRotation>0&&(this.endPoint-=Math.sin(S(this.xLabelRotation))*o+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},calculateYRange:c,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(t){var i=this.drawingArea()/(this.min-this.max);return this.endPoint-i*(t-this.min)},calculateX:function(t){var i=(this.xLabelRotation>0,this.width-(this.xScalePaddingLeft+this.xScalePaddingRight)),e=i/Math.max(this.valuesCount-(this.offsetGridLines?0:1),1),s=e*t+this.xScalePaddingLeft;return this.offsetGridLines&&(s+=e/2),Math.round(s)},update:function(t){s.extend(this,t),this.fit()},draw:function(){var t=this.ctx,i=(this.endPoint-this.startPoint)/this.steps,e=Math.round(this.xScalePaddingLeft);this.display&&(t.fillStyle=this.textColor,t.font=this.font,n(this.yLabels,function(n,o){var a=this.endPoint-i*o,h=Math.round(a),l=this.showHorizontalLines;t.textAlign="right",t.textBaseline="middle",this.showLabels&&t.fillText(n,e-10,a),0!==o||l||(l=!0),l&&t.beginPath(),o>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),h+=s.aliasPixel(t.lineWidth),l&&(t.moveTo(e,h),t.lineTo(this.width,h),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(e-5,h),t.lineTo(e,h),t.stroke(),t.closePath()},this),n(this.xLabels,function(i,e){var s=this.calculateX(e)+x(this.lineWidth),n=this.calculateX(e-(this.offsetGridLines?.5:0))+x(this.lineWidth),o=this.xLabelRotation>0,a=this.showVerticalLines;0!==e||a||(a=!0),a&&t.beginPath(),e>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),a&&(t.moveTo(n,this.endPoint),t.lineTo(n,this.startPoint-3),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(n,this.endPoint),t.lineTo(n,this.endPoint+5),t.stroke(),t.closePath(),t.save(),t.translate(s,o?this.endPoint+12:this.endPoint+8),t.rotate(-1*S(this.xLabelRotation)),t.font=this.font,t.textAlign=o?"right":"center",t.textBaseline=o?"middle":"top",t.fillText(i,0,0),t.restore()},this))}}),e.RadialScale=e.Element.extend({initialize:function(){this.size=m([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(t){var i=this.drawingArea/(this.max-this.min);return(t-this.min)*i},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}))},getCircumference:function(){return 2*Math.PI/this.valuesCount},setScaleSize:function(){var t,i,e,s,n,o,a,h,l,r,c,u,d=m([this.height/2-this.pointLabelFontSize-5,this.width/2]),p=this.width,g=0;for(this.ctx.font=W(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),i=0;i<this.valuesCount;i++)t=this.getPointPosition(i,d),e=this.ctx.measureText(C(this.templateString,{value:this.labels[i]})).width+5,0===i||i===this.valuesCount/2?(s=e/2,t.x+s>p&&(p=t.x+s,n=i),t.x-s<g&&(g=t.x-s,a=i)):i<this.valuesCount/2?t.x+e>p&&(p=t.x+e,n=i):i>this.valuesCount/2&&t.x-e<g&&(g=t.x-e,a=i);l=g,r=Math.ceil(p-this.width),o=this.getIndexAngle(n),h=this.getIndexAngle(a),c=r/Math.sin(o+Math.PI/2),u=l/Math.sin(h+Math.PI/2),c=f(c)?c:0,u=f(u)?u:0,this.drawingArea=d-(u+c)/2,this.setCenterPoint(u,c)},setCenterPoint:function(t,i){var e=this.width-i-this.drawingArea,s=t+this.drawingArea;this.xCenter=(s+e)/2,this.yCenter=this.height/2},getIndexAngle:function(t){var i=2*Math.PI/this.valuesCount;return t*i-Math.PI/2},getPointPosition:function(t,i){var e=this.getIndexAngle(t);return{x:Math.cos(e)*i+this.xCenter,y:Math.sin(e)*i+this.yCenter}},draw:function(){if(this.display){var t=this.ctx;if(n(this.yLabels,function(i,e){if(e>0){var s,n=e*(this.drawingArea/this.steps),o=this.yCenter-n;if(this.lineWidth>0)if(t.strokeStyle=this.lineColor,t.lineWidth=this.lineWidth,this.lineArc)t.beginPath(),t.arc(this.xCenter,this.yCenter,n,0,2*Math.PI),t.closePath(),t.stroke();else{t.beginPath();for(var a=0;a<this.valuesCount;a++)s=this.getPointPosition(a,this.calculateCenterOffset(this.min+e*this.stepValue)),0===a?t.moveTo(s.x,s.y):t.lineTo(s.x,s.y);t.closePath(),t.stroke()}if(this.showLabels){if(t.font=W(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var h=t.measureText(i).width;t.fillStyle=this.backdropColor,t.fillRect(this.xCenter-h/2-this.backdropPaddingX,o-this.fontSize/2-this.backdropPaddingY,h+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.fontColor,t.fillText(i,this.xCenter,o)}}},this),!this.lineArc){t.lineWidth=this.angleLineWidth,t.strokeStyle=this.angleLineColor;for(var i=this.valuesCount-1;i>=0;i--){if(this.angleLineWidth>0){var e=this.getPointPosition(i,this.calculateCenterOffset(this.max));t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(e.x,e.y),t.stroke(),t.closePath()}var s=this.getPointPosition(i,this.calculateCenterOffset(this.max)+5);t.font=W(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),t.fillStyle=this.pointLabelFontColor;var o=this.labels.length,a=this.labels.length/2,h=a/2,l=h>i||i>o-h,r=i===h||i===o-h;t.textAlign=0===i?"center":i===a?"center":a>i?"left":"right",t.textBaseline=r?"middle":l?"bottom":"top",t.fillText(this.labels[i],s.x,s.y)}}}}}),s.addEvent(window,"resize",function(){var t;return function(){clearTimeout(t),t=setTimeout(function(){n(e.instances,function(t){t.options.responsive&&t.resize(t.render,!0)})},50)}}()),p?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)): true&&module.exports&&(module.exports=e),t.Chart=e,e.noConflict=function(){return t.Chart=i,e}}).call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Bar",defaults:s,initialize:function(t){var s=this.options;this.ScaleClass=i.Scale.extend({offsetGridLines:!0,calculateBarX:function(t,i,e){var n=this.calculateBaseWidth(),o=this.calculateX(e)-n/2,a=this.calculateBarWidth(t);return o+a*i+i*s.barDatasetSpacing+a/2},calculateBaseWidth:function(){return this.calculateX(1)-this.calculateX(0)-2*s.barValueSpacing},calculateBarWidth:function(t){var i=this.calculateBaseWidth()-(t-1)*s.barDatasetSpacing;return i/t}}),this.datasets=[],this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getBarsAtEvent(t):[];this.eachBars(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),this.BarClass=i.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,bars:[]};this.datasets.push(s),e.each(i.data,function(e,n){s.bars.push(new this.BarClass({value:e,label:t.labels[n],datasetLabel:i.label,strokeColor:i.strokeColor,fillColor:i.fillColor,highlightFill:i.highlightFill||i.fillColor,highlightStroke:i.highlightStroke||i.strokeColor}))},this)},this),this.buildScale(t.labels),this.BarClass.prototype.base=this.scale.endPoint,this.eachBars(function(t,i,s){e.extend(t,{width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(this.datasets.length,s,i),y:this.scale.endPoint}),t.save()},this),this.render()},update:function(){this.scale.update(),e.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachBars(function(t){t.save()}),this.render()},eachBars:function(t){e.each(this.datasets,function(i,s){e.each(i.bars,t,this,s)},this)},getBarsAtEvent:function(t){for(var i,s=[],n=e.getRelativePosition(t),o=function(t){s.push(t.bars[i])},a=0;a<this.datasets.length;a++)for(i=0;i<this.datasets[a].bars.length;i++)if(this.datasets[a].bars[i].inRange(n.x,n.y))return e.each(this.datasets,o),s;return s},buildScale:function(t){var i=this,s=function(){var t=[];return i.eachBars(function(i){t.push(i.value)}),t},n={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=e.calculateScaleRange(s(),t,this.fontSize,this.beginAtZero,this.integersOnly);e.extend(this,i)},xLabels:t,font:e.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.barShowStroke?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&e.extend(n,{calculateYRange:e.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new this.ScaleClass(n)},addData:function(t,i){e.each(t,function(t,e){this.datasets[e].bars.push(new this.BarClass({value:t,label:i,x:this.scale.calculateBarX(this.datasets.length,e,this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[e].strokeColor,fillColor:this.datasets[e].fillColor}))
},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),e.each(this.datasets,function(t){t.bars.shift()},this),this.update()},reflow:function(){e.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});var t=e.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();this.chart.ctx;this.scale.draw(i),e.each(this.datasets,function(t,s){e.each(t.bars,function(t,e){t.hasValue()&&(t.base=this.scale.endPoint,t.transition({x:this.scale.calculateBarX(this.datasets.length,s,e),y:this.scale.calculateY(t.value),width:this.scale.calculateBarWidth(this.datasets.length)},i).draw())},this)},this)}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Doughnut",defaults:s,initialize:function(t){this.segments=[],this.outerRadius=(e.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,this.SegmentArc=i.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2}),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];e.each(this.segments,function(t){t.restore(["fillColor"])}),e.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.calculateTotal(t),e.each(t,function(t,i){this.addData(t,i,!0)},this),this.render()},getSegmentsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.segments,function(t){t.inRange(s.x,s.y)&&i.push(t)},this),i},addData:function(t,i,e){var s=i||this.segments.length;this.segments.splice(s,0,new this.SegmentArc({value:t.value,outerRadius:this.options.animateScale?0:this.outerRadius,innerRadius:this.options.animateScale?0:this.outerRadius/100*this.options.percentageInnerCutout,fillColor:t.color,highlightColor:t.highlight||t.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:1.5*Math.PI,circumference:this.options.animateRotate?0:this.calculateCircumference(t.value),label:t.label})),e||(this.reflow(),this.update())},calculateCircumference:function(t){return 2*Math.PI*(Math.abs(t)/this.total)},calculateTotal:function(t){this.total=0,e.each(t,function(t){this.total+=Math.abs(t.value)},this)},update:function(){this.calculateTotal(this.segments),e.each(this.activeElements,function(t){t.restore(["fillColor"])}),e.each(this.segments,function(t){t.save()}),this.render()},removeData:function(t){var i=e.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},reflow:function(){e.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.outerRadius=(e.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,e.each(this.segments,function(t){t.update({outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout})},this)},draw:function(t){var i=t?t:1;this.clear(),e.each(this.segments,function(t,e){t.transition({circumference:this.calculateCircumference(t.value),outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout},i),t.endAngle=t.startAngle+t.circumference,t.draw(),0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle)},this)}}),i.types.Doughnut.extend({name:"Pie",defaults:e.merge(s,{percentageInnerCutout:0})})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,bezierCurve:!0,bezierCurveTension:.4,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Line",defaults:s,initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx,inRange:function(t){return Math.pow(t-this.x,2)<Math.pow(this.radius+this.hitDetectionRadius,2)}}),this.datasets=[],this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(s),e.each(i.data,function(e,n){s.points.push(new this.PointClass({value:e,label:t.labels[n],datasetLabel:i.label,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this),this.buildScale(t.labels),this.eachPoints(function(t,i){e.extend(t,{x:this.scale.calculateX(i),y:this.scale.endPoint}),t.save()},this)},this),this.render()},update:function(){this.scale.update(),e.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachPoints(function(t){t.save()}),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.datasets,function(t){e.each(t.points,function(t){t.inRange(s.x,s.y)&&i.push(t)})},this),i},buildScale:function(t){var s=this,n=function(){var t=[];return s.eachPoints(function(i){t.push(i.value)}),t},o={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=e.calculateScaleRange(n(),t,this.fontSize,this.beginAtZero,this.integersOnly);e.extend(this,i)},xLabels:t,font:e.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.pointDotRadius+this.options.pointDotStrokeWidth,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&e.extend(o,{calculateYRange:e.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new i.Scale(o)},addData:function(t,i){e.each(t,function(t,e){this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:this.scale.calculateX(this.scale.valuesCount+1),y:this.scale.endPoint,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),e.each(this.datasets,function(t){t.points.shift()},this),this.update()},reflow:function(){var t=e.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();var s=this.chart.ctx,n=function(t){return null!==t.value},o=function(t,i,s){return e.findNextWhere(i,n,s)||t},a=function(t,i,s){return e.findPreviousWhere(i,n,s)||t};this.scale.draw(i),e.each(this.datasets,function(t){var h=e.where(t.points,n);e.each(t.points,function(t,e){t.hasValue()&&t.transition({y:this.scale.calculateY(t.value),x:this.scale.calculateX(e)},i)},this),this.options.bezierCurve&&e.each(h,function(t,i){var s=i>0&&i<h.length-1?this.options.bezierCurveTension:0;t.controlPoints=e.splineCurve(a(t,h,i),t,o(t,h,i),s),t.controlPoints.outer.y>this.scale.endPoint?t.controlPoints.outer.y=this.scale.endPoint:t.controlPoints.outer.y<this.scale.startPoint&&(t.controlPoints.outer.y=this.scale.startPoint),t.controlPoints.inner.y>this.scale.endPoint?t.controlPoints.inner.y=this.scale.endPoint:t.controlPoints.inner.y<this.scale.startPoint&&(t.controlPoints.inner.y=this.scale.startPoint)},this),s.lineWidth=this.options.datasetStrokeWidth,s.strokeStyle=t.strokeColor,s.beginPath(),e.each(h,function(t,i){if(0===i)s.moveTo(t.x,t.y);else if(this.options.bezierCurve){var e=a(t,h,i);s.bezierCurveTo(e.controlPoints.outer.x,e.controlPoints.outer.y,t.controlPoints.inner.x,t.controlPoints.inner.y,t.x,t.y)}else s.lineTo(t.x,t.y)},this),s.stroke(),this.options.datasetFill&&h.length>0&&(s.lineTo(h[h.length-1].x,this.scale.endPoint),s.lineTo(h[0].x,this.scale.endPoint),s.fillStyle=t.fillColor,s.closePath(),s.fill()),e.each(h,function(t){t.draw()})},this)}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBeginAtZero:!0,scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,scaleShowLine:!0,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"PolarArea",defaults:s,initialize:function(t){this.segments=[],this.SegmentArc=i.Arc.extend({showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,ctx:this.chart.ctx,innerRadius:0,x:this.chart.width/2,y:this.chart.height/2}),this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,lineArc:!0,width:this.chart.width,height:this.chart.height,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,valuesCount:t.length}),this.updateScaleRange(t),this.scale.update(),e.each(t,function(t,i){this.addData(t,i,!0)},this),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];e.each(this.segments,function(t){t.restore(["fillColor"])}),e.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.render()},getSegmentsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.segments,function(t){t.inRange(s.x,s.y)&&i.push(t)},this),i},addData:function(t,i,e){var s=i||this.segments.length;this.segments.splice(s,0,new this.SegmentArc({fillColor:t.color,highlightColor:t.highlight||t.color,label:t.label,value:t.value,outerRadius:this.options.animateScale?0:this.scale.calculateCenterOffset(t.value),circumference:this.options.animateRotate?0:this.scale.getCircumference(),startAngle:1.5*Math.PI})),e||(this.reflow(),this.update())},removeData:function(t){var i=e.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},calculateTotal:function(t){this.total=0,e.each(t,function(t){this.total+=t.value},this),this.scale.valuesCount=this.segments.length},updateScaleRange:function(t){var i=[];e.each(t,function(t){i.push(t.value)});var s=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,s,{size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2})},update:function(){this.calculateTotal(this.segments),e.each(this.segments,function(t){t.save()}),this.reflow(),this.render()},reflow:function(){e.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.updateScaleRange(this.segments),this.scale.update(),e.extend(this.scale,{xCenter:this.chart.width/2,yCenter:this.chart.height/2}),e.each(this.segments,function(t){t.update({outerRadius:this.scale.calculateCenterOffset(t.value)})},this)},draw:function(t){var i=t||1;this.clear(),e.each(this.segments,function(t,e){t.transition({circumference:this.scale.getCircumference(),outerRadius:this.scale.calculateCenterOffset(t.value)},i),t.endAngle=t.startAngle+t.circumference,0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle),t.draw()},this),this.scale.draw()}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers;i.Type.extend({name:"Radar",defaults:{scaleShowLine:!0,angleShowLineOut:!0,scaleShowLabels:!1,scaleBeginAtZero:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:10,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx}),this.datasets=[],this.buildScale(t),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(s),e.each(i.data,function(e,n){var o;this.scale.animation||(o=this.scale.getPointPosition(n,this.scale.calculateCenterOffset(e))),s.points.push(new this.PointClass({value:e,label:t.labels[n],datasetLabel:i.label,x:this.options.animation?this.scale.xCenter:o.x,y:this.options.animation?this.scale.yCenter:o.y,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this)},this),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=e.getRelativePosition(t),s=e.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},i),n=2*Math.PI/this.scale.valuesCount,o=Math.round((s.angle-1.5*Math.PI)/n),a=[];return(o>=this.scale.valuesCount||0>o)&&(o=0),s.distance<=this.scale.drawingArea&&e.each(this.datasets,function(t){a.push(t.points[o])}),a},buildScale:function(t){this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:this.options.angleShowLineOut?this.options.angleLineWidth:0,pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:t.labels,valuesCount:t.datasets[0].data.length}),this.scale.setScaleSize(),this.updateScaleRange(t.datasets),this.scale.buildYLabels()},updateScaleRange:function(t){var i=function(){var i=[];return e.each(t,function(t){t.data?i=i.concat(t.data):e.each(t.points,function(t){i.push(t.value)})}),i}(),s=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,s)},addData:function(t,i){this.scale.valuesCount++,e.each(t,function(t,e){var s=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(t));this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:s.x,y:s.y,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.labels.push(i),this.reflow(),this.update()},removeData:function(){this.scale.valuesCount--,this.scale.labels.shift(),e.each(this.datasets,function(t){t.points.shift()},this),this.reflow(),this.update()},update:function(){this.eachPoints(function(t){t.save()}),this.reflow(),this.render()},reflow:function(){e.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2}),this.updateScaleRange(this.datasets),this.scale.setScaleSize(),this.scale.buildYLabels()},draw:function(t){var i=t||1,s=this.chart.ctx;this.clear(),this.scale.draw(),e.each(this.datasets,function(t){e.each(t.points,function(t,e){t.hasValue()&&t.transition(this.scale.getPointPosition(e,this.scale.calculateCenterOffset(t.value)),i)},this),s.lineWidth=this.options.datasetStrokeWidth,s.strokeStyle=t.strokeColor,s.beginPath(),e.each(t.points,function(t,i){0===i?s.moveTo(t.x,t.y):s.lineTo(t.x,t.y)},this),s.closePath(),s.stroke(),s.fillStyle=t.fillColor,s.fill(),e.each(t.points,function(t){t.hasValue()&&t.draw()})},this)}})}.call(this);


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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

module.exports = __webpack_require__(/*! C:\Projects\NodeJS\Angular6\ng6AdminLTE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map