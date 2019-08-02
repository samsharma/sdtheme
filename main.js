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

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-us-page \">\n    <div class=\"bgImage\">\n  <div class=\"inner-banner about-banner-page\"  >\n\n    <div class=\"container\">\n      <div class=\"banner-title\">\n\n        <h2>{{pageTitle}}</h2>\n\n\n      </div>\n    </div>\n  </div>\n\n\n\n  </div>\n\n  <div class=\"container inner-page-container\">\n    <h2>{{text}}</h2>\n    <h3>The hero's birthday is {{ birthday | date:format | uppercase }}</h3>\n\n\n    <button (click)=\"toggleFormat()\" class=\"btn btn-dark\">Toggle Format</button>\n\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: ExponentialStrengthPipe, AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExponentialStrengthPipe", function() { return ExponentialStrengthPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ExponentialStrengthPipe = /** @class */ (function () {
    function ExponentialStrengthPipe() {
    }
    ExponentialStrengthPipe.prototype.transform = function (value, exponent) {
        var exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    };
    ExponentialStrengthPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'exponentialStrength' })
    ], ExponentialStrengthPipe);
    return ExponentialStrengthPipe;
}());

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        this.birthday = new Date(2019, 4, 22);
        this.toggle = true; // start with true == shortDate
        this.pageTitle = 'This is about us page';
        this.text = 'This is about us page';
        this.bannerBg = '../assets/images/about-us.jpg';
    }
    Object.defineProperty(AboutUsComponent.prototype, "format", {
        get: function () { return this.toggle ? 'shortDate' : 'fullDate'; },
        enumerable: true,
        configurable: true
    });
    AboutUsComponent.prototype.toggleFormat = function () { this.toggle = !this.toggle; };
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: ["div.bgImage {background-image:url(../assets/images/about-us.jpg)}", __webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/admin/userlist/userlist.component.ts");





var routes = [
    {
        path: 'admin',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            {
                path: 'userlist',
                component: _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_4__["UserlistComponent"],
            }
        ]
    },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/admin/userlist/userlist.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");






var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_4__["UserlistComponent"], _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"]
            ],
            exports: [],
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"loginpage\">\n  <div class=\"container inner-page-container\">\n\n      <div class=\"row\">\n          <div class=\" col-sm-12 col-md-4 offset-md-1 col-sm-offset-0 bg-whight login-form text-center\">\n              <h2 class=\"text-center\">SD Theme </h2>\n              <small>Login Form</small>\n              <form class=\"login-form\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\" class=\"text-uppercase\">Username</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\" class=\"text-uppercase\">Password</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\"\">\n        </div>\n\n\n\n        <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-dark btn-lg btn-block\" routerLink=\"/admin/userlist\">Submit</button>\n        </div>\n        <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" class=\"form-check-input\">\n              <small>Remember Me</small>\n            </label>\n\n          </div>\n      </form>\n      <div class=\"copy-text\">Created with <i class=\"fa fa-heart\"></i> by SD Theme</div>\n          </div>\n          <div class=\"col-sm-12 col-md-6 bg-whight login-img\">\n\n            <img src=\"{{loginImg}}\" alt=\"\" class=img-fluid>\n            <h2>{{userTitle}}</h2>\n\n        </div>\n      </div>\n\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/admin/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginpage {\n  background: #1890b6;\n  background: linear-gradient(90deg, #1890b6 0%, #064350 100%); }\n  .loginpage .bg-whight {\n    background: #FFF; }\n  .loginpage .bg-whight.login-form {\n      padding: 50px 25px; }\n  .loginpage .bg-whight.login-img {\n      padding: 0px;\n      position: relative; }\n  .loginpage .bg-whight.login-img img {\n        min-height: 100%; }\n  .loginpage .bg-whight.login-img:after {\n        content: \"\";\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        bottom: 0px;\n        right: 0px;\n        background: #833ab4;\n        background: linear-gradient(90deg, rgba(131, 58, 180, 0.9) 0%, rgba(253, 29, 29, 0.9) 50%, rgba(252, 176, 69, 0.9) 100%);\n        z-index: 2; }\n  .loginpage .bg-whight.login-img h2 {\n        color: #FFF;\n        position: absolute;\n        top: 50%;\n        margin-top: -50px;\n        z-index: 3;\n        padding: 15px;\n        text-align: center;\n        width: 100%; }\n  .loginpage form.login-form {\n    margin: 35px 0; }\n  .loginpage .form-control {\n    border-top: 0px;\n    border-left: 0px;\n    border-right: 0px; }\n  .loginpage .form-control:focus {\n      box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbG9naW4vRTpcXGFuZ3VsYXItcHJvamVjdFxcbXlmaXJzdC9zcmNcXGFwcFxcYWRtaW5cXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUEyQjtFQUMzQiw0REFBK0UsRUFBQTtFQUZqRjtJQUlZLGdCQUFnQixFQUFBO0VBSjVCO01BTWMsa0JBQWlCLEVBQUE7RUFOL0I7TUFRRSxZQUFZO01BQ1osa0JBQWtCLEVBQUE7RUFUcEI7UUFVTyxnQkFBZ0IsRUFBQTtFQVZ2QjtRQVlJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCxXQUFXO1FBQ1gsVUFBVTtRQUNWLG1CQUEyQjtRQUMzQix3SEFBK0c7UUFDL0csVUFBVSxFQUFBO0VBcEJkO1FBdUJJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixXQUFXLEVBQUE7RUE5QmY7SUFrQ2lCLGNBQWMsRUFBQTtFQWxDL0I7SUFvQ2UsZUFBYztJQUFHLGdCQUFlO0lBQUcsaUJBQWdCLEVBQUE7RUFwQ2xFO01Bc0NFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5wYWdle1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNCwxNDQsMTgyKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjQsMTQ0LDE4MiwxKSAwJSwgcmdiYSg2LDY3LDgwLDEpIDEwMCUpO1xyXG5cclxuLmJnLXdoaWdodHsgYmFja2dyb3VuZDogI0ZGRjtcclxuXHJcbiYubG9naW4tZm9ybXsgcGFkZGluZzo1MHB4IDI1cHg7fVxyXG4mLmxvZ2luLWltZ3tcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGltZ3sgbWluLWhlaWdodDogMTAwJTt9XHJcbiAgJjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMzEsNTgsMTgwKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMzEsNTgsMTgwLDAuOSkgMCUsIHJnYmEoMjUzLDI5LDI5LDAuOSkgNTAlLCByZ2JhKDI1MiwxNzYsNjksMC45KSAxMDAlKTtcclxuICAgIHotaW5kZXg6IDI7O1xyXG4gIH1cclxuICBoMntcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbn1cclxuZm9ybS5sb2dpbi1mb3JteyBtYXJnaW46IDM1cHggMDt9XHJcblxyXG4uZm9ybS1jb250cm9seyBib3JkZXItdG9wOjBweDsgIGJvcmRlci1sZWZ0OjBweDsgIGJvcmRlci1yaWdodDowcHg7XHJcbiY6Zm9jdXN7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG59XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.loginImg = '../assets/images/login-bg.jpg';
        this.userTitle = 'Mastermind Better.  Succeed Together';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/admin/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/userlist/userlist.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/userlist/userlist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  userlist works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/userlist/userlist.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/userlist/userlist.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/userlist/userlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/userlist/userlist.component.ts ***!
  \******************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserlistComponent = /** @class */ (function () {
    function UserlistComponent() {
    }
    UserlistComponent.prototype.ngOnInit = function () {
    };
    UserlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! ./userlist.component.html */ "./src/app/admin/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.scss */ "./src/app/admin/userlist/userlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let alert of alerts\" class=\"animated bounceInRight\">\n  <ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">{{ alert.message }}</ngb-alert>\n</p>\n<p>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n</p>\n"

/***/ }),

