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

/***/ "./src/app/_core/guards/check-save-form.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/_core/guards/check-save-form.guard.ts ***!
  \*******************************************************/
/*! exports provided: CheckSaveFormGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckSaveFormGuard", function() { return CheckSaveFormGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckSaveFormGuard = /** @class */ (function () {
    function CheckSaveFormGuard() {
    }
    CheckSaveFormGuard.prototype.canDeactivate = function (signUpComponent) {
        if (signUpComponent.saveForm === true) {
            return true;
        }
        var msg = confirm('You are not save infomations! Are you sure leave this page?');
        if (msg === true) {
            return true;
        }
        return false;
    };
    CheckSaveFormGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CheckSaveFormGuard);
    return CheckSaveFormGuard;
}());



/***/ }),

/***/ "./src/app/_core/services/movie.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_core/services/movie.service.ts ***!
  \*************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.seats = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MovieService.prototype.getMovieList = function () {
        var response = this.http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP05');
        return response;
    };
    MovieService.prototype.getMovieDetails = function (maPhim) {
        var response = this.http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=' + maPhim);
        return response;
    };
    MovieService.prototype.getTicketDetails = function (maLichChieu) {
        var response = this.http.get("http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=" + maLichChieu);
        return response;
    };
    MovieService.prototype.getTicket = function (ticketDetails) {
        var linkApi = "http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe";
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header.append('Content-Type', 'application/json;charset=UTF-8');
        var observable = this.http.post(linkApi, ticketDetails, { headers: header });
        return observable;
    };
    MovieService.prototype.dropMovie = function (maPhim) {
        var response = this.http.delete('http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=' + maPhim);
        return response;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieService.prototype, "seats", void 0);
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/_core/services/staff.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_core/services/staff.service.ts ***!
  \*************************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var StaffService = /** @class */ (function () {
    function StaffService(http) {
        this.http = http;
        this.staffList = [];
    }
    StaffService.prototype.adminLogin = function (userName, password) {
        var linkApi = "http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=" + userName + "&matkhau=" + password;
        var header = new Headers();
        header.append('Content-Type', 'application/json;charset=UTF-8');
        var observable = this.http.post(linkApi, null);
        return observable;
    };
    StaffService.prototype.getStaffList = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.staffList);
    };
    StaffService.prototype.addStaff = function (staff) {
        this.staffList.push(staff);
    };
    StaffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StaffService);
    return StaffService;
}());



/***/ }),

/***/ "./src/app/_core/services/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/_core/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.signIn = function (userName, password) {
        var linkApi = "http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=" + userName + "&matkhau=" + password;
        var header = new Headers();
        header.append('Content-Type', 'application/json;charset=UTF-8');
        var observable = this.http.post(linkApi, null);
        return observable;
    };
    UserService.prototype.signUp = function (user) {
        var linkApi = "http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung";
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header.append('Content-Type', 'application/json;charset=UTF-8');
        var observable = this.http.post(linkApi, user, { headers: header });
        return observable;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'MovieTimes';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_pages_pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/pages/pages.module */ "./src/app/modules/pages/pages.module.ts");
/* harmony import */ var _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/admin/admin.module */ "./src/app/modules/admin/admin.module.ts");








