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

module.exports = "\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n      <h1>Blog </h1>\n\n    </div>\n  </div>\n</div>"

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

module.exports = "\r\n\r\n\r\n.form {\r\n    width: auto;\r\n    margin: 3rem auto;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);\r\n    text-align: center;\r\n    position: relative;\r\n    min-height: 25rem;\r\n    -webkit-animation: fade-in .4s ease-out forwards;\r\n            animation: fade-in .4s ease-out forwards;\r\n  }\r\n\r\n\r\n  .formx {\r\n    width: 100%;\r\n    margin-left: 3rem auto;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);\r\n    text-align: center;\r\n    position: relative;\r\n    min-height: 25rem;\r\n    -webkit-animation: fade-in .4s ease-out forwards;\r\n            animation: fade-in .4s ease-out forwards;\r\n  }\r\n\r\n\r\n  mybtn{\r\n    color:white;\r\n    background: linear-gradient(to right bottom, #F27D86, #B978C8, #9379F8) center/cover no-repeat;\r\n\r\n}\r\n\r\n\r\n  .greenx{\r\n    color:rgb(75, 129, 61);\r\n}\r\n\r\n\r\n  .navleft{\r\n    text-align: left;\r\n    width:100%;\r\n}\r\n\r\n\r\n  .overlayit{\r\n    position: relative;\r\n    top:7.5px;\r\n    right:52px;\r\n    display: initial;\r\n    font-size: 8px;\r\n    font-stretch: semi-condensed;\r\n\r\n}\r\n\r\n\r\n  .nav{\r\n    text-align: right;\r\n}\r\n\r\n\r\n  a{\r\n    color:white;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n  .nav>span{\r\n\r\n    color:white;\r\n    font-size: 12px;\r\n    padding:12px;\r\n    display: inline-block\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: transparent\">\n\n\n  <app-header></app-header>\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content text-center\">\n        <div class=\"modal-header text-center\">\n          <h5 class=\"modal-title text-center\" id=\"exampleModalLabel\">Change Country</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body text-center\">\n          <span style=\"padding:10px;\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg\" class=\"clearfix border avatar img-responsive img-circle\" style=\"width:125px;\" alt=\"\">\n          </span>\n          <span style=\"padding:10px;\">\n          <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII=\" class=\"avatar img-responsive img-circle\" style=\"width:125px;\" alt=\"\">\n          </span>\n         <span style=\"padding:10px;\">\n          <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACyCAMAAACnS4D4AAAAQlBMVEUAUpP+ywD/zwAASpr/0QDdvwgGUJaYmE8AS5n5zABUcHpjenAATZb/zQCWl1BUbn0ARZ1ac3hObH+2qDuuo0LkwA1+MyzGAAABxElEQVR4nO3aSVZCMRRF0QAWWIBYMP+pOoNNGj9Ll549gZuc9htjjdfnp90t+5fjovVfrjhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAfm4hx++pk3PKxxfJuKs2h9I+N+kevNNrvdddX4RsZ+kdNEnNOq8Y2MiT/8W8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAfG3SoT4/tl49sYj2ucvybifJ4XrW9kHNa4fEwcTL5fFq1vZNWRanfIUBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigN/Is43u1Vtvr+VyO8AAAAASUVORK5CYII=\" class=\"avatar img-responsive img-circle\" style=\"width:125px;\" alt=\"\">\n         </span>\n        </div>\n  <!--       <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n        </div> -->\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"hidden-lg hidden-md\" >\n    <br>\n  </div>\n  <section class=\"container\" [class]=\"formVal\" >\n    <header style=\"background-color:rgba(0,0,0,0.01)\" class=\"shadow-sm\" (click)=\"showFlagModal()\">\n      <div style=\"position: relative;left:18.48px\">\n      <button type=\"button\" class=\"microphone\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n      <img [src]=\"country.flag\" class=\"avatar img-responsive img-circle\" style=\"width:35px;\" alt=\"\">\n      </button>\n      <small class=\"overlayit\">Netherland</small>\n    </div>\n      <div id=\"progress-bar\">\n        <div id=\"progress-bar-inner\"></div>\n      </div>\n    </header>\n\n\n\n    <router-outlet ></router-outlet>\n\n    </section>\n\n\n<br>    <br>\n    <section class=\"container\" [class]=\"formVal\" >\n      <app-under></app-under>\n\n      </section>\n<app-footer></app-footer>\n\n\n</div>\n"

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
/* harmony import */ var ngx_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-animate */ "./node_modules/ngx-animate/lib/index.js");
/* harmony import */ var ngx_animate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_animate__WEBPACK_IMPORTED_MODULE_2__);
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


// my-component.component.ts