/***/ "./src/app/alert/alert.component.scss":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  border-radius: 0px;\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxlcnQvRTpcXGFuZ3VsYXItcHJvamVjdFxcbXlmaXJzdC9zcmNcXGFwcFxcYWxlcnRcXGFsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUUsa0JBQWtCO0VBQUUsMEJBQTBCO0VBQUUsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7Ym9yZGVyLXJhZGl1czogMHB4OyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDsgLW1vei1ib3JkZXItcmFkaXVzOiAwcHg7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.alerts = [{
                type: 'success',
                message: 'This is an success alert',
            }, {
                type: 'info',
                message: 'This is an info alert',
            }, {
                type: 'warning',
                message: 'This is a warning alert',
            }, {
                type: 'danger',
                message: 'This is a danger alert',
            }, {
                type: 'primary',
                message: 'This is a primary alert',
            }, {
                type: 'secondary',
                message: 'This is a secondary alert',
            }, {
                type: 'light',
                message: 'This is a light alert',
            }, {
                type: 'dark',
                message: 'This is a dark alert',
            }
        ];
        this.reset();
    }
    AlertComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    AlertComponent.prototype.reset = function () {
        this.alerts = Array.from(this.alerts);
    };
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-closeable',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/alert/alert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/post-create/post.create.component */ "./src/app/posts/post-create/post.create.component.ts");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _pagenot_fount_pagenot_fount_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagenot-fount/pagenot-fount.component */ "./src/app/pagenot-fount/pagenot-fount.component.ts");









var routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"] },
    { path: 'help', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_6__["PostCreateComponent"] },
    { path: 'login', component: _admin_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: '***', component: _pagenot_fount_pagenot_fount_component__WEBPACK_IMPORTED_MODULE_8__["PagenotFountComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<!-- <app-navbar></app-navbar>\n<app-carousel></app-carousel>\n<div class='container'>\n<app-card></app-card> -->\n<!--\n  <h1>hello</h1>\n<app-post-create></app-post-create>\n<p>\n    <ngb-alert [dismissible]=\"false\">\n      <strong>Warning!</strong> Better check yourself, you're not looking too good.\n    </ngb-alert>\n  </p>\n\n</div> -->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  transition: all 350ms ease; }\n  body .carousel-inner .carousel-item img {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXGFuZ3VsYXItcHJvamVjdFxcbXlmaXJzdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCLEVBQUE7RUFENUI7SUFNVyxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlO1xyXG5cclxuICAuY2Fyb3VzZWwtaW5uZXJ7XHJcblxyXG4gICAgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgICBpbWd7IHdpZHRoOiAxMDAlO31cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myfirst';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts/post-create/post.create.component */ "./src/app/posts/post-create/post.create.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _pagenot_fount_pagenot_fount_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pagenot-fount/pagenot-fount.component */ "./src/app/pagenot-fount/pagenot-fount.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_about_home_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home-about/home-about.component */ "./src/app/home-about/home-about.component.ts");
/* harmony import */ var ng2_owl_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-owl-carousel */ "./node_modules/ng2-owl-carousel/index.js");
/* harmony import */ var ng2_owl_carousel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_owl_carousel__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _owlslider_owlslider_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./owlslider/owlslider.component */ "./src/app/owlslider/owlslider.component.ts");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/testimonial/testimonial.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/login/login.component */ "./src/app/admin/login/login.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_8__["PostCreateComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__["AboutUsComponent"],
                _pagenot_fount_pagenot_fount_component__WEBPACK_IMPORTED_MODULE_14__["PagenotFountComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"],
                _home_about_home_about_component__WEBPACK_IMPORTED_MODULE_17__["HomeAboutComponent"],
                _owlslider_owlslider_component__WEBPACK_IMPORTED_MODULE_19__["OwlsliderComponent"],
                _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_20__["TestimonialComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_21__["BlogComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_24__["ContactUsComponent"],
                _admin_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_22__["AngularFontAwesomeModule"],
                ng2_owl_carousel__WEBPACK_IMPORTED_MODULE_18__["OwlModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"blogbox\">\n<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-sm-12 text-center headingbox\">\n    <h2>{{blogHeading}}</h2>\n    <p>{{blogSubHeading}}</p>\n  </div>\n<div class=\"col-sm-12 col-md-4\" *ngFor=\"let blogItem of blogList\">\n  <div class=\"blog-data-holder\">\n  <img src=\"{{blogItem.blogImg}}\" class=img-fluid>\n<h3>{{blogItem.blogTitle}}</h3>\n<p>{{blogItem.blogContant}}</p>\n<a href=\"#\" class=\"btn btnMore\"> <span>Read More</span></a>\n</div>\n</div>\n</div>\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.scss":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*var*/\n/*end of var*/\n.blogbox {\n  padding: 100px 0;\n  background: #efefef; }\n.blogbox .headingbox {\n    margin-bottom: 55px; }\n.blogbox .blog-data-holder {\n    background: #FFF;\n    padding: 30px;\n    box-shadow: 0px 23px 49px 0px rgba(61, 82, 96, 0.15);\n    margin-bottom: 15px; }\n.blogbox .blog-data-holder h3 {\n      margin: 15px 0 10px 0; }\n.blogbox .blog-data-holder p {\n      line-height: 100%; }\n.blogbox .blog-data-holder .btnMore {\n      background: #eff1f4;\n      color: #bfbfbf;\n      padding: 5px 15px;\n      border-radius: 35px;\n      transition: all 0.5s; }\n.blogbox .blog-data-holder .btnMore span {\n        cursor: pointer;\n        display: inline-block;\n        position: relative;\n        transition: 0.5s; }\n.blogbox .blog-data-holder .btnMore span:after {\n          content: '\\00bb';\n          position: absolute;\n          opacity: 0;\n          top: -12px;\n          right: -20px;\n          transition: 0.5s;\n          font-size: 28px; }\n.blogbox .blog-data-holder .btnMore:hover {\n        background: rgba(9, 33, 56, 0.72); }\n.blogbox .blog-data-holder .btnMore:hover span {\n        padding-right: 25px;\n        color: #FFF; }\n.blogbox .blog-data-holder .btnMore:hover span:after {\n        opacity: 1;\n        right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9FOlxcYW5ndWxhci1wcm9qZWN0XFxteWZpcnN0L3NyY1xcYXBwXFxibG9nXFxibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQUE7QUFLQSxhQUFBO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBTmlCLEVBQUE7QUFJbkI7SUFHZSxtQkFBbUIsRUFBQTtBQUhsQztJQUtJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0RBQW9EO0lBQ3BELG1CQUFtQixFQUFBO0FBUnZCO01BVUkscUJBQXFCLEVBQUE7QUFWekI7TUFZSyxpQkFBaUIsRUFBQTtBQVp0QjtNQWFZLG1CQUFrQjtNQUFFLGNBQWE7TUFBRSxpQkFBaUI7TUFBRSxtQkFBbUI7TUFBSSxvQkFBb0IsRUFBQTtBQWI3RztRQWVNLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGdCQUFnQixFQUFBO0FBbEJ0QjtVQW9CUSxnQkFBZ0I7VUFDaEIsa0JBQWtCO1VBQ2xCLFVBQVU7VUFDVixVQUFVO1VBQ1YsWUFBWTtVQUNaLGdCQUFnQjtVQUNoQixlQUFlLEVBQUE7QUExQnZCO1FBOEJNLGlDQUE2QixFQUFBO0FBOUJuQztRQWlDTSxtQkFBbUI7UUFDbkIsV0FBVyxFQUFBO0FBbENqQjtRQXFDTSxVQUFVO1FBQ1YsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyp2YXIqL1xyXG5cclxuJGdyZXljb2xvcjogI2VmZWZlZjtcclxuXHJcblxyXG4vKmVuZCBvZiB2YXIqL1xyXG4uYmxvZ2JveHtcclxuICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gIGJhY2tncm91bmQ6JGdyZXljb2xvcjtcclxuICAuaGVhZGluZ2JveHsgbWFyZ2luLWJvdHRvbTogNTVweDt9XHJcbiAgLmJsb2ctZGF0YS1ob2xkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAyM3B4IDQ5cHggMHB4IHJnYmEoNjEsIDgyLCA5NiwgMC4xNSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGgze1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMTBweCAwO1xyXG4gIH1cclxuICBweyBsaW5lLWhlaWdodDogMTAwJTt9XHJcbiAgLmJ0bk1vcmV7IGJhY2tncm91bmQ6I2VmZjFmNDsgY29sb3I6I2JmYmZiZjsgcGFkZGluZzogNXB4IDE1cHg7IGJvcmRlci1yYWRpdXM6IDM1cHg7ICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICBzcGFuIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJ1xcMDBiYic7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdG9wOiAtMTJweDtcclxuICAgICAgICByaWdodDogLTIwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoOSwzMyw1NiwwLjcyKTtcclxuICAgIH1cclxuICAgICY6aG92ZXIgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciBzcGFuOmFmdGVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
        this.blogHeading = 'Latest Blog';
        this.blogSubHeading = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
        this.blogList = [
            {
                blogTitle: 'Blog title first',
                blogImg: '../assets/images/blog01.jpg',
                blogContant: 'Placeat ea unde nobis quia occaecati repudiandae',
            },
            {
                blogTitle: 'Blog title second',
                blogImg: '../assets/images/blog02.jpg',
                blogContant: 'Placeat ea unde nobis quia occaecati repudiandae',
            },
            {
                blogTitle: 'Blog title three',
                blogImg: '../assets/images/blog03.jpg',
                blogContant: 'Placeat ea unde nobis quia occaecati repudiandae',
            },
        ];
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/blog/blog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container cardbox\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h1 class=\"headingbox text-center\">Our Services\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit\n\n            </p>\n        </h1>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4\" *ngFor=\"let card of cardbox\">\n    <div class=\"card\">\n      <img class=\"card-img-top\" src=\"{{card.srcn}}\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title\">{{card.titleText}}</h3>\n        <p class=\"card-text\">{{card.cardPtext}}</p>\n      </div>\n      <div class=\"card-footer bg-primary \">\n        <small class=\"text-white\">Last updated {{card.updatedTime}} mins ago</small>\n\n      </div>\n    </div>\n  </div>\n  </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardbox {\n  margin: 100px auto; }\n  .cardbox .card {\n    margin-bottom: 15px; }\n  .cardbox .card .card-footer {\n      background-color: #304458 !important; }\n  @media (max-width: 767px) {\n    .cardbox {\n      margin-bottom: 25px; } }\n  .cardbox .headingbox {\n    margin-bottom: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9FOlxcYW5ndWxhci1wcm9qZWN0XFxteWZpcnN0L3NyY1xcYXBwXFxjYXJkXFxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCLEVBQUE7RUFEbkI7SUFHUyxtQkFBbUIsRUFBQTtFQUg1QjtNQUtDLG9DQUFvQyxFQUFBO0VBR25DO0lBUkY7TUFTSSxtQkFBa0IsRUFBQSxFQUdyQjtFQVpEO0lBV2UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZGJveHtcclxuICBtYXJnaW46MTAwcHggYXV0bztcclxuXHJcbiAgLmNhcmR7IG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgLmNhcmQtZm9vdGVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIzMwNDQ1OCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjI1cHg7XHJcbiAgfVxyXG4gIC5oZWFkaW5nYm94eyBtYXJnaW4tYm90dG9tOiA1MHB4O31cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.cardbox = [
            {
                srcn: '../assets/images/images01.jpg',
                titleText: 'Random first Card',
                cardPtext: 'This is a wider card with supporting text below as a content is a little bit longer',
                updatedTime: '15'
            },
            {
                srcn: '../assets/images/images02.jpg',
                titleText: 'Random first Card',
                cardPtext: 'This is a wider card with supporting text below as a content is a little bit longer',
                updatedTime: '10'
            },
            {
                srcn: '../assets/images/images03.jpg',
                titleText: 'Random first Card',
                cardPtext: 'This is a wider card with supporting text below as a content is a little bit longer',
                updatedTime: '05'
            }
        ];
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"homepageslider\">\n<ngb-carousel *ngIf=\"images\" class=\" carousel-fade\">\n\n  <ng-template ngbSlide *ngFor=\"let img of images\">\n    <img src=\"{{img.srcn}}\" alt=\"{{img.altText}}\">\n    <div class=\"carousel-caption\">\n\n      <h3>{{img.htxt}}</h3>\n      <p>{{img.ptxt}}</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n</section>\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.scss":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngb-carousel img {\n  width: 100%; }\n\nngb-carousel .carousel-item {\n  /* Force to always be block */\n  display: block !important;\n  z-index: 1 !important;\n  position: absolute !important;\n  -webkit-transform: translateX(100%) !important;\n          transform: translateX(100%) !important;\n  opacity: 0 !important;\n  transition: all  0.5s !important;\n  visibility: hidden !important; }\n\nngb-carousel .carousel-item.active {\n    position: relative !important;\n    -webkit-transform: translateX(0) !important;\n            transform: translateX(0) !important;\n    visibility: visible  !important;\n    opacity: 1 !important;\n    display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvRTpcXGFuZ3VsYXItcHJvamVjdFxcbXlmaXJzdC9zcmNcXGFwcFxcY2Fyb3VzZWxcXGNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ08sV0FBVyxFQUFBOztBQURsQjtFQU1FLDZCQUFBO0VBQ0EseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsOENBQXNDO1VBQXRDLHNDQUFzQztFQUN0QyxxQkFBcUI7RUFDckIsZ0NBQStCO0VBQy9CLDZCQUE2QixFQUFBOztBQWIvQjtJQW1CRSw2QkFBNkI7SUFDN0IsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbm5nYi1jYXJvdXNlbHtcclxuICBpbWd7IHdpZHRoOiAxMDAlO31cclxuXHJcblxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIC8qIEZvcmNlIHRvIGFsd2F5cyBiZSBibG9jayAqL1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOmFsbCAgMC41cyAhaW1wb3J0YW50O1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG5cclxuXHJcblxyXG5cclxuJi5hY3RpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSAhaW1wb3J0YW50O1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGUgICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG59XHJcblxyXG5cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config) {
        // images = [1].map(() => `../assets/images/images-img3.jpg`);
        this.images = [
            {
                srcn: '../assets/images/images-img1.jpg',
                altText: 'Random first slide',
                htxt: '10 seconds between slides...',
                ptxt: 'This carousel uses customized default values.',
            },
            {
                srcn: '../assets/images/images-img2.jpg',
                altText: 'Random first slide',
                htxt: '10 seconds between slides...',
                ptxt: 'This carousel uses customized default values.',
            },
            {
                srcn: '../assets/images/images-img3.jpg',
                altText: 'Random first slide',
                htxt: '10 seconds between slides...',
                ptxt: 'This carousel uses customized default values.',
            },
            {
                srcn: '../assets/images/images-img2.jpg',
                altText: 'Random first slide',
                htxt: '10 seconds between slides...',
                ptxt: 'This carousel uses customized default values.',
            },
        ];
        // customize default values of carousels used by this component tree
        config.interval = 5000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/carousel/carousel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"contact-us-page \">\n    <div class=\"bgImage\">\n  <div class=\"inner-banner about-banner-page\">\n\n    <div class=\"container\">\n      <div class=\"banner-title\">\n\n        {{pageTitle}}\n      </div>\n    </div>\n  </div>\n  </div>\n<div class='container inner-page-container'>\n<P>{{text}}</P>\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
        this.pageTitle = 'This is contact us page';
        this.text = 'This is contact us page';
        this.bannerBg = '../assets/images/about-us.jpg';
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: ["div.bgImage {background-image:url(../assets/images/about-us.jpg)}", __webpack_require__(/*! ./contact-us.component.scss */ "./src/app/contact-us/contact-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"section footer-classic context-dark bg-image\" style=\"background: #2d3246;\">\n    <div class=\"container\">\n      <div class=\"row row-30\">\n        <div class=\"col-md-4 col-xl-5\">\n          <div class=\"pr-xl-4\"><a class=\"bottom-logo\" href=\"index.html\">SD Theme</a>\n            <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>\n            <!-- Rights-->\n            <p class=\"rights\"><span>©  </span><span class=\"copyright-year\">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <h5>Contacts</h5>\n          <ul class=\"contact-list\">\n            <li>Address:</li>\n            <li>798 South Park Avenue, Jaipur, Raj</li>\n          </ul>\n          <ul class=\"contact-list\">\n            <li>email:</li>\n            <li><a href=\"mailto:#\">dkstudioin@gmail.com</a></li>\n          </ul>\n          <ul class=\"contact-list\">\n            <li>phones:</li>\n            <li><a href=\"tel:#\">+91 7568543012</a> <span>or</span> <a href=\"tel:#\">+91 9571195353</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-4 col-xl-3\">\n          <h5>Links</h5>\n          <ul class=\"nav-list\">\n            <li><a href=\"#\">About</a></li>\n            <li><a href=\"#\">Projects</a></li>\n            <li><a href=\"#\">Blog</a></li>\n            <li><a href=\"#\">Contacts</a></li>\n            <li><a href=\"#\">Pricing</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"row no-gutters social-container\">\n      <div class=\"col\"><a class=\"social-inner\" target=\"_blank\" href=\"https://www.facebook.com/\"><span class=\"fa fa-facebook\"></span><span>Facebook</span></a></div>\n      <div class=\"col\"><a class=\"social-inner\" target=\"_blank\" href=\"https://www.instagram.com/\"><span class=\"fa fa-instagram\"></span><span>instagram</span></a></div>\n      <div class=\"col\"><a class=\"social-inner\" target=\"_blank\" href=\"https://twitter.com/\"><span class=\"fa fa-twitter\"></span><span>twitter</span></a></div>\n      <div class=\"col\"><a class=\"social-inner\" target=\"_blank\" href=\"https://www.youtube.com/\"><span class=\"fa fa-youtube-play\"></span><span>google</span></a></div>\n    </div>\n  </footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 100px 0 0;\n  line-height: 100%; }\n  footer .bottom-logo {\n    font-size: 34px;\n    color: #FFF;\n    margin-bottom: 15px;\n    display: inline-block;\n    line-height: 100%; }\n  footer p {\n    color: #FFF;\n    line-height: 150%; }\n  footer ul {\n    margin: 0px;\n    padding: 0px; }\n  footer ul li {\n      list-style: none;\n      color: #FFF;\n      font-size: 146x;\n      line-height: 150%; }\n  footer ul li a {\n        color: #FFF; }\n  footer h5 {\n    font-size: 24px;\n    font-weight: 700;\n    color: #FFF;\n    margin-bottom: 15px; }\n  footer .social-container {\n    margin-top: 50px;\n    border-top: solid 1px #CCC; }\n  footer .social-container .social-inner {\n      display: block;\n      padding: 25px;\n      text-align: center; }\n  footer .social-container .social-inner span {\n        color: #FFF;\n        font-size: 24px; }\n  footer .social-container .social-inner:hover {\n        text-decoration: none; }\n  footer .social-container .social-inner:hover span {\n          color: yellow; }\n  footer .social-container .col {\n      border-right: solid 1px #CCC;\n      text-align: center; }\n  footer .social-container .col:last-child {\n        border-right: none; }\n  footer .social-container .col .fa {\n        font-size: 36px; }\n  footer .social-container .col span:last-child {\n        display: block;\n        margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0U6XFxhbmd1bGFyLXByb2plY3RcXG15Zmlyc3Qvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0VBRm5CO0lBR2dCLGVBQWU7SUFBRSxXQUFXO0lBQUUsbUJBQW1CO0lBQUUscUJBQXFCO0lBQU0saUJBQWlCLEVBQUE7RUFIL0c7SUFJSyxXQUFXO0lBQUcsaUJBQWlCLEVBQUE7RUFKcEM7SUFNSSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBUGhCO01BU00sZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUFadkI7UUFjUSxXQUFXLEVBQUE7RUFkbkI7SUFtQkksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUF0QnZCO0lBeUJLLGdCQUFnQjtJQUNoQiwwQkFBMEIsRUFBQTtFQTFCL0I7TUE2Qk0sY0FBYztNQUNkLGFBQVk7TUFDWixrQkFBa0IsRUFBQTtFQS9CeEI7UUFpQ1ksV0FBVztRQUFFLGVBQWUsRUFBQTtFQWpDeEM7UUFvQ1EscUJBQXFCLEVBQUE7RUFwQzdCO1VBcUNZLGFBQWEsRUFBQTtFQXJDekI7TUEyQ00sNEJBQTRCO01BQzVCLGtCQUFrQixFQUFBO0VBNUN4QjtRQThDb0Isa0JBQWlCLEVBQUE7RUE5Q3JDO1FBaURRLGVBQWUsRUFBQTtFQWpEdkI7UUFxRFUsY0FBYztRQUNkLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICBwYWRkaW5nOjEwMHB4IDAgMDtcclxuICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAuYm90dG9tLWxvZ297IGZvbnQtc2l6ZTogMzRweDsgY29sb3I6ICNGRkY7IG1hcmdpbi1ib3R0b206IDE1cHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO31cclxuICBweyBjb2xvcjogI0ZGRjsgIGxpbmUtaGVpZ2h0OiAxNTAlO31cclxuICB1bHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbGl7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICBmb250LXNpemU6IDE0Nng7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gICAgICBhe1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGg1e1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgfVxyXG4gICAuc29jaWFsLWNvbnRhaW5lcntcclxuICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjQ0NDO1xyXG5cclxuICAgIC5zb2NpYWwtaW5uZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nOjI1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIHNwYW57IGNvbG9yOiAjRkZGOyBmb250LXNpemU6IDI0cHg7fVxyXG5cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICBzcGFue2NvbG9yOiB5ZWxsb3c7fVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jb2x7XHJcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNDQ0M7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZHsgYm9yZGVyLXJpZ2h0Om5vbmU7fVxyXG5cclxuICAgICAgLmZhe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgfVxyXG4gICAgICBzcGFue1xyXG4gICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home-about/home-about.component.html":
/*!******************************************************!*\
  !*** ./src/app/home-about/home-about.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home-about-bg\">\n  <div class=\"container-fluid \">\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\"><img src=\"{{homeAboytImg}}\" alt=\"\"  class=\"img-fluid\"></div>\n  <div class=\"col-sm-12 col-md-6 pd-top pd-bottom\">\n    <h3>{{title}}</h3>\n  <P>{{contentText}}</P>\n\n  <P>{{contentText}}</P>\n\n  <P>{{contentText}}</P>\n\n  <P>{{contentText}}</P>\n\n  </div>\n</div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home-about/home-about.component.scss":
/*!******************************************************!*\
  !*** ./src/app/home-about/home-about.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-about-bg {\n  background: #304458; }\n  .home-about-bg .pd-top {\n    padding-top: 55px; }\n  .home-about-bg .pd-bottom {\n    padding-bottom: 25px; }\n  .home-about-bg p {\n    color: #FFF; }\n  .home-about-bg h3 {\n    font-size: 44px;\n    color: #FFF;\n    margin-bottom: 25px; }\n  .home-about-bg img {\n    margin-left: -15px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 720px; }\n  @media only screen and (max-width: 767px) {\n    .home-about-bg {\n      padding-top: 15px;\n      padding-bottom: 15px; }\n      .home-about-bg img {\n        margin-left: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1hYm91dC9FOlxcYW5ndWxhci1wcm9qZWN0XFxteWZpcnN0L3NyY1xcYXBwXFxob21lLWFib3V0XFxob21lLWFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCLEVBQUE7RUFEcEI7SUFFWSxpQkFBZ0IsRUFBQTtFQUY1QjtJQUdlLG9CQUFtQixFQUFBO0VBSGxDO0lBSUssV0FBVyxFQUFBO0VBSmhCO0lBS00sZUFBZTtJQUFFLFdBQVc7SUFBRSxtQkFBbUIsRUFBQTtFQUx2RDtJQU1PLGtCQUFrQjtJQUFFLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFBRSxhQUFhLEVBQUE7RUFDekQ7SUFQRjtNQVNJLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQTtNQVZ4QjtRQVFTLGdCQUFlLEVBQUEsRUFBSSIsImZpbGUiOiJzcmMvYXBwL2hvbWUtYWJvdXQvaG9tZS1hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWFib3V0LWJne1xyXG4gIGJhY2tncm91bmQ6IzMwNDQ1ODtcclxuICAucGQtdG9wIHsgcGFkZGluZy10b3A6NTVweDt9XHJcbiAgLnBkLWJvdHRvbXsgIHBhZGRpbmctYm90dG9tOjI1cHg7fVxyXG4gIHB7IGNvbG9yOiAjRkZGO31cclxuICBoM3sgZm9udC1zaXplOiA0NHB4OyBjb2xvcjogI0ZGRjsgbWFyZ2luLWJvdHRvbTogMjVweDt9XHJcbiAgaW1neyBtYXJnaW4tbGVmdDogLTE1cHg7IG9iamVjdC1maXQ6IGNvdmVyOyBoZWlnaHQ6IDcyMHB4O31cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBpbWd7IG1hcmdpbi1sZWZ0OjBweDsgfVxyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home-about/home-about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-about/home-about.component.ts ***!
  \****************************************************/
/*! exports provided: HomeAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAboutComponent", function() { return HomeAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeAboutComponent = /** @class */ (function () {
    function HomeAboutComponent() {
        this.homeAboytImg = '../assets/images/about-us.jpg';
        this.title = 'This is about us page';
        this.contentText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ';
    }
    HomeAboutComponent.prototype.ngOnInit = function () {
    };
    HomeAboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-about',
            template: __webpack_require__(/*! ./home-about.component.html */ "./src/app/home-about/home-about.component.html"),
            styles: [__webpack_require__(/*! ./home-about.component.scss */ "./src/app/home-about/home-about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeAboutComponent);
    return HomeAboutComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-carousel></app-carousel>\n\n<app-card></app-card>\n\n<app-home-about></app-home-about>\n\n\n<app-blog></app-blog>\n<app-owlslider></app-owlslider>\n\n<app-testimonial></app-testimonial>\n<button (click)=\"toggle()\" id=\"bt\">\n  {{buttonName}}\n</button>\n\n<ng-container *ngIf=\"show\">\n  <div style=\"margin: 0 auto;text-align: left;\">\n      <div>\n          <label>Name:</label>\n          <div><input id=\"tbname\" name=\"yourname\" /></div>\n      </div>\n      <div>\n          <label>Email Address:</label>\n          <div><input name=\"email\" id=\"email\" /></div></div>\n      <div>\n          <label>Additional Information (optional):</label>\n          <div><textarea rows=\"5\" cols=\"46\"></textarea></div>\n\n      </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.show = true;
        this.buttonName = 'Hide';
    }
    HomepageComponent.prototype.toggle = function () {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show) {
            this.buttonName = ("Hide");
        }
        else {
            this.buttonName = ("Show");
        }
    };
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <div class='container'>\n  <a class=\"navbar-brand\" href=\"#\">\n    SD Theme\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\"\n          (click)=\"toggleNavbar($event)\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n  <div class=\"collapse navbar-collapse\"\n       [ngClass]=\"{ 'show': navbarOpen }\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\"  *ngFor=\"let navitem of navitems\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"{{navitem.path}}\" routerLinkActive=\"active\" >{{ navitem.message }}</a>\n      </li>\n\n\n    </ul>\n  </div>\n</div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background: none;\n  background-color: transparent !important; }\n  nav li {\n    padding: 5px 15px; }\n  nav li a {\n      font-size: 18px;\n      color: #FFF; }\n  nav li a.active {\n        color: yellow; }\n  nav.sticky {\n    position: fixed;\n    top: 0;\n    width: 100%; }\n  nav.fixed-header {\n    background: rgba(0, 0, 0, 0.5) !important; }\n  nav .navbar-brand {\n    font-size: 34px; }\n  nav.fixed-header {\n    z-index: 9;\n    background: rgba(0, 0, 0, 0.5);\n    width: 100%;\n    position: fixed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0U6XFxhbmd1bGFyLXByb2plY3RcXG15Zmlyc3Qvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBU0UsZ0JBQWdCO0VBQ2hCLHdDQUF3QyxFQUFBO0VBVjFDO0lBT0ksaUJBQWlCLEVBQUE7RUFQckI7TUFFTyxlQUFlO01BQUUsV0FBVyxFQUFBO0VBRm5DO1FBSU0sYUFBYSxFQUFBO0VBSm5CO0lBYUksZUFBZTtJQUNmLE1BQU07SUFDTixXQUNGLEVBQUE7RUFoQkY7SUFrQkkseUNBQXNDLEVBQUE7RUFsQjFDO0lBb0JpQixlQUFlLEVBQUE7RUFwQmhDO0lBc0JJLFVBQVU7SUFDViw4QkFBMkI7SUFDM0IsV0FBVztJQUNYLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gIGxpe1xyXG4gICAgYXsgZm9udC1zaXplOiAxOHB4OyBjb2xvcjogI0ZGRjtcclxuICAgICYuYWN0aXZle1xyXG4gICAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgfVxyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuXHJcbiAgJi5zdGlja3kge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCVcclxuICB9XHJcbiAgJi5maXhlZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdmJhci1icmFuZHsgZm9udC1zaXplOiAzNHB4O31cclxuICAmLmZpeGVkLWhlYWRlcntcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.navitems = [
            {
                message: 'Home',
                path: '',
            },
            {
                message: 'About',
                path: 'about-us',
            },
            {
                message: 'contact us',
                path: 'contact-us',
            },
            {
                message: 'Help',
                path: 'help',
            },
            {
                message: 'Login',
                path: 'login',
            }
        ];
        this.navbarOpen = false;
    }
    NavbarComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavbarComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).scroll(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).scrollTop() >= 300) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('nav').addClass('fixed-header');
                jquery__WEBPACK_IMPORTED_MODULE_2__('nav div').addClass('visible-title');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__('nav').removeClass('fixed-header');
                jquery__WEBPACK_IMPORTED_MODULE_2__('nav div').removeClass('visible-title');
            }
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/owlslider/owlslider.component.html":
/*!****************************************************!*\
  !*** ./src/app/owlslider/owlslider.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"owl-carousel-box\"><div class=\"container\">\n  <h2 class=\"text-center\">This is Owl Carousel</h2>\n    <!-- \"{items: 5, dots: true, nav:true}\" -->\n<div class=\"jai\">\n  <owl-carousel\n\n[options]=\"options\"   [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" >\n<div class=\"item\" *ngFor=\"let item of list\">\n<img src=\"{{item.srcn}}\" alt=\"\">\n</div>\n\n</owl-carousel>\n</div>\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/owlslider/owlslider.component.scss":
/*!****************************************************!*\
  !*** ./src/app/owlslider/owlslider.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".owl-carousel-box {\n  padding-top: 100px;\n  padding-bottom: 100px; }\n  .owl-carousel-box h2 {\n    margin-bottom: 50px;\n    font-weight: bold; }\n  .owl-carousel-box .item {\n    border: 1px solid #CCC !important;\n    margin: 5px;\n    padding: 15px;\n    box-sizing: border-box; }\n  .owl-carousel-box .item img {\n      width: 100%; }\n  @media (max-width: 767px) {\n      .owl-carousel-box .item img {\n        max-width: 100%;\n        width: auto;\n        margin: 0 auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3dsc2xpZGVyL0U6XFxhbmd1bGFyLXByb2plY3RcXG15Zmlyc3Qvc3JjXFxhcHBcXG93bHNsaWRlclxcb3dsc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBO0VBRjFCO0lBS00sbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0VBTnZCO0lBU00saUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFaNUI7TUFhVyxXQUFVLEVBQUE7RUFDZjtNQWROO1FBZWEsZUFBZTtRQUFFLFdBQVc7UUFBRSxjQUFjLEVBQUEsRUFBRyIsImZpbGUiOiJzcmMvYXBwL293bHNsaWRlci9vd2xzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3dsLWNhcm91c2VsLWJveHtcclxuICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgIGgye1xyXG5cclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAgLml0ZW0ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBpbWd7IHdpZHRoOjEwMCV9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIGltZ3sgbWF4LXdpZHRoOiAxMDAlOyB3aWR0aDogYXV0bzsgbWFyZ2luOiAwIGF1dG87fVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/owlslider/owlslider.component.ts":
/*!**************************************************!*\
  !*** ./src/app/owlslider/owlslider.component.ts ***!
  \**************************************************/
/*! exports provided: OwlsliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlsliderComponent", function() { return OwlsliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-owl-carousel */ "./node_modules/ng2-owl-carousel/index.js");
/* harmony import */ var ng2_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);