var appRoutes = [
    { path: 'home', loadChildren: function () { return _modules_pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"]; } },
    { path: '', loadChildren: function () { return _modules_pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"]; } },
    { path: 'admin', loadChildren: function () { return _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"]; } },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin-login/admin-login.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/admin-login/admin-login.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper_admin-login {\n    width: 40%;\n    margin: auto;\n    margin-top: 4rem; \n}\n.admin-login-form {\n    border: 2px solid rgb(139, 31, 31);\n    border-radius: 0.7rem;\n    background-color: rgba(136, 120, 120, 0.644);  \n}\n.admin-login-form .row {\n    padding: 2rem;\n}\n.wrapper_admin-login .login-title {\n    background-color: rgba(116, 105, 103, 0.486);\n    width: 100%;\n    padding: 1rem;\n    border-top-left-radius: 0.7rem; \n    border-top-right-radius: 0.7rem; \n}\n.admin-login-form .row .col-md-3 img {\n    width: 100%;\n}\n.admin-login-form .btn-login {\n    text-align: center;\n    padding-bottom: 2rem;\n}\n.admin-login-form .btn {\n    padding: 0.7rem 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWRtaW4vYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoibW9kdWxlcy9hZG1pbi9hZG1pbi1sb2dpbi9hZG1pbi1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJfYWRtaW4tbG9naW4ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDRyZW07IFxufVxuLmFkbWluLWxvZ2luLWZvcm0ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMzksIDMxLCAzMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM2LCAxMjAsIDEyMCwgMC42NDQpOyAgXG59XG4uYWRtaW4tbG9naW4tZm9ybSAucm93IHtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuLndyYXBwZXJfYWRtaW4tbG9naW4gLmxvZ2luLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNiwgMTA1LCAxMDMsIDAuNDg2KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuN3JlbTsgXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuN3JlbTsgXG59XG4uYWRtaW4tbG9naW4tZm9ybSAucm93IC5jb2wtbWQtMyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmFkbWluLWxvZ2luLWZvcm0gLmJ0bi1sb2dpbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuLmFkbWluLWxvZ2luLWZvcm0gLmJ0biB7XG4gICAgcGFkZGluZzogMC43cmVtIDEuOHJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/admin/admin-login/admin-login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/admin-login/admin-login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper_admin-login\">\n  <div class=\"admin-login-form\">\n    <div class=\"login-title\">\n      <h3>Administrator Login</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <img src=\"https://res.cloudinary.com/dxzguyvzh/image/upload/v1553963847/user.png\">\n      </div>\n      <div class=\"col-md-9\">\n        <form #frmAdminLogin='ngForm' (ngSubmit)=\"AdminLogin(frmAdminLogin.value)\">\n          <div class=\"form-group\">\n            <label for=\"\">Username:</label>\n            <input type=\"text\" name=\"UserName\" ngModel id=\"\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Password:</label>\n            <input type=\"password\" name=\"Password\" ngModel id=\"\" class=\"form-control\">\n          </div>\n          <div class=\"btn-login\">\n            <button type=\"submit\" class=\"btn btn-success\">Login</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/admin/admin-login/admin-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/admin-login/admin-login.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_core/services/staff.service */ "./src/app/_core/services/staff.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(staffService, router) {
        this.staffService = staffService;
        this.router = router;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent.prototype.AdminLogin = function (adminLoginInfo) {
        var _this = this;
        this.staffService.adminLogin(adminLoginInfo.UserName, adminLoginInfo.Password).subscribe(function (data) {
            console.log(data);
            if (typeof data === 'object' && data.MaLoaiNguoiDung === 'QuanTri') {
                var stoAdminLogin = JSON.stringify(data);
                localStorage.setItem('stoAdminLogin', stoAdminLogin);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Successful!', 'Welcome to Admin Panel!', 'success').then(function () {
                    _this.router.navigate(['/admin']);
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Warning!', 'Username or password incorrect!', 'warning');
            }
        });
    };
    AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/modules/admin/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/modules/admin/admin-login/admin-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin-template/admin-template.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/admin-template/admin-template.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-header .navbar .col-md-2 .navbar-brand {\n    text-transform: uppercase;\n    color: rgb(139, 31, 31);\n    font-size: 1.5rem;\n    font-weight: 600;\n}\n.movie-header .navbar .collapse {\n    float: right;\n}\n.movie-header .navbar .collapse .dropdown {\n    margin-left: 2rem;\n}\n.movie-header .navbar .collapse .dropdown .dropdown-menu {\n    /* dropdown leftside */\n    left: auto;\n    right: 0;\n}\n.movie-header .navbar .dropdown .dropdown-menu .dropdown-item span {\n    padding-left: 1rem;\n}\n.movie-header .navbar .dropdown .dropdown-menu {\n    background-color: white;\n    color: black;\n    width: 100%;   \n    font-size: 1.3rem;\n}\n.dropdown .dropdown-item:hover {\n    color: rgb(139, 31, 31);\n    background-color: rgba(0, 0, 0, 0.226);\n    cursor: pointer;\n}\n.dropdown-toggle::after {\n    display:none;\n}\n/* CONTENT */\n.btn-sidebar {\n    width: 100%;\n    background-color: transparent;\n    border: transparent;\n    margin: 1rem 0;\n    font-size: 1.5rem; \n    color: white;\n    text-align: left;\n}\n.btn-sidebar .fa {\n    font-size: 1.8rem;\n    margin-right: 1rem;\n}\n.btn-sidebar:hover {\n    color: rgb(139, 31, 31);\n    cursor: pointer;\n}\n.movie-content .active {\n    color: rgb(139, 31, 31);\n    border-bottom: 2px solid rgb(139, 31, 31);\n    border: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWRtaW4vYWRtaW4tdGVtcGxhdGUvYWRtaW4tdGVtcGxhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFFBQVE7QUFDWjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBLFlBQVk7QUFDWjtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5Q0FBeUM7SUFDekMsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6Im1vZHVsZXMvYWRtaW4vYWRtaW4tdGVtcGxhdGUvYWRtaW4tdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1oZWFkZXIgLm5hdmJhciAuY29sLW1kLTIgLm5hdmJhci1icmFuZCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogcmdiKDEzOSwgMzEsIDMxKTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLm1vdmllLWhlYWRlciAubmF2YmFyIC5jb2xsYXBzZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLm1vdmllLWhlYWRlciAubmF2YmFyIC5jb2xsYXBzZSAuZHJvcGRvd24ge1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG4ubW92aWUtaGVhZGVyIC5uYXZiYXIgLmNvbGxhcHNlIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gICAgLyogZHJvcGRvd24gbGVmdHNpZGUgKi9cbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xufVxuLm1vdmllLWhlYWRlciAubmF2YmFyIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSBzcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi5tb3ZpZS1oZWFkZXIgLm5hdmJhciAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTAwJTsgICBcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgY29sb3I6IHJnYigxMzksIDMxLCAzMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIyNik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgZGlzcGxheTpub25lO1xufVxuXG4vKiBDT05URU5UICovXG4uYnRuLXNpZGViYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmJ0bi1zaWRlYmFyIC5mYSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLmJ0bi1zaWRlYmFyOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDEzOSwgMzEsIDMxKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb3ZpZS1jb250ZW50IC5hY3RpdmUge1xuICAgIGNvbG9yOiByZ2IoMTM5LCAzMSwgMzEpO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMTM5LCAzMSwgMzEpO1xuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/admin/admin-template/admin-template.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/admin-template/admin-template.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HEADER -->\n<header class=\"header movie-header\">\n  <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n    <div class=\"col-md-2\">\n      <a class=\"navbar-brand\">Movie Times</a>\n      <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\"\n        aria-controls=\"collapsibleNavId\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    </div>\n    <div class=\"col-md-10\">\n      <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"text\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n        <div class=\"dropdown\">\n          <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"triggerId\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fa fa-user-circle\"></i>\n          </button>\n          <div class=\"dropdown-menu \" aria-labelledby=\"triggerId\">\n            <a class=\"dropdown-item\">\n              <i class=\"fa fa-id-card-o\"></i>\n              <span>Profile</span>\n            </a>\n            <a class=\"dropdown-item\">\n              <i class=\"fa fa-sliders\"></i>\n              <span>Setting</span>\n            </a>\n            <a class=\"dropdown-item\">\n              <i class=\"fa fa-sign-out\"></i>\n              <span>Sign out</span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </nav>\n</header>\n\n<div class=\"container-fluid\">\n  <div class=\"row movie-content\">\n    <!-- SIDE-BAR -->\n    <div class=\"col-md-2 my-sidebar\">\n      <button routerLink='manage-staff' routerLinkActive='active' class=\"btn-sidebar\">\n          <i class=\"fa fa-users\"></i>\n        <span>Staff Management</span>\n      </button>\n      <button routerLink='manage-user' routerLinkActive='active' class=\"btn-sidebar\">\n          <i class=\"fa fa-user\"></i>\n        <span>Users Management</span>\n      </button>\n      <button routerLink='manage-movie' routerLinkActive='active' class=\"btn-sidebar\">\n          <i class=\"fa fa-film\"></i>\n        <span>Movies Management</span>\n      </button>\n    </div>\n\n\n    <!-- CONTENT -->\n    <div class=\"col-md-10 content\">\n      <router-outlet>\n\n      </router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/admin/admin-template/admin-template.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/admin-template/admin-template.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTemplateComponent", function() { return AdminTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminTemplateComponent = /** @class */ (function () {
    function AdminTemplateComponent() {
    }
    AdminTemplateComponent.prototype.ngOnInit = function () {
    };
    AdminTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-template',
            template: __webpack_require__(/*! ./admin-template.component.html */ "./src/app/modules/admin/admin-template/admin-template.component.html"),
            styles: [__webpack_require__(/*! ./admin-template.component.css */ "./src/app/modules/admin/admin-template/admin-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminTemplateComponent);
    return AdminTemplateComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_template_admin_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-template/admin-template.component */ "./src/app/modules/admin/admin-template/admin-template.component.ts");
/* harmony import */ var _manage_staff_manage_staff_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-staff/manage-staff.component */ "./src/app/modules/admin/manage-staff/manage-staff.component.ts");
/* harmony import */ var _manage_movies_manage_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-movies/manage-movies.component */ "./src/app/modules/admin/manage-movies/manage-movies.component.ts");
/* harmony import */ var _manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-users/manage-users.component */ "./src/app/modules/admin/manage-users/manage-users.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/modules/admin/admin-login/admin-login.component.ts");










var adminRoutes = [
    { path: 'admin-login', component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__["AdminLoginComponent"] },
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_template_admin_template_component__WEBPACK_IMPORTED_MODULE_5__["AdminTemplateComponent"],
                _manage_staff_manage_staff_component__WEBPACK_IMPORTED_MODULE_6__["ManageStaffComponent"],
                _manage_movies_manage_movies_component__WEBPACK_IMPORTED_MODULE_7__["ManageMoviesComponent"],
                _manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_8__["ManageUsersComponent"],
                _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__["AdminLoginComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(adminRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/manage-movies/manage-movies.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/manage-movies/manage-movies.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGVzL2FkbWluL21hbmFnZS1tb3ZpZXMvbWFuYWdlLW1vdmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/admin/manage-movies/manage-movies.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/manage-movies/manage-movies.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  manage-movies works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/admin/manage-movies/manage-movies.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/manage-movies/manage-movies.component.ts ***!
  \************************************************************************/
/*! exports provided: ManageMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageMoviesComponent", function() { return ManageMoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManageMoviesComponent = /** @class */ (function () {
    function ManageMoviesComponent() {
    }
    ManageMoviesComponent.prototype.ngOnInit = function () {
    };
    ManageMoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-movies',
            template: __webpack_require__(/*! ./manage-movies.component.html */ "./src/app/modules/admin/manage-movies/manage-movies.component.html"),
            styles: [__webpack_require__(/*! ./manage-movies.component.css */ "./src/app/modules/admin/manage-movies/manage-movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManageMoviesComponent);
    return ManageMoviesComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/manage-staff/manage-staff.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/manage-staff/manage-staff.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGVzL2FkbWluL21hbmFnZS1zdGFmZi9tYW5hZ2Utc3RhZmYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/admin/manage-staff/manage-staff.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/manage-staff/manage-staff.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  manage-staff works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/admin/manage-staff/manage-staff.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/manage-staff/manage-staff.component.ts ***!
  \**********************************************************************/
/*! exports provided: ManageStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStaffComponent", function() { return ManageStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_core/services/staff.service */ "./src/app/_core/services/staff.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ManageStaffComponent = /** @class */ (function () {
    function ManageStaffComponent(staffService, location) {
        this.staffService = staffService;
        this.location = location;
        this.staffList = [];
    }
    ManageStaffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.staffService.getStaffList().subscribe(function (data) {
            _this.staffList = data;
        });
    };
    ManageStaffComponent.prototype.AddStaff = function (staffID, userName, fullName, age, phoneNumber, email, is_admin) {
        var staff = {
            StaffID: staffID,
            UserName: userName,
            FullName: fullName,
            Age: age,
            PhoneNumber: phoneNumber,
            Email: email,
            MaLoaiNguoiDung: is_admin,
        };
        this.staffService.addStaff(staff);
        this.location.back();
    };
    ManageStaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-staff',
            template: __webpack_require__(/*! ./manage-staff.component.html */ "./src/app/modules/admin/manage-staff/manage-staff.component.html"),
            styles: [__webpack_require__(/*! ./manage-staff.component.css */ "./src/app/modules/admin/manage-staff/manage-staff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ManageStaffComponent);
    return ManageStaffComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/manage-users/manage-users.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/manage-users/manage-users.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGVzL2FkbWluL21hbmFnZS11c2Vycy9tYW5hZ2UtdXNlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/admin/manage-users/manage-users.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/manage-users/manage-users.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  manage-users works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/admin/manage-users/manage-users.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/manage-users/manage-users.component.ts ***!
  \**********************************************************************/
/*! exports provided: ManageUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersComponent", function() { return ManageUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManageUsersComponent = /** @class */ (function () {
    function ManageUsersComponent() {
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
    };
    ManageUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-users',
            template: __webpack_require__(/*! ./manage-users.component.html */ "./src/app/modules/admin/manage-users/manage-users.component.html"),
            styles: [__webpack_require__(/*! ./manage-users.component.css */ "./src/app/modules/admin/manage-users/manage-users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManageUsersComponent);
    return ManageUsersComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/contact/contact.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/pages/contact/contact.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact_comment {\n    border: 2px solid rgb(139, 31, 31);\n    border-radius: 0.7rem;\n    padding: 2rem;\n}\n\n.contact_maps {\n    height: 100%;\n    border: 2px solid rgb(139, 31, 31);\n    border-radius: 0.7rem;\n    padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCIiwiZmlsZSI6Im1vZHVsZXMvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdF9jb21tZW50IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTM5LCAzMSwgMzEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4uY29udGFjdF9tYXBzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEzOSwgMzEsIDMxKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/pages/contact/contact.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/pages/contact/contact.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"contact_comment col-md-6\">\n    <form action=\"\">\n      <div class=\"form-group\">\n        <label for=\"\">Email:</label>\n        <input type=\"email\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Title:</label>\n        <input type=\"text\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Content</label>\n        <textarea class=\"form-control\" name=\"\" id=\"\" rows=\"5\"></textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n  </div>\n  <div class=\"col-md-6\">\n    <iframe class=\"contact_maps\"\n      src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.5230898549571!2d106.77536788811783!3d10.88057961650878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8867c99ac9f%3A0x38fb7b0aee045878!2zSOG6u20gNjMgxJDGsOG7nW5nIHPhu5EgOCwgTGluaCBYdcOibiwgVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1553221064159\"\n      width=\"100%\" allowfullscreen></iframe>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/pages/contact/contact.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pages/contact/contact.component.ts ***!
  \************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/modules/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/modules/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/home/home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modules/pages/home/home.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-carousel img {\n    width: 100%;\n    height: 600px;\n    margin-bottom: 2rem;\n    border-radius: 0.3rem;\n}\n\n.carousel-item {\n    position: relative;\n}\n\n.carousel-item_trailer {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 600px;\n    top: 0;\n    left: 0;\n    background-color: transparent;\n    z-index: 1;\n}\n\n.carousel-item_trailer:hover {\n    cursor: pointer;\n    background-image: url('https://res.cloudinary.com/dxzguyvzh/image/upload/v1552614625/play-button.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: rgba(5, 4, 4, 0.37);\n}\n\n.modal-carousel-trailer .modal-content iframe{\n    height: 600px;\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsTUFBTTtJQUNOLE9BQU87SUFDUCw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUNBO0lBQ0ksZUFBZTtJQUNmLHNHQUFzRztJQUN0Ryw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2YiLCJmaWxlIjoibW9kdWxlcy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jYXJvdXNlbCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJvdXNlbC1pdGVtX3RyYWlsZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHotaW5kZXg6IDE7XG59XG4uY2Fyb3VzZWwtaXRlbV90cmFpbGVyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9keHpndXl2emgvaW1hZ2UvdXBsb2FkL3YxNTUyNjE0NjI1L3BsYXktYnV0dG9uLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgNCwgNCwgMC4zNyk7XG59XG5cbi5tb2RhbC1jYXJvdXNlbC10cmFpbGVyIC5tb2RhbC1jb250ZW50IGlmcmFtZXtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/pages/home/home.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/pages/home/home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CAROUSEL -->\n<div id=\"myCarousel\" class=\"carousel slide my-carousel\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"carousel-item active\">\n      <img src=\"https://res.cloudinary.com/dxzguyvzh/image/upload/v1552616902/2.jpg\">\n      <div class=\"carousel-item_trailer\" type=\"button\" data-toggle=\"modal\" data-target=\"#modelFirst\"></div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://res.cloudinary.com/dxzguyvzh/image/upload/v1552616409/3.jpg\">\n      <div class=\"carousel-item_trailer\" type=\"button\" data-toggle=\"modal\" data-target=\"#modelSecond\"></div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://res.cloudinary.com/dxzguyvzh/image/upload/v1552616923/4.jpg\">\n      <div class=\"carousel-item_trailer\" type=\"button\" data-toggle=\"modal\" data-target=\"#modelThird\"></div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://res.cloudinary.com/dxzguyvzh/image/upload/v1552616978/5.jpg\">\n      <div class=\"carousel-item_trailer\" type=\"button\" data-toggle=\"modal\" data-target=\"#modelFour\"></div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://res.cloudinary.com/dxzguyvzh/image/upload/v1552616983/6.jpg\">\n      <div class=\"carousel-item_trailer\" type=\"button\" data-toggle=\"modal\" data-target=\"#modelIFive\"></div>\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"https://res.cloudinary.com/dxzguyvzh/image/upload/v1552616986/7.jpg\">\n      <div class=\"carousel-item_trailer\" type=\"button\" data-toggle=\"modal\" data-target=\"#modelSix\"></div>\n    </div>\n  </div>\n  <!-- END CAROUSEL -->\n\n  <!-- MOVIE LIST -->\n  <h2 class=\"great-title\">Latest Movies</h2>\n  <div class=\"row list-item\">\n    <div class=\"col-md-3\" *ngFor=\"let item of movieList\">\n      <div class=\"card wow fadeInUp\">\n        <img class=\"card-img-top\" src=\"{{item.HinhAnh}}\" alt=\"{{item.HinhAnh}}\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{item.TenPhim}}</h4>\n          <p class=\"card-text\">{{item.Mota}}</p>\n          <a class=\"btn btn-primary\" routerLink='/movie-details' [queryParams]='{MaPhim:item.MaPhim,TenPhim:item.TenPhim}'>Details</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <!-- MODAL CAROUSEL TRAILER-->\n  <div class=\"modal fade modal-carousel-trailer\" id=\"modelFirst\" tabindex=\"-1\" aria-labelledby=\"modelTitleId\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <iframe src=\"https://www.youtube.com/embed/lhQiwVi3jdo\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade modal-carousel-trailer\" id=\"modelSecond\" tabindex=\"-1\" aria-labelledby=\"modelTitleId\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <iframe src=\"https://www.youtube.com/embed/LbduDRH2m2M\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"modal fade modal-carousel-trailer\" id=\"modelThird\" tabindex=\"-1\" aria-labelledby=\"modelTitleId\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-body\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n              <iframe src=\"https://www.youtube.com/embed/MxEw3elSJ8M\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal fade modal-carousel-trailer\" id=\"modelFour\" tabindex=\"-1\" aria-labelledby=\"modelTitleId\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-body\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <iframe src=\"https://www.youtube.com/embed/Aj7ty6sViiU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal fade modal-carousel-trailer\" id=\"modelFive\" tabindex=\"-1\" aria-labelledby=\"modelTitleId\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                  <iframe src=\"https://www.youtube.com/embed/xz-KgMtU_BMo\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal fade modal-carousel-trailer\" id=\"modelSix\" tabindex=\"-1\" aria-labelledby=\"modelTitleId\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-body\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <iframe src=\"https://www.youtube.com/embed/kTTCi55jpL4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n</div>"

/***/ }),

/***/ "./src/app/modules/pages/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/pages/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_core/services/movie.service */ "./src/app/_core/services/movie.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(movieService) {
        this.movieService = movieService;
        this.movieList = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovieList().subscribe(function (data) {
            _this.movieList = data;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/modules/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/movie-details/movie-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pages/movie-details/movie-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    width: 8rem;\n    height: 10rem;\n}\n.movie-details .row {\n    margin-bottom: 3rem;\n}\n.info-title {\n    color: rgb(139, 31, 31);\n}\n.movie-details .row img {\n    width: 13rem;\n    height: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcGFnZXMvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6Im1vZHVsZXMvcGFnZXMvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIGhlaWdodDogMTByZW07XG59XG4ubW92aWUtZGV0YWlscyAucm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLmluZm8tdGl0bGUge1xuICAgIGNvbG9yOiByZ2IoMTM5LCAzMSwgMzEpO1xufVxuLm1vdmllLWRldGFpbHMgLnJvdyBpbWcge1xuICAgIHdpZHRoOiAxM3JlbTtcbiAgICBoZWlnaHQ6IDE1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/pages/movie-details/movie-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/pages/movie-details/movie-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container movie-details\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <img src=\"{{movie.HinhAnh}}\" />\n    </div>\n    <div class=\"col-md-8\">\n      <table class=\"table\">\n        <tr>\n          <th></th>\n          <th class=\"info-title\">Movie Infomation</th>\n        </tr>\n        <tr>\n          <td class=\"info-title\">Movie Title:</td>\n          <td>{{movie.TenPhim}}</td>\n        </tr>\n        <tr>\n          <td class=\"info-title\">Description:</td>\n          <td>{{movie.MoTa}}</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <h3 class=\"great-title\">Showtimes</h3>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Theater</th>\n        <th>Release date</th>\n        <th>Showtimes</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let showtimes of movie.LichChieu\">\n        <td>{{showtimes.Rap.TenRap}}</td>\n        <td>{{showtimes.NgayChieuGioChieu | date:'dd-MM-yyyy'}}</td>\n        <td>{{showtimes.NgayChieuGioChieu | date:'hh:mm'}}</td>\n        <td><a class=\"btn btn-success\" routerLink=\"/ticket-details/{{showtimes.MaLichChieu}}\">Book now</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/modules/pages/movie-details/movie-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/pages/movie-details/movie-details.component.ts ***!
  \************************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_core/services/movie.service */ "./src/app/_core/services/movie.service.ts");





var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(movieService, atvRoute, title) {
        this.movieService = movieService;
        this.atvRoute = atvRoute;
        this.title = title;
        this.movie = {};
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subParam = this.atvRoute.queryParams.subscribe(function (data) {
            _this.getMovieDetails(data.MaPhim);
            _this.title.setTitle(data.TenPhim);
        });
    };
    MovieDetailsComponent.prototype.getMovieDetails = function (maPhim) {
        var _this = this;
        this.movieService.getMovieDetails(maPhim).subscribe(function (data) {
            _this.movie = data;
        });
    };
    MovieDetailsComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this.subParam) {
            this.subParam.unsubscribe();
        }
    };
    MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-details',
            template: __webpack_require__(/*! ./movie-details.component.html */ "./src/app/modules/pages/movie-details/movie-details.component.html"),
            styles: [__webpack_require__(/*! ./movie-details.component.css */ "./src/app/modules/pages/movie-details/movie-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/movies-list/movies-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/pages/movies-list/movies-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGVzL3BhZ2VzL21vdmllcy1saXN0L21vdmllcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/pages/movies-list/movies-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pages/movies-list/movies-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"great-title\">Latest Movies</h2>\n<div class=\"row list-item\">\n  <div class=\"col-md-3\" *ngFor=\"let item of movieList\">\n    <div class=\"card\">\n      <img class=\"card-img-top\" src=\"{{item.HinhAnh}}\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{item.TenPhim}}</h4>\n        <p class=\"card-text\">{{item.Mota}}</p>\n        <a class=\"btn btn-success\" routerLink='/movie-details'\n          [queryParams]='{MaPhim:item.MaPhim,TenPhim:item.TenPhim}'>Details</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/pages/movies-list/movies-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/pages/movies-list/movies-list.component.ts ***!
  \********************************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_core/services/movie.service */ "./src/app/_core/services/movie.service.ts");



var MoviesListComponent = /** @class */ (function () {
    function MoviesListComponent(movieService) {
        this.movieService = movieService;
        this.movieList = [];
    }
    MoviesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovieList().subscribe(function (data) {
            _this.movieList = data;
        });
    };
    MoviesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-list',
            template: __webpack_require__(/*! ./movies-list.component.html */ "./src/app/modules/pages/movies-list/movies-list.component.html"),
            styles: [__webpack_require__(/*! ./movies-list.component.css */ "./src/app/modules/pages/movies-list/movies-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/page-template/page-template.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pages/page-template/page-template.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-nav .navbar-brand, .my-nav .navbar-collapse .navbar-nav .nav-link{\n    color: white;\n    text-decoration: none;\n    font-size: 1rem;\n    text-transform: uppercase;\n    margin: 1rem;\n    font-weight: bold;\n    border-bottom: 2px solid transparent;\n}\n.my-nav .navbar-brand {\n    padding: 1rem;\n    font-size: 2rem;\n    color: rgb(139, 31, 31);\n}\n.my-nav .navbar-collapse .navbar-nav .nav-link:hover {\n    color: rgb(139, 31, 31);\n    border-bottom: 2px solid rgb(139, 31, 31);\n}\n/* .my-nav .navbar-collapse .navbar-nav .active {\n    color: rgb(139, 31, 31);\n    border-bottom: 2px solid rgb(139, 31, 31);\n} */\n.sign-out {\n    margin-right: 2rem;\n}\n.sign-out .btn-sign-out {\n    border: transparent;\n    background-color: transparent;\n    color: white;\n    font-weight: 600;\n    text-transform: uppercase;\n    margin-bottom: 0.4rem;\n}\n.sign-out .fa {\n    font-weight: 600;\n    font-size: 1.5rem;\n    color: white;\n    margin-right: 1rem;\n}\n.sign-out:hover .fa, .sign-out:hover .btn-sign-out{\n    cursor: pointer;\n    color: rgb(139, 31, 31);\n}\n.header .my-nav {\n    max-height: 8.5rem;\n}\n.account .sign-in .nav-item {\n    display: inline-block;\n    list-style-type: none;\n    align-items: center;\n    margin-top: 1rem;\n    font-size: 1rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    padding: 0;\n}\n.account .sign-in .nav-item .nav-link {\n    color: white;\n    border-bottom: 2px solid transparent;\n    padding: 0.5rem;\n    margin: 1rem;\n}\n.account .sign-in .nav-item .nav-link:hover {\n    border-bottom: 2px solid rgb(139, 31, 31);\n    color: rgb(139, 31, 31);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcGFnZXMvcGFnZS10ZW1wbGF0ZS9wYWdlLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUNBQXlDO0FBQzdDO0FBRUE7OztHQUdHO0FBRUg7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJtb2R1bGVzL3BhZ2VzL3BhZ2UtdGVtcGxhdGUvcGFnZS10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LW5hdiAubmF2YmFyLWJyYW5kLCAubXktbmF2IC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYgLm5hdi1saW5re1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5teS1uYXYgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IHJnYigxMzksIDMxLCAzMSk7XG59XG5cbi5teS1uYXYgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMTM5LCAzMSwgMzEpO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMTM5LCAzMSwgMzEpO1xufVxuXG4vKiAubXktbmF2IC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYgLmFjdGl2ZSB7XG4gICAgY29sb3I6IHJnYigxMzksIDMxLCAzMSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigxMzksIDMxLCAzMSk7XG59ICovXG5cbi5zaWduLW91dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4uc2lnbi1vdXQgLmJ0bi1zaWduLW91dCB7XG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbn1cbi5zaWduLW91dCAuZmEge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5zaWduLW91dDpob3ZlciAuZmEsIC5zaWduLW91dDpob3ZlciAuYnRuLXNpZ24tb3V0e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogcmdiKDEzOSwgMzEsIDMxKTtcbn1cblxuLmhlYWRlciAubXktbmF2IHtcbiAgICBtYXgtaGVpZ2h0OiA4LjVyZW07XG59XG4uYWNjb3VudCAuc2lnbi1pbiAubmF2LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmFjY291bnQgLnNpZ24taW4gLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4uYWNjb3VudCAuc2lnbi1pbiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDEzOSwgMzEsIDMxKTtcbiAgICBjb2xvcjogcmdiKDEzOSwgMzEsIDMxKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/pages/page-template/page-template.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/pages/page-template/page-template.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html\n  PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n\n<head>\n  <title>MovieHunter</title>\n  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n</head>\n\n<body>\n  <!-- HEADER -->\n  <header class=\"header\" id=\"myHeader\">\n    <nav class=\"navbar navbar-expand-sm navbar-light my-nav\">\n      <div class=\"col-md-3 col-sm-4\">\n        <a class=\"navbar-brand\" routerLink='/' linkActive='active'>Movie Times</a>\n      </div>\n      <div class=\"col-md-7 col-sm-5\">\n        <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\"\n          aria-controls=\"collapsibleNavId\" aria-expanded=\"falxse\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n          <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink='/home' routerLinkActive=\"active\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink='/movie-list' routerLinkActive=\"active\">Movies</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink='/contact' routerLinkActive=\"active\">contact</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-2 col-sm-3\">\n        <div class=\"account\">\n          <div class=\"sign-in \">\n            <ul>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink='/sign-in' routerLinkActive=\"active\">Sign In</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink='/sign-up' routerLinkActive=\"active\">Sign Up</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"sign-out account_deactived\">\n            <a class=\"btn btn-sign-out\">\n              <i class=\"fa fa-user-o\"></i>\n              Sign Out\n            </a>\n          </div>\n        </div>\n      </div>\n    </nav>\n  </header>\n\n  <div class=\"movie-wrap\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <footer>\n\n  </footer>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/modules/pages/page-template/page-template.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/pages/page-template/page-template.component.ts ***!
  \************************************************************************/
/*! exports provided: PageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTemplateComponent", function() { return PageTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageTemplateComponent = /** @class */ (function () {
    function PageTemplateComponent() {
    }
    PageTemplateComponent.prototype.ngOnInit = function () {
    };
    PageTemplateComponent.prototype.SignOut = function (userSignIn) {
        localStorage.clear();
    };
    PageTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-template',
            template: __webpack_require__(/*! ./page-template.component.html */ "./src/app/modules/pages/page-template/page-template.component.html"),
            styles: [__webpack_require__(/*! ./page-template.component.css */ "./src/app/modules/pages/page-template/page-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageTemplateComponent);
    return PageTemplateComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/pages.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/pages/pages.module.ts ***!
  \***********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_template_page_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-template/page-template.component */ "./src/app/modules/pages/page-template/page-template.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/pages/home/home.component.ts");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "./src/app/modules/pages/movies-list/movies-list.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/modules/pages/contact/contact.component.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/modules/pages/movie-details/movie-details.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/modules/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/modules/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ticket-details/ticket-details.component */ "./src/app/modules/pages/ticket-details/ticket-details.component.ts");
/* harmony import */ var _ticket_details_seats_seats_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ticket-details/seats/seats.component */ "./src/app/modules/pages/ticket-details/seats/seats.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_guards_check_save_form_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/_core/guards/check-save-form.guard */ "./src/app/_core/guards/check-save-form.guard.ts");















var pageRoutes = [
    {
        path: '', component: _page_template_page_template_component__WEBPACK_IMPORTED_MODULE_3__["PageTemplateComponent"], children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
            { path: 'movie-list', component: _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_6__["MoviesListComponent"] },
            { path: 'movie-details', component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailsComponent"] },
            { path: 'sign-in', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"] },
            { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"], canDeactivate: [src_app_core_guards_check_save_form_guard__WEBPACK_IMPORTED_MODULE_14__["CheckSaveFormGuard"]] },
            { path: 'ticket-details/:id', component: _ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_11__["TicketDetailsComponent"] }
        ]
    }
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _page_template_page_template_component__WEBPACK_IMPORTED_MODULE_3__["PageTemplateComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_6__["MoviesListComponent"],
                _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailsComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
                _ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_11__["TicketDetailsComponent"],
                _ticket_details_seats_seats_component__WEBPACK_IMPORTED_MODULE_12__["SeatsComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(pageRoutes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/modules/pages/sign-in/sign-in.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/pages/sign-in/sign-in.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper_sign-in {\n    width: 40%;\n    margin: auto;\n    border: 2px solid rgb(139, 31, 31);\n    padding: 2rem;\n    border-radius: 0.7rem;\n}\n\n.wrapper_sign-in .row a {\n    text-decoration: none;\n    color: white;\n}\n\n.wrapper_sign-in .row .left:hover, .wrapper_sign-in .row .right:hover {\n    color: rgb(139, 31, 31);\n}\n\n.wrapper_sign-in .row {\n    margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcGFnZXMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6Im1vZHVsZXMvcGFnZXMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcl9zaWduLWluIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTM5LCAzMSwgMzEpO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xufVxuXG4ud3JhcHBlcl9zaWduLWluIC5yb3cgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndyYXBwZXJfc2lnbi1pbiAucm93IC5sZWZ0OmhvdmVyLCAud3JhcHBlcl9zaWduLWluIC5yb3cgLnJpZ2h0OmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDEzOSwgMzEsIDMxKTtcbn1cblxuLndyYXBwZXJfc2lnbi1pbiAucm93IHtcbiAgICBtYXJnaW46IDFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/pages/sign-in/sign-in.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/pages/sign-in/sign-in.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper_sign-in\">\n  <h3 class=\"great-title\">Sign In</h3>\n  <form #signInForm='ngForm' (ngSubmit)=\"SignIn(signInForm.value)\" class=\"sign-in-form\">\n    <div class=\"form-group\">\n      <label for=\"\">UserName: </label>\n      <input type=\"text\" name=\"UserName\" ngModel id=\"\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Password: </label>\n      <input type=\"password\" name=\"Password\" ngModel id=\"\" class=\"form-control\">\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 text-left\">\n        <a class=\"left\" routerLink='/sign-up'>I have no account!</a>\n      </div>\n      <div class=\"col-md-6 text-right\">\n        <a class=\"right\" routerLink='/'>Forgot the password!</a>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary\">Sign In</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/modules/pages/sign-in/sign-in.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pages/sign-in/sign-in.component.ts ***!
  \************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_core/services/user.service */ "./src/app/_core/services/user.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.SignIn = function (logInInfo) {
        var _this = this;
        this.userService.signIn(logInInfo.UserName, logInInfo.Password).subscribe(function (data) {
            // console.log(data.MaLoaiNguoiDung)
            if (typeof data === 'object') {
                var UserLogin = JSON.stringify(data);
                localStorage.setItem('userLogin', UserLogin);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Successful!', 'Login successfull!', 'success').then(function () {
                    _this.router.navigate(['/movie-list']);
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Warning', 'Username or password incorrect!', 'warning');
            }
        });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/modules/pages/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/modules/pages/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/sign-up/sign-up.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/pages/sign-up/sign-up.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper_sign-up {\n    width: 40%;\n    margin: auto;\n    border: 2px solid rgb(139, 31, 31);\n    border-radius: 0.7rem;\n    padding: 2rem;\n}\n\n.wrapper_sign-up .sign-up-form .form-group .alert {\n    background-color: transparent;\n    border: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcGFnZXMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCIiwiZmlsZSI6Im1vZHVsZXMvcGFnZXMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcl9zaWduLXVwIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTM5LCAzMSwgMzEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4ud3JhcHBlcl9zaWduLXVwIC5zaWduLXVwLWZvcm0gLmZvcm0tZ3JvdXAgLmFsZXJ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/pages/sign-up/sign-up.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/pages/sign-up/sign-up.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper_sign-up\">\n  <h3 class=\"great-title\">Sign Up</h3>\n  <form #signUpForm='ngForm' class=\"sign-up-form\" (ngSubmit)=\"SignUp(signUpForm.value)\">\n      <div class=\"form-group\">\n          <label for=\"\">Full Name:</label>\n          <input type=\"text\" name=\"FullName\" id=\"\" class=\"form-control\" #fullName='ngModel' ngModel required>\n          <div *ngIf=\"(fullName.touched || fullName.dirty) && fullName.errors\">\n            <small *ngIf=\"fullName.errors.required\" class=\"alert alert-danger text-danger\">Full Name is not null!</small>\n          </div>\n        </div>\n    <div class=\"form-group\">\n      <label for=\"\">User Name:</label>\n      <input type=\"text\" name=\"UserName\" id=\"\" class=\"form-control\" #userName='ngModel' minlength=\"3\" maxlength=\"32\"\n        ngModel required>\n      <div *ngIf=\"(userName.touched || userName.dirty) && userName.errors\">\n        <small *ngIf=\"userName.errors.required\" class=\"alert alert-danger text-danger\">User Name is not null!</small>\n        <small *ngIf=\"userName.errors.minlength || userName.erorrs.maxlength\" class=\"alert alert-danger text-danger\">\n          User Name must be 3-32 characters!</small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Password:</label>\n      <input type=\"password\" name=\"Password\" id=\"\" class=\"form-control\" #password='ngModel' minlength=\"8\" maxlength=\"32\"\n        ngModel required>\n      <div *ngIf=\"(password.touched || password.dirty) && password.errors\">\n        <small *ngIf=\"password.errors.required\" class=\"alert alert-danger text-danger\">Password is not null!</small>\n        <small *ngIf=\"password.errors.minlength || password.erorrs.maxlength\" class=\"alert alert-danger text-danger\">\n          Password must be 8-32 characters!</small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Verify Password:</label>\n      <input type=\"password\" name=\"VerifyPassword\" id=\"\" class=\"form-control\" #verifyPassword='ngModel'\n        [ngClass]=\"{'ng-invalid': verifyPassword.value != password.value}\" ngModel required>\n      <div\n        *ngIf=\"(verifyPassword.touched || verifyPassword.dirty) && (verifyPassword.errors || verifyPassword.value != password.value)\">\n        <small *ngIf=\"checkPassword(verifyPassword.value, password.value)\" class=\"alert alert-danger text-danger\">\n          Password is not match!\n        </small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Email:</label>\n      <input minlength=\"6\" maxlength=\"32\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" type=\"email\" name=\"Email\" #email='ngModel' id=\"\" class=\"form-control\" ngModel required>\n      <div *ngIf=\"(email.touched || email.dirty) && email.errors\">\n        <small *ngIf=\"email.errors.required\" class=\"alert alert-danger text-danger\">Email is not null!</small>\n        <small class=\"alert alert-danger text-danger\" *ngIf=\"email.errors.pattern\">Email invalid format! </small>\n        <small class=\"alert alert-danger text-danger\" *ngIf=\"email.errors.minlength || email.errors.maxlength\">Email must be 6-32 characters!</small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Phone Number</label>\n      <input type=\"number\" name=\"PhoneNumber\" #phoneNumber=\"ngModel\" id=\"\" class=\"form-control\" ngModel >\n      <div class=\"alert alert-danger text-danger\" *ngIf=\"phoneNumber.errors\">\n        <small class=\"alert alert-danger text-danger\" >Phone Number is only number!</small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" [disabled]=\"signUpForm.invalid || signUpForm.submited\" class=\"btn btn-primary\">Sign Up</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/modules/pages/sign-up/sign-up.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pages/sign-up/sign-up.component.ts ***!
  \************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_core/services/user.service */ "./src/app/_core/services/user.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService) {
        this.userService = userService;
        this.saveForm = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.checkPassword = function (verifyPassword, password) {
        if (verifyPassword !== password) {
            this.signUpForm.control.setErrors({ 'passwordErrors': true });
            return true;
        }
        console.log(this.signUpForm.errors);
        this.signUpForm.control.setErrors({ 'passwordErrors': false });
        return false;
    };
    SignUpComponent.prototype.Edit = function (user) {
        user.VerifyPassword = user.Password;
        this.signUpForm.setValue(user);
    };
    SignUpComponent.prototype.SignUp = function (user) {
        user.MaNhom = 'GP05';
        user.MaLoaiNguoiDung = 'KhachHang';
        this.userService.signUp(user).subscribe(function (data) {
            if (typeof data === 'object') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Warning!', 'Congratulation! Sign up successfull!', 'success');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Warning!', data, 'warning');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signUpForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], SignUpComponent.prototype, "signUpForm", void 0);
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/modules/pages/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/modules/pages/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/ticket-details/seats/seats.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/pages/ticket-details/seats/seats.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnSeat {\n    background-color: transparent;\n    background-image: url('https://res.cloudinary.com/dxzguyvzh/image/upload/v1553400564/seat.png');\n    background-size: cover;\n    margin: 1rem;\n    color: white;\n    font-size: 1.2rem;\n    font-weight: 600;\n    background-repeat: no-repeat;\n}\n\n.booked-seat {\n    cursor: no-drop;\n    color: black\n}\n\n.booking-seat {\n    cursor: pointer;\n    background-image: url('https://res.cloudinary.com/dxzguyvzh/image/upload/v1553479704/seat-available.png');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcGFnZXMvdGlja2V0LWRldGFpbHMvc2VhdHMvc2VhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QiwrRkFBK0Y7SUFDL0Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFDQTtJQUNJLGVBQWU7SUFDZix5R0FBeUc7SUFDekcsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJtb2R1bGVzL3BhZ2VzL3RpY2tldC1kZXRhaWxzL3NlYXRzL3NlYXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuU2VhdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9keHpndXl2emgvaW1hZ2UvdXBsb2FkL3YxNTUzNDAwNTY0L3NlYXQucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJvb2tlZC1zZWF0IHtcbiAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgY29sb3I6IGJsYWNrXG59XG4uYm9va2luZy1zZWF0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9keHpndXl2emgvaW1hZ2UvdXBsb2FkL3YxNTUzNDc5NzA0L3NlYXQtYXZhaWxhYmxlLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/pages/ticket-details/seats/seats.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pages/ticket-details/seats/seats.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btnSeat\" [ngClass]=\"{'booked-seat': seats.DaDat, 'booking-seat': bookingSeats}\"\n    [disabled]='seats.DaDat' (click)='bookASeat()'>{{seats.TenGhe}}</button>\n<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/modules/pages/ticket-details/seats/seats.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/pages/ticket-details/seats/seats.component.ts ***!
  \***********************************************************************/
/*! exports provided: SeatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeatsComponent", function() { return SeatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_core/services/movie.service */ "./src/app/_core/services/movie.service.ts");



var SeatsComponent = /** @class */ (function () {
    function SeatsComponent(movieService) {
        this.movieService = movieService;
        this.seats = {};
        this.bookingSeats = false;
    }
    SeatsComponent.prototype.ngOnInit = function () {
    };
    SeatsComponent.prototype.bookASeat = function () {
        this.bookingSeats = !this.bookingSeats;
        var bookedSeats = {
            MaGhe: this.seats.MaGhe,
            GiaVe: this.seats.MaGhe,
            BookingSeats: this.bookingSeats,
        };
        this.movieService.seats.emit(bookedSeats);
        // console.log(this.seats.TenGhe)
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SeatsComponent.prototype, "seats", void 0);
    SeatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seats',
            template: __webpack_require__(/*! ./seats.component.html */ "./src/app/modules/pages/ticket-details/seats/seats.component.html"),
            styles: [__webpack_require__(/*! ./seats.component.css */ "./src/app/modules/pages/ticket-details/seats/seats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], SeatsComponent);
    return SeatsComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/ticket-details/ticket-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/pages/ticket-details/ticket-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".screen {\n    background-color: white;\n    height: 10rem;\n    text-align: center;\n    width: 40%;\n    margin: auto;\n    background-image: url('https://res.cloudinary.com/dxzguyvzh/image/upload/v1553481506/camera.png');\n    background-repeat: no-repeat;\n    background-size: 6.5rem 5rem;\n    background-position: center;\n}\n\n.seats {\n    text-align: center;\n    margin-top: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvcGFnZXMvdGlja2V0LWRldGFpbHMvdGlja2V0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osaUdBQWlHO0lBQ2pHLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJtb2R1bGVzL3BhZ2VzL3RpY2tldC1kZXRhaWxzL3RpY2tldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R4emd1eXZ6aC9pbWFnZS91cGxvYWQvdjE1NTM0ODE1MDYvY2FtZXJhLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2LjVyZW0gNXJlbTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5zZWF0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/pages/ticket-details/ticket-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/pages/ticket-details/ticket-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screening-room\">\n  <div>\n    <h3 class=\"screen\"></h3>\n  </div>\n  <div class=\"seats\">\n    <app-seats [seats]='seats' *ngFor=\"let seats of seatsList; let i = index;\">\n      <br *ngIf=\"(i+1) % 10 == 0\">\n    </app-seats>\n    <button class=\"btn btn-primary\" (click)=\"bookingSeat()\">Book now</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/pages/ticket-details/ticket-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/pages/ticket-details/ticket-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: TicketDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailsComponent", function() { return TicketDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_core/services/movie.service */ "./src/app/_core/services/movie.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var TicketDetailsComponent = /** @class */ (function () {
    function TicketDetailsComponent(atvRoute, movieService, router) {
        this.atvRoute = atvRoute;
        this.movieService = movieService;
        this.router = router;
        this.seatsList = [];
        this.bookedSeatsList = [];
        this.showtimesID = 0;
    }
    TicketDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.atvRoute.params.subscribe(function (data) {
            _this.showtimesID = data.id;
            console.log(data.id);
            _this.GetTicketDetails(data.id);
        });
        this.movieService.seats.subscribe(function (bookingSeats) {
            if (bookingSeats.BookingSeats) {
                _this.bookedSeatsList.push(bookingSeats);
            }
            else {
                for (var i = 0; i < _this.bookedSeatsList.length; i++) {
                    if (bookingSeats.MaGhe === _this.bookedSeatsList[i].MaGhe) {
                        _this.bookedSeatsList.splice(i, 1);
                    }
                }
            }
            // console.log(this.bookedSeatsList);
        });
    };
    TicketDetailsComponent.prototype.GetTicketDetails = function (showtimesID) {
        var _this = this;
        this.movieService.getTicketDetails(showtimesID).subscribe(function (data) {
            if (typeof data === 'object') {
                console.log(data);
                _this.seatsList = data.DanhSachGhe;
            }
        });
    };
    TicketDetailsComponent.prototype.bookingSeat = function () {
        var _this = this;
        var userName = '';
        if (localStorage.getItem('userLogin')) {
            var userLogin = JSON.parse(localStorage.getItem('userLogin'));
            userName = userLogin.TaiKhoan;
        }
        if (userName != '') {
            if (this.bookedSeatsList.length >= 1) {
                var seatInfo = {
                    "MaLichChieu": this.showtimesID,
                    "TaiKhoanNguoiDung": userName,
                    "DanhSachVe": this.bookedSeatsList
                };
                this.movieService.getTicket(seatInfo).subscribe(function (data) {
                    if (typeof data == 'string') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Successfull', 'Congratulation! You booked seats successful!', 'success').then(function () {
                            location.reload();
                        });
                    }
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Warning', 'You are not picked the seat! Please pick a seat!', 'warning');
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Warning', 'You must be log in first!', 'warning').then(function () {
                _this.router.navigate(['/sign-in']);
            });
        }
    };
    TicketDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-details',
            template: __webpack_require__(/*! ./ticket-details.component.html */ "./src/app/modules/pages/ticket-details/ticket-details.component.html"),
            styles: [__webpack_require__(/*! ./ticket-details.component.css */ "./src/app/modules/pages/ticket-details/ticket-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TicketDetailsComponent);
    return TicketDetailsComponent;
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

module.exports = __webpack_require__(/*! /home/virus/Front_End/MovieTimes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map