(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/public/register/register.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public/register/register.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #signupData=\"ngForm\" (ngSubmit)=\"register(signupData)\">\n  <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Username <ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input\n              ngModel\n              name=\"username\"\n              required \n              type=\"text\"\n            ></ion-input>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label position=\"floating\">Email Address <ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input\n              ngModel\n              name=\"email\"\n              required \n              type=\"text\"\n              email\n            ></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\">Password <ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input\n              ngModel\n              name=\"password\"\n              password \n              required \n              type=\"password\"\n              minLength=\"6\"\n              >\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\">Confirm Password <ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input\n              ngModel\n              name=\"confirm\"\n              password \n              required \n              type=\"password\"\n              minLength=\"6\"\n              >\n            </ion-input>\n          </ion-item>\n    \n      </ion-col> \n   </ion-row>\n   <ion-row>\n     <ion-col size-sm=\"6\" offset-sm=\"3\">\n        <div class=\"ion-padding\">\n            <ion-button \n              expand=\"block\" \n              type=\"submit\" \n              class=\"ion-no-margin\"\n              >Sign Up</ion-button>\n          </div>\n     </ion-col>\n   </ion-row>\n</ion-grid>\n</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/public/register/register-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/public/register/register-routing.module.ts ***!
  \************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/public/register/register.page.ts");




var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
var RegisterPageRoutingModule = /** @class */ (function () {
    function RegisterPageRoutingModule() {
    }
    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegisterPageRoutingModule);
    return RegisterPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/public/register/register.module.ts":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.module.ts ***!
  \****************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/public/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/public/register/register.page.ts");







var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/public/register/register.page.scss":
/*!****************************************************!*\
  !*** ./src/app/public/register/register.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/register/register.page.ts":
/*!**************************************************!*\
  !*** ./src/app/public/register/register.page.ts ***!
  \**************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");



var RegisterPage = /** @class */ (function () {
    function RegisterPage(authService) {
        this.authService = authService;
        this.isAgreed = false;
        this.regData = {};
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function (signupData) {
        Object.assign(this.regData, signupData.value);
        this.authService.register(this.regData);
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/public/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/public/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-register-register-module-es5.js.map