var OwlsliderComponent = /** @class */ (function () {
    function OwlsliderComponent() {
        this.list = [
            {
                srcn: '../assets/images/logo01.jpg'
            },
            {
                srcn: '../assets/images/logo02.jpg'
            },
            {
                srcn: '../assets/images/logo03.jpg'
            },
            {
                srcn: '../assets/images/logo04.jpg'
            },
            {
                srcn: '../assets/images/logo05.jpg'
            },
            {
                srcn: '../assets/images/logo06.jpg'
            }
        ];
        this.options = {
            items: 5,
            dots: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                1200: {
                    items: 5
                },
            }
        };
    }
    OwlsliderComponent.prototype.fun = function () {
        this.owlElement.next([200]);
    };
    OwlsliderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('owlElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_owl_carousel__WEBPACK_IMPORTED_MODULE_2__["OwlCarousel"])
    ], OwlsliderComponent.prototype, "owlElement", void 0);
    OwlsliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owlslider',
            template: __webpack_require__(/*! ./owlslider.component.html */ "./src/app/owlslider/owlslider.component.html"),
            styles: [__webpack_require__(/*! ./owlslider.component.scss */ "./src/app/owlslider/owlslider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OwlsliderComponent);
    return OwlsliderComponent;
}());



/***/ }),

