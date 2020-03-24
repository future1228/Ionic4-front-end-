(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n  <ion-menu side=\"start\" contentId=\"content\">\n      <ion-header>\n        <ion-toolbar translucent>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let page of pages\">\n               <ion-item [routerLink]=\"page.path\" routerDirection=\"root\" [class.active-item]=\"selectedPath === page.path\">\n                 {{page.title}}\n               </ion-item>\n          </ion-menu-toggle>\n          <ion-item (click)=\"logOut()\">Sign out</ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"content\" main>sss</ion-router-outlet>\n\n\n</ion-split-pane>\n\n"

/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");







var routes = [
    {
        path: 'page',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            {
                path: 'dashboard',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../../pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardPageModule; }); }
            },
            {
                path: 'settings',
                loadChildren: function () { return __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ../../pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts")).then(function (m) { return m.SettingsPageModule; }); }
            }
        ]
    }, {
        path: '',
        redirectTo: 'page/dashboard',
        pathMatch: 'full'
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9EOlxcd29ya1xcdXB3b3JrIHdvcmsgaGlzdG9yeVxcQXJzaGFrXFxJb25pY1xcTmV3IGZvbGRlclxcZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxtZW51XFxtZW51LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1pdGVtIHtcclxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgYmx1ZTtcclxufSIsIi5hY3RpdmUtaXRlbSB7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgYmx1ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");




var MenuPage = /** @class */ (function () {
    function MenuPage(router, authService) {
        this.router = router;
        this.authService = authService;
        this.pages = [
            {
                title: 'Dashboard',
                path: '/menu/page/dashboard',
                icon: 'dashboard'
            },
            {
                title: 'Settings',
                path: '/menu/page/settings',
                icon: 'settings'
            }
        ];
        this.selectedPath = '';
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    };
    MenuPage.prototype.logOut = function () {
        this.authService.logout();
    };
    MenuPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module-es5.js.map