var AppComponent = /** @class */ (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
        this.formVal = 'formx';
        //finland
        this.country = {
            flag: '../assets/img/svg/netherlands.svg',
            name: 'Netherland'
        };
        console.log(this.router.url);
        console.log(location.pathname);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getUrl();
    };
    AppComponent.prototype.showFlagModal = function () {
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus');
        });
    };
    AppComponent.prototype.getUrl = function () {
        console.log(location.href);
        console.log(location.pathname);
        if (location.pathname === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('bounce', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(ngx_animate__WEBPACK_IMPORTED_MODULE_2__["bounce"], {
                        params: { timing: 5, delay: 2 }
                    }))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(ngx_animate__WEBPACK_IMPORTED_MODULE_2__["slideInLeft"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(ngx_animate__WEBPACK_IMPORTED_MODULE_2__["slideInLeft"]))]),
            ],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _under_under_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./under/under.component */ "./src/app/under/under.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//external
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
                _policy_policy_component__WEBPACK_IMPORTED_MODULE_10__["PolicyComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
                _under_under_component__WEBPACK_IMPORTED_MODULE_14__["UnderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"] },
                    { path: 'privacy', component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyComponent"] },
                    { path: 'policy', component: _policy_policy_component__WEBPACK_IMPORTED_MODULE_10__["PolicyComponent"] },
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"] },
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

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n      <h1>Blog </h1>\n\n    </div>\n  </div>\n</div>"

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

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n  border-color:rgba(0, 0, 0, 0.082);\r\n  color:rgba(0, 0, 0, 0.774);\r\n  -webkit-text-emphasis: 20em;\r\n          text-emphasis: 20em;\r\n  box-shadow: 20px black;\r\n  -webkit-text-emphasis-color: red;\r\n          text-emphasis-color: red\r\n}\r\n\r\n\r\nsvg {\r\n    width:240px;\r\n    height: 240px;\r\n    margin: 0 auto;\r\n    margin-top:1vh;\r\n    display:block;\r\n\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 \">\n      <h1>Contact us </h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos iste fugiat iure doloremque soluta optio quidem adipisci blanditiis, deleniti laudantium illo porro ipsa numquam, omnis nihil libero at ratione eligendi?</p>\n      <hr>\n      <svg version=\"1.1\" class=\"icon-svg\" id=\"icon-contact\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 378 314.8\" style=\"enable-background:new 0 0 378 314.8;\" xml:space=\"preserve\">\n        <path class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" d=\"M187.2,7\n            C121.4,7,65.5,49,44.9,107.7c-5.5,15.7-8.5,32.5-8.5,50c0,61.5,36.9,114.5,89.7,137.9c18.7,8.3,39.3,12.9,61,12.9\n            c83.3,0,150.8-67.5,150.8-150.8S270.4,7,187.2,7z\"/>\n        <g id=\"back\">\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"122.3\" y1=\"35.5\" x2=\"145.7\" y2=\"35.5\"/>\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"134\" y1=\"44\" x2=\"173.5\" y2=\"44\"/>\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"59.7\" y1=\"221.9\" x2=\"71.4\" y2=\"221.9\"/>\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"265.2\" y1=\"233.7\" x2=\"282\" y2=\"233.7\"/>\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"291.4\" y1=\"233.7\" x2=\"317.4\" y2=\"233.7\"/>\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"278.8\" y1=\"217.9\" x2=\"305\" y2=\"217.9\"/>\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"120.4\" y1=\"281.5\" x2=\"147.7\" y2=\"281.5\"/>\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"152.3\" y1=\"281.5\" x2=\"162.5\" y2=\"281.5\"/>\n        </g>\n        <g id=\"back2\">\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"122.3\" y1=\"35.5\" x2=\"145.7\" y2=\"35.5\"/>\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"134\" y1=\"44\" x2=\"173.5\" y2=\"44\"/>\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"59.7\" y1=\"221.9\" x2=\"71.4\" y2=\"221.9\"/>\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"291.4\" y1=\"233.7\" x2=\"317.4\" y2=\"233.7\"/>\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"278.8\" y1=\"217.9\" x2=\"305\" y2=\"217.9\"/>\n            <line style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"152.3\" y1=\"281.5\" x2=\"162.5\" y2=\"281.5\"/>\n        </g>\n        <g id=\"bird\">\n            <g>\n\n                    <rect x=\"147.7\" y=\"211.1\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" width=\"72\" height=\"45.2\"/>\n                <polyline class=\"cloud1-draw\" style=\"fill:none;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" points=\"147.7,211.1 \n                    183.6,239.4 219.6,211.1 \t\t\"/>\n            </g>\n            <g>\n                <path class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" d=\"M87,161.4\n                    c-1.9,1.2-0.6,4.6,1.6,4.3l16.7-1.8l-2.3-5.6l-2.3-5.6L87,161.4z\"/>\n                <path class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" d=\"M290.8,147.2l-38.5,0\n                    c0,0,0-0.1,0-0.1H205l23.1-39.3c5.9-10,7-22.3,2.3-33c-3.8-8.6-10.8-15.8-20.3-19.5v0c-1.5-0.6-3.2,0-4,1.4l-60,90.4l0,0\n                    c-0.4-3.2-1.4-6.4-3.3-9.5c-5.3-8.6-16-12.6-25.7-9.6c-12.9,4-19.4,18-14.3,30.2c1.8,4.3,4.8,7.8,8.4,10.2\n                    c6.1,4,11.7,8.7,17.1,13.7c53.7,49.2,87.8,26.1,106.3,0.1h44.4c5,0,9.1-4.1,9.1-9.1v0c0-3.2-1.6-6-4.1-7.6h6.8\n                    c5.3,0,9.5-4.4,9.1-9.8C299.9,150.9,295.6,147.2,290.8,147.2z\"/>\n            </g>\n            <circle cx=\"123.4\" cy=\"144.9\" r=\"4.1\"/>\n            <path class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" d=\"M177.7,217.9\n                L177.7,217.9c-2.3,0-4.2-1.9-4.2-4.2v-5.3c0-2.3,1.9-4.2,4.2-4.2l0,0c2.3,0,4.2,1.9,4.2,4.2v5.3C181.9,216,180.1,217.9,177.7,217.9\n                z\"/>\n            <path class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" d=\"M193.8,217.9\n                L193.8,217.9c-2.3,0-4.2-1.9-4.2-4.2v-5.3c0-2.3,1.9-4.2,4.2-4.2h0c2.3,0,4.2,1.9,4.2,4.2v5.3C198,216,196.1,217.9,193.8,217.9z\"/>\n\n                <line class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" x1=\"268\" y1=\"164\" x2=\"245.5\" y2=\"164\"/>\n            <path class=\"cloud1-draw\" style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" d=\"M132.1,171c-2.5,1-5.2,1.5-8,1.5\n                c-4.6,0-8.8-1.4-12.3-3.7\"/>\n            <line class=\"cloud1-draw\" style=\"fill:none;stroke:#313131;stroke-width:5;stroke-miterlimit:10;\" x1=\"205\" y1=\"147.2\" x2=\"198\" y2=\"159.2\"/>\n        </g>\n        <path id=\"filter\" style=\"fill:#FFFFFF;\" d=\"M0,0v314.8h378V0H0z M187.3,311.4c-22.1,0-43.1-4.7-62-13.1\n            C71.5,274.5,34,220.7,34,158.1c0-17.8,3-35,8.6-50.9C63.7,47.5,120.5,4.7,187.3,4.7c84.6,0,153.3,68.7,153.3,153.4\n            S272,311.4,187.3,311.4z\"/>\n        <g id=\"cloud2\">\n            <rect x=\"256.8\" y=\"86.8\" style=\"fill:#FFFFFF;\" width=\"95.7\" height=\"22.7\"/>\n            <rect x=\"313.7\" y=\"81.5\" style=\"fill:#FFFFFF;\" width=\"20.7\" height=\"7.5\"/>\n            <path class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" d=\"M275.7,87.1\n                c4-11.8,12.9-17.6,24.5-17.6c9.3,0,17.5,5.4,22.4,13.6c3.1,5.1,4.9,11.4,4.9,18.1\"/>\n            <path class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" d=\"M245.5,107.9\n                c0-13.1,9.1-23.7,20.4-23.7c8.5,0,15.7,6,18.8,14.5\"/>\n            <path class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" d=\"M358.6,109.5\n                c0-16.1-11.3-29.2-25.2-29.2c-3.9,0-7.5,1-10.8,2.8\"/>\n\n                <line class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" x1=\"296.9\" y1=\"107.7\" x2=\"371.8\" y2=\"107.7\"/>\n\n                <line class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" x1=\"235.4\" y1=\"107.7\" x2=\"271.9\" y2=\"107.7\"/>\n        </g>\n        <g id=\"cloud1\">\n            <rect x=\"21.5\" y=\"77.9\" style=\"fill:#FFFFFF;\" width=\"87.3\" height=\"13.1\"/>\n            <rect x=\"37.8\" y=\"63\" style=\"fill:#FFFFFF;\" width=\"20.1\" height=\"18.5\"/>\n            <path class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" d=\"M50.9,82.7\n                c0-6.7,1.8-13,4.9-18.1C60.7,56.4,68.9,51,78.2,51c11.6,0,31.5,3.8,31.5,38.2\"/>\n            <path class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" d=\"M19.8,91\n                c0-16.1,11.3-29.2,25.2-29.2c3.9,0,7.5,1,10.8,2.8\"/>\n\n                <line class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" x1=\"74.8\" y1=\"89.2\" x2=\"124.4\" y2=\"89.2\"/>\n\n                <line class=\"cloud1-draw\" style=\"fill:#FFFFFF;stroke:#313131;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;\" x1=\"34.4\" y1=\"89.2\" x2=\"6.6\" y2=\"89.2\"/>\n        </g>\n    </svg>\n    </div>\n    <div class=\"col-md-6 col-xs-12\">\n      <div class=\"form-group\">\n        <label for=\"\"></label>\n        <input type=\"text\"\n          class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Enter your name..\">\n        <!-- <small id=\"helpId\" class=\"form-text text-muted\">Help text</small> -->\n      </div>\n    </div>\n    <div class=\"col-md-6 col-xs-12\">\n      <div class=\"form-group\">\n        <label for=\"\"></label>\n        <input type=\"email\"\n          class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\"  placeholder=\"Enter your email..\">\n        <!-- <small id=\"helpId\" class=\"form-text text-muted\">Help text</small> -->\n      </div>\n    </div>\n    <div class=\"col-md-12 col-xs-12\">\n      <div class=\"form-group\">\n        <label for=\"\"></label>\n        <textarea class=\"form-control\" name=\"\" id=\"\" rows=\"3\" placeholder=\"Enter details\" ></textarea>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-xs-12\">\n      <button type=\"button\" name=\"\" id=\"\" class=\"btn btn-primary btn-lg\" style=\"width:500px;background-color: #87ECCC;border-color:transparent\" >SEND</button>\n      </div>\n  </div>\n</div>\n\n<br> <br> <br>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
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

module.exports = "<div class=\"hidden-xs hidden-sm \">\n  <br><br>\n</div>\n\n\n\n<footer class=\"container-fluid\" id=\"footer\" style=\"margin-right:20px;background-color:white;margin: -14px;border-radius: 2px;width:100%\">\n  <div class=\"row\">\n    <div class=\"col-md-3 text-left py-3\">\n        <p><a href=\"./home/home.component\">MyIncometax</a> Copyrights &copy; 2018.</p>\n    </div>\n\n<div class=\"col-md-6\"></div>\n\n    <div class=\"col-md-1 text-right py-3\" >\n    <a href=\"#\">Terms</a>\n    </div>\n    <div class=\"col-md-1 text-center py-3\" >\n        <a href=\"./privacy/privacy.component\">Privacy</a>\n    </div>\n    <div class=\"col-md-1 text-left py-3\">\n        <a href=\"#\">Disclaimer</a>\n    </div>\n\n  </div>\n  \n  <!-- <p>Copyright (c) 2018 by Atrix Digital Solutions</p> -->\n</footer>\n\n"

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

module.exports = "\r\n.navleft{\r\n    text-align: left;\r\n    width:100%;\r\n}\r\n.overlayit{\r\n    position: relative;\r\n    top:10px;\r\n    right:45px;\r\n    display: initial;\r\n    font-size: 8px;\r\n    font-stretch: semi-condensed;\r\n    font-style: italic;\r\n\r\n}\r\n.nav-link>span{\r\n  color:rgba(255, 255, 255, 0.719);\r\n  font-size: 15px;\r\n  padding:12px;\r\n  display: inline-block\r\n}\r\n.active,.nav-item, .nav-link{\r\n  text-decoration: none;\r\n  border-color:red;\r\n  color:red;\r\n}\r\n.nav{\r\n    text-align: right;\r\n}\r\na{\r\n    color:white;\r\n    text-decoration: none;\r\n}\r\n.nav>span{\r\n\r\n    color:white;\r\n    font-size: 12px;\r\n    padding:12px;\r\n    display: inline-block\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-transparent small\" style=\"color:white\">\n  <a class=\"navbar-brand\" href=\"#\">\n\n      <span><a href=\"\">\n          <img src=\"./assets/img/tax.png\" alt=\"\" class=\" img-responsive\" style=\"width:30px\">\n        </a></span>\n  </a>\n  <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\" routerLink=\"/home\" routerLinkActive=\"active\">\n        <a class=\"nav-link\">\n            <span>Home</span>\n          </a>\n      </li>\n      <!-- <li class=\"nav-item\" routerLink=\"/blog\" routerLinkActive=\"active\">\n        <a class=\"nav-link\">\n            <span>Blog</span>\n          </a>\n      </li>\n       <li class=\"nav-item\" routerLink=\"/privacy\" routerLinkActive=\"active\">\n        <a class=\"nav-link\">\n            <span>Privacy</span>\n          </a>\n      </li>\n      <li class=\"nav-item\" routerLink=\"/policy\" routerLinkActive=\"active\">\n        <a class=\"nav-link\">\n            <span>Terms & Conditions</span>\n          </a>\n      </li> -->\n      <li class=\"nav-item\" routerLink=\"/about\" routerLinkActive=\"active\">\n        <a class=\"nav-link\">\n            <span>About</span>\n          </a>\n      </li>\n      <li class=\"nav-item\" routerLink=\"/contact\" routerLinkActive=\"active\">\n        <a class=\"nav-link\">\n            <span>Contact us</span>\n          </a>\n      </li>\n\n\n    </ul>\n\n  </div>\n</nav>\n\n  <!-- <div class=\"container-fluid\">\n    <div class=\"row\">\n\n  <nav class=\"nav\">\n    <span><a href=\"\">\n      <img src=\"./assets/img/tax.png\" alt=\"\" class=\" img-responsive\" style=\"width:30px\">\n    </a></span>\n      <span><a routerLink=\"/home\">home</a></span>\n      <span><a routerLink=\"/blog\">Blog</a></span>\n      <span><a routerLink=\"/privacy\">Privacy</a> </span>\n      <span><a routerLink=\"/policy\">Terms & Conditions</a></span>\n      <span><a routerLink=\"/about\">About</a></span>\n      <span><a routerLink=\"/contact\">Contact Us</a></span>\n    </nav>\n\n\n\n    </div>\n  </div> -->\n"

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

module.exports = "\r\n\r\n\r\n.form {\r\n    width: 100%;\r\n    margin: 3rem auto;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);\r\n    text-align: center;\r\n    position: relative;\r\n    min-height: 25rem;\r\n    -webkit-animation: fade-in .4s ease-out forwards;\r\n            animation: fade-in .4s ease-out forwards;\r\n  }\r\n\r\n\r\n\r\n  .formx {\r\n    /* width: 100%; */\r\n    margin-left: 3rem auto;\r\n    background-color: white;\r\n    border-radius: .5rem;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);\r\n    text-align: center;\r\n    position: relative;\r\n    min-height: 25rem;\r\n    -webkit-animation: fade-in .4s ease-out forwards;\r\n            animation: fade-in .4s ease-out forwards;\r\n  }\r\n\r\n\r\n\r\n  mybtn{\r\n    color:white;\r\n    background: linear-gradient(to right bottom, #F27D86, #B978C8, #9379F8) center/cover no-repeat;\r\n\r\n}\r\n\r\n\r\n\r\n  .greenx{\r\n    color:rgb(75, 129, 61);\r\n}\r\n\r\n\r\n\r\n  .navleft{\r\n    text-align: left;\r\n    width:100%;\r\n}\r\n\r\n\r\n\r\n  .overlayit{\r\n    position: relative;\r\n    top:10px;\r\n    right:45px;\r\n    display: initial;\r\n    font-size: 8px;\r\n    font-stretch: semi-condensed;\r\n    font-style: italic;\r\n\r\n}\r\n\r\n\r\n\r\n  .nav{\r\n    text-align: right;\r\n}\r\n\r\n\r\n\r\n  a{\r\n    color:white;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n  .nav>span{\r\n\r\n    color:white;\r\n    font-size: 12px;\r\n    padding:12px;\r\n    display: inline-block\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n    <div class=\"container\">\n        <h1 *ngIf=\"showResult == true\" class=\"clearfix\">Dutch Income Tax Calculator</h1>\n        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis esse beatae quia illo accusamus blanditiis sequi et iusto, itaque optio dolor dignissimos dicta reiciendis temporibus vitae aspernatur repudiandae libero nesciunt?</p> -->\n\n        <hr>\n      <div class=\"row\">\n        <section class=\"col-md-6\">\n          <!-- <button type=\"button\" class=\"button is-purple\" data-action=\"next\">Yes, let's start!</button> -->\n  <label style=\"font-size: 50px\" *ngIf=\"income\">{{(income | currency:'€') + '/ year'}}</label>\n\n        <div class=\"section \" data-section data-message=\"Alright, let's begin. I need your first name, so please write it into the text field and click next when you have finished.\">\n            <label for=\"firstname\">Let's start by entering your Gross Income: <span class=\"required\">*</span></label>\n\n            <div class=\"form-group mb-3\">\n              <input type=\"number\" (keyup)=\"calculatePayrollTax() \" class=\"form-control\" id=\"firstname\" [(ngModel)]=\"income\" name=\"firstname\" required placeholder=\"e.g. 10000\" data-error-message=\"This field can't be empty, please enter your first name.\">\n              <svg class=\"form-addon\" width=\"20\" height=\"20\">\n                <use xlink:href=\"#valid\"></use>\n              </svg>\n            </div>\n            <div class=\"row\">\n              <div class=\"custom-control custom-checkbox mr-sm-2\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing\"  [checked]=\"calculatePayrollTax()\"  [(ngModel)]=\"social\">\n                  <label class=\"custom-control-label\" for=\"customControlAutosizing\"  >Social Security</label>\n              </div>\n                <div class=\"custom-control custom-checkbox mr-sm-2\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing1\" [checked]=\"calculatePayrollTax()\" [(ngModel)]=\"years\">\n                    <label class=\"custom-control-label\" for=\"customControlAutosizing1\">65 years or above</label>\n                  </div>\n                <div class=\"custom-control custom-checkbox mr-sm-2\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing2\" [checked]=\"calculatePayrollTax()\"   [(ngModel)]=\"ruling\">\n                      <label class=\"custom-control-label\" for=\"customControlAutosizing2\">30% Ruling</label>\n                  </div>\n           </div>\n           <hr>\n           <div class=\"row\" style=\"position:bottom;margin-top:20px\">\n            <div class=\"col-md-6\">\n              <!-- <img src=\"./assets/img/both.png\" class=\"img-fluid\" alt=\"\"> -->\n\n            </div>\n            <div class=\"col-md-6\">\n              <!-- <h5>Instructions</h5> -->\n              <!-- <img  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNnokbs1QekHL-_zzp0k7smWX1-s2mxIPT2ij9ecgepUeb9VL\" class=\"img img-responsive\" alt=\"\"> -->\n              <!-- <p>\n                In order to make the following calculator work you will need to provide your yearly income in Euros.\n              </p> -->\n            </div>\n          </div>\n\n  <!-- <button type=\"button\" class=\"button is-purple\"  (click)=\"search()\" [disabled]=\"!income\"> {{showResult? 'Close':'Next'}}</button> -->\n          </div>\n\n        </section>\n        <section class=\"col-md-6\"  *ngIf=\"showResult \">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-12 text-center clearfix\">\n                <h3>Results</h3>\n                <p>\n                    <!-- <button class=\"button is-purple\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                      Settings\n                      <i class=\"fa fa-caret-square-o-down\" aria-hidden=\"true\"></i>\n                    </button> -->\n                  </p>\n                  <div class=\"collapse\" id=\"collapseExample\">\n                    <div class=\"card card-body\">\n                   <small>Toggle the following options to get more advance results:\n                   <div class=\"row\">\n                      <div class=\"custom-control custom-checkbox mr-sm-2\">\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing\"  [(ngModel)]=\"social\">\n                          <label class=\"custom-control-label\" for=\"customControlAutosizing\"  >Social Security</label>\n                      </div>\n                        <div class=\"custom-control custom-checkbox mr-sm-2 col-sm-12 col-xs-12\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing1\"  [(ngModel)]=\"years\">\n                            <label class=\"custom-control-label\" for=\"customControlAutosizing1\">65 years or</label>\n                          </div>\n                        <div class=\"custom-control custom-checkbox mr-sm-2 col-sm-12 \">\n                              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing2\" (change)=\"calculatePayrollTax()\"  [(ngModel)]=\"ruling\">\n                              <label class=\"custom-control-label\" for=\"customControlAutosizing2\">30% Ruling</label>\n                          </div>\n\n                   </div>\n                  </small>\n                     <br>\n                    </div>\n                  </div>\n                <table class=\"table table-borderless table-hover shadow p-3 mb-5 bg-white rounded\">\n                    <thead class=\"thead-dark\">\n                      <tr>\n                        <th scope=\"col\"># </th>\n                        <th scope=\"col\"> Value</th>\n                      </tr>\n                    </thead>\n                    <tbody >\n                      <tr>\n                        <th scope=\"row\">Taxable Amount</th>\n                        <td class=\"text-success\">{{ ( taxableIncome | currency:'€') }}</td>\n                      </tr>\n                      <tr >\n                        <th scope=\"row\" >Tax Free Amount</th>\n                        <td class=\"text-success\">{{ ( taxFreeIncome | currency:'€') }}</td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Payroll Tax</th>\n                        <td class=\"text-danger\">- {{ (payrolltax | currency:'€')}}</td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Social Security Tax</th>\n                        <td class=\"text-danger\">- {{ (socialSecurity | currency:'€')}}</td>\n                      </tr>\n                      <tr>\n                          <th scope=\"row\">General Tax Credit</th>\n                          <td>+ {{ (generalTaxCredit | currency:'€')}}</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">Labour  Tax Credit</th>\n                            <td>+ {{ (labourTaxCredit | currency:'€')}}</td>\n                          </tr>\n                          <tr>\n                              <th scope=\"row\">Year Net Income</th>\n                              <td>{{ (netIncome | currency:'€')}}</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">Monthly Net Income</th>\n                                <td>{{ ((netIncome / 12 )| currency:'€')}}</td>\n                              </tr>\n\n                    </tbody>\n                  </table>\n\n\n\n              </div>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

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
        this.showResult = true;
        this.formVal = 'formx';
        this.income = null;
        this.social = true;
        this.years = false;
        this.ruling = false;
        this.taxableIncome = 0;
        this.socialSecurity = 0;
        this.generalTaxCredit = 0;
        this.labourTaxCredit = 0;
        this.taxFreeIncome = 0;
        this.netIncome = 0;
        this.table = [
            { sno: 0, yearlyIncome: 37296, ruling: 11189, taxable: 2 }
        ];
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
            this.taxFreeIncome = 0;
            this.socialSecurity = 0;
            this.generalTaxCredit = 0;
            this.labourTaxCredit = 0;
            this.payrolltax = 0;
        }
        if (this.ruling == false) {
            this.taxFreeIncome = 0;
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

module.exports = "svg {\r\n    width:240px;\r\n    height: 240px;\r\n    margin: 0 auto;\r\n    margin-top:1vh;\r\n    display:block;\r\n\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/policy/policy.component.html":
/*!**********************************************!*\
  !*** ./src/app/policy/policy.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">elcome to MyIncomeTax. </span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Given below are some terms and conditions that give the basis for the rules and regulations to be followed while using the website.</span></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">If you access MyIncomeTax, we will assume that you have accepted all the terms and conditions completely. Do not continue if you do not agree with the terms and conditions given in this page.</span></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Terminologies used in the Terms and Conditions are as below:</span></p>\n<ul style=\"margin-top: 0pt; margin-bottom: 0pt;\">\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">The words &ldquo;You&rdquo;, &ldquo;Your&rdquo; and &ldquo;Client&rdquo; refer to the person using the website and agreeing to the terms and conditions</span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">&ldquo;We&rdquo;, &ldquo;Us&rdquo;, &ldquo;Our&rdquo;, &ldquo;Ourselves&rdquo; and &ldquo;The company&rdquo; refer to our company</span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">&ldquo;Us&rdquo;, &ldquo;Party&rdquo;, or &ldquo;Parties&rdquo; can refer to either the client, or to both the company and client.</span></li>\n</ul>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">The above mentioned terminologies can be used in singular, plural, uppercase, lowercase or as &ldquo;he&rdquo;, &ldquo;she&rdquo; or &ldquo;they&rdquo;. They will be interchanged as per the context but will give the same meaning.</span></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><strong><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Cookies:</span></strong></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">When you access and use MyIncomeTax, you give your consent to the use of cookies which is in accordance with the website&rsquo;s privacy policy. Cookies are used by most of the interactive websites and allows the websites to gather user details for each visit</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">The cookies are used on MyIncomeTax to enable the functionality of this area. They&rsquo;re also used to provide ease of use for the website users. </span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Some of our advertising or affiliate partners also may use the cookies for business purposes. This is also included in your consent that you have given by accessing the website.</span></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><strong><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">License:</span></strong></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">MyIncomeTax of its licensors have rights for all intellectual property and material on the website, unless stated otherwise. These rights are reserved and can be used personally by the client by viewing or printing only if they abide by the restrictions in the terms and conditions.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">These restrictions include:</span></p>\n<ol style=\"margin-top: 0pt; margin-bottom: 0pt;\">\n<li style=\"list-style-type: lower-alpha; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">No re-publishing the material from the website</span></li>\n<li style=\"list-style-type: lower-alpha; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">No renting, sub-licensing or selling of the material is allowed</span></li>\n<li style=\"list-style-type: lower-alpha; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">The material cannot be reproduced, duplicated or copied from the website</span></li>\n<li style=\"list-style-type: lower-alpha; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Redistributing the content from the website is also not allowed</span></li>\n</ol>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><strong><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Hyperlinking:</span></strong></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Some organizations can hyperlink to MyIncomeTax without any written approval beforehand. These include:</span></p>\n<ul style=\"margin-top: 0pt; margin-bottom: 0pt;\">\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Search engines</span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Government agencies</span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">News organizations</span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Online Directory Distributors are allowed to link to our website when they list us in the directory only if they do so in the same way as they link to other websites on the list.</span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">System Accredited Businesses that cannot include charity shopping malls, charity fundraising groups and Non-profit organizations, </span></li>\n</ul>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">The above mentioned organizations can link to the homepage of MyIncomeTax and the publications on the content. </span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">The links however should fulfill the following requirements.</span></p>\n<ol style=\"margin-top: 0pt; margin-bottom: 0pt;\">\n<li style=\"list-style-type: lower-alpha; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Must not be misleading in any way</span></li>\n<li style=\"list-style-type: lower-alpha; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Must not imply sponsorship, endorsement of approval of the company that is linking, its products or services</span></li>\n<li style=\"list-style-type: lower-alpha; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">The link should fit within the context where used</span></li>\n</ol>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\"> &nbsp;</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">The link requests of the following types of organizations can be considered or approved by our company.</span></p>\n<ul style=\"margin-top: 0pt; margin-bottom: 0pt;\">\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\"> Automobile Association, AARP and Consumers Union</span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">dot.com community sites</span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">associations or other groups representing charities that includes charity giving sites</span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">online directory distributors </span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">internet portals</span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">accounting, law and consulting firms having businesses as primary clients</span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">educational institutions</span></li>\n<li style=\"list-style-type: disc; font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">trade associations </span></li>\n</ul>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><strong><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Reservation of Rights:</span></strong></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">We hold the right to request removal of our links at any time.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">If you agree to the terms and conditions, you agree to remove all the links immediately when requested.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">MyIncomeTax also have the right to modify the privacy policy and terms and conditions of our website at any time. If you are linked to the website, you are bound to abide by these all the time. </span></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><strong><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Removal of links from our website:</span></strong></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">You have the right to contact us if you find any link on our website objectionable. MyIncomeTax are not obligated to remove the link immediately or to respond to you but we will consider the request of link removal.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">We try our best to keep the information on our website correct and updated, but we do not guarantee the accuracy or completeness. We also cannot ensure that the content will always remain up to date.</span></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><strong><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Content Liability:</span></strong></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 12pt;\">&nbsp;</h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">MyIncomeTax shall not provide any responsibility or liability for what appears on your website. By agreeing to our terms and conditions, you agree to defend us against any claim that is based on the content from your website.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">The content on any page on your website may not contain any material or content that can be considered criminal, obscene or libelous. It may not violate or infringe any third party rights. </span></p>\n"

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

module.exports = "<!--\n\n\n<div class=\"container\">\n    <h1 class=\"text-center\">  Disclaimer </h1>\n\n  <div class=\"row\">\n    <div class=\"col-md-12 text-left\">\n<p class=\"small\">\n\nThe information and content available on MyIncomeTax is for the purpose of general information and is uploaded in good intention. We do not guarantee the completeness, reliability or accuracy of the given information. Any action taken on the content from MyIncomeTax will be your own decision and you will do so strictly at your own risk. MyIncomeTax will not be responsible for any losses or damages that occur due to the use of content from the website. <br>\n<br>\nYou can visit various external websites using the hyperlinks provided on MyIncomeTax. Even though we try our best to provide you with quality content and links, we have no control over what you might see on those external websites or what is the nature of the content and sites. The presence of those links on MyIncomeTax does not imply any recommendation for the content and hence we are not to be held responsible for what you see. The content or owner of the linked sites might change without providing any notice due to which MyIncomeTax might not be able to remove the “bad” link in time. <br>\n<br>\nThe privacy policy and terms & conditions of the websites you visit when you leave MyIncomeTax may differ from ours policies and it is not under our control. Please make sure that you check their Policies and Terms of Service before interacting or submitting any kind of information. <br>\n<br>\nBy using MyIncomeTax, you have given your consent to our disclaimer, terms & conditions and privacy policy. <br>\n<br>\nAny updates, modifications or amendments made in the document by us will be clearly posted. <br>\n\n\n</p>\n\n    </div>\n  </div>\n</div> -->\n\n\n<h1 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 22.5pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Privacy Policy</span></h1>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Effective date: July 19, 2018</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">MyIncomeTax (\"us\", \"we\", or \"our\") operates the </span><a style=\"text-decoration: none;\" href=\"http://www.myincometax.com/\"><span style=\"font-size: 12pt; font-family: Arial; color: #1155cc; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: underline; -webkit-text-decoration-skip: none; text-decoration-skip-ink: none; vertical-align: baseline; white-space: pre-wrap;\">http://www.myincometax.nl/</span></a><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\"> website (the \"Service\").</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">This page informs you of our policies concerning the gathering, use, and release of personal information when you use our Service and the decisions you have related to that information.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">We use your data to give and improve the Service. By using the Service, you agree to the gathering and use of information in accordance with this policy. Unless stated otherwise in this Privacy Policy, phrases used in this Privacy Policy have equal meanings as in our Terms and Conditions, which can be accessed from </span><a style=\"text-decoration: none;\" href=\"http://www.myincometax.com/\"><span style=\"font-size: 12pt; font-family: Arial; color: #1155cc; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: underline; -webkit-text-decoration-skip: none; text-decoration-skip-ink: none; vertical-align: baseline; white-space: pre-wrap;\">http://www.myincometax.nl/</span></a></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 18pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Information Gathering And Use</span></h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">MyIncomeTax gathers several different types of information for various purposes to provide and improve our Service to you.</span></p>\n<h3 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 15pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Types of Data gathered</span></h3>\n<h4 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Personal Data</span></h4>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">MyIncomeTax might ask you, while you use our service, to present us with certain personal distinguishable information that can be used to reach or identify you (\"Personal Data\"). Personal distinguishable information might include, but is not limited to:</span></p>\n<ul style=\"margin-top: 0pt; margin-bottom: 0pt;\">\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Cookies and Usage Data</span></li>\n</ul>\n<h4 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Usage Data</span></h4>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">We may also gather information on how the Service is accessed and used (\"Usage Data\"). This Usage Data may include data such as your computer's IP address, browser type and version, the pages of our Service that you visit, the date and time of your visit, the time consumed on those pages, unique device distinguishers and other indicative data.</span></p>\n<h4 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Tracking &amp; Cookies Data</span></h4>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">MyIncomeTax uses cookies and resembling tracking technologies to track the activity on our Service and contain certain information.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Cookies are folders with less amount of information which might include an undisclosed unique identifier. Cookies are dispatched to your browser from a website and stored on your device. Tracking technologies also used are indicators, tags, and scripts to gather and track information and to analyze our Service and make it better.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">You can order your browser to reject all cookies or to show you when a cookie is being sent. If you don&rsquo;t agree to accept cookies, you might not be able to use some areas of our Service.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Examples of Cookies MyIncomeTax uses:</span></p>\n<ul style=\"margin-top: 0pt; margin-bottom: 0pt;\">\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><strong><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Session Cookies.</span></strong><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\"> We use Session Cookies to run our Service.</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><strong><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Preference Cookies.</span></strong><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\"> We use Preference Cookies to memorize your decisions and different settings.</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><strong><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Security Cookies.</span></strong><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\"> We use Security Cookies for security purposes.</span></li>\n</ul>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 18pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Use of Information</span></h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">MyIncomeTax uses the gathered information for various reasons:</span></p>\n<ul style=\"margin-top: 0pt; margin-bottom: 0pt;\">\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">To give and maintain the Service</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">To inform you about changes to our Service</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">To permit you to take part in interactive features of our Service when you choose to do so</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">To give customer care and support</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">To give a breakdown or valuable data so that we can improve the Service</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">To observe the usage of the Service</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">To detect, stop and work on technical issues</span></li>\n</ul>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 18pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Transfer Of Information</span></h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Your information, including your Personal Data, might be transferred to, and maintained on, computers situated outside of your government areas, including states, provinces and country, where the information protection laws might be different than those from your area.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">If you are located outside Netherlands and decide to give us data, please note that we transmit the data, including Personal data, to Netherlands and process it there.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">You show that you agree to consent to this Privacy Policy by giving us the information.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">MyIncomeTax will take all steps considered important to make sure that your information is secure and in accordance with this Privacy Policy and no transfer of your Personal Information will take place to an organization or a country unless there are adequate controls in place including the security of your information and other personal data.</span></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 18pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Disclosure Of Information</span></h2>\n<h3 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 15pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Legal Conditions</span></h3>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">MyIncomeTax might reveal your Personal Data in the good faith and belief that such an action is necessary to:</span></p>\n<ul style=\"margin-top: 0pt; margin-bottom: 0pt;\">\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">To yield with a legal responsibility</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">To defend the rights or property of MyIncomeTax and keep them safe</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">To stop or investigate possible wrongdoing in connection with the Service</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">To take care the personal safety of users of the Service or the public</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">To keep it safe against legal liability</span></li>\n</ul>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 18pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Security Of Information</span></h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">The security of your Information is important to MyIncomeTax, but be reminded that no way of transfer over the Internet, or way of electronic containment is 100% secure. While we work hard to use methods that are commercially accepted to keep your Personal Data safe, we cannot guarantee its definite security.</span></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 18pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Service Providers</span></h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">We might hire third-party organizations and people to run our Service (\"Service Providers\"), to give the Service on our behalf, to do Service-related services or to help us in observing how our Service is used.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">These third parties might be able to access your Personal Data only to perform these tasks on our behalf and are responsible to not reveal or use it for any other reason.</span></p>\n<h3 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 15pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Analytics</span></h3>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">MyIncomeTax might use third-party Service Providers to observe and analyze the use of our Service.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 46pt; margin-left: 36pt;\"><strong><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Google Analytics</span></strong></p>\n<ul style=\"margin-top: 0pt; margin-bottom: 0pt;\">\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Google Analytics is a web analytics service offered by Google that keeps track of and narrates website movement. Google uses the data collected to track and observe the use of our Service. This data is shared with other Google services. Google might use the gathered data to contextualize and personalize the ads of its own advertising network.</span></li>\n<li style=\"list-style-type: disc; font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">You can opt to make your activity on the Service not available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript from transmitting data to Google Analytics about visiting activity.</span></li>\n</ul>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 18pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Links To Other Websites</span></h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Our Service might contain links to other websites that are not run by us. If you click on a third-party link, you will be sent to that third-party's website. We advise you to go through the Privacy Policy of every website you visit.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">MyIncomeTax are not responsible for and have control over the content, privacy policies or practices of any third party sites or services.</span></p>\n<h2 style=\"line-height: 1.32; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 18pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Changes To This Privacy Policy</span></h2>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">We will update our Privacy Policy every now and the and will inform you of any changes by posting it here.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">We will inform through email and/or a notice on our Service, &nbsp;before the change becomes effective and will update the \"effective date\" on top of this Privacy Policy.</span></p>\n<p style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 23pt;\"><span style=\"font-size: 12pt; font-family: Arial; color: #333333; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">You are advised to go through this Privacy Policy time to time for any changes. Changes to this Privacy Policy are effective the moment they are posted on this page.</span></p>\n"

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

/***/ "./src/app/under/under.component.css":
/*!*******************************************!*\
  !*** ./src/app/under/under.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/under/under.component.html":
/*!********************************************!*\
  !*** ./src/app/under/under.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container\" style=\"border-top-left-radius: 20px\">\n      <br>\n        <h2 >About Tax Calculator</h2>\n        <p class=\"text-black-50 text-left\">\n          The Netherlands Dutch Tax Calculator is for information purpose only and does not guarantee the accuracy of the results. However, team at MyIncomeTax tries its best to improve the Tax calculation in order to provide closest and best results.\n        <br>\n        If you find any issue with the Netherlands Tax Calculator try refreshing the page. If the problem still exists feel free to contact us and we will try to fix that in our calculator.\n        <br>\n        If you have any questions regarding how our tax calculation is being performed, then continue reading about the Netherlands tax Law we use to calculate your Monthly Income after tax deductions.\n        </p>\n        <div class=\"row\">\n          <div class=\"col-md-12\" style=\"font-style: italic\">\n              All Tax Implications are explained below.\n              <br>\n\n              <span class=\"text-left\"> <b>Tax Year:</b> 2018 </span><br>\n              <span class=\"text-right\">   <b>Tax Period:</b> January 01, 2018 - December 31,2018. </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 text-body text-left\">\n              <h4>30 Percent Ruling - Expatriate Concessions</h4>\n              <p>\n                  For the expats living in Netherlands, the country has a special tax rule. It is called the 30 percent ruling. </p>\n                <p> According to this ruling, an employer may pay the employee a tax-free allowance that does not exceed 30 percent of his/her total taxable salary. This allowance should be able to cover the employees expenses due to his/her job in the Netherlands.\n\n              </p>\n              <p>\n                  In addition to this tax-free allowances, an employer may compensate for the employee’s children to attend an international school, or an international department of a local school, tax free.\n              </p>\n              <p>\n                  In order to qualify for the 30% ruling, an employee’s minimum yearly income should be €37,296.\n              </p>\n              <p>\n                  The table given below will guide you calculate your taxes according to the 30% ruling if your minimum yearly income exceeds the aforementioned amount.\n              </p>\n              <table class=\"table table-responsive text-left\">\n                <thead>\n                  <tr class=\"small\">\n                    <th>S No.</th>\n                    <th> Yearly Income</th>\n                    <th> 30% ruling or exempt</th>\n                    <th> Taxable Income</th>\n                    <th> Total Income</th>\n                    <th> Minimum Taxable Income</th>\n                    <th> Allowed Exempt Income</th>\n                    <th> Total Income</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td scope=\"row\">1</td>\n                    <td>37,296</td>\n                    <td>11,189</td>\n                    <td>26,107</td>\n                    <td>37,296</td>\n                    <td>37,296</td>\n                    <td>-</td>\n                    <td>37,296</td>\n                  </tr>\n\n                  <tr>\n                      <td scope=\"row\">2</td>\n                      <td>40,000</td>\n                      <td>12,000</td>\n                      <td>28,000</td>\n                      <td>40,000</td>\n                      <td>37,296</td>\n                      <td>2,704</td>\n                      <td>40,000</td>\n                    </tr>\n                    <tr>\n                        <td scope=\"row\">3</td>\n                        <td>50,000</td>\n                        <td>15,000</td>\n                        <td>35,000</td>\n                        <td>50,000</td>\n                        <td>37,296</td>\n                        <td>12,704</td>\n                        <td>50,000</td>\n                      </tr>\n\n                      <tr>\n                          <td scope=\"row\">4</td>\n                          <td>53,000</td>\n                          <td>15,900</td>\n                          <td>37,100</td>\n                          <td>53,000</td>\n                          <td>37,296</td>\n                          <td>15,704</td>\n                          <td>53,000</td>\n                        </tr>\n\n                        <tr>\n                            <td scope=\"row\">5</td>\n                            <td>53,280</td>\n                            <td>15,984</td>\n                            <td>37,296</td>\n                            <td>53,280</td>\n                            <td>37,296</td>\n                            <td>15,984</td>\n                            <td>53,280</td>\n                          </tr>\n                          <tr>\n                              <td scope=\"row\">6</td>\n                              <td>54,000</td>\n                              <td>16,200</td>\n                              <td>37,800</td>\n                              <td>54,000</td>\n                              <td>37,296</td>\n                              <td>16,704</td>\n                              <td>54,000</td>\n                            </tr>\n                            <tr>\n                                <td scope=\"row\">7</td>\n                                <td>100,000</td>\n                                <td>30,000</td>\n                                <td>70,000</td>\n                                <td>100,000</td>\n                                <td>37,296</td>\n                                <td>62,704</td>\n                                <td>100,000</td>\n                              </tr>\n                </tbody>\n              </table>\n\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12 text-justify small\">\n            <h6>Some Rules for the 30% Ruling</h6>\n            Following points are to be kept in mind regarding the 30 percent ruling.\n            <ol>\n              <li>Exempt tax according to the <b> 30% ruling </b> will be calculated by applying 30% ratio to the total income of the employee.</li>\n              <li>Exempt Tax applies to a minimum yearly income of  € 37,296. If the income is below the said amount, then no exempt income will be given.</li>\n              <li>In serial number 1, when exempt income is calculated according to 30% ratio, the taxable income becomes € 11,189. The remaining taxable income is  € 26,107. But there will be no exempt income because the minimum taxable income will be  € 37,296.</li>\n              <li>In serial number 2, when exempt income is calculated according to 30% ratio to taxable income € 40,000, the taxable income becomes € 12,000. The remaining taxable income is € 28,000 and the exempt income will be 2,704 because the minimum taxable income will be € 37,296. </li>\n              <li>The taxable income becomes equal to the minimum taxable income at € 53,280. After this point the 30% ruling is calculated according to point number 1. </li>\n              <li>The above mentioned point is highlighted in the previously given table.</li>\n            </ol>\n          </div>\n        </div>\n\n\n        <div class=\"row\">\n            <div class=\"col-md-12 text-justify small\">\n              <h6>Payroll Tax and Social Security Tax</h6>\n              Tax is calculated by applying a progressive tax rate schedule to the taxable income. The income tax rates for year 2018 are given below.\n              <table class=\"table table-responsive\">\n                <thead>\n                  <tr>\n                    <th>Taxable Income Slabs</th>\n                    <th>Income Tax Rate</th>\n                    <th>Social Security Tax Rate</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>When taxable income exceeds € 0, but does not exceed € 20,142</td>\n                    <td>8.90% of the amount exceeding € 0</td>\n                    <td>27.65% of the amount exceeding € 0</td>\n                  </tr>\n                  <tr>\n                    <td>When taxable  income exceeds € 20,142, but does not exceed € 33,994</td>\n                    <td>€ 1,792.64 + 13.20% of the amount exceeding € 20,142</td>\n                    <td>€ 5,569.26 + 27.65% of the amount exceeding € 20,142</td>\n                  </tr>\n                  <tr class=\"strong\">\n                      <td class=\"font-weight-bold\">When taxable  income exceeds € 20,142, but does not exceed € 33,994</td>\n                      <td class=\"font-weight-bold\">€ 3,621.10 + 40.85% of the amount exceeding € 33,994</td>\n                      <td class=\"font-weight-bold\">€ 9,399.34</td>\n                    </tr>\n                    <tr>\n                        <td>Where  the  taxable  income exceeds € 68,507</td>\n                        <td>€ 17,719.66 + 51.95% of the amount exceeding € 68,507</td>\n                        <td>€ 9,399.34</td>\n                      </tr>\n                </tbody>\n              </table>\n              Here is a step by step example for calculating tax:\n              <ul>\n                <li>Taxable income = 36,000</li>\n                <li>According to number 3 in the table, tax is calculated as below</li>\n                <li>€ 3,621.1 + [(€ 36,000 – € 33,944) x 40.85% ]  </li>\n                <li>€ 4,440.551/-   </li>\n                <li>Social security tax will be € 9,399.34 </li>\n                <li>Total tax will be € 13,840.491.</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12 text-justify\">\n                <h4 class=\"text-center\">Tax Credit</h4>\n\n              After you have calculated your total tax based on the percentages mentioned above, you can reduce the tax amount by using the applicable tax credits. There are two basic tax credits: <br>\n  a) General Tax Credit <br>\n  b) Labour Tax Credit\n            </div>\n\n          </div>\n          <br>\n          <div class=\"row clearfix space\">\n              <div class=\"col-md-12 text-justify\">\n                  <h6>General Tax Credit</h6>\n                 <table class=\"table small\">\n                   <thead>\n                     <tr>\n                       <th>Description</th>\n                       <th>General Tax Credit</th>\n                       <th>Threshold</th>\n                     </tr>\n                   </thead>\n                   <tbody>\n                     <tr>\n                       <td>General tax credit (max for lower incomes) </td>\n                       <td>€ 1,157</td>\n                       <td>Lower income = € 20,142</td>\n                     </tr>\n                     <tr>\n                       <td>General tax credit (max for higher incomes) (Declining ratio)</td>\n                       <td>€ 0</td>\n                       <td>Higher income = € 68,507</td>\n                     </tr>\n                   </tbody>\n                 </table>\n                 According to the given table:\n                 <p class=\"text-body\">\n                   4. General  tax credit allowed will be € 2,265 for income not exceeding € 20,142 <br>\n                   5. General tax credit allowed will be € 0 for income exceeding € 68,507 <br>\n                   6. General tax credit allowed for income between € 20,142 and € 68,507 will be calculated as per this formula: € 1,157 - [(Taxable income – € 20,142) x 4.68313% ] <br>\n                   Here’s an example for calculating tax with credit deductions according to the third case.</p>\n                   <ul>\n                      <li>Taxable income = 36,000</li>\n                      <li>€ 1,157 - [(€ 36,000 – € 20,142) x 2.392226% ]</li>\n                      <li>€ 777.64</li>\n                    </ul>\n                </div>\n\n                <!-- LABOUR TAX -->\n                <div class=\"col-md-12 text-justify\">\n                    <h6>Labour Tax Credit</h6>\n                   <table class=\"table small\">\n                     <thead>\n                       <tr>\n                         <th>Description</th>\n                         <th>Labour Tax Credit</th>\n                         <th>Threshold</th>\n                       </tr>\n                     </thead>\n                     <tbody>\n                       <tr>\n                         <td>Labour  tax credit (max for lower incomes) (at a ratio) </td>\n                         <td>€ 1,659</td>\n                         <td>Lower income = € 33,100</td>\n                       </tr>\n                       <tr>\n                         <td>Labour tax credit (max for higher incomes) (Declining ratio)</td>\n                         <td>€ 0</td>\n                         <td>Higher income = € 123,350</td>\n                       </tr>\n                     </tbody>\n                   </table>\n                   According to the given table:\n                   <p class=\"text-body\">\n                     4. Labour tax credit allowed for income not exceeding € 33,100 will be calculated by the formula: <b>€ 1,659 - [(Taxable income – € 33,100) x 3.60% ]</b>\n                     <br>\n                     5. Labour tax credit allowed will be € 0/- for taxable income exceeding € 123,350 <br>\n                     6. Labour tax credit allowed for income between € 33,100 and € 123,350 will be calculated as per the formula: <b> € 1,659 - [(Taxable income – € 33,100) x 3.60% ] </b> <br>\n                     Here is an example on how to calculate tax with labour tax deductions.</p>\n                     <ul>\n                        <li>Taxable income = 36,000</li>\n                        <li>€ 1,659 - [(€ 36,000 – € 33,100) x 3.60% ]  </li>\n                        <li>€ 1,605.64</li>\n                      </ul>\n                  </div>\n          </div>\n        <hr>\n\n    </div>\n\n"

/***/ }),

/***/ "./src/app/under/under.component.ts":
/*!******************************************!*\
  !*** ./src/app/under/under.component.ts ***!
  \******************************************/
/*! exports provided: UnderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderComponent", function() { return UnderComponent; });
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

var UnderComponent = /** @class */ (function () {
    function UnderComponent() {
    }
    UnderComponent.prototype.ngOnInit = function () {
    };
    UnderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-under',
            template: __webpack_require__(/*! ./under.component.html */ "./src/app/under/under.component.html"),
            styles: [__webpack_require__(/*! ./under.component.css */ "./src/app/under/under.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UnderComponent);
    return UnderComponent;
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

module.exports = __webpack_require__(/*! C:\Atrix\Projects\tax-calculator\testing\myfinax\myfinax\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map