/***/ "./src/app/pagenot-fount/pagenot-fount.component.html":
/*!************************************************************!*\
  !*** ./src/app/pagenot-fount/pagenot-fount.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n{{pageNotFound}}\n</p>\n"

/***/ }),

/***/ "./src/app/pagenot-fount/pagenot-fount.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pagenot-fount/pagenot-fount.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3QtZm91bnQvcGFnZW5vdC1mb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenot-fount/pagenot-fount.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pagenot-fount/pagenot-fount.component.ts ***!
  \**********************************************************/
/*! exports provided: PagenotFountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotFountComponent", function() { return PagenotFountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotFountComponent = /** @class */ (function () {
    function PagenotFountComponent() {
        this.pageNotFound = 'This page not Run on this website';
    }
    PagenotFountComponent.prototype.ngOnInit = function () {
    };
    PagenotFountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenot-fount',
            template: __webpack_require__(/*! ./pagenot-fount.component.html */ "./src/app/pagenot-fount/pagenot-fount.component.html"),
            styles: [__webpack_require__(/*! ./pagenot-fount.component.scss */ "./src/app/pagenot-fount/pagenot-fount.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotFountComponent);
    return PagenotFountComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <div class=\"bgImage\">\r\n    <div class=\"inner-banner about-banner-page\">\r\n\r\n      <div class=\"container\">\r\n        <div class=\"banner-title\">\r\n      {{pageTitle}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n\r\n<div class=\"container inner-page-container\"><h1 class='text-center'> Post create component here</h1>\r\n\r\n<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam nisi impedit voluptas suscipit illo itaque. Minus ad maiores pariatur illum, cum possimus sapiente omnis eveniet commodi ipsum, velit dicta iste?</p>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <textarea class=\"form-control\" rows=\"6\" [(ngModel)]=\"enteredValue\">\r\n\r\n    </textarea>\r\n    <hr>\r\n    <button class=\"btn btn-primary\" (click)=\"onAddPost()\">Save Post</button>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n   <P>{{ newPost}}</P>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/posts/post-create/post.create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post.create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent() {
        this.pageTitle = 'This is contact us page';
        this.text = 'This is contact us page';
        this.bannerBg = '../assets/images/about-us.jpg';
        this.enteredValue = '';
        this.newPost = 'No Content yet';
    }
    PostCreateComponent.prototype.onAddPost = function () {
        this.newPost = this.enteredValue;
    };
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! ./post-create.component.html */ "./src/app/posts/post-create/post-create.component.html"),
            styles: ["div.bgImage {background-image:url(../assets/images/about-us.jpg)}"]
        })
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/testimonial/testimonial.component.html":
/*!********************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"testimonial-box\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n        <div class=\"col-sm-12 text-center headingbox\"><h2>What says our client </h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>\n\t\t\t<div class=\"col-md-12\">\n                <div class=\"quote\">\n                  <fa name=\"quote-left\"></fa>\n                </div>\n\t\t\t\t<div class=\"carousel slide\" id=\"fade-quote-carousel\" data-ride=\"carousel\" data-interval=\"3000\">\n\t\t\t\t  <!-- Carousel indicators -->\n\n\t\t\t\t  <!-- Carousel items -->\n\t\t\t\t  <div class=\"carousel-inner\">\n              <owl-carousel\n\n              [options]=\"options\"   [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" >\n\t\t\t\t    <div class=\"item\" *ngFor=\"let item of list\">\n                        <div class=\"profile-circle\" style=\"background-color: rgba(0,0,0,.2);\">\n                        <img src=\"{{item.srcn}}\" alt=\"\">\n                        </div>\n\t\t\t\t    \t<blockquote>\n\t\t\t\t    \t\t<p>{{item.saytxt}}</p>\n\t\t\t\t    \t</blockquote>\n\t\t\t\t    </div>\n\n          </owl-carousel>\n\n\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/testimonial/testimonial.component.scss":
/*!********************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#testimonial-box {\n  background: #efefef;\n  padding: 100px 0;\n  /*-------------------------------*/\n  /*    Carousel Fade Transition   */\n  /*-------------------------------*/ }\n  #testimonial-box .quote {\n    color: rgba(0, 0, 0, 0.1);\n    text-align: center;\n    margin-bottom: 30px; }\n  #testimonial-box #fade-quote-carousel .carousel {\n    padding-bottom: 60px; }\n  #testimonial-box #fade-quote-carousel .carousel .carousel-inner .item {\n      opacity: 0;\n      transition-property: opacity; }\n  #testimonial-box #fade-quote-carousel .carousel .carousel-inner .item.active {\n        opacity: 1;\n        transition-property: opacity; }\n  #testimonial-box #fade-quote-carousel .carousel .carousel-indicators {\n      bottom: 10px; }\n  #testimonial-box #fade-quote-carousel .carousel .carousel-indicators > li {\n        background-color: #e84a64;\n        border: none; }\n  #testimonial-box #fade-quote-carousel blockquote {\n    text-align: center;\n    border: none; }\n  #testimonial-box #fade-quote-carousel .profile-circle {\n    width: 100px;\n    height: 100px;\n    margin: 0 auto;\n    border-radius: 100px; }\n  #testimonial-box #fade-quote-carousel .profile-circle img {\n      display: block;\n      width: 150%;\n      height: auto;\n      margin-left: -25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGltb25pYWwvRTpcXGFuZ3VsYXItcHJvamVjdFxcbXlmaXJzdC9zcmNcXGFwcFxcdGVzdGltb25pYWxcXHRlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUUsbUJBSGlCO0VBS2pCLGdCQUFnQjtFQVFsQixrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUEsRUFBbUM7RUFkbkM7SUFNRSx5QkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBUnJCO0lBa0JJLG9CQUFvQixFQUFBO0VBbEJ4QjtNQW9CTSxVQUFVO01BR0YsNEJBQTRCLEVBQUE7RUF2QjFDO1FBMEJnQixVQUFVO1FBR0YsNEJBQTRCLEVBQUE7RUE3QnBEO01Ba0NRLFlBQVksRUFBQTtFQWxDcEI7UUFvQ1UseUJBQXlCO1FBQ3pCLFlBQVksRUFBQTtFQXJDdEI7SUEyQ0ksa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTtFQTVDaEI7SUFnREksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CLEVBQUE7RUFuRHhCO01Bc0RNLGNBQWM7TUFDZCxXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVzdGltb25pYWwvdGVzdGltb25pYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ3JleWNvbG9yOiAjZWZlZmVmO1xyXG4jdGVzdGltb25pYWwtYm94e1xyXG5cclxuICBiYWNrZ3JvdW5kOiAkZ3JleWNvbG9yO1xyXG5cclxuICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gIC5xdW90ZSB7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjEpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogICAgQ2Fyb3VzZWwgRmFkZSBUcmFuc2l0aW9uICAgKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiNmYWRlLXF1b3RlLWNhcm91c2Vse1xyXG4gIC5jYXJvdXNlbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIC5jYXJvdXNlbC1pbm5lciAuaXRlbSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxuICAgICAgICAgIC1tcy10cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcblxyXG4gICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg0YTY0O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gIGJsb2NrcXVvdGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtY2lyY2xlIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjUlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/testimonial/testimonial.component.ts":
/*!******************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.ts ***!
  \******************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-owl-carousel */ "./node_modules/ng2-owl-carousel/index.js");
