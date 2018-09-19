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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n.form {\r\n    width: 35rem;\r\n    margin: 3rem auto;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);\r\n    text-align: center;\r\n    position: relative;\r\n    min-height: 25rem;\r\n    -webkit-animation: fade-in .4s ease-out forwards;\r\n            animation: fade-in .4s ease-out forwards;\r\n  }\r\n\r\n\r\n  .formx {\r\n    width: 70rem;\r\n    margin: 3rem auto;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);\r\n    text-align: center;\r\n    position: relative;\r\n    min-height: 25rem;\r\n    -webkit-animation: fade-in .4s ease-out forwards;\r\n            animation: fade-in .4s ease-out forwards;\r\n  }\r\n\r\n\r\n  mybtn{\r\n    color:white;\r\n    background: linear-gradient(to right bottom, #F27D86, #B978C8, #9379F8) center/cover no-repeat;\r\n\r\n}\r\n\r\n\r\n  .greenx{\r\n    color:rgb(75, 129, 61);\r\n}\r\n\r\n\r\n  .navleft{\r\n    text-align: left;\r\n    width:100%;\r\n}\r\n\r\n\r\n  .overlayit{\r\n    position: relative;\r\n    top:10px;\r\n    right:45px;\r\n    display: initial;\r\n    font-size: 8px;\r\n    font-stretch: semi-condensed;\r\n    font-style: italic;\r\n\r\n}\r\n\r\n\r\n  .nav{\r\n    text-align: right;\r\n}\r\n\r\n\r\n  a{\r\n    color:white;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n  .nav>span{\r\n    \r\n    color:white;\r\n    font-size: 12px;\r\n    padding:12px;\r\n    display: inline-block\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: transparent\">\n\n\n  <app-header></app-header>\n\n\n<router-outlet></router-outlet>\n  \n<app-footer></app-footer>\n\n\n</div>"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _policy_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./policy/policy.component */ "./src/app/policy/policy.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _policy_policy_component__WEBPACK_IMPORTED_MODULE_10__["PolicyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hidden-xs hidden-sm \">\n  <br><br>\n</div>\n<footer class=\"container-fluid\" id=\"footer\" >\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <p>Tax Income Calulator is a copyright Property under the law stated by EU guidelines.</p>\n\n    </div>\n\n  </div>\n  \n  <!-- <p>Copyright (c) 2018 by Atrix Digital Solutions</p> -->\n</footer>\n\n"

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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.navleft{\r\n    text-align: left;\r\n    width:100%;\r\n}\r\n.overlayit{\r\n    position: relative;\r\n    top:10px;\r\n    right:45px;\r\n    display: initial;\r\n    font-size: 8px;\r\n    font-stretch: semi-condensed;\r\n    font-style: italic;\r\n\r\n}\r\n.nav{\r\n    text-align: right;\r\n}\r\na{\r\n    color:white;\r\n    text-decoration: none;\r\n}\r\n.nav>span{\r\n    \r\n    color:white;\r\n    font-size: 12px;\r\n    padding:12px;\r\n    display: inline-block\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      \n  <nav class=\"nav\">\n      <span><a href=\"\">home</a></span>\n      <span><a href=\"\">Blog</a></span>\n      <span><a href=\"\">Privacy Policy</a> </span>\n      <span><a href=\"\">Terms & Conditions</a></span>\n      <span><a href=\"\">Contact </a></span>\n    </nav>\n    \n  \n\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.form {\r\n    width: 100%;\r\n    margin: 3rem auto;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);\r\n    text-align: center;\r\n    position: relative;\r\n    min-height: 25rem;\r\n    -webkit-animation: fade-in .4s ease-out forwards;\r\n            animation: fade-in .4s ease-out forwards;\r\n  }\r\n\r\n\r\n  .formx {\r\n    /* width: 100%; */\r\n    margin-left: 3rem auto;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);\r\n    text-align: center;\r\n    position: relative;\r\n    min-height: 25rem;\r\n    -webkit-animation: fade-in .4s ease-out forwards;\r\n            animation: fade-in .4s ease-out forwards;\r\n  }\r\n\r\n\r\n  mybtn{\r\n    color:white;\r\n    background: linear-gradient(to right bottom, #F27D86, #B978C8, #9379F8) center/cover no-repeat;\r\n\r\n}\r\n\r\n\r\n  .greenx{\r\n    color:rgb(75, 129, 61);\r\n}\r\n\r\n\r\n  .navleft{\r\n    text-align: left;\r\n    width:100%;\r\n}\r\n\r\n\r\n  .overlayit{\r\n    position: relative;\r\n    top:10px;\r\n    right:45px;\r\n    display: initial;\r\n    font-size: 8px;\r\n    font-stretch: semi-condensed;\r\n    font-style: italic;\r\n\r\n}\r\n\r\n\r\n  .nav{\r\n    text-align: right;\r\n}\r\n\r\n\r\n  a{\r\n    color:white;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n  .nav>span{\r\n    \r\n    color:white;\r\n    font-size: 12px;\r\n    padding:12px;\r\n    display: inline-block\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- \n   <svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <symbol id=\"volume\" viewBox=\"0 0 34 32\">\n      <title>Volume Enabled</title>\n      <path fill=\"currentColor\" d=\"M27.814 28.814c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.739-2.739 4.247-6.38 4.247-10.253s-1.508-7.514-4.247-10.253c-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c3.305 3.305 5.126 7.7 5.126 12.374s-1.82 9.069-5.126 12.374c-0.293 0.293-0.677 0.439-1.061 0.439zM22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z\" />\n      <path fill=\"currentColor\" d=\"M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z\" />\n    </symbol>\n    \n    <symbol id=\"muted\" viewBox=\"0 0 32 32\">\n      <title>Volume Muted</title>\n      <path fill=\"currentColor\" d=\"M30 19.348v2.652h-2.652l-3.348-3.348-3.348 3.348h-2.652v-2.652l3.348-3.348-3.348-3.348v-2.652h2.652l3.348 3.348 3.348-3.348h2.652v2.652l-3.348 3.348 3.348 3.348z\" />\n      <path fill=\"currentColor\" d=\"M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z\" />\n    </symbol>\n    \n    <symbol id=\"valid\" viewBox=\"0 0 32 32\">\n      <title>Input Valid</title>\n      <path fill=\"currentColor\" d=\"M27 4l-15 15-7-7-5 5 12 12 20-20z\"></path>\n    </symbol>\n  </svg> -->\n  \n  \n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content text-center\">\n        <div class=\"modal-header text-center\">\n          <h5 class=\"modal-title text-center\" id=\"exampleModalLabel\">Change Country</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body text-center\">\n          <span style=\"padding:10px;\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg\" class=\"clearfix border avatar img-responsive img-circle\" style=\"width:125px;\" alt=\"\">\n          </span>\n          <span style=\"padding:10px;\">\n          <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII=\" class=\"avatar img-responsive img-circle\" style=\"width:125px;\" alt=\"\">\n          </span>\n         <span style=\"padding:10px;\">\n          <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACyCAMAAACnS4D4AAAAQlBMVEUAUpP+ywD/zwAASpr/0QDdvwgGUJaYmE8AS5n5zABUcHpjenAATZb/zQCWl1BUbn0ARZ1ac3hObH+2qDuuo0LkwA1+MyzGAAABxElEQVR4nO3aSVZCMRRF0QAWWIBYMP+pOoNNGj9Ll549gZuc9htjjdfnp90t+5fjovVfrjhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAfm4hx++pk3PKxxfJuKs2h9I+N+kevNNrvdddX4RsZ+kdNEnNOq8Y2MiT/8W8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAfG3SoT4/tl49sYj2ucvybifJ4XrW9kHNa4fEwcTL5fFq1vZNWRanfIUBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigN/Is43u1Vtvr+VyO8AAAAASUVORK5CYII=\" class=\"avatar img-responsive img-circle\" style=\"width:125px;\" alt=\"\">\n         </span>\n        </div>\n  <!--       <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n        </div> -->\n      </div>\n    </div>\n  </div>\n  \n  \n\n  <div class=\"hidden-lg hidden-md\">\n    <br>\n  </div>\n  \n  <section class=\"container\" [class]=\"formVal\" >\n    <header style=\"background-color:rgba(0,0,0,0.01)\" class=\"shadow-sm\" (click)=\"showFlagModal()\">\n      <button type=\"button\" class=\"microphone\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n      <img [src]=\"country.flag\" class=\"avatar img-responsive img-circle\" style=\"width:35px;\" alt=\"\">\n      </button>\n      <small class=\"overlayit\">{{country.name | uppercase}}</small>\n  \n      <div id=\"progress-bar\">\n        <div id=\"progress-bar-inner\"></div>\n      </div>\n    </header>\n    \n    \n    <div class=\"container\">    \n        <h1 *ngIf=\"showResult == true\" class=\"clearfix\">Loan Cacluator</h1>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis esse beatae quia illo accusamus blanditiis sequi et iusto, itaque optio dolor dignissimos dicta reiciendis temporibus vitae aspernatur repudiandae libero nesciunt?</p>\n  \n        <hr>\n      <div class=\"row\">\n        <section class=\"col-md-6\">\n          <!-- <button type=\"button\" class=\"button is-purple\" data-action=\"next\">Yes, let's start!</button> -->\n  <label style=\"font-size: 50px\" *ngIf=\"income\">{{(income | currency:'€') + '/ year'}}</label>\n          \n        <div class=\"section \" data-section data-message=\"Alright, let's begin. I need your first name, so please write it into the text field and click next when you have finished.\">\n            <label for=\"firstname\">Let's start by entering your Gross Income: <span class=\"required\">*</span></label>\n            \n            <div class=\"form-group mb-3\">\n              <input type=\"number\" (keyup)=\"calculatePayrollTax() \" class=\"form-control\" id=\"firstname\" [(ngModel)]=\"income\" name=\"firstname\" required placeholder=\"e.g. 10000\" data-error-message=\"This field can't be empty, please enter your first name.\">\n              <svg class=\"form-addon\" width=\"20\" height=\"20\">\n                <use xlink:href=\"#valid\"></use>\n              </svg>\n            </div>\n            <div class=\"row\">\n              <div class=\"custom-control custom-checkbox mr-sm-2\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing\"  [checked]=\"calculatePayrollTax()\"  [(ngModel)]=\"social\">\n                  <label class=\"custom-control-label\" for=\"customControlAutosizing\"  >Social Security</label>\n              </div>\n                <div class=\"custom-control custom-checkbox mr-sm-2\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing1\" [checked]=\"calculatePayrollTax()\" [(ngModel)]=\"years\">\n                    <label class=\"custom-control-label\" for=\"customControlAutosizing1\">65 years or above</label>\n                  </div>\n                <div class=\"custom-control custom-checkbox mr-sm-2\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing2\" [checked]=\"calculatePayrollTax()\"   [(ngModel)]=\"ruling\">\n                      <label class=\"custom-control-label\" for=\"customControlAutosizing2\">30% Ruling</label>\n                  </div>\n           </div>\n  <!-- <button type=\"button\" class=\"button is-purple\"  (click)=\"search()\" [disabled]=\"!income\"> {{showResult? 'Close':'Next'}}</button> -->\n          </div>\n  \n        </section>\n        <section class=\"col-md-6\"  *ngIf=\"showResult \">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-12 text-center clearfix\">\n                <h3>Results</h3>\n                <p>\n                 \n                    <!-- <button class=\"button is-purple\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                      Settings\n                      <i class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                    </button> -->\n                  </p>\n                  <div class=\"collapse\" id=\"collapseExample\">\n                    <div class=\"card card-body\">\n                   <small>Toggle the following options to get more advance results:\n                   <div class=\"row\">\n                      <div class=\"custom-control custom-checkbox mr-sm-2\">\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing\"  [(ngModel)]=\"social\">\n                          <label class=\"custom-control-label\" for=\"customControlAutosizing\"  >Social Security</label>\n                      </div>\n                        <div class=\"custom-control custom-checkbox mr-sm-2 col-sm-12 col-xs-12\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing1\"  [(ngModel)]=\"years\">\n                            <label class=\"custom-control-label\" for=\"customControlAutosizing1\">65 years or</label>\n                          </div>\n                        <div class=\"custom-control custom-checkbox mr-sm-2 col-sm-12 \">\n                              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing2\" (change)=\"calculatePayrollTax()\"  [(ngModel)]=\"ruling\">\n                              <label class=\"custom-control-label\" for=\"customControlAutosizing2\">30% Ruling</label>\n                          </div>\n                   </div>\n                  </small>  \n                     <br>\n  \n  \n                   \n                   \n                   \n                    </div>\n                  </div>\n                <table class=\"table table-borderless table-hover shadow p-3 mb-5 bg-white rounded\">\n                    <thead class=\"thead-dark\">\n                      <tr>\n                        <th scope=\"col\"># </th>\n                        <th scope=\"col\"> Value</th>\n                      </tr>\n                    </thead>\n                    <tbody >\n                      <tr>\n                        <th scope=\"row\">Taxable Amount</th>\n                        <td class=\"text-success\">{{ ( taxableIncome | currency:'€') }}</td>\n                      </tr>\n                      <tr >\n                        <th scope=\"row\" >Tax Free Amount</th>\n                        <td class=\"text-success\">{{ ( taxFreeIncome | currency:'€') }}</td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Payroll Tax</th>\n                        <td class=\"text-danger\">- {{ (payrolltax | currency:'€')}}</td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Social Security Tax</th>\n                        <td class=\"text-danger\">- {{ (socialSecurity | currency:'€')}}</td>\n                      </tr>\n                      <tr>\n                          <th scope=\"row\">General Tax Credit</th>\n                          <td>+ {{ (generalTaxCredit | currency:'€')}}</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">Labour  Tax Credit</th>\n                            <td>+ {{ (labourTaxCredit | currency:'€')}}</td>\n                          </tr>\n                          <tr>\n                              <th scope=\"row\">Year Net Income</th>\n                              <td>{{ (netIncome | currency:'€')}}</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">Monthly Net Income</th>\n                                <td>{{ ((netIncome / 12 )| currency:'€')}}</td>\n                              </tr>\n  \n                    </tbody>\n                  </table>\n  \n  \n  \n              </div>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </section>\n  \n  \n  \n  \n\n "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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


var HomeComponent = /** @class */ (function () {
    //germany
    function HomeComponent(cdref) {
        this.cdref = cdref;
        this.show = false;
        // yearTax={
        //   tax2016:null,
        //   social2016:null,
        //   year2016:null,
        //   tax2018:null,
        //   social2018:null,
        //   year2018:null
        // }
        this.socialRates = {
            slab1: {
                youngPercent: 27.65,
                youngValue: 0,
                oldPercent: 0,
                oldValue: 0
            },
        };
        //finland
        this.country = {
            flag: '../assets/img/flags/netherland.png',
            name: 'Netherland'
        };
        this.showResult = true;
        this.formVal = 'formx';
        this.income = null;
        this.social = false;
        this.years = false;
        this.ruling = false;
        this.taxableIncome = 0;
        this.socialSecurity = 0;
        this.generalTaxCredit = 0;
        this.labourTaxCredit = 0;
        this.taxFreeIncome = 0;
        this.netIncome = 0;
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }
    HomeComponent.prototype.runCalc = function (e) {
        console.log(e.target.value);
    };
    HomeComponent.prototype.ngAfterContentChecked = function () {
        this.calculatePayrollTax();
    };
    HomeComponent.prototype.ngOnInit = function () {
        //payroll calculation
        console.log("running Payroll...");
    };
    HomeComponent.prototype.search = function () {
        this.showResult = !this.showResult;
        if (this.formVal == 'form') {
            this.formVal = 'formx';
        }
        else if (this.formVal == 'formx') {
            this.formVal = 'form';
        }
    };
    HomeComponent.prototype.formula = function (income) {
        return this.income;
    };
    HomeComponent.prototype.calculatePayrollTax = function () {
        var income = this.income;
        var payrolltax = 0;
        var socialSecurity = 0;
        var generalTaxCredit = 0;
        var labourTaxCredit = 0;
        if (this.income == null || this.income == 0 || this.income == undefined) {
            this.taxableIncome = 0;
            this.socialSecurity = 0;
            this.generalTaxCredit = 0;
            this.labourTaxCredit = 0;
            this.payrolltax = 0;
        }
        /* 30% ruling  */
        if (this.ruling == true) {
            if (income > 37296) {
                if (income > 37296 && income <= 53280) {
                    this.taxableIncome = 37296;
                    this.taxFreeIncome = this.income - 37296;
                    console.log(this.taxFreeIncome);
                }
                else if (income > 53280) {
                    this.taxFreeIncome = this.ofPercent(income, 30);
                    this.taxableIncome = income - this.taxFreeIncome;
                }
            }
            else if (income <= 37296) {
                this.taxFreeIncome = 0;
                this.taxableIncome = this.income;
            }
            income = this.taxableIncome;
        }
        else {
            income = this.income;
            this.taxableIncome = this.income;
        }
        /* ---------------------- for above 65 ------------------------------- */
        if (this.years == true) {
            console.log("age greater");
            /* labour TAX  */
            if (income > 33100 && income <= 123350) {
                labourTaxCredit = (1659 - this.ofPercent((income - 33100), 1.84));
                this.labourTaxCredit = labourTaxCredit;
            }
            if (income > 123350) {
                this.labourTaxCredit = 0;
            }
            if (income <= 33100) {
                this.labourTaxCredit = 0; /* not found yet.... */
            }
            /* IF SOCIAL SECURITY == true */
            if (this.social == true) {
                if (income > 0 && income <= 20142) {
                    payrolltax = this.ofPercent(income, 8.90);
                    socialSecurity = this.ofPercent(income, 9.75);
                    generalTaxCredit = 1157;
                    labourTaxCredit = 0; /* not done yet..... */
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
                else if (income > 20142 && income <= 33994) {
                    payrolltax = (1792.64 + (this.ofPercent((income - 20142), 13.20)));
                    socialSecurity = (1963.85 + (this.ofPercent((income - 20142), 9.75)));
                    generalTaxCredit = 1157 - (this.ofPercent(income - 20142, 2.392226));
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
                else if (income > 33994 && income <= 68507) {
                    payrolltax = (3621.10 + (this.ofPercent((income - 33994), 40.85)));
                    socialSecurity = 3313.41;
                    generalTaxCredit = 1157 - (this.ofPercent(income - 20142, 2.392226));
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
                else if (income > 68507) {
                    payrolltax = (17719.66 + (this.ofPercent((income - 68507), 51.95)));
                    socialSecurity = 3313.41;
                    generalTaxCredit = 0;
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
            } /* BASIC  (socialSecurity == false) */
            else {
                if (income > 0 && income <= 20142) {
                    payrolltax = this.ofPercent(income, 8.90);
                    generalTaxCredit = 1157;
                    console.log('Payroll tax is about:' + payrolltax);
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
                else if (income > 20142 && income <= 33994) {
                    payrolltax = (1792.64 + (this.ofPercent((income - 20142), 13.20)));
                    generalTaxCredit = 1157 - (this.ofPercent(income - 20142, 2.392226));
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
                else if (income > 33994 && income <= 68507) {
                    payrolltax = (3621.10 + (this.ofPercent((income - 33994), 40.85)));
                    generalTaxCredit = 1157 - (this.ofPercent(income - 20142, 2.392226));
                    console.log('Payroll tax is about:' + payrolltax);
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
                else if (income > 68507) {
                    payrolltax = (17719.66 + (this.ofPercent((income - 68507), 51.95)));
                    generalTaxCredit = 0;
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
            }
        }
        else if (this.years == false) {
            /* labour TAX  */
            if (income > 33100 && income <= 123350) {
                labourTaxCredit = (3249 - this.ofPercent((income - 33100), 3.60));
                this.labourTaxCredit = labourTaxCredit;
            }
            if (income > 123350) {
                this.labourTaxCredit = 0;
            }
            if (income <= 33100) {
                this.labourTaxCredit = 0;
            }
            /* IF SOCIAL SECURITY == true */
            if (this.social == true) {
                if (income > 0 && income <= 20142) {
                    payrolltax = this.ofPercent(income, 8.90);
                    socialSecurity = this.ofPercent(income, 27.65);
                    generalTaxCredit = 2265;
                    labourTaxCredit = 0;
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
                else if (income > 20142 && income <= 33994) {
                    payrolltax = (1792.64 + (this.ofPercent((income - 20142), 13.20)));
                    socialSecurity = (5569.26 + (this.ofPercent((income - 20142), 27.65)));
                    generalTaxCredit = 2265 - (this.ofPercent(income - 20142, 4.68313));
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
                else if (income > 33994 && income <= 68507) {
                    payrolltax = (3621.10 + (this.ofPercent((income - 33994), 40.85)));
                    socialSecurity = 9399.34;
                    generalTaxCredit = 2265 - (this.ofPercent(income - 20142, 4.68313));
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
                else if (income > 68507) {
                    payrolltax = (17719.66 + (this.ofPercent((income - 68507), 51.95)));
                    socialSecurity = 9399.34;
                    generalTaxCredit = 0;
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
            } /* BASIC  (socialSecurity == false) */
            else {
                if (income > 0 && income <= 20142) {
                    payrolltax = this.ofPercent(income, 8.90);
                    generalTaxCredit = 2265;
                    console.log('Payroll tax is about:' + payrolltax);
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
                else if (income > 20142 && income <= 33994) {
                    payrolltax = (1792.64 + (this.ofPercent((income - 20142), 13.20)));
                    generalTaxCredit = 2265 - (this.ofPercent(income - 20142, 4.68313));
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
                else if (income > 33994 && income <= 68507) {
                    payrolltax = (3621.10 + (this.ofPercent((income - 33994), 40.85)));
                    generalTaxCredit = 2265 - (this.ofPercent(income - 20142, 4.68313));
                    console.log('Payroll tax is about:' + payrolltax);
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
                else if (income > 68507) {
                    payrolltax = (17719.66 + (this.ofPercent((income - 68507), 51.95)));
                    generalTaxCredit = 0;
                    this.setValues(payrolltax, socialSecurity, generalTaxCredit, labourTaxCredit);
                }
            }
        }
        this.calculateYearNetIncome();
    };
    HomeComponent.prototype.calculateYearNetIncome = function () {
        // taxable - payrol - 
        this.netIncome = this.taxableIncome + this.taxFreeIncome - this.payrolltax - this.socialSecurity + this.generalTaxCredit + this.labourTaxCredit;
    };
    HomeComponent.prototype.setValues = function (p, s, g, l) {
        this.payrolltax = p;
        this.socialSecurity = s;
        this.generalTaxCredit = g;
        this.labourTaxCredit = l;
    };
    HomeComponent.prototype.formulaPayrollTax = function () {
        var income = this.income; /*  income */
        if (this.ruling == true) {
            income = this.percentage(income, 30);
            if (income > 0 && income < 20142) {
                var tax = 8.90;
            }
            else if (income >= 20142 && income < 33994) {
                var tax = 13.20;
            }
            else if (income >= 33994 && income < 68507) {
                var tax = 40.85;
            }
            else if (income >= 68507) {
                var tax = 51.95;
            }
        }
        else {
            if (income > 0 && income <= 20142) {
                var tax = 8.90; /* division 1 */
                return this.percentageInsurance(income, tax);
            }
            else if (income > 20142 && income < 33994) {
                var tax = 13.20; /* division 2 */
                return this.percentageInsurance(income, tax);
            }
            else if (income >= 33994 && income < 68507) {
                var tax = 40.85; /* division 3 */
                return this.percentage(income, tax);
            }
            else if (income >= 68507) {
                var tax = 51.95; /* division 4 */
                return this.percentage(income, tax);
            }
        }
    };
    HomeComponent.prototype.socialSecurityTax = function () {
        var income = this.income;
        if (this.social == true) {
            if (this.years == true) {
                return this.percentage(income, 9.75);
            }
            else {
                return this.percentage(income, 28.14);
            }
        }
        else {
            return 0;
        }
    };
    HomeComponent.prototype.generaTax = function () {
        var income = this.income;
        if (this.social == true) {
            if (this.years == true) {
                var tax = 5.78; /*  age is greater than 65 */
                return this.percentage(income, tax);
            }
            else {
                var tax = 11.325; /*  if age < 65  */
                return this.percentage(income, tax);
            }
        }
        else {
            var tax = 2.76; /*  normal */
            return this.percentage(income, tax);
        }
    };
    HomeComponent.prototype.ofPercent = function (amount, percent) {
        return (amount / 100) * percent;
    };
    HomeComponent.prototype.percentage = function (value, percent) {
        return (value / 100) * percent;
    };
    HomeComponent.prototype.percentageInsurance = function (value, percent) {
        return (value / 100) * (percent + 27.65);
    };
    HomeComponent.prototype.showFlagModal = function () {
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus');
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/policy/policy.component.css":
/*!*********************************************!*\
  !*** ./src/app/policy/policy.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/policy/policy.component.html":
/*!**********************************************!*\
  !*** ./src/app/policy/policy.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  policy works!\n</p>\n"

/***/ }),

/***/ "./src/app/policy/policy.component.ts":
/*!********************************************!*\
  !*** ./src/app/policy/policy.component.ts ***!
  \********************************************/
/*! exports provided: PolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyComponent", function() { return PolicyComponent; });
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

var PolicyComponent = /** @class */ (function () {
    function PolicyComponent() {
    }
    PolicyComponent.prototype.ngOnInit = function () {
    };
    PolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policy',
            template: __webpack_require__(/*! ./policy.component.html */ "./src/app/policy/policy.component.html"),
            styles: [__webpack_require__(/*! ./policy.component.css */ "./src/app/policy/policy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PolicyComponent);
    return PolicyComponent;
}());



/***/ }),

/***/ "./src/app/privacy/privacy.component.css":
/*!***********************************************!*\
  !*** ./src/app/privacy/privacy.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/privacy/privacy.component.html":
/*!************************************************!*\
  !*** ./src/app/privacy/privacy.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  privacy works!\n</p>\n"

/***/ }),

/***/ "./src/app/privacy/privacy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
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

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.css */ "./src/app/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
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

module.exports = __webpack_require__(/*! C:\Atrix\Projects\tax-calculator\project\myfinax\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map