/* harmony import */ var ng2_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);



var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
        this.list = [
            {
                srcn: '../assets/images/testimonial01.jpg',
                saytxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore '
            },
            {
                srcn: '../assets/images/testimonial02.jpg',
                saytxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore '
            },
            {
                srcn: '../assets/images/testimonial03.jpg',
                saytxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore '
            },
            {
                srcn: '../assets/images/testimonial04.jpg',
                saytxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore '
            },
            {
                srcn: '../assets/images/testimonial02.jpg',
                saytxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore '
            },
            {
                srcn: '../assets/images/testimonial01.jpg',
                saytxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore '
            }
        ];
        this.options = {
            items: 5,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                1200: {
                    items: 1
                },
            }
        };
    }
    TestimonialComponent.prototype.fun = function () {
        this.owlElement.next([200]);
    };
    TestimonialComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('owlElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng2_owl_carousel__WEBPACK_IMPORTED_MODULE_2__["OwlCarousel"])
    ], TestimonialComponent.prototype, "owlElement", void 0);
    TestimonialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonial',
            template: __webpack_require__(/*! ./testimonial.component.html */ "./src/app/testimonial/testimonial.component.html"),
            styles: [__webpack_require__(/*! ./testimonial.component.scss */ "./src/app/testimonial/testimonial.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestimonialComponent);
    return TestimonialComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular-project\myfirst\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map