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
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ "./src/app/pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user-management/user-management.component */ "./src/app/pages/user-management/user-management.component.ts");
/* harmony import */ var _pages_venue_management_venue_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/venue-management/venue-management.component */ "./src/app/pages/venue-management/venue-management.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _pages_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/side-menu/side-menu.component */ "./src/app/pages/side-menu/side-menu.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_promotion_banner_management_promotion_banner_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/promotion-banner-management/promotion-banner-management.component */ "./src/app/pages/promotion-banner-management/promotion-banner-management.component.ts");
/* harmony import */ var _pages_add_venue_add_venue_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/add-venue/add-venue.component */ "./src/app/pages/add-venue/add-venue.component.ts");
/* harmony import */ var _pages_add_promotion_banner_add_promotion_banner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/add-promotion-banner/add-promotion-banner.component */ "./src/app/pages/add-promotion-banner/add-promotion-banner.component.ts");
/* harmony import */ var _pages_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/view-user/view-user.component */ "./src/app/pages/view-user/view-user.component.ts");
/* harmony import */ var _pages_view_venue_view_venue_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/view-venue/view-venue.component */ "./src/app/pages/view-venue/view-venue.component.ts");
/* harmony import */ var _pages_edit_venue_edit_venue_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/edit-venue/edit-venue.component */ "./src/app/pages/edit-venue/edit-venue.component.ts");
/* harmony import */ var _pages_view_banner_view_banner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/view-banner/view-banner.component */ "./src/app/pages/view-banner/view-banner.component.ts");
/* harmony import */ var _pages_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/add-menu/add-menu.component */ "./src/app/pages/add-menu/add-menu.component.ts");
/* harmony import */ var _pages_add_venue_speciality_add_venue_speciality_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/add-venue-speciality/add-venue-speciality.component */ "./src/app/pages/add-venue-speciality/add-venue-speciality.component.ts");
/* harmony import */ var _pages_view_venue_speciality_view_venue_speciality_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/view-venue-speciality/view-venue-speciality.component */ "./src/app/pages/view-venue-speciality/view-venue-speciality.component.ts");
/* harmony import */ var _pages_menu_management_menu_management_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/menu-management/menu-management.component */ "./src/app/pages/menu-management/menu-management.component.ts");
/* harmony import */ var _pages_view_menu_items_view_menu_items_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/view-menu-items/view-menu-items.component */ "./src/app/pages/view-menu-items/view-menu-items.component.ts");
/* harmony import */ var _pages_add_more_category_items_add_more_category_items_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/add-more-category-items/add-more-category-items.component */ "./src/app/pages/add-more-category-items/add-more-category-items.component.ts");
/* harmony import */ var _pages_edit_venue_category_edit_venue_category_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/edit-venue-category/edit-venue-category.component */ "./src/app/pages/edit-venue-category/edit-venue-category.component.ts");
/* harmony import */ var _pages_edit_category_item_edit_category_item_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/edit-category-item/edit-category-item.component */ "./src/app/pages/edit-category-item/edit-category-item.component.ts");
/* harmony import */ var _pages_edit_venue_speciality_edit_venue_speciality_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/edit-venue-speciality/edit-venue-speciality.component */ "./src/app/pages/edit-venue-speciality/edit-venue-speciality.component.ts");
/* harmony import */ var _pages_static_content_management_static_content_management_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/static-content-management/static-content-management.component */ "./src/app/pages/static-content-management/static-content-management.component.ts");
/* harmony import */ var _pages_merchant_management_merchant_management_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/merchant-management/merchant-management.component */ "./src/app/pages/merchant-management/merchant-management.component.ts");
/* harmony import */ var _pages_add_merchant_add_merchant_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/add-merchant/add-merchant.component */ "./src/app/pages/add-merchant/add-merchant.component.ts");
/* harmony import */ var _pages_view_merchant_view_merchant_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/view-merchant/view-merchant.component */ "./src/app/pages/view-merchant/view-merchant.component.ts");
/* harmony import */ var _pages_edit_merchant_edit_merchant_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/edit-merchant/edit-merchant.component */ "./src/app/pages/edit-merchant/edit-merchant.component.ts");
/* harmony import */ var _pages_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/edit-user/edit-user.component */ "./src/app/pages/edit-user/edit-user.component.ts");
/* harmony import */ var _pages_user_change_password_user_change_password_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/user-change-password/user-change-password.component */ "./src/app/pages/user-change-password/user-change-password.component.ts");
/* harmony import */ var _pages_merchant_change_password_merchant_change_password_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/merchant-change-password/merchant-change-password.component */ "./src/app/pages/merchant-change-password/merchant-change-password.component.ts");
/* harmony import */ var _pages_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/paypal/paypal.component */ "./src/app/pages/paypal/paypal.component.ts");
/* harmony import */ var _pages_order_management_order_management_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/order-management/order-management.component */ "./src/app/pages/order-management/order-management.component.ts");
/* harmony import */ var _pages_view_order_user_view_order_user_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/view-order-user/view-order-user.component */ "./src/app/pages/view-order-user/view-order-user.component.ts");
/* harmony import */ var _pages_view_order_item_view_order_item_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/view-order-item/view-order-item.component */ "./src/app/pages/view-order-item/view-order-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var routes = [
    //********************** Start Page with origin Functionality ***************************//
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //********************** Start login Functionality ***************************//
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'forgot-password', component: _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"] },
    { path: 'reset-password/:adminId/:secretKey', component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"] },
    //********************** End login Functionality ***************************//
    //********************** Start Dashboard Functionality ***************************//
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"] },
    //********************** End Dashboard Functionality ***************************//
    { path: 'paypal', component: _pages_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_37__["PaypalComponent"] },
    //********************** Start User Management Functionality ***************************//
    { path: 'user-management', component: _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_6__["UserManagementComponent"] },
    { path: 'view-user/:userId', component: _pages_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_16__["ViewUserComponent"] },
    { path: 'edit-user/:userId', component: _pages_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_34__["EditUserComponent"] },
    { path: 'user-change-Password/:userId', component: _pages_user_change_password_user_change_password_component__WEBPACK_IMPORTED_MODULE_35__["UserChangePasswordComponent"] },
    //********************** End User Management Functionality ***************************//
    //********************** Start Merchant Management Functionality ***************************//
    { path: 'merchant-management', component: _pages_merchant_management_merchant_management_component__WEBPACK_IMPORTED_MODULE_30__["MerchantManagementComponent"] },
    { path: 'add-merchant', component: _pages_add_merchant_add_merchant_component__WEBPACK_IMPORTED_MODULE_31__["AddMerchantComponent"] },
    { path: 'view-merchant/:userId', component: _pages_view_merchant_view_merchant_component__WEBPACK_IMPORTED_MODULE_32__["ViewMerchantComponent"] },
    { path: 'edit-merchant/:userId', component: _pages_edit_merchant_edit_merchant_component__WEBPACK_IMPORTED_MODULE_33__["EditMerchantComponent"] },
    { path: 'merchant-change-Password/:userId', component: _pages_merchant_change_password_merchant_change_password_component__WEBPACK_IMPORTED_MODULE_36__["MerchantChangePasswordComponent"] },
    //********************** End Merchant Management Functionality ***************************//
    //********************** Start Venue Management Functionality ***************************//
    { path: 'venue-management', component: _pages_venue_management_venue_management_component__WEBPACK_IMPORTED_MODULE_7__["VenueManagementComponent"] },
    { path: 'add-menu/:venueId', component: _pages_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_20__["AddMenuComponent"] },
    { path: 'edit-venue-category/:venueId/:categoryId', component: _pages_edit_venue_category_edit_venue_category_component__WEBPACK_IMPORTED_MODULE_26__["EditVenueCategoryComponent"] },
    { path: 'edit-category-item/:venueId/:categoryId/:itemId', component: _pages_edit_category_item_edit_category_item_component__WEBPACK_IMPORTED_MODULE_27__["EditCategoryItemComponent"] },
    { path: 'add-more-category-items/:venueId/:categoryId', component: _pages_add_more_category_items_add_more_category_items_component__WEBPACK_IMPORTED_MODULE_25__["AddMoreCategoryItemsComponent"] },
    { path: 'view-menu-items/:venueId/:categoryId', component: _pages_view_menu_items_view_menu_items_component__WEBPACK_IMPORTED_MODULE_24__["ViewMenuItemsComponent"] },
    { path: 'menu-management/:venueId', component: _pages_menu_management_menu_management_component__WEBPACK_IMPORTED_MODULE_23__["MenuManagementComponent"] },
    { path: 'view-venue/:venueId', component: _pages_view_venue_view_venue_component__WEBPACK_IMPORTED_MODULE_17__["ViewVenueComponent"] },
    { path: 'edit-venue/:venueId', component: _pages_edit_venue_edit_venue_component__WEBPACK_IMPORTED_MODULE_18__["EditVenueComponent"] },
    { path: 'add-venue', component: _pages_add_venue_add_venue_component__WEBPACK_IMPORTED_MODULE_14__["AddVenueComponent"] },
    { path: 'add-venue-speciality/:venueId', component: _pages_add_venue_speciality_add_venue_speciality_component__WEBPACK_IMPORTED_MODULE_21__["AddVenueSpecialityComponent"] },
    { path: 'view-venue-speciality/:venueId', component: _pages_view_venue_speciality_view_venue_speciality_component__WEBPACK_IMPORTED_MODULE_22__["ViewVenueSpecialityComponent"] },
    { path: 'edit-venue-speciality/:venueId/:categoryId', component: _pages_edit_venue_speciality_edit_venue_speciality_component__WEBPACK_IMPORTED_MODULE_28__["EditVenueSpecialityComponent"] },
    //********************** End Venue Management Functionality ***************************//
    //********************** Start Order Management Functionality ***************************//
    { path: 'order-management', component: _pages_order_management_order_management_component__WEBPACK_IMPORTED_MODULE_38__["OrderManagementComponent"] },
    { path: 'view-order-item/:tableId', component: _pages_view_order_item_view_order_item_component__WEBPACK_IMPORTED_MODULE_40__["ViewOrderItemComponent"] },
    { path: 'view-order-user/:tableId/:itemId', component: _pages_view_order_user_view_order_user_component__WEBPACK_IMPORTED_MODULE_39__["ViewOrderUserComponent"] },
    //********************** End Order Management Functionality ***************************//
    //********************** Start Promotion Management Functionality ***************************//
    { path: 'promotion-banner-management', component: _pages_promotion_banner_management_promotion_banner_management_component__WEBPACK_IMPORTED_MODULE_13__["PromotionBannerManagementComponent"] },
    { path: 'add-promotion-banner', component: _pages_add_promotion_banner_add_promotion_banner_component__WEBPACK_IMPORTED_MODULE_15__["AddPromotionBannerComponent"] },
    { path: 'view-banner/:bannerId', component: _pages_view_banner_view_banner_component__WEBPACK_IMPORTED_MODULE_19__["ViewBannerComponent"] },
    //********************** End Promotion Management Functionality ***************************//
    //********************** Start static Management Functionality ***************************//
    { path: 'static-content-management', component: _pages_static_content_management_static_content_management_component__WEBPACK_IMPORTED_MODULE_29__["StaticContentManagementComponent"] },
    //********************** End static Management Functionality ***************************//
    //********************** Start Header, Footer, Side-menu Management Functionality ***************************//
    { path: 'header', component: _pages_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"] },
    { path: 'footer', component: _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"] },
    { path: 'side-menu', component: _pages_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_10__["SideMenuComponent"] },
    //********************** End Header, Footer, Side-menu Management Functionality ***************************//
    //********************** Start Page Not Found Functionality ***************************//
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
    //********************** End Page Not Found Functionality ***************************//
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

module.exports = "<router-outlet></router-outlet>\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\">\n <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>"

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
        this.title = 'redtieAdmin';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ "./src/app/pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/user-management/user-management.component */ "./src/app/pages/user-management/user-management.component.ts");
/* harmony import */ var _pages_venue_management_venue_management_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/venue-management/venue-management.component */ "./src/app/pages/venue-management/venue-management.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _pages_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/side-menu/side-menu.component */ "./src/app/pages/side-menu/side-menu.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _pages_promotion_banner_management_promotion_banner_management_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/promotion-banner-management/promotion-banner-management.component */ "./src/app/pages/promotion-banner-management/promotion-banner-management.component.ts");
/* harmony import */ var _pages_add_venue_add_venue_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/add-venue/add-venue.component */ "./src/app/pages/add-venue/add-venue.component.ts");
/* harmony import */ var _pages_add_promotion_banner_add_promotion_banner_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/add-promotion-banner/add-promotion-banner.component */ "./src/app/pages/add-promotion-banner/add-promotion-banner.component.ts");
/* harmony import */ var _pages_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/view-user/view-user.component */ "./src/app/pages/view-user/view-user.component.ts");
/* harmony import */ var _pages_view_venue_view_venue_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/view-venue/view-venue.component */ "./src/app/pages/view-venue/view-venue.component.ts");
/* harmony import */ var _pages_edit_venue_edit_venue_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/edit-venue/edit-venue.component */ "./src/app/pages/edit-venue/edit-venue.component.ts");
/* harmony import */ var _pages_view_banner_view_banner_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/view-banner/view-banner.component */ "./src/app/pages/view-banner/view-banner.component.ts");
/* harmony import */ var _pages_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/add-menu/add-menu.component */ "./src/app/pages/add-menu/add-menu.component.ts");
/* harmony import */ var _pages_add_venue_speciality_add_venue_speciality_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/add-venue-speciality/add-venue-speciality.component */ "./src/app/pages/add-venue-speciality/add-venue-speciality.component.ts");
/* harmony import */ var _pages_view_venue_speciality_view_venue_speciality_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/view-venue-speciality/view-venue-speciality.component */ "./src/app/pages/view-venue-speciality/view-venue-speciality.component.ts");
/* harmony import */ var _pages_menu_management_menu_management_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/menu-management/menu-management.component */ "./src/app/pages/menu-management/menu-management.component.ts");
/* harmony import */ var _pages_view_menu_items_view_menu_items_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/view-menu-items/view-menu-items.component */ "./src/app/pages/view-menu-items/view-menu-items.component.ts");
/* harmony import */ var _pages_add_more_category_items_add_more_category_items_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/add-more-category-items/add-more-category-items.component */ "./src/app/pages/add-more-category-items/add-more-category-items.component.ts");
/* harmony import */ var _pages_edit_venue_category_edit_venue_category_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/edit-venue-category/edit-venue-category.component */ "./src/app/pages/edit-venue-category/edit-venue-category.component.ts");
/* harmony import */ var _pages_edit_category_item_edit_category_item_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/edit-category-item/edit-category-item.component */ "./src/app/pages/edit-category-item/edit-category-item.component.ts");
/* harmony import */ var _pages_edit_venue_speciality_edit_venue_speciality_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/edit-venue-speciality/edit-venue-speciality.component */ "./src/app/pages/edit-venue-speciality/edit-venue-speciality.component.ts");
/* harmony import */ var _pages_static_content_management_static_content_management_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/static-content-management/static-content-management.component */ "./src/app/pages/static-content-management/static-content-management.component.ts");
/* harmony import */ var _pages_merchant_management_merchant_management_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/merchant-management/merchant-management.component */ "./src/app/pages/merchant-management/merchant-management.component.ts");
/* harmony import */ var _pages_add_merchant_add_merchant_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/add-merchant/add-merchant.component */ "./src/app/pages/add-merchant/add-merchant.component.ts");
/* harmony import */ var _pages_view_merchant_view_merchant_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/view-merchant/view-merchant.component */ "./src/app/pages/view-merchant/view-merchant.component.ts");
/* harmony import */ var _pages_edit_merchant_edit_merchant_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/edit-merchant/edit-merchant.component */ "./src/app/pages/edit-merchant/edit-merchant.component.ts");
/* harmony import */ var _pages_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/edit-user/edit-user.component */ "./src/app/pages/edit-user/edit-user.component.ts");
/* harmony import */ var _pages_user_change_password_user_change_password_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/user-change-password/user-change-password.component */ "./src/app/pages/user-change-password/user-change-password.component.ts");
/* harmony import */ var _pages_merchant_change_password_merchant_change_password_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/merchant-change-password/merchant-change-password.component */ "./src/app/pages/merchant-change-password/merchant-change-password.component.ts");
/* harmony import */ var _pages_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/paypal/paypal.component */ "./src/app/pages/paypal/paypal.component.ts");
/* harmony import */ var _pages_order_management_order_management_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/order-management/order-management.component */ "./src/app/pages/order-management/order-management.component.ts");
/* harmony import */ var _pages_view_order_user_view_order_user_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/view-order-user/view-order-user.component */ "./src/app/pages/view-order-user/view-order-user.component.ts");
/* harmony import */ var _pages_view_order_item_view_order_item_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/view-order-item/view-order-item.component */ "./src/app/pages/view-order-item/view-order-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







 // <-- import the module










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"],
                _pages_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_14__["UserManagementComponent"],
                _pages_venue_management_venue_management_component__WEBPACK_IMPORTED_MODULE_15__["VenueManagementComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                _pages_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _pages_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_19__["SideMenuComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
                _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__["ResetPasswordComponent"],
                _pages_promotion_banner_management_promotion_banner_management_component__WEBPACK_IMPORTED_MODULE_22__["PromotionBannerManagementComponent"],
                _pages_add_venue_add_venue_component__WEBPACK_IMPORTED_MODULE_23__["AddVenueComponent"],
                _pages_add_promotion_banner_add_promotion_banner_component__WEBPACK_IMPORTED_MODULE_24__["AddPromotionBannerComponent"],
                _pages_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_25__["ViewUserComponent"],
                _pages_view_venue_view_venue_component__WEBPACK_IMPORTED_MODULE_26__["ViewVenueComponent"],
                _pages_edit_venue_edit_venue_component__WEBPACK_IMPORTED_MODULE_27__["EditVenueComponent"],
                _pages_view_banner_view_banner_component__WEBPACK_IMPORTED_MODULE_28__["ViewBannerComponent"],
                _pages_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_29__["AddMenuComponent"],
                _pages_add_venue_speciality_add_venue_speciality_component__WEBPACK_IMPORTED_MODULE_30__["AddVenueSpecialityComponent"],
                _pages_view_venue_speciality_view_venue_speciality_component__WEBPACK_IMPORTED_MODULE_31__["ViewVenueSpecialityComponent"],
                _pages_menu_management_menu_management_component__WEBPACK_IMPORTED_MODULE_32__["MenuManagementComponent"],
                _pages_view_menu_items_view_menu_items_component__WEBPACK_IMPORTED_MODULE_33__["ViewMenuItemsComponent"],
                _pages_add_more_category_items_add_more_category_items_component__WEBPACK_IMPORTED_MODULE_34__["AddMoreCategoryItemsComponent"],
                _pages_edit_venue_category_edit_venue_category_component__WEBPACK_IMPORTED_MODULE_35__["EditVenueCategoryComponent"],
                _pages_edit_category_item_edit_category_item_component__WEBPACK_IMPORTED_MODULE_36__["EditCategoryItemComponent"],
                _pages_edit_venue_speciality_edit_venue_speciality_component__WEBPACK_IMPORTED_MODULE_37__["EditVenueSpecialityComponent"],
                _pages_static_content_management_static_content_management_component__WEBPACK_IMPORTED_MODULE_38__["StaticContentManagementComponent"],
                _pages_merchant_management_merchant_management_component__WEBPACK_IMPORTED_MODULE_39__["MerchantManagementComponent"],
                _pages_add_merchant_add_merchant_component__WEBPACK_IMPORTED_MODULE_40__["AddMerchantComponent"],
                _pages_view_merchant_view_merchant_component__WEBPACK_IMPORTED_MODULE_41__["ViewMerchantComponent"],
                _pages_edit_merchant_edit_merchant_component__WEBPACK_IMPORTED_MODULE_42__["EditMerchantComponent"],
                _pages_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_43__["EditUserComponent"],
                _pages_user_change_password_user_change_password_component__WEBPACK_IMPORTED_MODULE_44__["UserChangePasswordComponent"],
                _pages_merchant_change_password_merchant_change_password_component__WEBPACK_IMPORTED_MODULE_45__["MerchantChangePasswordComponent"],
                _pages_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_46__["PaypalComponent"],
                _pages_order_management_order_management_component__WEBPACK_IMPORTED_MODULE_47__["OrderManagementComponent"],
                _pages_view_order_user_view_order_user_component__WEBPACK_IMPORTED_MODULE_48__["ViewOrderUserComponent"],
                _pages_view_order_item_view_order_item_component__WEBPACK_IMPORTED_MODULE_49__["ViewOrderItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
                    timeOut: 1000,
                    positionClass: 'toast-top-center',
                    preventDuplicates: true,
                }),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                ng2_img_max__WEBPACK_IMPORTED_MODULE_7__["Ng2ImgMaxModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/add-menu/add-menu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-menu/add-menu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/add-menu/add-menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/add-menu/add-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section no-scroll\">\n        <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n        <div class=\"right-inner\">\n            <div class=\"filter-block\">\n                <fieldset class=\"global-fieldset\">\n                    <legend>Venue Detail</legend>\n                    <div class=\"filter-content\">\n                        <div class=\"common-detail-box\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6  label-right\">Venue Name : </label>\n                                <div class=\"col-sm-6\">\n                                    {{viewVenueDetail?.venueName || '----'}}\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6  label-right\">Venue Logo :</label>\n                                <div class=\"col-sm-6\">\n                                    <div clss=\"add_images_box\">\n                                        <ul class=\"img_list\">\n                                            <li class=\"addImage\" *ngIf=\"!viewVenueDetail.logo\">\n                                                <img src=\"assets/img/placeholder.png\">\n                                            </li>\n                                            <li class=\"addImage\" *ngIf=\"viewVenueDetail.logo\">\n                                                <img src=\"{{viewVenueDetail.logo}}\">\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n                <fieldset class=\"global-fieldset\">\n                    <legend>Add Category</legend>\n                    <div class=\"filter-content\">\n                        <form class=\"login_box_outer\" [formGroup]='menuForm' novalidate>\n                            <div class=\"common-detail-box\">\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Category Name<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <input class=\"form-control custom-control\" formControlName=\"categoryName\" placeholder=\"Enter category name\" maxlength=\"50\" />\n                                        <p *ngIf=\"menuForm.get('categoryName').hasError('required') && menuForm.get('categoryName').dirty\">*category name required</p>\n                                        <p *ngIf=\"menuForm.get('categoryName').hasError('pattern') && menuForm.get('categoryName').dirty\">*invalid name</p>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Category Image<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <div clss=\"add_images_box\">\n                                            <ul class=\"img_list\">\n                                                <li class=\"addImage\" *ngIf=\"menuForm.get('categoryImage').value\">\n                                                    <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage(i, 'categoryImage')\"></i>\n                                                    <img src=\"{{menuForm.get('categoryImage').value}}\">\n                                                </li>\n                                                <li *ngIf=\"!menuForm.get('categoryImage').value\" class=\"addImage\">\n                                                    <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event, i, 'categoryImage')\" accept=\"image/*\"\n                                                    />\n                                                    <i class=\"plusIcon\">+</i>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </fieldset>\n                <div class=\"repeate_area\" *ngFor=\"let control of  menuForm.controls['menuItems'].controls; let i = index\">\n                    <div class=\"filter-block\">\n                        <fieldset class=\"global-fieldset\">\n                            <legend>Add Item {{ i + 1 }}</legend>\n                            <div class=\"filter-content\">\n                                <form class=\"login_box_outer\" [formGroup]=\"control\" novalidate>\n                                    <div class=\"common-detail-box\">\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Item Name<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <input class=\"form-control custom-control\" formControlName=\"itemName\" placeholder=\"Enter item name\" maxlength=\"50\" />\n                                                <p *ngIf=\"control.get('itemName').hasError('required') && control.get('itemName').dirty\">*item name required</p>\n                                                <p *ngIf=\"control.get('itemName').hasError('pattern') && control.get('itemName').dirty\">*invalid name</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Item Image<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <div clss=\"add_images_box\">\n                                                    <ul class=\"img_list\">\n                                                        <li class=\"addImage\" *ngIf=\"control.get('itemImage').value\">\n                                                            <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage(i, 'itemImage')\"></i>\n                                                            <img [src]=\"control.get('itemImage').value\">\n                                                        </li>\n                                                        <li class=\"addImage\" *ngIf=\"!control.get('itemImage').value\">\n                                                            <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event, i, 'itemImage')\" accept=\"image/*\"\n                                                            />\n                                                            <i class=\"plusIcon\">+</i>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Item Price<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <input class=\"form-control custom-control\" formControlName=\"itemPrice\" (keypress)=\"keypress($event.keyCode)\" placeholder=\"Enter item price\"\n                                                    maxlength=\"10\" />\n                                                <p *ngIf=\"control.get('itemPrice').hasError('required') && control.get('itemPrice').dirty\">*item price required</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Item Code<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <input class=\"form-control custom-control\" formControlName=\"itemCode\" (keypress)=\"keypress($event.keyCode)\" placeholder=\"Enter item code\"\n                                                    maxlength=\"10\" />\n                                                <p *ngIf=\"control.get('itemCode').hasError('required') && control.get('itemCode').dirty\">*item code required</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Discount<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <input class=\"form-control custom-control\" formControlName=\"discount\" (keypress)=\"keypress($event.keyCode)\" placeholder=\"Enter item discount\"\n                                                    maxlength=\"10\" />\n                                                <p *ngIf=\"control.get('discount').hasError('required') && control.get('discount').dirty\">*item code required</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Item Description<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <input class=\"form-control custom-control\" formControlName=\"itemDescription\"  placeholder=\"Enter item description\"\n                                                    maxlength=\"500\" />\n                                                <p *ngIf=\"control.get('itemDescription').hasError('required') && control.get('itemDescription').dirty\">*item description required</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </fieldset>\n                    </div>\n                    <div class=\"text-right\">\n                        <button class=\"addmore btn btn-success\" *ngIf=\"i>0 || menuForm.controls['menuItems'].controls.length>1\" (click)=\"removeItem(i)\">Remove Item</button>\n                    </div>\n                    <div class=\"text-right\">\n                        <button class=\"addmore btn btn-success\" *ngIf=\"((i+1) == menuForm.controls['menuItems'].controls.length)\" [disabled]=\"control.invalid\"\n                            (click)=\"newAdd()\">Add More</button>\n                    </div>\n                </div>\n\n                <div class=\"table-button text-center mt30\">\n                    <button (click)=\"addMenu()\" class=\"btn btn-red\" [disabled]=\"menuForm.invalid\">Add Menu</button>\n                    <button (click)=\"cancel()\" class=\"btn btn-danger\">Cancel</button>\n                </div>\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/pages/add-menu/add-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/add-menu/add-menu.component.ts ***!
  \******************************************************/
/*! exports provided: AddMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMenuComponent", function() { return AddMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddMenuComponent = /** @class */ (function () {
    function AddMenuComponent(fb, service, activeRouter, ng2ImgMaxService) {
        this.fb = fb;
        this.service = service;
        this.activeRouter = activeRouter;
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.viewVenueDetail = { images: [] };
    }
    AddMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.venueId = params.get('venueId');
        });
        this.venueDetail();
        this.menuForm = this.fb.group({
            categoryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            categoryImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            menuItems: this.fb.array([])
        });
        this.newAdd();
    };
    AddMenuComponent.prototype.newAdd = function () {
        var arrayControl = this.menuForm.controls['menuItems'];
        var form = this.fb.group({
            itemName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            itemImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            itemPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            itemCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            discount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            itemDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        arrayControl.push(form);
    };
    AddMenuComponent.prototype.venueDetail = function () {
        var _this = this;
        this.service.spinnerShow();
        this.service.get('getVenueDetail/' + this.venueId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.spinnerHide();
                _this.viewVenueDetail = res['data'];
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    AddMenuComponent.prototype.addMenu = function () {
        var _this = this;
        this.menuForm.value['venueId'] = this.venueId;
        console.log("menuForm Value===>>>>", this.menuForm.value);
        this.service.spinnerShow();
        this.service.post('addMenu', this.menuForm.value, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.spinnerHide();
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/view-venue/' + _this.venueId);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    AddMenuComponent.prototype.removeItem = function (i) {
        var arrayControl = this.menuForm.controls['menuItems'];
        arrayControl.removeAt(i);
    };
    AddMenuComponent.prototype.onImageChange = function (event, index, imgType) {
        var _this = this;
        console.log('fil => ', this.menuForm.value);
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var image = event.target.files[0];
            this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(function (result) {
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = function (event) {
                    _this.image = new Image();
                    //Set the Base64 string return from FileReader as source.
                    _this.image.src = event.target.result;
                    if (imgType == 'categoryImage') {
                        console.log("categoryImage");
                        self.menuForm.controls['categoryImage'].setValue(event.target.result);
                    }
                    if (imgType == 'itemImage') {
                        var arrayControl = _this.menuForm.controls['menuItems'];
                        arrayControl.controls[index]['controls']['itemImage'].setValue(event.target.result);
                        console.log(_this.menuForm.value);
                    }
                    //Validate the File Height and Width.
                };
            });
        }
    };
    AddMenuComponent.prototype.removeImage = function (index, imageType) {
        if (imageType == 'categoryImage') {
            this.menuForm.controls['categoryImage'].setValue('');
        }
        if (imageType == 'itemImage') {
            var arrayControl = this.menuForm.controls['menuItems'];
            arrayControl.controls[index]['controls']['itemImage'].setValue('');
        }
    };
    AddMenuComponent.prototype.keypress = function (keyCode) {
        if ((keyCode >= 48 && keyCode <= 57))
            return true;
        return false;
    };
    AddMenuComponent.prototype.cancel = function () {
        this.service.routerLink('/view-venue/' + this.venueId);
    };
    AddMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-menu',
            template: __webpack_require__(/*! ./add-menu.component.html */ "./src/app/pages/add-menu/add-menu.component.html"),
            styles: [__webpack_require__(/*! ./add-menu.component.css */ "./src/app/pages/add-menu/add-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng2_img_max__WEBPACK_IMPORTED_MODULE_4__["Ng2ImgMaxService"]])
    ], AddMenuComponent);
    return AddMenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/add-merchant/add-merchant.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/add-merchant/add-merchant.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/add-merchant/add-merchant.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/add-merchant/add-merchant.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section no-scroll\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n      <div class=\"filter-block\">\n        <fieldset class=\"global-fieldset\">\n          <legend>Add Merchant</legend>\n          <div class=\"filter-content\">\n            <form class=\"login_box_outer\" [formGroup]='merchantForm' novalidate>\n              <div class=\"common-detail-box\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Merchant Name<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control custom-control\" (keypress)=\"name($event.keyCode)\" formControlName=\"firstName\" placeholder=\"Enter merchant name\" maxlength=\"20\" />\n                    <p *ngIf=\"merchantForm.get('firstName').hasError('required') && merchantForm.get('firstName').dirty\">*merchant name required</p>\n                    <p *ngIf=\"merchantForm.get('firstName').hasError('pattern') && merchantForm.get('firstName').dirty\">*merchant name required</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Email<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input  type=\"email\" class=\"form-control custom-control\" (keypress)=\"keypress($event.keyCode)\" formControlName=\"email\" placeholder=\"Enter email id\" maxlength=\"52\" />\n                    <p *ngIf=\"merchantForm.get('email').hasError('required') && merchantForm.get('email').dirty\">*email required</p>\n                    <p *ngIf=\"merchantForm.get('email').hasError('pattern') && merchantForm.get('email').dirty\">*invalid email</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Gender<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                      <select class=\"form-control angle\" formControlName=\"gender\">\n                          <option value=\"\">--select--</option>\n                          <option value=\"MALE\">Male</option>\n                          <option value=\"FEMALE\">Female</option>\n                      </select>\n                      <p *ngIf=\"merchantForm.get('gender').hasError('required') && merchantForm.get('gender').dirty\">*gender required</p>\n                  </div>\n              </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Profile Pic<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <div clss=\"add_images_box\">\n                      <ul class=\"img_list\">\n                        <li class=\"addImage\" *ngIf=\"merchantForm.get('profilePic').value\">\n                          <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage()\"></i>\n                          <img src=\"{{merchantForm.get('profilePic').value}}\">\n                        </li>\n                        <li *ngIf=\"!merchantForm.get('profilePic').value\" class=\"addImage\">\n                          <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event)\" accept=\"image/*\" />\n                          <i class=\"plusIcon\">+</i>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Password<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"password\" class=\"form-control custom-control\" formControlName=\"password\" placeholder=\"Enter password\" maxlength=\"16\" />\n                    <p  *ngIf=\" merchantForm.get('password').hasError('required')  && merchantForm.get('password').dirty\">*Please enter password</p>\n                    <p  *ngIf=\" merchantForm.get('password').hasError('minlength')   && merchantForm.get('password').dirty\">*Password should be greater then 8 character's</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Confirm Password<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input  type=\"password\" class=\"form-control custom-control\" formControlName=\"confPassword\" placeholder=\"Enter confirm password\" maxlength=\"16\" />\n                    <p *ngIf=\"merchantForm.get('confPassword').value != merchantForm.get('password').value && merchantForm.get('confPassword').dirty && (merchantForm.get('password').value && merchantForm.get('confPassword').value)\">password not match</p>\n                    <p *ngIf=\"merchantForm.get('confPassword').hasError('required') && merchantForm.get('confPassword').dirty\">*confirm password required</p>\n                  </div>\n                </div>\n              </div>\n          </form>\n      </div>\n      </fieldset>\n      <div class=\"table-button text-center mt30\">\n        <button (click)=\"addMerchant()\" class=\"btn btn-red\" [disabled]=\"merchantForm.invalid || merchantForm.get('confPassword').value != merchantForm.get('password').value\">Add</button>\n        <button [routerLink]=\"['/merchant-management']\" class=\"btn btn-danger\">Cancel</button>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/add-merchant/add-merchant.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/add-merchant/add-merchant.component.ts ***!
  \**************************************************************/
/*! exports provided: AddMerchantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMerchantComponent", function() { return AddMerchantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddMerchantComponent = /** @class */ (function () {
    function AddMerchantComponent(service, ng2ImgMaxService, fb) {
        this.service = service;
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.fb = fb;
        this.merchantForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            confPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            profilePic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    AddMerchantComponent.prototype.ngOnInit = function () {
    };
    AddMerchantComponent.prototype.addMerchant = function () {
        var _this = this;
        this.service.spinnerShow();
        this.merchantForm.value['userRole'] = "MERCHANT";
        this.merchantForm.value['status'] = "ACTIVE";
        delete this.merchantForm.value['confPassword'];
        this.service.post('addMerchant', this.merchantForm.value, 1).subscribe(function (res) {
            _this.service.spinnerHide();
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/merchant-management');
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    AddMerchantComponent.prototype.onImageChange = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var image = event.target.files[0];
            this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(function (result) {
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = function (event) {
                    _this.image = new Image();
                    //Set the Base64 string return from FileReader as source.
                    _this.image.src = event.target.result;
                    self.merchantForm.controls['profilePic'].setValue(event.target.result);
                };
            }, function (error) {
                console.log('😢 Oh no!', error);
            });
        }
    };
    AddMerchantComponent.prototype.removeImage = function () {
        this.merchantForm.controls['profilePic'].setValue('');
    };
    AddMerchantComponent.prototype.keypress = function (keyCode) {
        if (keyCode == 32) {
            return false;
        }
        return true;
    };
    AddMerchantComponent.prototype.name = function (keyCode) {
        if (keyCode == 32 && !this.merchantForm.value.firstName) {
            return false;
        }
        return true;
    };
    AddMerchantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-merchant',
            template: __webpack_require__(/*! ./add-merchant.component.html */ "./src/app/pages/add-merchant/add-merchant.component.html"),
            styles: [__webpack_require__(/*! ./add-merchant.component.css */ "./src/app/pages/add-merchant/add-merchant.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], ng2_img_max__WEBPACK_IMPORTED_MODULE_3__["Ng2ImgMaxService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddMerchantComponent);
    return AddMerchantComponent;
}());



/***/ }),

/***/ "./src/app/pages/add-more-category-items/add-more-category-items.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/add-more-category-items/add-more-category-items.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/add-more-category-items/add-more-category-items.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/add-more-category-items/add-more-category-items.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section\">\n        <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n        <div class=\"right-inner\">\n            <div class=\"filter-block\">\n                <fieldset class=\"global-fieldset\">\n                    <legend>Category Detail</legend>\n                    <div class=\"filter-content\">\n                        <div class=\"common-detail-box\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 label-right\">Category Name</label>\n                                <div class=\"col-sm-6\">\n                                    {{categoryDetail?.categoryName || '----'}}\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6  label-right\">Category Images</label>\n                                <div class=\"col-sm-6\">\n                                    <div clss=\"add_images_box\">\n                                        <ul class=\"img_list\">\n                                            <li class=\"addImage\">\n                                                <img src=\"{{categoryDetail?.categoryImage || 'assets/img/placeholder.png'}}\">\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n                <div [formGroup]=\"menuForm\">\n                <div class=\"repeate_area\" *ngFor=\"let control of  menuForm.controls['menuItems'].controls; let i = index\">\n                    <div class=\"filter-block\">\n                        <fieldset class=\"global-fieldset\">\n                            <legend>Add Items</legend>\n                            <div class=\"filter-content\">\n                                <form class=\"login_box_outer\" [formGroup]=\"control\" novalidate>\n                                    <div class=\"common-detail-box\">\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Item Name<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <input class=\"form-control custom-control\" formControlName=\"itemName\" placeholder=\"Enter item name\" maxlength=\"50\" />\n                                                <p *ngIf=\"control.get('itemName').hasError('required') && control.get('itemName').dirty\">*item name required</p>\n                                                <p *ngIf=\"control.get('itemName').hasError('pattern') && control.get('itemName').dirty\">*invalid name</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Item Image<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <div clss=\"add_images_box\">\n                                                    <ul class=\"img_list\">\n                                                        <li class=\"addImage\" *ngIf=\"control.get('itemImage').value\">\n                                                            <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage(i, 'itemImage')\"></i>\n                                                            <img [src]=\"control.get('itemImage').value\">\n                                                        </li>\n                                                        <li class=\"addImage\" *ngIf=\"!control.get('itemImage').value\">\n                                                            <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event, i, 'itemImage')\" accept=\"image/*\"\n                                                            />\n                                                            <i class=\"plusIcon\">+</i>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Item Price<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <input class=\"form-control custom-control\" formControlName=\"itemPrice\" (keypress)=\"keypress($event.keyCode)\" placeholder=\"Enter item price\"\n                                                    maxlength=\"10\" />\n                                                <p *ngIf=\"control.get('itemPrice').hasError('required') && control.get('itemPrice').dirty\">*item price required</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Item Code<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <input class=\"form-control custom-control\" formControlName=\"itemCode\" (keypress)=\"keypress($event.keyCode)\" placeholder=\"Enter item code\"\n                                                    maxlength=\"10\" />\n                                                <p *ngIf=\"control.get('itemCode').hasError('required') && control.get('itemCode').dirty\">*item code required</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Discount<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <input class=\"form-control custom-control\" formControlName=\"discount\" (keypress)=\"keypress($event.keyCode)\" placeholder=\"Enter item discount\"\n                                                    maxlength=\"10\" />\n                                                <p *ngIf=\"control.get('discount').hasError('required') && control.get('discount').dirty\">*item code required</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Item Description<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <input class=\"form-control custom-control\" formControlName=\"itemDescription\"  placeholder=\"Enter item description\"\n                                                    maxlength=\"500\" />\n                                                <p *ngIf=\"control.get('itemDescription').hasError('required') && control.get('itemDescription').dirty\">*item description required</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </fieldset>\n                    </div>\n                    <div class=\"text-right\">\n                        <button class=\"addmore btn btn-success\" *ngIf=\"i>0 || menuForm.controls['menuItems'].controls.length>1\" (click)=\"removeItem(i)\">Remove Item</button>\n                    </div>\n                    <div class=\"text-right\">\n                        <button class=\"addmore btn btn-success\" *ngIf=\"((i+1) == menuForm.controls['menuItems'].controls.length)\" [disabled]=\"control.invalid\"\n                            (click)=\"newAdd()\">Add More</button>\n                    </div>\n                </div>\n                </div>\n\n                <div class=\"table-button text-center mt30\">\n                    <button (click)=\"addMoreItem()\" class=\"btn btn-red\" [disabled]=\"menuForm.invalid\">Add Menu</button>\n                    <button (click)=\"cancel()\" class=\"btn btn-danger\">Cancel</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/add-more-category-items/add-more-category-items.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/add-more-category-items/add-more-category-items.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddMoreCategoryItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoreCategoryItemsComponent", function() { return AddMoreCategoryItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddMoreCategoryItemsComponent = /** @class */ (function () {
    function AddMoreCategoryItemsComponent(service, activeRoute, fb, ng2ImgMaxService) {
        this.service = service;
        this.activeRoute = activeRoute;
        this.fb = fb;
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.categoryDetail = {};
    }
    AddMoreCategoryItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap.subscribe(function (params) {
            _this.venueId = params.get('venueId');
            _this.categoryId = params.get('categoryId');
        });
        this.getCategoryDetailOfVenue();
        // this.menuItems = this.fb.array([])
        this.menuForm = this.fb.group({
            menuItems: this.fb.array([])
        });
        this.newAdd();
    };
    AddMoreCategoryItemsComponent.prototype.newAdd = function () {
        var arrayControl = this.menuForm.controls['menuItems'];
        var form = this.fb.group({
            itemName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\s]*$/)],
            itemImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            itemPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            itemCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            discount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            itemDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        arrayControl.push(form);
    };
    AddMoreCategoryItemsComponent.prototype.getCategoryDetailOfVenue = function () {
        var _this = this;
        this.service.get('getCategoryDetailOfVenue/' + this.venueId + '/' + this.categoryId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.categoryDetail = res['data'];
                console.log("resresfjsdfyuak===>>>" + JSON.stringify(_this.categoryDetail));
            }
            else
                _this.service.error('somthing went wrong.');
        }, function (err) {
            if (err.error['responseCode'] == 400) {
                localStorage.removeItem("token");
                localStorage.removeItem("adminId");
                localStorage.removeItem("type");
                _this.service.routerLink('/login');
            }
            _this.service.error(err.error['responseMessage']);
        });
    };
    AddMoreCategoryItemsComponent.prototype.removeItem = function (i) {
        var arrayControl = this.menuForm.controls['menuItems'];
        arrayControl.removeAt(i);
    };
    AddMoreCategoryItemsComponent.prototype.onImageChange = function (event, index, imgType) {
        var _this = this;
        console.log('fil => ', this.menuForm.value);
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var image = event.target.files[0];
            this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(function (result) {
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = function (event) {
                    _this.image = new Image();
                    //Set the Base64 string return from FileReader as source.
                    _this.image.src = event.target.result;
                    if (imgType == 'itemImage') {
                        var arrayControl = _this.menuForm.controls['menuItems'];
                        arrayControl.controls[index]['controls']['itemImage'].setValue(event.target.result);
                        console.log(_this.menuForm.value);
                    }
                    //Validate the File Height and Width.
                };
            });
        }
    };
    AddMoreCategoryItemsComponent.prototype.removeImage = function (index, imageType) {
        if (imageType == 'itemImage') {
            var arrayControl = this.menuForm.controls['menuItems'];
            arrayControl.controls[index]['controls']['itemImage'].setValue('');
        }
    };
    AddMoreCategoryItemsComponent.prototype.keypress = function (keyCode) {
        if ((keyCode >= 48 && keyCode <= 57))
            return true;
        return false;
    };
    AddMoreCategoryItemsComponent.prototype.addMoreItem = function () {
        var _this = this;
        this.menuForm.value['venueId'] = this.venueId;
        this.menuForm.value['categoryId'] = this.categoryId;
        console.log("final data===>>>>", this.menuForm.value);
        this.service.spinnerShow();
        this.service.post('addMoreItems', this.menuForm.value, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.spinnerHide();
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/view-menu-items/' + _this.venueId + '/' + _this.categoryId);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    AddMoreCategoryItemsComponent.prototype.cancel = function () {
        this.service.routerLink('/view-menu-items/' + this.venueId + '/' + this.categoryId);
    };
    AddMoreCategoryItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-more-category-items',
            template: __webpack_require__(/*! ./add-more-category-items.component.html */ "./src/app/pages/add-more-category-items/add-more-category-items.component.html"),
            styles: [__webpack_require__(/*! ./add-more-category-items.component.css */ "./src/app/pages/add-more-category-items/add-more-category-items.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ng2_img_max__WEBPACK_IMPORTED_MODULE_4__["Ng2ImgMaxService"]])
    ], AddMoreCategoryItemsComponent);
    return AddMoreCategoryItemsComponent;
}());



/***/ }),

/***/ "./src/app/pages/add-promotion-banner/add-promotion-banner.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/add-promotion-banner/add-promotion-banner.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/add-promotion-banner/add-promotion-banner.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/add-promotion-banner/add-promotion-banner.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section no-scroll\">\n        <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n        <div class=\"right-inner\">\n            <!-- blank form for more add-->\n            <div class=\"repeate_area\">\n                <div class=\"filter-block\">\n                    <fieldset class=\"global-fieldset\">\n                        <legend>Add Banner</legend>\n                        <div class=\"filter-content\">\n                            <form class=\"login_box_outer\" [formGroup]=\"bannerForm\" novalidate>\n                                <div class=\"common-detail-box\">\n                                    <div class=\"form-group row\">\n                                        <label class=\"col-sm-4 label-right label-top\">Banner Name<span style=\"color: red\">*</span></label>\n                                        <div class=\"col-sm-8\">\n                                            <input class=\"form-control custom-control\" formControlName=\"bannerName\" placeholder=\"Enter banner name\" maxlength=\"50\" />\n                                            <p *ngIf=\"bannerForm.get('bannerName').hasError('required') && bannerForm.get('bannerName').dirty\">*banner name required</p>\n                                            <p *ngIf=\"bannerForm.get('bannerName').hasError('pattern') && bannerForm.get('bannerName').dirty\">*enter valid name</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group row\">\n                                        <label class=\"col-sm-4 label-right label-top\">Link<span style=\"color: red\">*</span></label>\n                                        <div class=\"col-sm-8\">\n                                            <input class=\"form-control custom-control\" formControlName=\"link\" id=\"address\" placeholder=\"link\" maxlength=\"500\" />\n                                            <p *ngIf=\"bannerForm.get('link').hasError('required') && bannerForm.get('link').dirty\">*link required</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group row\">\n                                        <label class=\"col-sm-4 label-right label-top\">logo Image<span style=\"color: red\">*</span></label>\n                                        <div class=\"col-sm-8\">\n                                            <div clss=\"add_images_box\">\n                                                <ul class=\"img_list\">\n                                                    <li class=\"addImage\" *ngIf=\"bannerForm.get('bannerImage').value\">\n                                                        <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage()\"></i>\n                                                        <img src=\"{{bannerForm.get('bannerImage').value}}\">\n                                                    </li>\n                                                    <li *ngIf=\"!bannerForm.get('bannerImage').value\" class=\"addImage\">\n                                                        <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event)\" accept=\"image/*\" />\n                                                        <i class=\"plusIcon\">+</i>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"common-detail-box\">\n                                    <div class=\"form-group row\">\n                                        <label class=\"col-sm-4 label-right label-top\">Description<span style=\"color: red\">*</span></label>\n                                        <div class=\"col-sm-8\">\n                                            <textarea class=\"form-control custom-control textarea-custom\" formControlName=\"description\"  placeholder=\"Description\" id=\"description\" maxlength=\"500\"></textarea>\n                                            <p *ngIf=\"bannerForm.get('description').hasError('required') && bannerForm.get('description').dirty\">*description required</p> \n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </fieldset>\n                    <div class=\"table-button text-center mt30\">\n                        <button (click)=\"addBanner()\"  style=\"cursor: pointer\" class=\"btn btn-red\" [disabled]=\"bannerForm.invalid\">Save </button>\n                        <button style=\"cursor: pointer\" [routerLink]=\"['/promotion-banner-management']\" class=\"btn btn-danger\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/pages/add-promotion-banner/add-promotion-banner.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/add-promotion-banner/add-promotion-banner.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddPromotionBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPromotionBannerComponent", function() { return AddPromotionBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPromotionBannerComponent = /** @class */ (function () {
    function AddPromotionBannerComponent(ng2ImgMaxService, service, fb) {
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.service = service;
        this.fb = fb;
        this.bannerImage = "";
        this.bannerForm = this.fb.group({
            bannerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            bannerImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    AddPromotionBannerComponent.prototype.ngOnInit = function () {
    };
    AddPromotionBannerComponent.prototype.addBanner = function () {
        var _this = this;
        this.service.spinnerShow();
        this.service.post('addAddsOn', this.bannerForm.value, 1).subscribe(function (res) {
            _this.service.spinnerHide();
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/promotion-banner-management');
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    AddPromotionBannerComponent.prototype.onImageChange = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var image = event.target.files[0];
            this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(function (result) {
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = function (event) {
                    _this.image = new Image();
                    //Set the Base64 string return from FileReader as source.
                    _this.image.src = event.target.result;
                    // this.bannerImage = event.target.result
                    _this.bannerForm.controls['bannerImage'].setValue(event.target.result);
                    //Validate the File Height and Width.
                };
            }, function (error) {
                console.log('😢 Oh no!', error);
            });
        }
    };
    AddPromotionBannerComponent.prototype.removeImage = function () {
        this.bannerForm.controls['bannerImage'].setValue("");
    };
    AddPromotionBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-promotion-banner',
            template: __webpack_require__(/*! ./add-promotion-banner.component.html */ "./src/app/pages/add-promotion-banner/add-promotion-banner.component.html"),
            styles: [__webpack_require__(/*! ./add-promotion-banner.component.css */ "./src/app/pages/add-promotion-banner/add-promotion-banner.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_img_max__WEBPACK_IMPORTED_MODULE_2__["Ng2ImgMaxService"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddPromotionBannerComponent);
    return AddPromotionBannerComponent;
}());



/***/ }),

/***/ "./src/app/pages/add-venue-speciality/add-venue-speciality.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/add-venue-speciality/add-venue-speciality.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/add-venue-speciality/add-venue-speciality.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/add-venue-speciality/add-venue-speciality.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section no-scroll\">\n        <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n        <div class=\"right-inner\">\n            <div class=\"filter-block\">\n                <fieldset class=\"global-fieldset\">\n                    <legend>Venue Detail</legend>\n                    <div class=\"filter-content\">\n                        <div class=\"common-detail-box\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 label-right\">Venue Name</label>\n                                <div class=\"col-sm-6\">\n                                    {{venueDetail.venueName || '----'}}\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6  label-right\">Venue Images</label>\n                                <div class=\"col-sm-6\">\n                                    <div clss=\"add_images_box\">\n                                        <ul class=\"img_list\" *ngIf=\"!venueDetail.images.length\">\n                                            <li class=\"addImage\">\n                                                <img src='assets/img/placeholder.png'>\n                                            </li>\n                                        </ul>\n                                        <ul class=\"img_list\" *ngIf=\"venueDetail.images.length\">\n                                            <li class=\"addImage\" *ngFor=\"let imageUrl of venueDetail.images; let i = index\">\n                                                <img src=\"{{imageUrl || 'assets/img/placeholder.png'}}\">\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n                <div [formGroup]=\"specialityForm\">\n                <div class=\"repeate_area\" *ngFor=\"let control of  specialityForm.controls['specialityList'].controls; let i = index\">\n                    <div class=\"filter-block\">\n                        <fieldset class=\"global-fieldset\">\n                            <legend>Add Speciality {{ i + 1}}</legend>\n                            <div class=\"filter-content\">\n                                <form class=\"login_box_outer\" [formGroup]=\"control\" novalidate>\n                                    <div class=\"common-detail-box\">\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Category Name<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <input class=\"form-control custom-control\" formControlName=\"categoryName\" placeholder=\"Enter Category name\" maxlength=\"50\"\n                                                />\n                                                <p *ngIf=\"control.get('categoryName').hasError('required') && control.get('categoryName').dirty\">*Category name required</p>\n                                                <p *ngIf=\"control.get('categoryName').hasError('pattern') && control.get('categoryName').dirty\">*invalid name</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Category Image<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <div clss=\"add_images_box\">\n                                                    <ul class=\"img_list\">\n                                                        <li class=\"addImage\" *ngIf=\"control.get('categoryImage').value\">\n                                                            <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage(i, 'categoryImage')\"></i>\n                                                            <img [src]=\"control.get('categoryImage').value\">\n                                                        </li>\n                                                        <li class=\"addImage\" *ngIf=\"!control.get('categoryImage').value\">\n                                                            <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event, i, 'categoryImage')\" accept=\"image/*\"\n                                                            />\n                                                            <i class=\"plusIcon\">+</i>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                            <label class=\"col-sm-4 label-right label-top\">Category Description<span style=\"color: red\">*</span></label>\n                                            <div class=\"col-sm-8\">\n                                                <input class=\"form-control custom-control\" formControlName=\"categoryDescription\" placeholder=\"Enter Category description\"\n                                                    maxlength=\"500\" />\n                                                <p *ngIf=\"control.get('categoryDescription').hasError('required') && control.get('categoryDescription').dirty\">*Category description required</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </fieldset>\n                    </div>\n                    <div class=\"text-right\">\n                        <button class=\"addmore btn btn-success\" *ngIf=\"i>0 || specialityForm.controls['specialityList'].controls.length>1\" (click)=\"removeItem(i)\">Remove Item</button>\n                    </div>\n                    <div class=\"text-right\">\n                        <button class=\"addmore btn btn-success\" *ngIf=\"((i+1) == specialityForm.controls['specialityList'].controls.length)\" [disabled]=\"control.invalid\"\n                            (click)=\"newAdd()\">Add More</button>\n                    </div>\n                </div>\n                </div>\n\n                <div class=\"table-button text-center mt30\">\n                    <button (click)=\"addVenueSpeciality()\" class=\"btn btn-red\" [disabled]=\"specialityForm.invalid\">Add Speciality</button>\n                    <button (click)=\"cancel()\" class=\"btn btn-danger\">Cancel</button>\n                </div>\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/pages/add-venue-speciality/add-venue-speciality.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/add-venue-speciality/add-venue-speciality.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddVenueSpecialityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVenueSpecialityComponent", function() { return AddVenueSpecialityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddVenueSpecialityComponent = /** @class */ (function () {
    function AddVenueSpecialityComponent(fb, service, activeRouter, ng2ImgMaxService) {
        this.fb = fb;
        this.service = service;
        this.activeRouter = activeRouter;
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.venueDetail = { images: [] };
    }
    AddVenueSpecialityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.venueId = params.get('venueId');
        });
        this.specialityForm = this.fb.group({
            specialityList: this.fb.array([])
        });
        this.newAdd();
        this.getVenueDetail();
    };
    AddVenueSpecialityComponent.prototype.newAdd = function () {
        var arrayControl = this.specialityForm.controls['specialityList'];
        var form = this.fb.group({
            categoryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            categoryDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            categoryImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        arrayControl.push(form);
    };
    AddVenueSpecialityComponent.prototype.getVenueDetail = function () {
        var _this = this;
        this.service.spinnerShow();
        this.service.get('getVenueDetail/' + this.venueId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.spinnerHide();
                _this.venueDetail = res['data'];
                console.log("getVenueDetail res====>>>" + JSON.stringify(res['data']));
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    AddVenueSpecialityComponent.prototype.addVenueSpeciality = function () {
        var _this = this;
        this.specialityForm.value['venueId'] = this.venueId;
        console.log("specialityForm Value===>>>>", this.specialityForm.value);
        this.service.spinnerShow();
        this.service.post('addVenueSpeciality', this.specialityForm.value, 1).subscribe(function (res) {
            console.log("res===>>>>" + JSON.stringify(res));
            if (res['responseCode'] == 200) {
                _this.service.spinnerHide();
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/view-venue-speciality/' + _this.venueId);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    AddVenueSpecialityComponent.prototype.removeItem = function (i) {
        var arrayControl = this.specialityForm.controls['specialityList'];
        arrayControl.removeAt(i);
    };
    AddVenueSpecialityComponent.prototype.onImageChange = function (event, index, imgType) {
        var _this = this;
        console.log('fil => ', this.specialityForm.value);
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var image = event.target.files[0];
            this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(function (result) {
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = function (event) {
                    _this.image = new Image();
                    //Set the Base64 string return from FileReader as source.
                    _this.image.src = event.target.result;
                    if (imgType == 'categoryImage') {
                        var arrayControl = _this.specialityForm.controls['specialityList'];
                        arrayControl.controls[index]['controls']['categoryImage'].setValue(event.target.result);
                        console.log(_this.specialityForm.value);
                    }
                    //Validate the File Height and Width.
                };
            });
        }
    };
    AddVenueSpecialityComponent.prototype.removeImage = function (index, imageType) {
        if (imageType == 'categoryImage') {
            var arrayControl = this.specialityForm.controls['specialityList'];
            arrayControl.controls[index]['controls']['categoryImage'].setValue('');
        }
    };
    AddVenueSpecialityComponent.prototype.cancel = function () {
        this.service.routerLink('/view-venue-speciality/' + this.venueId);
    };
    AddVenueSpecialityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-venue-speciality',
            template: __webpack_require__(/*! ./add-venue-speciality.component.html */ "./src/app/pages/add-venue-speciality/add-venue-speciality.component.html"),
            styles: [__webpack_require__(/*! ./add-venue-speciality.component.css */ "./src/app/pages/add-venue-speciality/add-venue-speciality.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng2_img_max__WEBPACK_IMPORTED_MODULE_4__["Ng2ImgMaxService"]])
    ], AddVenueSpecialityComponent);
    return AddVenueSpecialityComponent;
}());



/***/ }),

/***/ "./src/app/pages/add-venue/add-venue.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-venue/add-venue.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/add-venue/add-venue.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/add-venue/add-venue.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section no-scroll\">\n        <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n        <div class=\"right-inner\">\n            <div class=\"filter-block\">\n                <fieldset class=\"global-fieldset\">\n                    <legend>Add Venue</legend>\n                    <div class=\"filter-content\">\n                        <form class=\"login_box_outer\" [formGroup]='venueForm' novalidate>\n                            <div class=\"common-detail-box\">\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Establishment Name<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <input class=\"form-control custom-control\" formControlName=\"venueName\" placeholder=\"Enter venue name\" maxlength=\"30\" />\n                                        <p *ngIf=\"venueForm.get('venueName').hasError('required') && venueForm.get('venueName').dirty\">*Venue name required</p>\n                                        <p *ngIf=\"venueForm.get('venueName').hasError('pattern') && venueForm.get('venueName').dirty\">*Invaid name</p>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Type<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <select class=\"form-control angle\" formControlName=\"venueType\">\n                                            <option value=\"\">--select--</option>\n                                            <option value=\"BAR\">Bar</option>\n                                            <option value=\"RESTAURANT\">Restaurant</option>\n                                        </select>\n                                        <p *ngIf=\"venueForm.get('venueType').hasError('required') && venueForm.get('venueType').dirty\">*type required</p>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Address<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <input class=\"form-control custom-control\" formControlName=\"address\" id=\"address\" placeholder=\"Enter venue address\" maxlength=\"50\" />\n                                        <p *ngIf=\"venueForm.get('address').hasError('required') && venueForm.get('address').dirty\">*address required</p>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">City<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <input class=\"form-control custom-control\" formControlName=\"city\" id=\"city\" placeholder=\"Enter city name\" maxlength=\"20\" />\n                                        <p *ngIf=\"venueForm.get('city').hasError('required') && venueForm.get('city').dirty\">*city required</p>\n                                        <p *ngIf=\"venueForm.get('city').hasError('pattern') && venueForm.get('city').dirty\">*Invaid name</p>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Open Time<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <input type=\"time\" class=\"form-control custom-control\" formControlName=\"openTime\" placeholder=\"open Time\"/>\n                                        <p *ngIf=\"venueForm.get('openTime').hasError('required') && venueForm.get('openTime').dirty\">*open time required</p>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Close Time<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <input type=\"time\" class=\"form-control custom-control\" formControlName=\"closeTime\" placeholder=\"close Time\" />\n                                        <p *ngIf=\"venueForm.get('closeTime').hasError('required') && venueForm.get('closeTime').dirty\">*close time required</p>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Total Table<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <input class=\"form-control custom-control\" formControlName=\"totalTables\" placeholder=\"total tables\" (keypress)=\"keypress($event.keyCode)\" maxlength=\"8\" />\n                                        <p *ngIf=\"venueForm.get('totalTables').hasError('required') && venueForm.get('totalTables').dirty\">*total tables required</p>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Status<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <select class=\"form-control angle\" formControlName=\"status\">\n                                            <option value=\"\">--select--</option>\n                                            <option value=\"ACTIVE\">Active</option>\n                                            <option value=\"INACTIVE\">Inactive</option>\n                                        </select>\n                                        <p *ngIf=\"venueForm.get('status').hasError('required') && venueForm.get('status').dirty\">*status required</p>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Venue Images<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <div clss=\"add_images_box\">\n                                            <ul class=\"img_list\">\n                                                <li class=\"addImage\" *ngIf=\"!venueForm.get('images').value.length\">\n                                                    <img src=\"assets/img/placeholder.png\">\n                                                </li>\n                                                <li class=\"addImage\" *ngFor=\"let imageUrl of venueForm.get('images').value;let i = index\">\n                                                    <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage(i,'images')\"></i>\n                                                    <img src=\"{{imageUrl}}\">\n                                                </li>\n                                                <li *ngIf=\"venueForm.get('images').value.length<5\" class=\"addImage\">\n                                                    <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event,'images')\" accept=\"image/*\"\n                                                    />\n                                                    <i class=\"plusIcon\">+</i>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Venue Logo<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <div clss=\"add_images_box\">\n                                            <ul class=\"img_list\">\n                                                <li class=\"addImage\" *ngIf=\"venueForm.get('logo').value\">\n                                                    <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage(i,'logo')\"></i>\n                                                    <img src=\"{{venueForm.get('logo').value}}\">\n                                                </li>\n                                                <li *ngIf=\"!venueForm.get('logo').value\" class=\"addImage\">\n                                                    <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event,'logo')\" accept=\"image/*\" />\n                                                    <i class=\"plusIcon\">+</i>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Description<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <textarea class=\"form-control custom-control textarea-custom\" placeholder=\"Description minimum 20 words\" formControlName=\"description\"\n                                            maxlength=\"100\"></textarea>\n                                        <p *ngIf=\"venueForm.get('description').hasError('required') && venueForm.get('description').dirty\">*description required</p>\n                                        <p *ngIf=\"venueForm.get('description').hasError('minlength') && venueForm.get('description').dirty\">*minimum 20 words required</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </fieldset>\n                <div class=\"table-button text-center mt30\">\n                    <button (click)=\"addVenue()\" class=\"btn btn-red\" [disabled]=\"venueForm.invalid || !addressField\">Save </button>\n                    <button [routerLink]=\"['/venue-management']\" class=\"btn btn-danger\">Cancel</button>\n                </div>\n            </div>\n        </div>\n"

/***/ }),

/***/ "./src/app/pages/add-venue/add-venue.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/add-venue/add-venue.component.ts ***!
  \********************************************************/
/*! exports provided: AddVenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVenueComponent", function() { return AddVenueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddVenueComponent = /** @class */ (function () {
    function AddVenueComponent(service, ng2ImgMaxService, fb) {
        this.service = service;
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.fb = fb;
        this.venueImage = [];
        this.logoImage = "";
        this.address = "";
        this.country = "";
        this.state = "";
        this.city = "";
        this.logoString = "";
        this.addressField = false;
        this.venueForm = this.fb.group({
            venueName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            venueType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            images: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            openTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            closeTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            totalTables: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20)]],
        });
    }
    AddVenueComponent.prototype.ngOnInit = function () {
        google.maps.event.addDomListener(window, 'load', this.initialize());
        $('#address').on('input', function (e) {
            this.addressField = false;
            console.log("false====>>>", this.addressField);
        });
    };
    AddVenueComponent.prototype.initialize = function () {
        var input = document.getElementById('address');
        var autocomplete = new google.maps.places.Autocomplete(input);
        var self = this;
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();
            var array = "";
            self.addressField = true;
            console.log("address===>>>", self.addressField);
            self.address = place.formatted_address;
            self.lat = place.geometry.location.lat();
            self.long = place.geometry.location.lng();
        });
    };
    AddVenueComponent.prototype.keypress = function (keyCode) {
        if (keyCode >= 48 && keyCode <= 57)
            return true;
        return false;
    };
    AddVenueComponent.prototype.addVenue = function () {
        var _this = this;
        this.service.spinnerShow();
        this.venueForm.value['location'] = { coordinates: [this.long, this.lat], address: this.address, city: this.venueForm.value.city };
        delete this.venueForm.value['city'];
        delete this.venueForm.value['address'];
        console.log("data====>>>>", this.venueForm.value);
        this.service.post('addVenue', this.venueForm.value, 1).subscribe(function (res) {
            _this.service.spinnerHide();
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/venue-management');
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    AddVenueComponent.prototype.onImageChange = function (event, imgType) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var image = event.target.files[0];
            this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(function (result) {
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = function (event) {
                    _this.image = new Image();
                    //Set the Base64 string return from FileReader as source.
                    _this.image.src = event.target.result;
                    if (imgType == 'images') {
                        var arr = self.venueForm.value.images;
                        arr.push(event.target.result);
                        self.venueForm.controls['images'].setValue(arr);
                    }
                    if (imgType == 'logo') {
                        self.venueForm.controls['logo'].setValue(event.target.result);
                    }
                };
            }, function (error) {
                console.log('😢 Oh no!', error);
            });
        }
    };
    AddVenueComponent.prototype.removeImage = function (index, imageType) {
        if (imageType == 'images') {
            this.venueForm.value['images'].splice(index, 1);
            console.log("images Array===>>", this.venueImage);
        }
        if (imageType == 'logo') {
            this.venueImage.value['logo'].setValue('');
        }
    };
    AddVenueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-venue',
            template: __webpack_require__(/*! ./add-venue.component.html */ "./src/app/pages/add-venue/add-venue.component.html"),
            styles: [__webpack_require__(/*! ./add-venue.component.css */ "./src/app/pages/add-venue/add-venue.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], ng2_img_max__WEBPACK_IMPORTED_MODULE_3__["Ng2ImgMaxService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddVenueComponent);
    return AddVenueComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section\">\n        <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n        <div class=\"right-inner\">\n            <h1 class=\"heading\">DASHBOARD</h1>\n           <div class=\"dashbord-body\">\n                  <div class=\"row\">\n                      <div class=\"col-sm-6 col-md-4\">\n                          <fieldset class=\"global-fieldset\">\n                              <legend>Users</legend>\n                              <div class=\"filter-content\">\n                                  <div class=\"dashboard-content\">\n                                    <div class=\"dashboard-left common-text\">\n    \n                                      <i class=\"fa fa-users\"></i>\n                                    </div>\n                                    <div class=\"dashboard-right common-text\">\n                                      2000\n                                    </div>\n                                  </div>\n                              </div>\n                          </fieldset>\n                      </div>\n                      <div class=\"col-sm-6 col-md-4\">\n                          <fieldset class=\"global-fieldset\">\n                              <legend>No of Bars</legend>\n                              <div class=\"filter-content\">\n                                  <div class=\"dashboard-content\">\n                                    <div class=\"dashboard-left common-text\">\n    \n                                      <i class=\"fa fa-users\"></i>\n                                    </div>\n                                    <div class=\"dashboard-right common-text\">\n                                            2000\n                                    </div>\n                                  </div>\n                              </div>\n                          </fieldset>\n                      </div>\n                      <div class=\"col-sm-6 col-md-4\">\n                        <fieldset class=\"global-fieldset\">\n                            <legend>No of Restaurents</legend>\n                            <div class=\"filter-content\">\n                                <div class=\"dashboard-content\">\n                                  <div class=\"dashboard-left common-text\">\n  \n                                    <i class=\"fa fa-users\"></i>\n                                  </div>\n                                  <div class=\"dashboard-right common-text\">\n                                          2000\n                                  </div>\n                                </div>\n                            </div>\n                        </fieldset>\n                    </div>\n                   </div>\n                <div>\n            <div class=\"dashbord-body\">\n                   <div class=\"row\">\n                    <div class=\"col-sm-6 col-md-4\">\n                        <fieldset class=\"global-fieldset\">\n                            <legend>Payments</legend>\n                            <div class=\"filter-content\">\n                                <div class=\"dashboard-content\">\n                                  <div class=\"dashboard-left common-text\">\n  \n                                    <i class=\"fa fa-product-hunt\"></i>\n                                  </div>\n                                  <div class=\"dashboard-right common-text\">\n                                          $100000\n                                  </div>\n                                </div>\n                            </div>\n                        </fieldset>\n                    </div>\n                    <div class=\"col-sm-6 col-md-4\">\n                      <fieldset class=\"global-fieldset\">\n                          <legend>Merchants</legend>\n                          <div class=\"filter-content\">\n                              <div class=\"dashboard-content\">\n                                <div class=\"dashboard-left common-text\">\n\n                                  <i class=\"fa fa-product-hunt\"></i>\n                                </div>\n                                <div class=\"dashboard-right common-text\">\n                                        50000\n                                </div>\n                              </div>\n                          </div>\n                      </fieldset>\n                  </div>\n                   </div>\n                </div>\n            </div>\n           </div>\n    </div>\n    \n    "

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-category-item/edit-category-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/edit-category-item/edit-category-item.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-category-item/edit-category-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/edit-category-item/edit-category-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section no-scroll\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n      <div class=\"filter-block\">\n        <fieldset class=\"global-fieldset\">\n          <legend>Category Detail</legend>\n          <div class=\"filter-content\">\n            <div class=\"common-detail-box\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-6 label-right\">Category Name</label>\n                <div class=\"col-sm-6\">\n                  {{categoryDetail.categoryName || '----'}}\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-sm-6  label-right\">Category Images</label>\n                <div class=\"col-sm-6\">\n                  <div clss=\"add_images_box\">\n                    <ul class=\"img_list\">\n                      <li class=\"addImage\">\n                        <img src=\"{{categoryDetail.categoryImage || 'assets/img/placeholder.png'}}\">\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </fieldset>\n        <fieldset class=\"global-fieldset\">\n          <legend>Edit Item</legend>\n          <div class=\"filter-content\">\n            <form class=\"login_box_outer\" [formGroup]='itemForm' novalidate>\n              <div class=\"common-detail-box\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Item Name<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input class=\"form-control custom-control\" formControlName=\"itemName\" placeholder=\"Enter item name\" maxlength=\"20\" />\n                    <p *ngIf=\"itemForm.get('itemName').hasError('required') && itemForm.get('itemName').dirty\">*item name required</p>\n                    <p *ngIf=\"itemForm.get('itemName').hasError('pattern') && itemForm.get('itemName').dirty\">*invalid name</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">item Image<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <div clss=\"add_images_box\">\n                      <ul class=\"img_list\">\n                        <li class=\"addImage\" *ngIf=\"itemForm.get('itemImage').value\">\n                          <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage()\"></i>\n                          <img src=\"{{itemForm.get('itemImage').value}}\">\n                        </li>\n                        <li class=\"addImage\" *ngIf=\"!itemForm.get('itemImage').value\">\n                          <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event)\" accept=\"image/*\" />\n                          <i class=\"plusIcon\">+</i>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Item Price<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input class=\"form-control custom-control\" (keypress)=\"keypress($event.keyCode)\" formControlName=\"itemPrice\" placeholder=\"Enter item price\" maxlength=\"10\" />\n                    <p *ngIf=\"itemForm.get('itemPrice').hasError('required') && itemForm.get('itemPrice').dirty\">*item price required</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Item Code<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input class=\"form-control custom-control\" (keypress)=\"keypress($event.keyCode)\" formControlName=\"itemCode\" placeholder=\"Enter item code\" maxlength=\"10\" />\n                    <p *ngIf=\"itemForm.get('itemCode').hasError('required') && itemForm.get('itemCode').dirty\">*item code required</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Item Discount<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input class=\"form-control custom-control\" (keypress)=\"keypress($event.keyCode)\" formControlName=\"discount\" placeholder=\"Enter item discount\" maxlength=\"10\" />\n                    <p *ngIf=\"itemForm.get('discount').hasError('required') && itemForm.get('discount').dirty\">*item discount required</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Item Description<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input class=\"form-control custom-control\" formControlName=\"itemDescription\" placeholder=\"Enter item description\" maxlength=\"500\" />\n                    <p *ngIf=\"itemForm.get('itemDescription').hasError('required') && itemForm.get('itemDescription').dirty\">*item description required</p>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </fieldset>\n        <div class=\"table-button text-center mt30\">\n          <!-- <button (click)=\"additem()\" class=\"btn btn-red\" [disabled]=\"itemForm.invalid || !itemImage.length || !logoImage || !addressField\">Save </button> -->\n          <button (click)=\"saveItem()\" [disabled]=\"!itemForm.valid\" class=\"btn btn-red\">Save</button>\n          <button (click)=\"cancel()\" class=\"btn btn-danger\">Cancel</button>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/pages/edit-category-item/edit-category-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/edit-category-item/edit-category-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditCategoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryItemComponent", function() { return EditCategoryItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditCategoryItemComponent = /** @class */ (function () {
    function EditCategoryItemComponent(service, activateRoute, fb, ng2ImgMaxService) {
        this.service = service;
        this.activateRoute = activateRoute;
        this.fb = fb;
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.itemDetail = {};
        this.categoryDetail = {};
    }
    EditCategoryItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.paramMap.subscribe(function (params) {
            _this.venueId = params.get('venueId');
            _this.categoryId = params.get('categoryId');
            _this.itemId = params.get('itemId');
        });
        this.itemForm = this.fb.group({
            itemName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            itemImage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            itemPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            itemCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            discount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            itemDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.getCategoryDetailOfVenue();
        this.getItemDetailOfCategory();
    };
    EditCategoryItemComponent.prototype.getCategoryDetailOfVenue = function () {
        var _this = this;
        this.service.spinnerShow();
        var url = 'getCategoryDetailOfVenue/' + this.venueId + '/' + this.categoryId;
        this.service.get(url, 1).subscribe(function (res) {
            _this.service.spinnerHide();
            if (res['responseCode'] == 200) {
                _this.categoryDetail = res['data'];
                console.log("resresfjsdfyuak===>>>" + JSON.stringify(_this.categoryDetail));
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditCategoryItemComponent.prototype.getItemDetailOfCategory = function () {
        var _this = this;
        var url = 'getItemDetailOfCategory/' + this.venueId + '/' + this.categoryId + '/' + this.itemId;
        this.service.get(url, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.itemDetail = res['data'];
                console.log("resresfjsdfyuak===>>>" + JSON.stringify(_this.itemDetail));
                _this.itemForm.controls['itemName'].setValue(_this.itemDetail.itemName);
                _this.itemForm.controls['itemImage'].setValue(_this.itemDetail.itemImage);
                _this.itemForm.controls['itemPrice'].setValue(_this.itemDetail.itemPrice);
                _this.itemForm.controls['itemCode'].setValue(_this.itemDetail.itemCode);
                _this.itemForm.controls['itemDescription'].setValue(_this.itemDetail.itemDescription);
                _this.itemForm.controls['discount'].setValue(_this.itemDetail.discount);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditCategoryItemComponent.prototype.onImageChange = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var image = event.target.files[0];
            this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(function (result) {
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = function (event) {
                    _this.image = new Image();
                    //Set the Base64 string return from FileReader as source.
                    _this.image.src = event.target.result;
                    self.itemForm.controls['itemImage'].setValue(event.target.result);
                };
            });
        }
    };
    EditCategoryItemComponent.prototype.removeImage = function () {
        this.itemForm.controls['itemImage'].setValue("");
    };
    EditCategoryItemComponent.prototype.saveItem = function () {
        var _this = this;
        this.itemForm.value['venueId'] = this.venueId;
        this.itemForm.value['categoryId'] = this.categoryId;
        this.itemForm.value['itemId'] = this.itemId;
        console.log("saveItem===>>>>", this.itemForm.value);
        this.service.spinnerShow();
        this.service.post('editItemOfCategory', this.itemForm.value, 1).subscribe(function (res) {
            _this.service.spinnerHide();
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/view-menu-items/' + _this.venueId + '/' + _this.categoryId);
                console.log("resresfjsdfyuak===>>>" + JSON.stringify(_this.categoryDetail));
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditCategoryItemComponent.prototype.cancel = function () {
        this.service.routerLink('/view-menu-items/' + this.venueId + '/' + this.categoryId);
    };
    EditCategoryItemComponent.prototype.keypress = function (keyCode) {
        if ((keyCode >= 48 && keyCode <= 57))
            return true;
        return false;
    };
    EditCategoryItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-category-item',
            template: __webpack_require__(/*! ./edit-category-item.component.html */ "./src/app/pages/edit-category-item/edit-category-item.component.html"),
            styles: [__webpack_require__(/*! ./edit-category-item.component.css */ "./src/app/pages/edit-category-item/edit-category-item.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ng2_img_max__WEBPACK_IMPORTED_MODULE_4__["Ng2ImgMaxService"]])
    ], EditCategoryItemComponent);
    return EditCategoryItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-merchant/edit-merchant.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/edit-merchant/edit-merchant.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-merchant/edit-merchant.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/edit-merchant/edit-merchant.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section no-scroll\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n      <div class=\"filter-block\">\n        <fieldset class=\"global-fieldset\">\n          <legend>Edit Merchant</legend>\n          <div class=\"filter-content\">\n            <form class=\"login_box_outer\" [formGroup]='merchantForm' novalidate>\n              <div class=\"common-detail-box\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Name<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control custom-control\"  (keypress)=\"keypress($event.keyCode)\" formControlName=\"firstName\" placeholder=\"merchant name\" maxlength=\"20\" />\n                    <p *ngIf=\"merchantForm.get('firstName').hasError('required') && merchantForm.get('firstName').dirty\">*merchant name required</p>\n                    <p *ngIf=\"merchantForm.get('firstName').hasError('pattern') && merchantForm.get('firstName').dirty\">*invalid name</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Email<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input  type=\"email\" class=\"form-control custom-control\" readonly formControlName=\"email\" placeholder=\"enter email\" maxlength=\"20\" />\n                    <p *ngIf=\"merchantForm.get('email').hasError('required') && merchantForm.get('email').dirty\">*email required</p>\n                    <p *ngIf=\"merchantForm.get('email').hasError('pattern') && merchantForm.get('email').dirty\">*invalid email</p>\n                  </div>\n                </div>\n              </div>\n          </form>\n      </div>\n      </fieldset>\n      <div class=\"table-button text-center mt30\">\n        <button (click)=\"save()\" class=\"btn btn-red\" [disabled]=\"merchantForm.invalid\">Save</button>\n        <button [routerLink]=\"['/merchant-management']\" class=\"btn btn-danger\">Back</button>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/edit-merchant/edit-merchant.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-merchant/edit-merchant.component.ts ***!
  \****************************************************************/
/*! exports provided: EditMerchantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMerchantComponent", function() { return EditMerchantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditMerchantComponent = /** @class */ (function () {
    function EditMerchantComponent(service, ng2ImgMaxService, fb, activateRoute) {
        this.service = service;
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.fb = fb;
        this.activateRoute = activateRoute;
        this.viewUserDetail = {};
        this.merchantForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/)]]
        });
    }
    EditMerchantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.paramMap.subscribe(function (params) {
            _this.userId = params.get('userId');
        });
        this.userDetail();
    };
    EditMerchantComponent.prototype.userDetail = function () {
        var _this = this;
        this.service.get('getUserProfile/' + this.userId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.viewUserDetail = res['data'];
                console.log("userDetail====>>>>" + JSON.stringify(res['data']));
                _this.merchantForm.controls['firstName'].setValue(_this.viewUserDetail.firstName);
                _this.merchantForm.controls['email'].setValue(_this.viewUserDetail.email);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditMerchantComponent.prototype.onImageChange = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var image = event.target.files[0];
            this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(function (result) {
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = function (event) {
                    _this.image = new Image();
                    //Set the Base64 string return from FileReader as source.
                    _this.image.src = event.target.result;
                    self.merchantForm.controls['profilePic'].setValue(event.target.result);
                };
            }, function (error) {
                console.log('😢 Oh no!', error);
            });
        }
    };
    EditMerchantComponent.prototype.removeImage = function () {
        this.merchantForm.controls['profilePic'].setValue('');
    };
    EditMerchantComponent.prototype.save = function () {
        var _this = this;
        this.service.spinnerShow();
        this.merchantForm.value['userId'] = this.userId;
        console.log("merchant Form====>>>>", this.merchantForm.value);
        this.service.post('editUserProfile', this.merchantForm.value, 1).subscribe(function (res) {
            _this.service.spinnerHide();
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/merchant-management');
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.spinnerHide();
            _this.service.error('somthing went wrong.');
        });
    };
    EditMerchantComponent.prototype.keypress = function (keyCode) {
        if (keyCode == 32 && !this.merchantForm.value.firstName)
            return false;
        return true;
    };
    EditMerchantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-merchant',
            template: __webpack_require__(/*! ./edit-merchant.component.html */ "./src/app/pages/edit-merchant/edit-merchant.component.html"),
            styles: [__webpack_require__(/*! ./edit-merchant.component.css */ "./src/app/pages/edit-merchant/edit-merchant.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], ng2_img_max__WEBPACK_IMPORTED_MODULE_3__["Ng2ImgMaxService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditMerchantComponent);
    return EditMerchantComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-user/edit-user.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-user/edit-user.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-user/edit-user.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-user/edit-user.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section no-scroll\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n      <div class=\"filter-block\">\n        <fieldset class=\"global-fieldset\">\n          <legend>Edit User</legend>\n          <div class=\"filter-content\">\n            <form class=\"login_box_outer\" [formGroup]='userForm' novalidate>\n              <div class=\"common-detail-box\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">First Name<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control custom-control\" (keypress)=\"keypress($event.keyCode)\"  formControlName=\"firstName\" placeholder=\"merchant name\" maxlength=\"20\" />\n                    <p *ngIf=\"userForm.get('firstName').hasError('required') && userForm.get('firstName').dirty\">*first name required</p>\n                    <p *ngIf=\"userForm.get('firstName').hasError('pattern') && userForm.get('firstName').dirty\">*invalid name</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Last Name<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control custom-control\" (keypress)=\"keypress($event.keyCode)\" formControlName=\"lastName\" placeholder=\"merchant name\" maxlength=\"20\" />\n                    <p *ngIf=\"userForm.get('lastName').hasError('required') && userForm.get('lastName').dirty\">*last name required</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Email<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input  type=\"email\" class=\"form-control custom-control\" readonly formControlName=\"email\" placeholder=\"enter email\" maxlength=\"52\" />\n                    <p *ngIf=\"userForm.get('email').hasError('required') && userForm.get('email').dirty\">*email required</p>\n                    <p *ngIf=\"userForm.get('email').hasError('pattern') && userForm.get('email').dirty\">*invalid email</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Phone<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                    <input  type=\"text\" class=\"form-control custom-control\" readonly formControlName=\"phone\" placeholder=\"enter phone\" maxlength=\"20\" />\n                    <p *ngIf=\"userForm.get('phone').hasError('required') && userForm.get('phone').dirty\">*phone required</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Gender<span style=\"color: red\">*</span></label>\n                  <div class=\"col-sm-8\">\n                      <select class=\"form-control angle\" formControlName=\"gender\">\n                          <option value=\"\">--select--</option>\n                          <option value=\"MALE\">Male</option>\n                          <option value=\"FEMALE\">Female</option>\n                      </select>\n                      <p *ngIf=\"userForm.get('gender').hasError('required') && userForm.get('gender').dirty\">*gender required</p>\n                  </div>\n              </div>\n              </div>\n          </form>\n      </div>\n      </fieldset>\n      <div class=\"table-button text-center mt30\">\n        <button (click)=\"save()\" class=\"btn btn-red\" [disabled]=\"!userForm.valid\">Save</button>\n        <button [routerLink]=\"['/user-management']\" class=\"btn btn-danger\">Back</button>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/edit-user/edit-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-user/edit-user.component.ts ***!
  \********************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
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




var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(service, fb, activateRoute) {
        this.service = service;
        this.fb = fb;
        this.activateRoute = activateRoute;
        this.viewUserDetail = {};
        this.userForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/)]],
            phone: [''],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.paramMap.subscribe(function (params) {
            _this.userId = params.get('userId');
        });
        $("#lastName, #firstName").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        this.userDetail();
    };
    EditUserComponent.prototype.userDetail = function () {
        var _this = this;
        this.service.get('getUserProfile/' + this.userId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.viewUserDetail = res['data'];
                _this.userForm.controls['firstName'].setValue(_this.viewUserDetail.firstName);
                _this.userForm.controls['lastName'].setValue(_this.viewUserDetail.lastName);
                _this.userForm.controls['email'].setValue(_this.viewUserDetail.email);
                _this.userForm.controls['phone'].setValue(_this.viewUserDetail.phone);
                _this.userForm.controls['gender'].setValue(_this.viewUserDetail.gender);
                console.log("form=====>>>>", _this.userForm.value);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditUserComponent.prototype.save = function () {
        var _this = this;
        this.service.spinnerShow();
        this.userForm.value['userId'] = this.userId;
        console.log("merchant Form====>>>>", this.userForm.value);
        this.service.post('editUserProfile', this.userForm.value, 1).subscribe(function (res) {
            _this.service.spinnerHide();
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/user-management');
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.spinnerHide();
            _this.service.error('somthing went wrong.');
        });
    };
    EditUserComponent.prototype.keypress = function (keyCode) {
        if (keyCode == 32)
            return false;
        return true;
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/pages/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/pages/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-venue-category/edit-venue-category.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/edit-venue-category/edit-venue-category.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-venue-category/edit-venue-category.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/edit-venue-category/edit-venue-category.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section no-scroll\">\n        <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n        <div class=\"right-inner\">\n            <div class=\"filter-block\">\n                <fieldset class=\"global-fieldset\">\n                    <legend>Venue Detail</legend>\n                    <div class=\"filter-content\">\n                        <div class=\"common-detail-box\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 label-right\">Category Name</label>\n                                <div class=\"col-sm-6\">\n                                    {{venueDetail?.venueName || '----'}}\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6  label-right\">Venue logo</label>\n                                <div class=\"col-sm-6\">\n                                    <div clss=\"add_images_box\">\n                                        <ul class=\"img_list\">\n                                            <li class=\"addImage\">\n                                                <img src=\"{{venueDetail.logo || 'assets/img/placeholder.png'}}\">\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n                <fieldset class=\"global-fieldset\">\n                    <legend>Edit Category</legend>\n                    <div class=\"filter-content\">\n                        <form class=\"login_box_outer\" [formGroup]='categoryForm' novalidate>\n                            <div class=\"common-detail-box\">\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Category Name<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <input class=\"form-control custom-control\" formControlName=\"categoryName\" placeholder=\"venue name\" maxlength=\"50\" />\n                                        <p *ngIf=\"categoryForm.get('categoryName').hasError('required') && categoryForm.get('categoryName').dirty\">*venue name required</p>\n                                        <p *ngIf=\"categoryForm.get('categoryName').hasError('pattern') && categoryForm.get('categoryName').dirty\">*venue name required</p>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Category Image<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <div clss=\"add_images_box\">\n                                            <ul class=\"img_list\">\n                                                <li class=\"addImage\" *ngIf=\"categoryForm.get('categoryImage').value\">\n                                                    <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage()\"></i>\n                                                    <img src=\"{{categoryForm.get('categoryImage').value}}\">\n                                                </li>\n                                                <li class=\"addImage\" *ngIf=\"!categoryForm.get('categoryImage').value\">\n                                                    <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event)\" accept=\"image/*\" />\n                                                    <i class=\"plusIcon\">+</i>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </fieldset>\n                <div class=\"table-button text-center mt30\">\n                    <!-- <button (click)=\"addVenue()\" class=\"btn btn-red\" [disabled]=\"categoryForm.invalid || !venueImage.length || !logoImage || !addressField\">Save </button> -->\n                    <button (click)=\"saveCategory()\" [disabled]=\"!categoryForm.valid\" class=\"btn btn-red\">Save</button>\n                    <button (click)=\"cancel()\" class=\"btn btn-danger\">Cancel</button>\n                </div>\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/pages/edit-venue-category/edit-venue-category.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/edit-venue-category/edit-venue-category.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditVenueCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVenueCategoryComponent", function() { return EditVenueCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditVenueCategoryComponent = /** @class */ (function () {
    function EditVenueCategoryComponent(fb, service, activateRoute, ng2ImgMaxService) {
        this.fb = fb;
        this.service = service;
        this.activateRoute = activateRoute;
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.venueDetail = {};
        this.categoryDetail = {};
        this.categoryForm = this.fb.group({
            categoryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            categoryImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    EditVenueCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.paramMap.subscribe(function (paramms) {
            _this.venueId = paramms.get('venueId');
            _this.categoryId = paramms.get('categoryId');
        });
        this.getVenueDetail();
        this.getCategoryDetailOfVenue();
    };
    EditVenueCategoryComponent.prototype.getVenueDetail = function () {
        var _this = this;
        this.service.get('getVenueDetail/' + this.venueId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.venueDetail = res['data'];
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditVenueCategoryComponent.prototype.getCategoryDetailOfVenue = function () {
        var _this = this;
        this.service.get('getCategoryDetailOfVenue/' + this.venueId + '/' + this.categoryId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.categoryDetail = res['data'];
                console.log("getCategoryDetailOfVenue res=====>>>", _this.categoryDetail);
                _this.categoryForm.controls['categoryName'].setValue(_this.categoryDetail.categoryName);
                _this.categoryForm.controls['categoryImage'].setValue(_this.categoryDetail.categoryImage);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditVenueCategoryComponent.prototype.onImageChange = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var image = event.target.files[0];
            this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(function (result) {
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = function (event) {
                    _this.image = new Image();
                    //Set the Base64 string return from FileReader as source.
                    _this.image.src = event.target.result;
                    console.log("categoryImage");
                    self.categoryForm.controls['categoryImage'].setValue(event.target.result);
                };
            });
        }
    };
    EditVenueCategoryComponent.prototype.removeImage = function () {
        this.categoryForm.controls['categoryImage'].setValue("");
    };
    EditVenueCategoryComponent.prototype.saveCategory = function () {
        var _this = this;
        console.log("saveCategory =====>>>", this.categoryForm.value);
        this.categoryForm.value['categoryId'] = this.categoryId;
        this.service.spinnerShow();
        this.service.post('editCategoryOfVenue', this.categoryForm.value, 1).subscribe(function (res) {
            _this.service.spinnerHide();
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/menu-management/' + _this.venueId);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditVenueCategoryComponent.prototype.cancel = function () {
        this.service.routerLink('/menu-management/' + this.venueId);
    };
    EditVenueCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-venue-category',
            template: __webpack_require__(/*! ./edit-venue-category.component.html */ "./src/app/pages/edit-venue-category/edit-venue-category.component.html"),
            styles: [__webpack_require__(/*! ./edit-venue-category.component.css */ "./src/app/pages/edit-venue-category/edit-venue-category.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng2_img_max__WEBPACK_IMPORTED_MODULE_4__["Ng2ImgMaxService"]])
    ], EditVenueCategoryComponent);
    return EditVenueCategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-venue-speciality/edit-venue-speciality.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/edit-venue-speciality/edit-venue-speciality.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-venue-speciality/edit-venue-speciality.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/edit-venue-speciality/edit-venue-speciality.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section no-scroll\">\n        <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n        <div class=\"right-inner\">\n            <div class=\"filter-block\"><fieldset class=\"global-fieldset\">\n              <legend>Venue Detail</legend>\n              <div class=\"filter-content\">\n                  <div class=\"common-detail-box\">\n                      <div class=\"form-group row\">\n                          <label class=\"col-sm-6 label-right\">Category Name</label>\n                          <div class=\"col-sm-6\">\n                              {{venueDetail?.venueName || '----'}}\n                          </div>\n                      </div>\n                      <div class=\"form-group row\">\n                          <label class=\"col-sm-6  label-right\">Venue logo</label>\n                          <div class=\"col-sm-6\">\n                              <div clss=\"add_images_box\">\n                                  <ul class=\"img_list\">\n                                      <li class=\"addImage\">\n                                          <img src=\"{{venueDetail.logo || 'assets/img/placeholder.png'}}\">\n                                      </li>\n                                  </ul>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </fieldset>\n                <fieldset class=\"global-fieldset\">\n                    <legend>Edit Category</legend>\n                    <div class=\"filter-content\">\n                        <form class=\"login_box_outer\" [formGroup]='specialityForm' novalidate>\n                            <div class=\"common-detail-box\">\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Category Name<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <input class=\"form-control custom-control\" formControlName=\"categoryName\" placeholder=\"Enter category name\" maxlength=\"50\" />\n                                        <p *ngIf=\"specialityForm.get('categoryName').hasError('required') && specialityForm.get('categoryName').dirty\">*category name required</p>\n                                        <p *ngIf=\"specialityForm.get('categoryName').hasError('pattern') && specialityForm.get('categoryName').dirty\">*venue name required</p>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-sm-4 label-right label-top\">Category Image<span style=\"color: red\">*</span></label>\n                                    <div class=\"col-sm-8\">\n                                        <div clss=\"add_images_box\">\n                                            <ul class=\"img_list\">\n                                                <li class=\"addImage\" *ngIf=\"specialityForm.get('categoryImage').value\">\n                                                    <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage()\"></i>\n                                                    <img src=\"{{specialityForm.get('categoryImage').value}}\">\n                                                </li>\n                                                <li class=\"addImage\" *ngIf=\"!specialityForm.get('categoryImage').value\">\n                                                    <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event)\" accept=\"image/*\" />\n                                                    <i class=\"plusIcon\">+</i>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                        <label class=\"col-sm-4 label-right label-top\">Category Description<span style=\"color: red\">*</span></label>\n                                        <div class=\"col-sm-8\">\n                                            <input class=\"form-control custom-control\" formControlName=\"categoryDescription\" placeholder=\"Enter category description\" maxlength=\"500\" />\n                                            <p *ngIf=\"specialityForm.get('categoryDescription').hasError('required') && specialityForm.get('categoryDescription').dirty\">*category description required</p>\n                                        </div>\n                                    </div>\n                            </div>\n                        </form>\n                    </div>\n                </fieldset>\n                <div class=\"table-button text-center mt30\">\n                    <!-- <button (click)=\"addVenue()\" class=\"btn btn-red\" [disabled]=\"specialityForm.invalid || !venueImage.length || !logoImage || !addressField\">Save </button> -->\n                    <button (click)=\"saveCategory()\" [disabled]=\"!specialityForm.valid\" class=\"btn btn-red\">Save</button>\n                    <button (click)=\"cancel()\" class=\"btn btn-danger\">Cancel</button>\n                </div>\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/pages/edit-venue-speciality/edit-venue-speciality.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/edit-venue-speciality/edit-venue-speciality.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditVenueSpecialityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVenueSpecialityComponent", function() { return EditVenueSpecialityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditVenueSpecialityComponent = /** @class */ (function () {
    function EditVenueSpecialityComponent(activateRoute, service, fb, ng2ImgMaxService) {
        this.activateRoute = activateRoute;
        this.service = service;
        this.fb = fb;
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.venueDetail = {};
        this.specialityDetail = {};
    }
    EditVenueSpecialityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.paramMap.subscribe(function (params) {
            _this.venueId = params.get('venueId');
            _this.categoryId = params.get('categoryId');
        });
        this.specialityForm = this.fb.group({
            categoryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            categoryImage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            categoryDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.getVenueDetail();
        this.getCategoryDetailOfSpeciality();
    };
    EditVenueSpecialityComponent.prototype.getVenueDetail = function () {
        var _this = this;
        this.service.get('getVenueDetail/' + this.venueId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.venueDetail = res['data'];
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditVenueSpecialityComponent.prototype.getCategoryDetailOfSpeciality = function () {
        var _this = this;
        this.service.get('getCategoryDetailOfSpeciality/' + this.venueId + '/' + this.categoryId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                console.log("getCategoryDetailOfSpeciality res===>>>>" + JSON.stringify(res['data']));
                _this.specialityDetail = res['data'];
                _this.specialityForm.controls['categoryName'].setValue(_this.specialityDetail.categoryName);
                _this.specialityForm.controls['categoryImage'].setValue(_this.specialityDetail.categoryImage);
                _this.specialityForm.controls['categoryDescription'].setValue(_this.specialityDetail.categoryDescription);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditVenueSpecialityComponent.prototype.onImageChange = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var image = event.target.files[0];
            this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(function (result) {
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = function (event) {
                    _this.image = new Image();
                    //Set the Base64 string return from FileReader as source.
                    _this.image.src = event.target.result;
                    console.log("categoryImage");
                    self.specialityForm.controls['categoryImage'].setValue(event.target.result);
                };
            });
        }
    };
    EditVenueSpecialityComponent.prototype.removeImage = function () {
        this.specialityForm.controls['categoryImage'].setValue("");
    };
    EditVenueSpecialityComponent.prototype.saveCategory = function () {
        var _this = this;
        console.log("saveCategory =====>>>", this.specialityForm.value);
        this.specialityForm.value['categoryId'] = this.categoryId;
        this.service.spinnerShow();
        this.service.post('editSpecialityOfVenue', this.specialityForm.value, 1).subscribe(function (res) {
            _this.service.spinnerHide();
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/view-venue-speciality/' + _this.venueId);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditVenueSpecialityComponent.prototype.cancel = function () {
        this.service.routerLink('/view-venue-speciality/' + this.venueId);
    };
    EditVenueSpecialityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-venue-speciality',
            template: __webpack_require__(/*! ./edit-venue-speciality.component.html */ "./src/app/pages/edit-venue-speciality/edit-venue-speciality.component.html"),
            styles: [__webpack_require__(/*! ./edit-venue-speciality.component.css */ "./src/app/pages/edit-venue-speciality/edit-venue-speciality.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ng2_img_max__WEBPACK_IMPORTED_MODULE_4__["Ng2ImgMaxService"]])
    ], EditVenueSpecialityComponent);
    return EditVenueSpecialityComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-venue/edit-venue.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-venue/edit-venue.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-venue/edit-venue.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/edit-venue/edit-venue.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section no-scroll\">\n      <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n      <div class=\"right-inner\">\n          <div class=\"filter-block\">\n              <fieldset class=\"global-fieldset\">\n                  <legend>Edit Venue</legend>\n                  <div class=\"filter-content\">\n                      <form class=\"login_box_outer\" [formGroup]='venueForm' novalidate>\n                          <div class=\"common-detail-box\">\n                              <div class=\"form-group row\">\n                                  <label class=\"col-sm-4 label-right label-top\">Establishment Name<span style=\"color: red\">*</span></label>\n                                  <div class=\"col-sm-8\">\n                                      <input class=\"form-control custom-control\" formControlName=\"venueName\" placeholder=\"Enter venue name\" maxlength=\"30\" />\n                                      <p *ngIf=\"venueForm.get('venueName').hasError('required') && venueForm.get('venueName').dirty\">*venue name required</p>\n                                      <p *ngIf=\"venueForm.get('venueName').hasError('pattern') && venueForm.get('venueName').dirty\">*enter valid name</p>\n                                  </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                  <label class=\"col-sm-4 label-right label-top\">Type<span style=\"color: red\">*</span></label>\n                                  <div class=\"col-sm-8\">\n                                      <select class=\"form-control angle\" formControlName=\"venueType\">\n                                          <option value=\"\">--select--</option>\n                                          <option value=\"BAR\">Bar</option>\n                                          <option value=\"RESTAURANT\">Restaurant</option>\n                                      </select>\n                                      <p *ngIf=\"venueForm.get('venueType').hasError('required') && venueForm.get('venueType').dirty\">*type required</p>\n                                  </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                  <label class=\"col-sm-4 label-right label-top\">Address<span style=\"color: red\">*</span></label>\n                                  <div class=\"col-sm-8\">\n                                      <input class=\"form-control custom-control\" formControlName=\"address\" id=\"address\" placeholder=\"Enter venue address\" maxlength=\"100\"/>\n                                      <p *ngIf=\"venueForm.get('address').hasError('required') && venueForm.get('address').dirty\">*address required</p>\n                                  </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                  <label class=\"col-sm-4 label-right label-top\">City<span style=\"color: red\">*</span></label>\n                                  <div class=\"col-sm-8\">\n                                      <input class=\"form-control custom-control\" formControlName=\"city\" id=\"city\" placeholder=\"Enter city name\" maxlength=\"10\"/>\n                                      <p *ngIf=\"venueForm.get('city').hasError('required') && venueForm.get('city').dirty\">*city required</p>\n                                      <p *ngIf=\"venueForm.get('city').hasError('pattern') && venueForm.get('city').dirty\">*enter valid city name</p> \n                                  </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                  <label class=\"col-sm-4 label-right label-top\">Open Time<span style=\"color: red\">*</span></label>\n                                  <div class=\"col-sm-8\">\n                                      <input type=\"time\"  class=\"form-control custom-control\" formControlName=\"openTime\"  placeholder=\"venue_name\" maxlength=\"50\"/>\n                                      <p *ngIf=\"venueForm.get('openTime').hasError('required') && venueForm.get('openTime').dirty\">*open time required</p>  \n                                  </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                  <label class=\"col-sm-4 label-right label-top\">Close Time<span style=\"color: red\">*</span></label>\n                                  <div class=\"col-sm-8\">\n                                      <input type=\"time\"  class=\"form-control custom-control\" formControlName=\"closeTime\"  placeholder=\"venue_name\" maxlength=\"50\"/>\n                                      <p *ngIf=\"venueForm.get('closeTime').hasError('required') && venueForm.get('closeTime').dirty\">*close time required</p>   \n                                  </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                  <label class=\"col-sm-4 label-right label-top\">Status<span style=\"color: red\">*</span></label>\n                                  <div class=\"col-sm-8\">\n                                      <select class=\"form-control angle\" formControlName=\"status\">\n                                          <option value=\"\">--select--</option>\n                                          <option value=\"ACTIVE\">Active</option>\n                                          <option value=\"INACTIVE\">Inactive</option>\n                                      </select>\n                                      <p *ngIf=\"venueForm.get('status').hasError('required') && venueForm.get('status').dirty\">*status required</p>   \n                                  </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                  <label class=\"col-sm-4 label-right label-top\">Product Images<span style=\"color: red\">*</span></label>\n                                  <div class=\"col-sm-8\">\n                                      <div clss=\"add_images_box\">\n                                          <ul class=\"img_list\">\n                                              <li class=\"addImage\" *ngIf=\"!venueForm.get('images').value.length\">\n                                                  <img src=\"assets/img/placeholder.png\">\n                                              </li>\n                                              <li class=\"addImage\" *ngFor=\"let imageUrl of venueForm.get('images').value;let i = index\">\n                                                  <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage(i,'images')\"></i>\n                                                  <img src=\"{{imageUrl}}\">\n                                              </li>\n                                              <li *ngIf=\"venueForm.get('images').value.length < 5\" class=\"addImage\">\n                                                  <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event,'images')\" accept=\"image/*\" />\n                                                  <i class=\"plusIcon\">+</i>\n                                              </li>\n                                          </ul>\n                                      </div>\n                                      <p style='color:red'>{{imageString}}</p>\n                                  </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                  <label class=\"col-sm-4 label-right label-top\">logo Image<span style=\"color: red\">*</span></label>\n                                  <div class=\"col-sm-8\">\n                                      <div clss=\"add_images_box\">\n                                          <ul class=\"img_list\">\n                                              <li class=\"addImage\" *ngIf=\"venueForm.get('logo').value\">\n                                                  <i class=\"cross_icon fa fa-close\" style=\"cursor: pointer\" (click)=\"removeImage(i,'logo')\"></i>\n                                                  <img src=\"{{venueForm.get('logo').value}}\">\n                                              </li>\n                                              <li *ngIf=\"!venueForm.get('logo').value\" class=\"addImage\">\n                                                  <input class=\"file_field\" type=\"file\" style=\"cursor: pointer\" (change)=\"onImageChange($event,'logo')\" accept=\"image/*\" />\n                                                  <i class=\"plusIcon\">+</i>\n                                              </li>\n                                          </ul>\n\n                                      </div>\n                                      <p style='color:red'>{{logoString}}</p>\n                                  </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                  <label class=\"col-sm-4 label-right label-top\">Description<span style=\"color: red\">*</span></label>\n                                      <div class=\"col-sm-8\">\n                                  <textarea class=\"form-control custom-control textarea-custom\" placeholder=\"Description minimum 20 words\" value=\"{{viewVenueDetail.description}}\" formControlName=\"description\" maxlength=\"100\"></textarea>\n                                  <p *ngIf=\"venueForm.get('description').hasError('required') && venueForm.get('description').dirty\">*descriptionrequired</p>\n                                  <p *ngIf=\"venueForm.get('description').hasError('minlength') && venueForm.get('description').dirty\">*minimum 20 words required</p>        \n                              </div>\n                              </div>\n                          </div>\n                      </form>\n                  </div>\n              </fieldset>\n              <div class=\"table-button text-center mt30\">\n                  <!-- <button (click)=\"addVenue()\" class=\"btn btn-red\" [disabled]=\"venueForm.invalid || !venueImage.length || !logoImage || !addressField\">Save </button> -->\n                  <button (click)=\"saveVenue()\" [disabled]=\"venueForm.invalid || !addressField\" class=\"btn btn-red\">Save </button>\n                  <button [routerLink]=\"['/venue-management']\" class=\"btn btn-danger\">Cancel</button>\n              </div>\n          </div>\n      </div>"

/***/ }),

/***/ "./src/app/pages/edit-venue/edit-venue.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/edit-venue/edit-venue.component.ts ***!
  \**********************************************************/
/*! exports provided: EditVenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVenueComponent", function() { return EditVenueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditVenueComponent = /** @class */ (function () {
    function EditVenueComponent(service, activeRouter, ng2ImgMaxService, fb) {
        this.service = service;
        this.activeRouter = activeRouter;
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.fb = fb;
        this.venueImage = [];
        this.logoImage = "";
        this.address = "";
        this.country = "";
        this.state = "";
        this.city = "";
        this.logoString = "";
        this.addressField = false;
        this.viewVenueDetail = {};
        this.venueForm = this.fb.group({
            venueName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            venueType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
            openTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            closeTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(20)]],
            images: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    EditVenueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.venueId = params.get('venueId');
        });
        google.maps.event.addDomListener(window, 'load', this.initialize());
        $('#address').on('input', function (e) {
            this.addressField = false;
            console.log("false====>>>", this.addressField);
        });
        this.venueDetail();
    };
    EditVenueComponent.prototype.initialize = function () {
        var input = document.getElementById('address');
        var autocomplete = new google.maps.places.Autocomplete(input);
        var self = this;
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();
            var array = "";
            self.addressField = true;
            console.log("address===>>>", self.addressField);
            self.address = place.formatted_address;
            self.lat = place.geometry.location.lat();
            self.long = place.geometry.location.lng();
        });
    };
    EditVenueComponent.prototype.venueDetail = function () {
        var _this = this;
        this.service.get('getVenueDetail/' + this.venueId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.addressField = true;
                console.log("addrressfiels====>>>", _this.addressField);
                _this.viewVenueDetail = res['data'];
                _this.venueForm.controls['venueName'].setValue(_this.viewVenueDetail.venueName);
                _this.venueForm.controls['venueType'].setValue(_this.viewVenueDetail.venueType);
                _this.venueForm.controls['address'].setValue(_this.viewVenueDetail['location'].address);
                _this.venueForm.controls['city'].setValue(_this.viewVenueDetail['location'].city);
                _this.venueForm.controls['openTime'].setValue(_this.viewVenueDetail.openTime);
                _this.venueForm.controls['closeTime'].setValue(_this.viewVenueDetail.closeTime);
                _this.venueForm.controls['status'].setValue(_this.viewVenueDetail.status);
                _this.venueForm.controls['description'].setValue(_this.viewVenueDetail.description);
                _this.venueForm.controls['images'].setValue(_this.viewVenueDetail.images);
                _this.venueForm.controls['logo'].setValue(_this.viewVenueDetail.logo);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditVenueComponent.prototype.saveVenue = function () {
        var _this = this;
        this.venueForm.value['venueId'] = this.venueId;
        this.venueForm.value['location'] = { address: this.address, coordinates: [this.long, this.lat], city: this.venueForm.value.city };
        delete this.venueForm.value['address'];
        if (this.venueForm.value.city) {
            delete this.venueForm.value['city'];
        }
        console.log("saveVenue===>>>>", this.venueForm.value);
        this.service.spinnerShow();
        this.service.post('editVenueDetail', this.venueForm.value, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.spinnerHide();
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/view-venue/' + _this.venueId);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    EditVenueComponent.prototype.onImageChange = function (event, imgType) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var image = event.target.files[0];
            var self = this;
            this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(function (result) {
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = function (event) {
                    _this.image = new Image();
                    //Set the Base64 string return from FileReader as source.
                    _this.image.src = event.target.result;
                    if (imgType == 'images') {
                        var array = self.venueForm.value.images;
                        array.push(event.target.result);
                        self.venueForm.controls['images'].setValue(array);
                    }
                    if (imgType == 'logo') {
                        self.venueForm.controls['logo'].setValue(event.target.result);
                    }
                    _this.venueImage.push(event.target.result);
                    _this.imageString = '';
                };
            }, function (error) {
                console.log('😢 Oh no!', error);
            });
        }
    };
    EditVenueComponent.prototype.removeImage = function (index, imageType) {
        if (imageType == 'images') {
            var array = this.venueForm.value.images;
            array.splice(index, 1);
            this.venueForm.controls['images'].setValue(array);
        }
        else {
            this.venueForm.controls['logo'].setValue("");
        }
    };
    EditVenueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-venue',
            template: __webpack_require__(/*! ./edit-venue.component.html */ "./src/app/pages/edit-venue/edit-venue.component.html"),
            styles: [__webpack_require__(/*! ./edit-venue.component.css */ "./src/app/pages/edit-venue/edit-venue.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ng2_img_max__WEBPACK_IMPORTED_MODULE_4__["Ng2ImgMaxService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditVenueComponent);
    return EditVenueComponent;
}());



/***/ }),

/***/ "./src/app/pages/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/footer/footer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container-fluid\">\n      <p class=\"copyright\">© Coolsure Limited 2017. All rights reserved.</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/pages/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"beforelogin\">\n    <div class=\"logo\">\n        <a>\n            <img src=\"assets/img/logo.png\">\n        </a>\n    </div>\n</header>\n<div class=\"before-login-wrapper\">\n    <div class=\"inner-content clearfix\">\n        <div class=\"login-main-content\">\n            <div class=\"before-login-logo\">\n\n            </div>\n            <form class=\"login_box_outer\" [formGroup]=\"loginForm\">\n\n                <div class=\"login-content-box\">\n                    <h2 class=\"heading\">Forgot Password</h2>\n                    <div class=\"form-group\">\n                        <label class=\"common-label blue\"><span style=\"color: red\">*</span>Email</label>\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\" (keypress)=\"keypress($event.keyCode)\" placeholder=\"Enter email id\" maxlength=\"52\" required/>\n                        <p *ngIf=\" loginForm.get('email').hasError('required')  && loginForm.get('email').dirty\">*email is required</p>\n                        <p *ngIf=\" loginForm.get('email').hasError('pattern')   && loginForm.get('email').dirty\">*Please enter valid email</p>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"text-right\">\n                            <a [routerLink]=\"['/login']\" class=\"forget-pass\">login</a>\n                        </div>\n                    </div>\n                    <div class=\"button-box\">\n                        <button (click)=\"forgotSubmit()\" type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-red width100\">Submit</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div id=\"delete\" class=\"modal fade\" data-easein=\"bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"costumModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content common-detail-modal\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                    ×\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-inner-text\">\n                   A link has been sent on your registered email\n                </p>\n\n                <div class=\"button-box mt20\">\n                    <button class=\"btn btn-red mr10\" [routerLink]=\"['/login']\" >OK</button>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(service) {
        this.service = service;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)])
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.forgotSubmit = function () {
        var _this = this;
        console.log("forgot====>>>", this.loginForm.value.email);
        this.email = this.loginForm.value.email;
        this.service.post('forgotPassword', this.loginForm.value, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                $('#delete').modal('show');
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ForgotPasswordComponent.prototype.yes = function () {
        $('#delete').modal('hide');
        this.service.routerLink('/login');
    };
    ForgotPasswordComponent.prototype.keypress = function (keyCode) {
        if (keyCode == 32) {
            return false;
        }
        return true;
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/pages/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/pages/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <nav class=\"navbar clearfix\">\n      <div class=\"logo-box\">\n          <a class=\"navbar-brand logo\" href=\"dashboard.html\">\n              <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"lg-logo\">\n              <!-- <img src=\"img/sm-logo.png\" alt=\"logo\" class=\"sm-logo\"> -->\n          </a>\n\n      </div>\n      <div class=\"header-right-part\">\n          <button class=\"btn btn-toggle\" type=\"button\">\n            <i class=\"fas fa-bars\"></i>\n          </button>\n          <button class=\"btn btn-outline-secondary btn-mobsearch\" type=\"button\"><i class=\"fas fa-search\"></i></button>\n      </div>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
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
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/pages/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"beforelogin\">\n  <div class=\"logo\"><a><img src=\"assets/img/logo.png\"></a></div>\n</header>\n  <div class=\"before-login-wrapper\">\n     <div class=\"inner-content clearfix\">\n         <div class=\"login-main-content\">\n            <div class=\"before-login-logo\">\n             \n             </div>\n             <form class=\"login_box_outer\" [formGroup]='loginForm' novalidate>\n\n             <div class=\"login-content-box\">\n                 <h2 class=\"heading\">Login</h2>\n                 <div class=\"form-group\">\n                  <label class=\"common-label blue\"><span style=\"color: red\">*</span>Email</label>\n                    <input type=\"email\" class=\"form-control\" formControlName=\"email\" (keypress)=\"keypress($event.keyCode)\" placeholder=\"Enter email id\" maxlength=\"52\" required/>\n                    <p  *ngIf=\" loginForm.get('email').hasError('required')  && loginForm.get('email').dirty\">*email is required</p>\n                    <p  *ngIf=\" loginForm.get('email').hasError('pattern')   && loginForm.get('email').dirty\">*Please enter valid email</p>\n                </div>\n                  \n                <div class=\"form-group\">\n                  <label class=\"common-label blue\"><span style=\"color: red\">*</span>Password</label>\n                    <input type=\"password\" class=\"form-control\" formControlName=\"password\" (keypress)=\"keypress($event.keyCode)\" placeholder=\"Enter password\" maxlength=\"16\" required/>\n                    <p  *ngIf=\" loginForm.get('password').hasError('required')  && loginForm.get('password').dirty\">*Please enter password</p>\n                    <p  *ngIf=\" loginForm.get('password').hasError('minlength')   && loginForm.get('password').dirty\">*Password should be greater then 8 character's</p>\n                </div>\n                  <div class=\"form-group\">\n                      <div class=\"text-right\">\n                         <a [routerLink]=\"['/forgot-password']\" class=\"forget-pass\">Forgot Password?</a>\n                      </div>\n                  </div>\n                  <div class=\"button-box\">\n                     <button (click)=\"loginSubmit()\" type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-red width100\">Login</button>\n                  </div>\n              </div>\n              </form>\n           </div>\n      </div>\n\n    </div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
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
    function LoginComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.loginForm = this.fb.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/)]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        console.log("loginForm====>>>", this.loginForm.value);
        this.service.post('login', this.loginForm.value, 0).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                localStorage.setItem('adminId', res['data']._id);
                localStorage.setItem('userRole', res['data'].userRole);
                localStorage.setItem('token', res['data'].token);
                _this.service.routerLink('/dashboard');
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    LoginComponent.prototype.keypress = function (keyCode) {
        if (keyCode == 32) {
            return false;
        }
        return true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/menu-management/menu-management.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/menu-management/menu-management.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/menu-management/menu-management.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/menu-management/menu-management.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n      <h1 class=\"heading\">MENU MANAGEMENT</h1>\n      <div class=\"filter-block\">\n            <fieldset class=\"global-fieldset\">\n                <legend>Menu Board</legend>\n                <div class=\"filter-content\">\n                  <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                         <div class=\"form-group\">\n                            <div class=\"search-icon\">\n                               <input type=\"text\" class=\"form-control max-wt-300 search-input\" [(ngModel)]=\"searchWord\" (keyup)=\"search()\" placeholder=\"search\">\n                               <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                            </div>\n                         </div>\n                      </div>\n                      <div class=\"col-sm-6\">\n                          <div class=\"btn-right\">\n                              <button class=\"btn btn-red btn-common\" (click)=\"addMoreCategory()\">Add Category</button>\n                          </div>\n                      </div>\n                   </div>\n                  <div class=\"box box-blue\">\n              <div class=\"box-body\">\n                  <div class=\"custom-table table-responsive\">\n                <table class=\"table table-striped table-border\">\n                    <thead>\n                        <tr>\n                          <th>SNo.</th>\n                          <th>Category Name</th>\n                          <th>Created Date</th>\n                          <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let category of categoryList.categoryList | paginate: { itemsPerPage: categoryList.limit, currentPage: categoryList.page, totalItems: categoryList.total };  let i = index\" [attr.data-index] =\"i\">\n                          <td *ngIf=\"categoryList.page == 1\">{{i + 1}}</td>\n                          <td *ngIf=\"categoryList.page > 1\">{{i + 1 + 10 * (categoryList.page-1)}}</td>\n                          <td>{{category.categoryName || '----'}}</td>\n                          <td>{{category.createdAt | date:'yyyy-MM-dd' || '----'}}</td>\n                          <td>\n                              <div class=\"action-btn\">\n                                  <button class=\"btn btn-sm btn-success\" (click)=\"viewAndEdit(category._id, 'view')\"  ><i class=\"fa fa-eye\"></i>&nbsp;View</button>\n                                  <button class=\"btn btn-sm btn-success\" (click)=\"viewAndEdit(category._id, 'edit')\" ><i class=\"fa fa-ban\"></i>&nbsp;Edit</button>\n                                  <button class=\"btn btn-sm btn-danger\" (click)=\"delete(category._id, 'delete')\"><i class=\"fa fa-trash\"></i>&nbsp; Delete</button>\n                              </div>  \n                          </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>  \n            <div *ngIf=\"categoryList.categoryList.length==0\" class=\"no_record\"><h4>No records found!!</h4>\n            </div>   \n              </div>\n           </div>\n                </div>\n            </fieldset>\n        </div>\n             <ul class=\"custom-pagination\">\n                  <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n             </ul>\n            \n        </div>\n  </div>\n  </div>\n  \n  <div id=\"delete\" class=\"modal fade\" data-easein=\"bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"costumModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content common-detail-modal\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                    ×\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-inner-text\">\n                   Are you sure you want to {{data.requestType}} this product?\n                </p>\n  \n                <div class=\"button-box mt20\">\n                   <button class=\"btn btn-red mr10\" (click)=\"yes()\">Yes</button>\n                   <button class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                \n            </div>\n        </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/pages/menu-management/menu-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/menu-management/menu-management.component.ts ***!
  \********************************************************************/
/*! exports provided: MenuManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuManagementComponent", function() { return MenuManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuManagementComponent = /** @class */ (function () {
    function MenuManagementComponent(service, activeRouter) {
        this.service = service;
        this.activeRouter = activeRouter;
        this.categoryList = { categoryList: [] };
        this.listLength = [];
        this.currentPage = 1;
        this.searchWord = "";
        this.limit = 3;
        this.data = { venueId: '', requestType: '' };
    }
    MenuManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.venueId = params.get('venueId');
        });
        this.menuList();
    };
    MenuManagementComponent.prototype.menuList = function () {
        var _this = this;
        var venueDetail = {
            venueId: this.venueId,
            page: this.currentPage,
            limit: this.limit,
            search: this.searchWord
        };
        this.service.post('getAllCategoryOfVenue', venueDetail, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.categoryList = res['datas'];
                console.log("res=====>>", res['datas']);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    MenuManagementComponent.prototype.addMoreCategory = function () {
        this.service.routerLink('/add-menu/' + this.venueId);
    };
    MenuManagementComponent.prototype.search = function () {
        this.menuList();
    };
    MenuManagementComponent.prototype.pageChanged = function (page) {
        this.currentPage = page;
        this.menuList();
    };
    MenuManagementComponent.prototype.delete = function (categoryId, status) {
        this.data['categoryId'] = categoryId;
        this.data['status'] = status;
        $('#delete').modal('show');
    };
    MenuManagementComponent.prototype.viewAndEdit = function (categoryId, type) {
        if (type == 'view')
            this.service.routerLink('/view-menu-items/' + this.venueId + '/' + categoryId);
        else
            this.service.routerLink('edit-venue-category/' + this.venueId + '/' + categoryId);
    };
    MenuManagementComponent.prototype.yes = function () {
        var _this = this;
        this.service.post('deleteCategoryOfVenue', this.data, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                $('#delete').modal('hide');
                _this.menuList();
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    MenuManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-management',
            template: __webpack_require__(/*! ./menu-management.component.html */ "./src/app/pages/menu-management/menu-management.component.html"),
            styles: [__webpack_require__(/*! ./menu-management.component.css */ "./src/app/pages/menu-management/menu-management.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MenuManagementComponent);
    return MenuManagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/merchant-change-password/merchant-change-password.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/merchant-change-password/merchant-change-password.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/merchant-change-password/merchant-change-password.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/merchant-change-password/merchant-change-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section no-scroll\">\n      <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n      <div class=\"right-inner\">\n        <div class=\"filter-block\">\n          <fieldset class=\"global-fieldset\">\n            <legend>Change Password</legend>\n            <div class=\"filter-content\">\n              <form class=\"login_box_outer\" [formGroup]='merchantForm' novalidate>\n                <div class=\"common-detail-box\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-4 label-right label-top\">Password<span style=\"color: red\">*</span></label>\n                    <div class=\"col-sm-8\">\n                      <input type=\"password\" class=\"form-control custom-control\" (keypress)=\"keypress($event.keyCode)\" formControlName=\"password\" placeholder=\"Enter password\" maxlength=\"16\" />\n                      <p *ngIf=\"merchantForm.get('password').hasError('required') && merchantForm.get('password').dirty\">*password required</p>\n                      <p  *ngIf=\"merchantForm.get('password').hasError('minlength')   && merchantForm.get('password').dirty\">*Password should be greater then 8 character's</p>                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-4 label-right label-top\">Confirm Password<span style=\"color: red\">*</span></label>\n                    <div class=\"col-sm-8\">\n                      <input  type=\"password\" class=\"form-control custom-control\" formControlName=\"confPassword\" placeholder=\"Enter confirm password\" maxlength=\"16\" />\n                      <p *ngIf=\"merchantForm.get('confPassword').value != merchantForm.get('password').value && merchantForm.get('confPassword').dirty && (merchantForm.get('password').value && merchantForm.get('confPassword').value)\">password not match</p>\n                      <p *ngIf=\"merchantForm.get('confPassword').hasError('required') && merchantForm.get('confPassword').dirty\">*confirm password required</p>                    \n                    </div>\n                  </div>\n                </div>\n            </form>\n        </div>\n        </fieldset>\n        <div class=\"table-button text-center mt30\">\n          <button (click)=\"save()\" class=\"btn btn-red\" [disabled]=\"merchantForm.invalid || merchantForm.get('confPassword').value != merchantForm.get('password').value\">Save</button>\n          <button (click)=\"back()\" class=\"btn btn-danger\">Back</button>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/pages/merchant-change-password/merchant-change-password.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/merchant-change-password/merchant-change-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MerchantChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantChangePasswordComponent", function() { return MerchantChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MerchantChangePasswordComponent = /** @class */ (function () {
    function MerchantChangePasswordComponent(activeRoute, service, fb) {
        this.activeRoute = activeRoute;
        this.service = service;
        this.fb = fb;
        this.merchantForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            confPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    MerchantChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap.subscribe(function (params) {
            _this.userId = params.get('userId');
        });
    };
    MerchantChangePasswordComponent.prototype.save = function () {
        var _this = this;
        this.merchantForm.value['userId'] = this.userId;
        this.merchantForm.value['userRole'] = "MERCHANT";
        delete this.merchantForm.value['confPassword'];
        this.service.post('resetPassword', this.merchantForm.value, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/view-merchant/' + _this.userId);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    MerchantChangePasswordComponent.prototype.back = function () {
        this.service.routerLink('/view-merchant/' + this.userId);
    };
    MerchantChangePasswordComponent.prototype.keypress = function (keyCode) {
        if (keyCode == 32) {
            return false;
        }
        return true;
    };
    MerchantChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-merchant-change-password',
            template: __webpack_require__(/*! ./merchant-change-password.component.html */ "./src/app/pages/merchant-change-password/merchant-change-password.component.html"),
            styles: [__webpack_require__(/*! ./merchant-change-password.component.css */ "./src/app/pages/merchant-change-password/merchant-change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MerchantChangePasswordComponent);
    return MerchantChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/merchant-management/merchant-management.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/merchant-management/merchant-management.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/merchant-management/merchant-management.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/merchant-management/merchant-management.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n      <h1 class=\"heading\">MERCHANT MANAGEMENT</h1>\n      <div class=\"filter-block\">\n            <fieldset class=\"global-fieldset\">\n                <legend>Merchant Board</legend>\n                <div class=\"filter-content\">\n                  <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                         <div class=\"form-group\">\n                            <div class=\"search-icon\">\n                               <input type=\"text\" class=\"form-control max-wt-300 search-input\" [(ngModel)]=\"searchWord\" (keyup)=\"search()\" placeholder=\"search\">\n                               <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                            </div>\n                         </div>\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <div class=\"btn-right\">\n                            <button class=\"btn btn-red btn-common\" [routerLink]=\"['/add-merchant']\">Add Merchant</button>\n                        </div>\n                    </div>\n                   </div>\n                   <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                          <div class=\"form-group d-inline-block\">\n                              <div class=\"show-entries mb0\">\n                                  <select (ngModelChange)=\"selectStatus($event)\" class=\"form-control\" [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\">\n                                      <option value=\"\">--Status--</option>\n                                      <option value=\"ACTIVE\">Active</option>\n                                      <option value=\"BLOCKED\">Block</option>\n                                  </select>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"box box-blue\">\n              <div class=\"box-body\">\n                  <div class=\"custom-table table-responsive\">\n                <table class=\"table table-striped table-border\">\n                    <thead>\n                        <tr>\n                          <th>SNo.</th>\n                          <th>Merchant Name</th>\n                          <th>Email</th>\n                          <th>Status</th>\n                          <th>Created Date</th>\n                          <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let merchant of merchantList.docs | paginate: { itemsPerPage: merchantList.limit, currentPage: merchantList.page, totalItems: merchantList.total };  let i = index\" [attr.data-index] =\"i\">\n                          <td *ngIf=\"merchantList.page == 1\">{{i + 1}}</td>\n                          <td *ngIf=\"merchantList.page > 1\">{{i + 1 + 10 * (merchantList.page-1)}}</td>\n                          <td>{{merchant.firstName || '----'}}</td>\n                          <td>{{merchant.email || '----'}}</td>\n                          <td>{{merchant.status == 'ACTIVE' ? 'Active':(merchant.status == 'INACTIVE' ? 'Inactive': 'Block' ) || '----'}}</td>\n                          <td>{{merchant.createdAt | date:'yyyy-MM-dd' || '----'}}</td>\n                          <td>\n                              <div class=\"action-btn\">\n                                  <button class=\"btn btn-sm btn-success\" (click)=\"viewOrEdit(merchant._id, 'view')\"><i class=\"fa fa-eye\"></i>&nbsp;View</button>\n                                  <button class=\"btn btn-sm btn-success\" (click)=\"viewOrEdit(merchant._id, 'edit')\"><i class=\"fa fa-eye\"></i>&nbsp;Edit</button>\n                                  <button class=\"btn btn-sm btn-success\" (click)=\"merchant.status == 'BLOCKED'? deleteOrBlock(merchant._id, 'unblock'):deleteOrBlock(merchant._id, 'block')\" ><i class=\"fa fa-ban\"></i>&nbsp;{{ merchant.status == 'BLOCKED' ? 'Unblock': 'Block' }}</button>                                    \n                                  <button class=\"btn btn-sm btn-danger\"  (click)=\"deleteOrBlock(merchant._id, 'delete')\"><i class=\"fa fa-trash\"></i>&nbsp;Delete</button>\n                              </div>  \n                          </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>  \n            <div *ngIf=\"merchantList.docs.length==0\" class=\"no_record\"><h4>No records found!!</h4>\n            </div>   \n              </div>\n           </div>\n                </div>\n            </fieldset>\n        </div>\n             <ul class=\"custom-pagination\">\n                  <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n             </ul>\n            \n        </div>\n  </div>\n  </div>\n  \n  <div id=\"delete\" class=\"modal fade\" data-easein=\"bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"costumModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content common-detail-modal\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                    ×\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-inner-text\">\n                   Are you sure you want to {{ data.requestType }} this merchant?\n                </p>\n  \n                <div class=\"button-box mt20\">\n                   <button class=\"btn btn-red mr10\" (click)=\"yes()\">Yes</button>\n                   <button class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                \n            </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/merchant-management/merchant-management.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/merchant-management/merchant-management.component.ts ***!
  \****************************************************************************/
/*! exports provided: MerchantManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantManagementComponent", function() { return MerchantManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MerchantManagementComponent = /** @class */ (function () {
    function MerchantManagementComponent(service) {
        this.service = service;
        this.listLength = [];
        this.currentPage = 1;
        this.merchantList = { docs: [] };
        this.searchWord = "";
        this.limit = 10;
        this.status = "";
        this.data = { userId: '', requestType: '' };
    }
    MerchantManagementComponent.prototype.ngOnInit = function () {
        this.getAllUser();
    };
    MerchantManagementComponent.prototype.getAllUser = function () {
        var _this = this;
        var data = {
            status: this.status,
            page: this.currentPage,
            limit: this.limit,
            search: this.searchWord,
            userRole: "MERCHANT"
        };
        this.service.post('getAllUsers', data, 1).subscribe(function (res) {
            console.log("getAllUsers===>>>>" + JSON.stringify(res));
            if (res['responseCode'] == 200) {
                _this.merchantList = res['datas'];
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.spinnerHide();
            _this.service.error('somthing went wrong.');
        });
    };
    MerchantManagementComponent.prototype.search = function () {
        this.getAllUser();
    };
    MerchantManagementComponent.prototype.selectStatus = function (status) {
        this.status = status;
        this.getAllUser();
    };
    MerchantManagementComponent.prototype.pageChanged = function (page) {
        this.currentPage = page;
        this.getAllUser();
    };
    MerchantManagementComponent.prototype.viewOrEdit = function (userId, type) {
        if (type == 'view')
            this.service.routerLink('/view-merchant/' + userId);
        if (type == 'edit')
            this.service.routerLink('/edit-merchant/' + userId);
    };
    MerchantManagementComponent.prototype.deleteOrBlock = function (userId, requestType) {
        this.data['userId'] = userId;
        this.data['requestType'] = requestType;
        $('#delete').modal('show');
    };
    MerchantManagementComponent.prototype.yes = function () {
        var _this = this;
        this.service.post('deleteOrBlockUser', this.data, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                $('#delete').modal('hide');
                _this.getAllUser();
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    MerchantManagementComponent.prototype.hello = function () {
        $('#delete').modal('show');
    };
    MerchantManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-merchant-management',
            template: __webpack_require__(/*! ./merchant-management.component.html */ "./src/app/pages/merchant-management/merchant-management.component.html"),
            styles: [__webpack_require__(/*! ./merchant-management.component.css */ "./src/app/pages/merchant-management/merchant-management.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]])
    ], MerchantManagementComponent);
    return MerchantManagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/order-management/order-management.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/order-management/order-management.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/order-management/order-management.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/order-management/order-management.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n      <h1 class=\"heading\">ORDER MANAGEMENT</h1>\n      <div class=\"filter-block\">\n            <fieldset class=\"global-fieldset\">\n                <legend>Order Board</legend>\n                <div class=\"filter-content\">\n                  <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                         <div class=\"form-group\">\n                            <div class=\"search-icon\">\n                               <input type=\"text\" class=\"form-control max-wt-300 search-input\" [(ngModel)]=\"searchWord\" (keyup)=\"search()\" placeholder=\"search\">\n                               <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                            </div>\n                         </div>\n                      </div>\n                   </div>\n                   <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                          <div class=\"form-group d-inline-block\">\n                              <div class=\"show-entries mb0\">\n                                <select (ngModelChange)=\"selectPayment($event)\" class=\"form-control\" [(ngModel)]=\"payment\" [ngModelOptions]=\"{standalone: true}\">\n                                  <option value=\"\">Payment Status</option>\n                                  <option value=\"DONE\">Done</option>\n                                  <option value=\"PENDING\">Pending</option>\n                              </select>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"box box-blue\">\n              <div class=\"box-body\">\n                  <div class=\"custom-table table-responsive\">\n                <table class=\"table table-striped table-border\">\n                    <thead>\n                        <tr>\n                          <th>SNo.</th>\n                          <th>Venue Name</th>\n                          <th>Order By</th>\n                          <th>Table Number</th>\n                          <th>Total Users</th>\n                          <th>Order Value</th>\n                          <th>Payment Status</th>\n                          <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let order of orderList.docs | paginate: { itemsPerPage: orderList.limit, currentPage: orderList.page, totalItems: orderList.total };  let i = index\" [attr.data-index] =\"i\">\n                          <td *ngIf=\"orderList.page == 1\">{{i + 1}}</td>\n                          <td *ngIf=\"orderList.page > 1\">{{i + 1 + 10 * (orderList.page-1)}}</td>\n                          <td>{{order.venueName || '----'}}</td>\n                          <td>{{order.userName || '----'}}</td>\n                          <td>{{order.tableNumber || '----'}}</td>\n                          <td>{{order.totalUsers || '----'}}</td>\n                          <td>{{order.orderValue || '0'}}</td>\n                          <td>{{order.payment == 'DONE' ? 'Done': \"Pending\" || '----'}}</td>\n                          <td>\n                              <div class=\"action-btn\">\n                                  <button class=\"btn btn-sm btn-success\" (click)=\"view_order(order._id)\"><i class=\"fa fa-eye\"></i>&nbsp;View</button>\n                              </div>  \n                          </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>  \n            <div *ngIf=\"orderList.docs.length==0\" class=\"no_record\"><h4>No records found!!</h4>\n            </div>   \n              </div>\n           </div>\n                </div>\n            </fieldset>\n        </div>\n             <ul class=\"custom-pagination\">\n                  <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n             </ul>\n            \n        </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/pages/order-management/order-management.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/order-management/order-management.component.ts ***!
  \**********************************************************************/
/*! exports provided: OrderManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManagementComponent", function() { return OrderManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderManagementComponent = /** @class */ (function () {
    function OrderManagementComponent(service) {
        this.service = service;
        this.orderList = { docs: [] };
        this.searchWord = "";
        this.payment = "";
        this.currentPage = 1;
        this.limit = 10;
    }
    OrderManagementComponent.prototype.ngOnInit = function () {
        this.getAllOrderList();
    };
    OrderManagementComponent.prototype.getAllOrderList = function () {
        var _this = this;
        var data = {
            search: this.searchWord,
            page: this.currentPage,
            payment: this.payment,
            limit: this.limit
        };
        this.service.post('getAllOrder', data, 1).subscribe(function (res) {
            console.log("getAllOrder===>>>>" + JSON.stringify(res));
            if (res['responseCode'] == 200) {
                _this.orderList = res['datas'];
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    OrderManagementComponent.prototype.pageChanged = function (page) {
        this.currentPage = page;
    };
    OrderManagementComponent.prototype.search = function () {
        this.getAllOrderList();
    };
    OrderManagementComponent.prototype.selectPayment = function (payment) {
        this.payment = payment;
        this.getAllOrderList();
    };
    OrderManagementComponent.prototype.view_order = function (tableId) {
        this.service.routerLink('/view-order-item/' + tableId);
    };
    OrderManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-management',
            template: __webpack_require__(/*! ./order-management.component.html */ "./src/app/pages/order-management/order-management.component.html"),
            styles: [__webpack_require__(/*! ./order-management.component.css */ "./src/app/pages/order-management/order-management.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]])
    ], OrderManagementComponent);
    return OrderManagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/pages/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/paypal/paypal.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/paypal/paypal.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/paypal/paypal.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/paypal/paypal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section no-scroll\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n      <div class=\"filter-block\">\n        <fieldset class=\"global-fieldset\">\n          <legend>Change Password</legend>\n          <div class=\"filter-content\">\n            <form class=\"login_box_outer\" [formGroup]='paypalForm' novalidate>\n              <div class=\"common-detail-box\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Currency</label>\n                  <div class=\"col-sm-8\">\n                    <input type=\"text\" class=\"form-control custom-control\" readonly formControlName=\"currency\" placeholder=\"USD\" maxlength=\"50\" />\n                    <p *ngIf=\"paypalForm.get('currency').hasError('required') && paypalForm.get('currency').dirty\">*currency required</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Amount</label>\n                  <div class=\"col-sm-8\">\n                    <input  type=\"text\" class=\"form-control custom-control\" formControlName=\"amount\" (change)=\"onAmount($event)\" placeholder=\"enter amount\" maxlength=\"20\" />\n                    <p  *ngIf=\"paypalForm.get('amount').hasError('required') &&  paypalForm.get('amount').dirty\" padding>*Amount field can not be empty</p>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-4 label-right label-top\">Token Name</label>\n                  <div class=\"col-sm-8\">\n                      <select class=\"form-control angle\" formControlName=\"kit\">\n                          <option value=\"\">--select--</option>\n                          <option value=\"Real\">Real</option>\n                          <option value=\"FEAK\">Feak</option>\n                      </select>\n                      <p *ngIf=\"paypalForm.get('kit').hasError('required') && paypalForm.get('kit').dirty\">*type required</p>\n                  </div>\n              </div>\n              <div class=\"get_coin text-center\" *ngIf=\"(tokennumber != 0)&&tokennumber !='NaN'\">\n                <p >You will get: <strong>{{tokennumber}} &nbsp; Tokens</strong></p>\n            </div>\n              </div>\n          </form>\n      </div>\n      </fieldset>\n      <div class=\"table-button text-center mt30\">\n        <button class=\"btn btn-red\" [disabled]=\"paypalForm.invalid\" data-toggel=\"modal\" (click)=\"purchaseApi(paypalForm.value)\" data-target=\"#tokenPurchase\">Save</button>\n        <button (click)=\"back()\" class=\"btn btn-danger\">Back</button>\n      </div>\n    </div>\n  </div>\n  <div id=\"tokenPurchase\" class=\"modal fade\" data-easein=\"bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"costumModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content common-detail-modal\">\n            <div class=\"modal-body\">\n                <label class=\"modal-inner-text\">\n                  Tokens will be credited to your Wallet.\n                </label>\n                <div class=\"button-box mt20\">\n                  <div id=\"paypal-checkout-btn\"></div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                \n            </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/paypal/paypal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/paypal/paypal.component.ts ***!
  \**************************************************/
/*! exports provided: PaypalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalComponent", function() { return PaypalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaypalComponent = /** @class */ (function () {
    function PaypalComponent(fb) {
        var _this = this;
        this.fb = fb;
        this.addScript = false;
        this.paypalLoad = true;
        this.finalAmount = 1;
        this.tokenData = {};
        this.tokennumber = '';
        /*******************Purchase Api************/
        /*******************PayPal************/
        this.paypalConfig = {
            env: 'sandbox',
            client: {
                sandbox: 'AcUREEH4_TyW7GhJpxgYJr4y_ZuUJjdDj5W2s9Xw9HfFPIqoAyAOoqnImwKkhip1sE0adS5mFnzH_gxp',
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            { amount: { total: _this.tokenData.price, currency: _this.tokenData.currency } }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) {
                    $("#tokenPurchase").modal("hide");
                    _this.tokenpurchaseApi(data);
                });
            }
        };
        this.paypalForm = this.fb.group({
            currency: ['INR', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            kit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    PaypalComponent.prototype.ngOnInit = function () {
        // this.authentication = JSON.parse(localStorage.credential)
        // this.address = this.authentication.address;
        this.tokenlistApi();
    };
    PaypalComponent.prototype.purchaseApi = function (data) {
        this.tokenData = {
            'currency': "USD",
            'price': Number(data.amount),
            'tokenName': data.kit
        };
        //  console.log("TokenData==> ",JSON.stringify(this.tokenData));
        $("#tokenPurchase").modal("show");
        this.paypal();
    };
    PaypalComponent.prototype.paypal = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalConfig, '#paypal-checkout-btn');
                _this.paypalLoad = false;
            });
        }
    };
    PaypalComponent.prototype.addPaypalScript = function () {
        // console.log("paypal");
        this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            // scripttagElement.src = this.purchaseLink;
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        });
    };
    /*******************PayPal************/
    /**************Succesfully Token Purchase Api********************/
    PaypalComponent.prototype.tokenpurchaseApi = function (detail) {
        var tokendetail = {
            "tokenName": this.tokenData.tokenName,
            "userWalletAddress": this.address,
            "amount": this.tokenData.price,
            "paymentToken": detail.paymentToken,
            "orderId": detail.orderID,
            "paymentId": detail.paymentID,
            "payerId": detail.payerID,
            "tokenAddress": this.tokenaddress,
            "numberofToken": this.tokennumber
        };
        // console.log("Payment Detail==> ",JSON.stringify(tokendetail));
    };
    /********************Token List Api****************/
    PaypalComponent.prototype.tokenlistApi = function () {
        var tokenData = {
            "tokenName": ''
        };
    };
    /*******************No of Token Calculation***************/
    PaypalComponent.prototype.onAmount = function (event) {
        // console.log('amount',event.target.value);
        var num = event.target.value / (this.tokenprice / this.quantity);
        this.tokennumber = num.toFixed(this.tokendecimal);
        // console.log("No of Token==> ",this.tokennumber);
    };
    PaypalComponent.prototype.onChange = function (amt, event) {
        // console.log('event will give you full breif of action',amt) // event will give you full breif of action
        var newVal = event.target.value;
        // console.log("Amount==>> "+amt.amount);
        for (var i = 0; i < this.tokenList.length; i++) {
            // console.log(newVal);
            // console.log(this.tokenList[i].tokenName);
            if (newVal == this.tokenList[i].tokenName) {
                // console.log("PRice",this.tokenList[i]);
                this.tokenprice = this.tokenList[i].tokenPrice;
                this.tokenaddress = this.tokenList[i].contractAddress;
                this.tokendecimal = this.tokenList[i].tokenDecimal;
                this.quantity = this.tokenList[i].quantity;
                // console.log("Price==> ",this.tokenprice);
                // console.log("tokendecimal=> ",this.tokendecimal);
            }
        }
        var num = amt.amount / (this.tokenprice / this.quantity);
        this.tokennumber = num.toFixed(4);
        // console.log("No of Token==> ",this.tokennumber);
    };
    PaypalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paypal',
            template: __webpack_require__(/*! ./paypal.component.html */ "./src/app/pages/paypal/paypal.component.html"),
            styles: [__webpack_require__(/*! ./paypal.component.css */ "./src/app/pages/paypal/paypal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PaypalComponent);
    return PaypalComponent;
}());



/***/ }),

/***/ "./src/app/pages/promotion-banner-management/promotion-banner-management.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/promotion-banner-management/promotion-banner-management.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/promotion-banner-management/promotion-banner-management.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/promotion-banner-management/promotion-banner-management.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-side-menu></app-side-menu>\n\n<app-side-menu></app-side-menu>\n<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section\">\n      <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n      <div class=\"right-inner\">\n          \n        <h1 class=\"heading\">PROMOTION BANNER MANAGEMENT</h1>\n        <div class=\"filter-block\">\n              <fieldset class=\"global-fieldset\">\n                  <legend>Banner Board</legend>\n                  <div class=\"filter-content\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                           <div class=\"form-group\">\n                              <div class=\"search-icon\">\n                                 <input type=\"text\" class=\"form-control max-wt-300 search-input\" [(ngModel)]=\"searchWord\" (keyup)=\"search()\" placeholder=\"search\">\n                                 <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                              </div>\n                           </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"btn-right\">\n                                <button class=\"btn btn-red btn-common\" [routerLink]=\"['/add-promotion-banner']\">Add Banner</button>\n                            </div>\n                        </div>\n                     </div>\n                    <div class=\"box box-blue\">\n                <div class=\"box-body\">\n                    <div class=\"custom-table table-responsive\">\n                  <table class=\"table table-striped table-border\">\n                      <thead>\n                          <tr>\n                            <th>SNo.</th>\n                            <th>Banner Name</th>\n                            <th>Created Date</th>\n                            <th>Action</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let banner of bannerList.docs | paginate: { itemsPerPage: bannerList.limit, currentPage: bannerList.page, totalItems: bannerList.total };  let i = index\" [attr.data-index] =\"i\">\n                            <td *ngIf=\"bannerList.page == 1\">{{i + 1}}</td>\n                            <td *ngIf=\"bannerList.page > 1\">{{i + 1 + 10 * (bannerList.page-1)}}</td>\n                            <td>{{banner.bannerName || '----'}}</td>\n                            <td>{{banner.createdAt | date:'yyyy-MM-dd'}}</td>\n                            <td>\n                                <div class=\"action-btn\">\n                                    <button class=\"btn btn-sm btn-success\" (click)=\"viewAndDelete(banner._id, 'view')\"><i class=\"fa fa-eye\"></i>&nbsp;View</button>\n                                    <button class=\"btn btn-sm btn-danger\" (click)=\"viewAndDelete(banner._id, 'delete')\"><i class=\"fa fa-trash\"></i>&nbsp; Delete</button>\n                                </div>  \n                            </td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>  \n              <div *ngIf=\"bannerList.docs.length==0\" class=\"no_record\"><h4>No records found!!</h4>\n              </div>   \n                </div>\n             </div>\n                  </div>\n              </fieldset>\n          </div>\n               <ul class=\"custom-pagination\">\n                    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n               </ul>\n              \n          </div>\n    </div>\n    </div>\n    \n    <div id=\"delete\" class=\"modal fade\" data-easein=\"bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"costumModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n          <div class=\"modal-content common-detail-modal\">\n              <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                      ×\n                  </button>\n              </div>\n              <div class=\"modal-body\">\n                  <p class=\"modal-inner-text\">\n                     Are you sure you want to delete this banner?\n                  </p>\n    \n                  <div class=\"button-box mt20\">\n                     <button class=\"btn btn-red mr10\" (click)=\"yes()\">Yes</button>\n                     <button class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n                  </div>\n              </div>\n              <div class=\"modal-footer\">\n                  \n              </div>\n          </div>\n      </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/pages/promotion-banner-management/promotion-banner-management.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/promotion-banner-management/promotion-banner-management.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PromotionBannerManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionBannerManagementComponent", function() { return PromotionBannerManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromotionBannerManagementComponent = /** @class */ (function () {
    function PromotionBannerManagementComponent(service) {
        this.service = service;
        this.bannerList = { docs: [] };
        this.listLength = [];
        this.currentPage = 1;
        this.searchWord = "";
        this.limit = 3;
    }
    PromotionBannerManagementComponent.prototype.ngOnInit = function () {
        this.service.spinnerShow();
        this.getAllBanner();
    };
    PromotionBannerManagementComponent.prototype.getAllBanner = function () {
        var _this = this;
        var data = {
            adminId: localStorage.getItem('adminId'),
            userRole: localStorage.getItem('userRole'),
            page: this.currentPage,
            limit: this.limit,
            search: this.searchWord
        };
        this.service.post('getAllBanner', data, 1).subscribe(function (res) {
            _this.service.spinnerHide();
            if (res['responseCode'] == 200) {
                console.log("getAllBanner===>>>>" + JSON.stringify(res));
                _this.bannerList = res['datas'];
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    PromotionBannerManagementComponent.prototype.search = function () {
        this.getAllBanner();
    };
    PromotionBannerManagementComponent.prototype.pageChanged = function (page) {
        this.currentPage = page;
        this.getAllBanner();
    };
    PromotionBannerManagementComponent.prototype.viewAndDelete = function (bannerId, type) {
        if (type == 'view')
            this.service.routerLink('/view-banner/' + bannerId);
        if (type == 'delete') {
            this.bannerId = bannerId;
            $('#delete').modal('show');
        }
    };
    PromotionBannerManagementComponent.prototype.yes = function () {
        var _this = this;
        var data = {
            bannerId: this.bannerId,
            requestType: 'delete'
        };
        this.service.spinnerShow();
        this.service.post('deleteBanner', data, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                $('#delete').modal('hide');
                _this.service.spinnerHide();
                _this.service.success(res['responseMessage']);
                _this.getAllBanner();
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    PromotionBannerManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promotion-banner-management',
            template: __webpack_require__(/*! ./promotion-banner-management.component.html */ "./src/app/pages/promotion-banner-management/promotion-banner-management.component.html"),
            styles: [__webpack_require__(/*! ./promotion-banner-management.component.css */ "./src/app/pages/promotion-banner-management/promotion-banner-management.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]])
    ], PromotionBannerManagementComponent);
    return PromotionBannerManagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"beforelogin\">\n  <div class=\"logo\"><a><img src=\"assets/img/logo.png\"></a></div>\n</header>\n  <div class=\"before-login-wrapper\">\n     <div class=\"inner-content clearfix\">\n         <div class=\"login-main-content\">\n            <div class=\"before-login-logo\">\n             \n             </div>\n             <form class=\"login_box_outer\" [formGroup]='resetForm' novalidate>\n\n             <div class=\"login-content-box\">\n                 <h2 class=\"heading\">Login</h2>\n                <div class=\"form-group\">\n                <label class=\"common-label blue\">New Password<span style=\"color: red\">*</span></label>\n                  <input type=\"password\" class=\"form-control\" formControlName=\"password\" (keypress)=\"keypress($event.keyCode)\" placeholder=\"Enter new Password\" maxlength=\"16\" />\n                  <p *ngIf=\"resetForm.get('password').hasError('required') && resetForm.get('password').dirty\">*Password required</p>\n                  <p *ngIf=\"resetForm.get('password').hasError('minlength') && resetForm.get('password').dirty\">*invalid password</p>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"common-label blue\">Confirm Password<span style=\"color: red\">*</span></label>\n                  <input type=\"password\" class=\"form-control\" formControlName=\"confPassword\" placeholder=\"Enter confirm Password\"/>\n                  <p *ngIf=\"resetForm.get('password').hasError('required') && resetForm.get('password').dirty\">*Confirm Password required</p>\n                  <p *ngIf=\"resetForm.get('confPassword').value != resetForm.get('password').value && resetForm.get('confPassword').dirty && (resetForm.get('password').value && resetForm.get('confPassword').value)\">*password not match</p>\n                </div>\n                  <div class=\"button-box\">\n                     <button (click)=\"resetSubmit()\" type=\"submit\" [disabled]=\"!resetForm.valid || resetForm.get('confPassword').value != resetForm.get('password').value\" class=\"btn btn-red width100\">Reset</button>\n                  </div>\n              </div>\n              </form>\n           </div>\n      </div>\n\n    </div>"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
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




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(service, params) {
        var _this = this;
        this.service = service;
        this.params = params;
        this.params.paramMap.subscribe(function (params) {
            _this.adminId = params.get('adminId');
            _this.secretKey = params.get('secretKey');
        });
        this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            secretKey: this.secretKey,
            adminId: this.adminId
        };
        this.service.post('verifySecretKey', data, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ResetPasswordComponent.prototype.resetSubmit = function () {
        var _this = this;
        this.resetForm.value['userId'] = this.adminId;
        console.log("resetPassword====>>>", this.resetForm.value);
        this.service.post('resetPassword', this.resetForm.value, 0).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                console.log("res=====>>>" + JSON.stringify(res));
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/login');
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ResetPasswordComponent.prototype.keypress = function (keyCode) {
        if (keyCode == 32) {
            return false;
        }
        return true;
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/pages/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/pages/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/side-menu/side-menu.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/side-menu/side-menu.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/side-menu/side-menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/side-menu/side-menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <nav class=\"navbar navbar-default\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#profile-collapse\" aria-expanded=\"false\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n  </nav>\t\n</div>\n<div class=\"left-section\">\n  <div class=\"menubox\">\n    <div class=\"mobmenu\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  </div>\n  <div class=\"left-header\">\n    <div class=\"logo\"><a><img src=\"assets/img/logo.png\"></a></div>\n  </div>\n      <div class=\"user-panel\">\n          <span class=\"view-inline user_name\">Admin Panel</span>\n      </div>\n  <div class=\"left-menu\">\n    <ul class=\"nav\">\n      <li><a [ngClass]=\"{'active': isActive == 'dashboard'}\"  [routerLink]=\"['/dashboard']\"><i class=\"fa fa-tachometer\"></i>DASHBOARD</a></li>\n      <!-- <li><a [ngClass]=\"{'active': isActive == 'paypal'}\"  [routerLink]=\"['/paypal']\"><i class=\"fa fa-tachometer\"></i>PAYPAL</a></li> -->\n      <li><a [ngClass]=\"{'active': isActive == 'user-management' || isActive == 'view-user' || isActive == 'edit-user' || isActive == 'user-change-Password' || isActive == 'add-user'  }\" [routerLink]=\"['/user-management']\"><i class=\"fa fa-users\"></i>USER MANAGEMENT</a></li>\n      <li><a [ngClass]=\"{'active': isActive == 'merchant-management' || isActive == 'view-merchant' || isActive == 'edit-merchant' || isActive == 'add-merchant' || isActive == 'merchant-change-Password'  }\" [routerLink]=\"['/merchant-management']\"><i class=\"fa fa-users\"></i>MERCHANT MANAGEMENT</a></li>\n      <li><a [ngClass]=\"{'active': isActive == 'venue-management' || isActive == 'add-venue' || isActive == 'view-venue' || isActive == 'edit-venue' || isActive == 'add-menu' || isActive == 'edit-venue-category' || isActive == 'edit-category-item' || isActive == 'add-more-category-items' || isActive == 'menu-management' || isActive == 'view-menu' || isActive == 'view-menu-items' || isActive == 'add-venue-speciality' ||  isActive == 'view-venue-speciality' || isActive == 'edit-venue-speciality' }\"  [routerLink]=\"['/venue-management']\"><i class=\"fa fa-angellist\"></i>VENUE MANAGEMENT</a></li>\n      <li><a [ngClass]=\"{'active': isActive == 'order-management' || isActive == 'view-order-item' || isActive == 'view-order-user'}\"  [routerLink]=\"['/order-management']\"><i class=\"fa fa-tachometer\"></i>ORDER MANAGEMENT</a></li>\n      <li><a [ngClass]=\"{'active': isActive == 'promotion-banner-management' || isActive == 'add-promotion-banner' || isActive == 'view-banner'}\" [routerLink]=\"['/promotion-banner-management']\"><i class=\"fa fa-product-hunt\"></i>PROMOTION BANNER MANAGEMENT</a></li>\n      <li><a [ngClass]=\"{'active': isActive == 'static-content-management' }\" [routerLink]=\"['/static-content-management']\"><i class=\"fa fa-lastfm\"></i>STATIC CONTENT</a></li>\n      <li><a [ngClass]=\"{'active': isActive == 'logout'}\" data-toggle=\"modal\" data-target=\"#logout_modal\"><i class=\"fa fa-sign-out\"></i>LOGOUT</a></li>\n    </ul>\n  </div>\n</div>\n\n<div id=\"logout_modal\" class=\"modal fade\" data-easein=\"bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"costumModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content common-detail-modal\">\n          \n          <div class=\"modal-body\">\n              <label class=\"modal-inner-text\">\n                Are you sure you want to logout?\n              </label>\n\n              <div class=\"button-box mt20\">\n                 <button class=\"btn btn-red mr10\" (click)=\"logout()\" data-dismiss=\"modal\">Yes</button>\n                 <button class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n              </div>\n          </div>\n          <div class=\"modal-footer\">\n              \n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/side-menu/side-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/side-menu/side-menu.component.ts ***!
  \********************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(service) {
        this.service = service;
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        this.isActive = window.location.href.split('/')[3];
    };
    SideMenuComponent.prototype.logout = function () {
        this.service.clearLocalStorage();
    };
    SideMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/pages/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.css */ "./src/app/pages/side-menu/side-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n    <div class=\"container-common\">\n       <div class=\"row\">\n       <div class=\"col-md-6\">\n          <div class=\"left-section-login\">\n              <div class=\"login-logo1\">\n                 <img src=\"assets/img/logo.png\" alt=\"logo\"/>\n              </div>\n              <div class=\"sigintext-block\">\n              <h2>Create My Account</h2>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n              <a [routerLink]=\"['/login']\" >Already have an account? Sign In</a>\n            </div>\n          </div>\n       </div>\n      <div class=\"col-md-6\">\n        <form class=\"login_box_outer\" >\n          <div class=\"login-box max-WT-520\">\n              <div class=\"login-right-block\">\n                <div class=\"login-heading\">\n                   <h4>CREATE ACCOUNT</h4>\n                </div>\n                <div class=\"login-box-body\">\n                  <div class=\"form-group\">\n                      <input type=\"email\" class=\"form-control\" placeholder=\"Email ID\" maxlength=\"32\" required/>\n                      <!-- <span  *ngIf=\"signupForm.get('email').hasError('required')  && signupForm.get('email').dirty\">*Please enter email</span>\n                      <span  *ngIf=\"signupForm.get('email').hasError('pattern')   && signupForm.get('email').dirty\">*Please enter valid email</span> -->\n                  </div>                   \n                  <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\"  placeholder=\"Username\" />\n                      <!-- <span  *ngIf=\"signupForm.get('username').hasError('required')  && signupForm.get('username').dirty\">*Please enter email</span>\n                      <span  *ngIf=\"signupForm.get('username').hasError('pattern')   && signupForm.get('username').dirty\">*Please enter valid username</span> -->\n                  </div>\n\n                    <div class=\"form-group\">\n                       <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <select class=\"select-custome wt-80\">\n                              <option value=\"\">+91</option>\n                            </select>   \n                          </div>\n                          <input type=\"text\"  class=\"form-control form-control-md\"  maxlength=\"10\" placeholder=\"Phone Number\">\n                        </div>\n                        <!-- <span *ngIf=\"signupForm.get('phone_number').hasError('required') && signupForm.get('phone_number').dirty\">*phone number required</span>\n                        <span *ngIf=\"signupForm.get('phone_number').hasError('pattern') && signupForm.get('phone_number').dirty\">*please enter valid phone number</span> -->\n                    </div>\n                    <div class=\"form-group bday-block\">\n                       <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                           <label>Date of Birth</label>\n                        </div>\n                          <input type=\"date\" class=\"form-control form-control-md\"   placeholder=\"DD/MM/YYYY\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\"  id=\"company_name\" placeholder=\"Company Name\" />\n                      <!-- <span *ngIf=\"signupForm.get('company_name').hasError('required') && signupForm.get('company_name').dirty\">*company name required</span> -->\n                    </div>\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\"  id=\"job_title\" placeholder=\"Job Tittle\" />\n                      <!-- <span *ngIf=\"signupForm.get('job_title').hasError('required') && signupForm.get('job_title').dirty\">*job title required</span> -->\n                    </div>\n                    <div class=\"form-group\">\n                      <input type=\"password\" class=\"form-control\" maxlength=\"16\" placeholder=\"Enter password\"/>\n                      <!-- <span *ngIf=\"signupForm.get('password').hasError('required') && signupForm.get('password').dirty\">*password required</span>\n                      <span *ngIf=\"signupForm.get('password').hasError('minlength') && signupForm.get('password').dirty\">*password should be greater then 8 character's</span> -->\n                    </div>\n                    <div class=\"form-group\">\n                      <input type=\"password\" class=\"form-control\" maxlength=\"16\" placeholder=\"Enter confirm password\" />\n                      <!-- <span *ngIf=\"signupForm.get('confPassword').value != signupForm.get('password').value && signupForm.get('confPassword').dirty && (signupForm.get('password').value && signupForm.get('confPassword').value)\">password not match</span>\n                      <span *ngIf=\"signupForm.get('confPassword').hasError('required') && signupForm.get('confPassword').dirty\">*confirm password required</span> -->\n                    </div>\n                    <div class=\"form-group\">\n                          <div class=\"inlineblock checkbox-main\">\n                            <label class=\"checkbox-design\">\n                              <input type=\"checkbox\" name=\"ans\"  /><span></span>App Alert\n                            </label>\n                          </div>\n                           <div class=\"inlineblock checkbox-main\">\n                            <label class=\"checkbox-design\">\n                              <input type=\"checkbox\" /><span></span>Email Alert\n                            </label>\n                          </div>\n                    </div>\n                  </div>\n                    <div class=\"text-center mt40\">\n                      <button (click)=\"signup()\" class=\"btn btn-login btn-large  width100 font-100\">CREATE ACCOUNT</button>\n                    </div>\n              </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/pages/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/pages/static-content-management/static-content-management.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/static-content-management/static-content-management.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/static-content-management/static-content-management.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/static-content-management/static-content-management.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n      <h1 class=\"heading\">STATIC CONTENT MANAGEMENT</h1>\n      <div class=\"filter-block\">\n        <fieldset class=\"global-fieldset\">\n          <legend>Content Board</legend>\n          <div class=\"filter-content\">\n            <div class=\"box box-blue\">\n              <div class=\"box-body\">\n                <div class=\"custom-table table-responsive\" *ngIf=\"!editorOn\">\n                  <table class=\"table table-striped table-border\">\n                    <thead>\n                      <tr>\n                        <th>SNo.</th>\n                        <th>Name</th>\n                        <th>Update On</th>\n                        <th>Action</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>1</td>\n                        <td>About Us</td>\n                        <td>{{contentObject.aboutUsCreatedAt | date:'yyyy-MM-dd' || '----'}}</td>\n                        <td>\n                          <div class=\"action-btn\">\n                            <button class=\"btn btn-sm btn-success\" (click)=\"view('aboutUs')\">\n                              <i class=\"fa fa-eye\"></i>&nbsp;View</button>\n                            <button class=\"btn btn-sm btn-danger\" (click)=\"delete('aboutUs')\">\n                              <i class=\"fa fa-trash\"></i>&nbsp; Delete</button>\n                          </div>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>2</td>\n                        <td>Contact Us</td>\n                        <td>{{contentObject.contactUsCreatedAt | date:'yyyy-MM-dd' || '----'}}</td>\n                        <td>\n                          <div class=\"action-btn\">\n                            <button class=\"btn btn-sm btn-success\" (click)=\"view('contactUs')\">\n                              <i class=\"fa fa-eye\"></i>&nbsp;View</button>\n                            <button class=\"btn btn-sm btn-danger\" (click)=\"delete('contactUs')\">\n                              <i class=\"fa fa-trash\"></i>&nbsp; Delete</button>\n                          </div>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>3</td>\n                        <td>Terms And Services</td>\n                        <td>{{contentObject.termsAndServicesCreatedAt | date:'yyyy-MM-dd' || '----'}}</td>\n                        <td>\n                          <div class=\"action-btn\">\n                            <button class=\"btn btn-sm btn-success\" (click)=\"view('termsAndServices')\">\n                              <i class=\"fa fa-eye\"></i>&nbsp;View</button>\n                            <button class=\"btn btn-sm btn-danger\" (click)=\"delete('termsAndServices')\">\n                              <i class=\"fa fa-trash\"></i>&nbsp; Delete</button>\n                          </div>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>4</td>\n                        <td>Privacy Policy</td>\n                        <td>{{contentObject.privacyPolicyCreatedAt | date:'yyyy-MM-dd' || '----'}}</td>\n                        <td>\n                          <div class=\"action-btn\">\n                            <button class=\"btn btn-sm btn-success\" (click)=\"view('privacyPolicy')\">\n                              <i class=\"fa fa-eye\"></i>&nbsp;View</button>\n                            <button class=\"btn btn-sm btn-danger\" (click)=\"delete('privacyPolicy')\">\n                              <i class=\"fa fa-trash\"></i>&nbsp; Delete</button>\n                          </div>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>5</td>\n                        <td>termsDataPolicyCookie</td>\n                        <td>{{contentObject.termsDataPolicyCookieCreatedAt | date:'yyyy-MM-dd' || '----'}}</td>\n                        <td>\n                          <div class=\"action-btn\">\n                            <button class=\"btn btn-sm btn-success\" (click)=\"view('termsDataPolicyCookie')\">\n                              <i class=\"fa fa-eye\"></i>&nbsp;View</button>\n                            <button class=\"btn btn-sm btn-danger\" (click)=\"delete('termsDataPolicyCookie')\">\n                              <i class=\"fa fa-trash\"></i>&nbsp; Delete</button>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div *ngIf=\"editorOn\">\n                  <div class=\"text-center aboutus\">{{whichContent}}</div>\n              </div>\n              </div>\n            </div>\n            <div class=\"text-center save-back\" *ngIf=\"editorOn\">\n                <button (click)=\"back()\" class=\"btn btn-danger\">Back</button>\n            </div>\n          </div>\n        </fieldset>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<div id=\"delete\" class=\"modal fade\" data-easein=\"bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"costumModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content common-detail-modal\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          ×\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p class=\"modal-inner-text\">\n          Are you sure you want to delete this content?\n        </p>\n\n        <div class=\"button-box mt20\">\n          <button class=\"btn btn-red mr10\" (click)=\"yes()\">Yes</button>\n          <button class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/static-content-management/static-content-management.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/static-content-management/static-content-management.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StaticContentManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticContentManagementComponent", function() { return StaticContentManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StaticContentManagementComponent = /** @class */ (function () {
    function StaticContentManagementComponent(service) {
        this.service = service;
        this.contentObject = {};
        this.editorOn = false;
        this.whichContent = "";
    }
    StaticContentManagementComponent.prototype.ngOnInit = function () {
        this.getStaticContent();
    };
    StaticContentManagementComponent.prototype.getStaticContent = function () {
        var _this = this;
        this.service.get('getStaticContent', 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.contentObject = res['datas'][0];
                console.log("getStaticContent res===>>>" + JSON.stringify(res['datas'][0]));
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    StaticContentManagementComponent.prototype.view = function (type) {
        this.editorOn = true;
        this.whichContent = this.contentObject[type];
    };
    StaticContentManagementComponent.prototype.delete = function (type) {
        this.type = type;
        $('#delete').modal('show');
    };
    StaticContentManagementComponent.prototype.yes = function () {
        var _this = this;
        console.log("type=====>>>>", this.type);
        $('#delete').modal('hide');
        this.service.post('deleteStaticContent', this.type, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    StaticContentManagementComponent.prototype.back = function () {
        this.editorOn = false;
    };
    StaticContentManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-static-content-management',
            template: __webpack_require__(/*! ./static-content-management.component.html */ "./src/app/pages/static-content-management/static-content-management.component.html"),
            styles: [__webpack_require__(/*! ./static-content-management.component.css */ "./src/app/pages/static-content-management/static-content-management.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]])
    ], StaticContentManagementComponent);
    return StaticContentManagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-change-password/user-change-password.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/user-change-password/user-change-password.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/user-change-password/user-change-password.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/user-change-password/user-change-password.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section no-scroll\">\n      <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n      <div class=\"right-inner\">\n        <div class=\"filter-block\">\n          <fieldset class=\"global-fieldset\">\n            <legend>Change Password</legend>\n            <div class=\"filter-content\">\n              <form class=\"login_box_outer\" [formGroup]='userForm' novalidate>\n                <div class=\"common-detail-box\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-4 label-right label-top\">Password</label>\n                    <div class=\"col-sm-8\">\n                      <input type=\"password\" class=\"form-control custom-control\" (keypress)=\"keypress($event.keyCode)\" formControlName=\"password\" placeholder=\"Enter password\" maxlength=\"20\" />\n                      <p *ngIf=\"userForm.get('password').hasError('required') && userForm.get('password').dirty\">*password required</p>\n                      <p *ngIf=\"userForm.get('password').hasError('minlength') && userForm.get('password').dirty\">*password should be min 8 character's</p>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-4 label-right label-top\">Confirm Password</label>\n                    <div class=\"col-sm-8\">\n                      <input  type=\"password\" class=\"form-control custom-control\" formControlName=\"confPassword\" placeholder=\"Enter confirm password\" maxlength=\"20\" />\n                      <p *ngIf=\"userForm.get('confPassword').value != userForm.get('password').value && userForm.get('confPassword').dirty && (userForm.get('password').value && userForm.get('confPassword').value)\">password not match</p>\n                      <p *ngIf=\"userForm.get('confPassword').hasError('required') && userForm.get('confPassword').dirty\">*confirm password required</p>\n                    </div>\n                  </div>\n                </div>\n            </form>\n        </div>\n        </fieldset>\n        <div class=\"table-button text-center mt30\">\n          <button (click)=\"save()\" class=\"btn btn-red\" [disabled]=\"userForm.invalid || (userForm.get('confPassword').value != userForm.get('password').value)\">Save</button>\n          <button (click)=\"back()\" class=\"btn btn-danger\">Back</button>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/pages/user-change-password/user-change-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/user-change-password/user-change-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChangePasswordComponent", function() { return UserChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserChangePasswordComponent = /** @class */ (function () {
    function UserChangePasswordComponent(activeRoute, service, fb) {
        this.activeRoute = activeRoute;
        this.service = service;
        this.fb = fb;
        this.userForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            confPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    UserChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap.subscribe(function (params) {
            _this.userId = params.get('userId');
        });
    };
    UserChangePasswordComponent.prototype.save = function () {
        var _this = this;
        this.userForm.value['userId'] = this.userId;
        this.userForm.value['userRole'] = "USER";
        delete this.userForm.value['confPassword'];
        this.service.post('resetPassword', this.userForm.value, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                _this.service.routerLink('/view-user/' + _this.userId);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    UserChangePasswordComponent.prototype.back = function () {
        this.service.routerLink('/view-user/' + this.userId);
    };
    UserChangePasswordComponent.prototype.keypress = function (keyCode) {
        if (keyCode == 32) {
            return false;
        }
        return true;
    };
    UserChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-change-password',
            template: __webpack_require__(/*! ./user-change-password.component.html */ "./src/app/pages/user-change-password/user-change-password.component.html"),
            styles: [__webpack_require__(/*! ./user-change-password.component.css */ "./src/app/pages/user-change-password/user-change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], UserChangePasswordComponent);
    return UserChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-management/user-management.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/user-management/user-management.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section\">\n        <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n        <div class=\"right-inner\">\n\n            <h1 class=\"heading\">USER MANAGEMENT</h1>\n            <div class=\"filter-block\">\n                <fieldset class=\"global-fieldset\">\n                    <legend>User Board</legend>\n                    <div class=\"filter-content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <div class=\"search-icon\">\n                                        <input type=\"text\" class=\"form-control max-wt-300 search-input\" [(ngModel)]=\"searchWord\" (keyup)=\"search()\" placeholder=\"search\">\n                                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group d-inline-block\">\n                                    <div class=\"show-entries mb0\">\n                                        <select (ngModelChange)=\"selectGender($event)\" class=\"form-control\" [(ngModel)]=\"gender\" [ngModelOptions]=\"{standalone: true}\">\n                                            <option value=\"\">--Gender--</option>\n                                            <option value=\"MALE\">Male</option>\n                                            <option value=\"FEMALE\">Female</option>\n                                        </select>\n                                        <select (ngModelChange)=\"selectStatus($event)\" class=\"form-control\" [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\">\n                                            <option value=\"\">--Status--</option>\n                                            <option value=\"ACTIVE\">Active</option>\n                                            <option value=\"INACTIVE\">Inactive</option>\n                                            <option value=\"BLOCKED\">Block</option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"box box-blue\">\n                            <div class=\"box-body\">\n                                <div class=\"custom-table table-responsive\">\n                                    <table class=\"table table-striped table-border\">\n                                        <thead>\n                                            <tr>\n                                                <th>SNo.</th>\n                                                <th>First Name</th>\n                                                <th>Last Name</th>\n                                                <th>Email</th>\n                                                <th>Mobile Number</th>\n                                                <th>DOB</th>\n                                                <th>Gender</th>\n                                                <th>Status</th>\n                                                <th>Created Date</th>\n                                                <th>Action</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let user of userList.docs | paginate: { itemsPerPage: userList.limit, currentPage: userList.page, totalItems: userList.total };  let i = index\"\n                                                [attr.data-index]=\"i\">\n                                                <td *ngIf=\"userList.page == 1\">{{i + 1}}</td>\n                                                <td *ngIf=\"userList.page > 1\">{{i + 1 + 10 * (userList.page-1)}}</td>\n                                                <td>{{user.firstName || '----'}}</td>\n                                                <td>{{user.lastName  || '----'}}</td>\n                                                <td>{{user.email || '----'}}</td>\n                                                <td>{{user.countryCode+'-'+user.phone || '----'}}</td>\n                                                <td>{{user.dateOfBirth | date:'yyyy-MM-dd'  || '----'}}</td>\n                                                <td>{{user.gender == \"MALE\" ? \"Male\":'Female' || '----'}}</td>\n                                                <td>{{user.status == 'ACTIVE' ? 'Active':(user.status == 'INACTIVE' ? 'Inactive': \n                                                    'Block' ) || '----'}}</td>\n                                                <td>{{user.createdAt | date:'yyyy-MM-dd' || '----'}}</td>\n                                                <td>\n                                                    <div class=\"action-btn\">\n                                                        <button class=\"btn btn-sm btn-success\" (click)=\"viewOrEdit(user._id, 'view')\">\n                                                            <i class=\"fa fa-eye\"></i>&nbsp;View</button>\n                                                        <button class=\"btn btn-sm btn-success\" (click)=\"viewOrEdit(user._id, 'edit')\">\n                                                            <i class=\"fa fa-eye\"></i>&nbsp;Edit</button>\n                                                        <button class=\"btn btn-sm btn-success\" (click)=\"user.status == 'BLOCKED'? deleteOrBlock(user._id, 'unblock'):deleteOrBlock(user._id, 'block')\">\n                                                            <i class=\"fa fa-ban\"></i>&nbsp;{{ user.status == 'BLOCKED' ? 'Unblock': 'Block' }}</button>\n                                                        <button class=\"btn btn-sm btn-danger\" (click)=\"deleteOrBlock(user._id, 'delete')\">\n                                                            <i class=\"fa fa-trash\"></i>&nbsp;Delete</button>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div *ngIf=\"userList.docs.length==0\" class=\"no_record\">\n                                    <h4>No records found!!</h4>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n            <ul class=\"custom-pagination\">\n                <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n            </ul>\n\n        </div>\n    </div>\n</div>\n\n<div id=\"delete\" class=\"modal fade\" data-easein=\"bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"costumModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content common-detail-modal\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                    ×\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"modal-inner-text\">\n                    Are you sure you want to {{ data.requestType }} this User?\n                </p>\n\n                <div class=\"button-box mt20\">\n                    <button class=\"btn btn-red mr10\" (click)=\"yes()\">Yes</button>\n                    <button class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/user-management/user-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.component.ts ***!
  \********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(service) {
        this.service = service;
        this.listLength = [];
        this.currentPage = 1;
        this.userList = { docs: [] };
        this.searchWord = "";
        this.limit = 10;
        this.data = { userId: '', requestType: '' };
        this.gender = "";
        this.status = "";
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        this.getAllUser();
    };
    UserManagementComponent.prototype.getAllUser = function () {
        var _this = this;
        var data = {
            userRole: "USER",
            gender: this.gender,
            status: this.status,
            page: this.currentPage,
            limit: this.limit,
            search: this.searchWord
        };
        console.log("getAllUsers===>>>>", data);
        this.service.post('getAllUsers', data, 1).subscribe(function (res) {
            console.log("getAllUsers===>>>>" + JSON.stringify(res));
            if (res['responseCode'] == 200) {
                _this.userList = res['datas'];
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.spinnerHide();
            _this.service.error('somthing went wrong.');
        });
    };
    UserManagementComponent.prototype.search = function () {
        this.getAllUser();
    };
    UserManagementComponent.prototype.selectGender = function (gender) {
        this.gender = gender;
        this.getAllUser();
    };
    UserManagementComponent.prototype.selectStatus = function (status) {
        this.status = status;
        this.getAllUser();
    };
    UserManagementComponent.prototype.pageChanged = function (page) {
        this.currentPage = page;
        this.getAllUser();
    };
    UserManagementComponent.prototype.viewOrEdit = function (userId, type) {
        if (type == 'view')
            this.service.routerLink('/view-user/' + userId);
        if (type == 'edit')
            this.service.routerLink('/edit-user/' + userId);
    };
    UserManagementComponent.prototype.deleteOrBlock = function (userId, requestType) {
        this.data['userId'] = userId;
        this.data['requestType'] = requestType;
        $('#delete').modal('show');
    };
    UserManagementComponent.prototype.yes = function () {
        var _this = this;
        this.service.post('deleteOrBlockUser', this.data, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                $('#delete').modal('hide');
                _this.getAllUser();
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    UserManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__(/*! ./user-management.component.html */ "./src/app/pages/user-management/user-management.component.html"),
            styles: [__webpack_require__(/*! ./user-management.component.css */ "./src/app/pages/user-management/user-management.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/venue-management/venue-management.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/venue-management/venue-management.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/venue-management/venue-management.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/venue-management/venue-management.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section\">\n      <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n      <div class=\"right-inner\">\n        <h1 class=\"heading\">VENUE MANAGEMENT</h1>\n        <div class=\"filter-block\">\n              <fieldset class=\"global-fieldset\">\n                  <legend>Venue Board</legend>\n                  <div class=\"filter-content\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                           <div class=\"form-group\">\n                              <div class=\"search-icon\">\n                                 <input type=\"text\" class=\"form-control max-wt-300 search-input\" [(ngModel)]=\"searchWord\" (keyup)=\"search()\" placeholder=\"search\">\n                                 <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                              </div>\n                           </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"btn-right\">\n                                <button class=\"btn btn-red btn-common\" [routerLink]=\"['/add-venue']\">Add Venue</button>\n                            </div>\n                        </div>\n                     </div>\n                    <div class=\"box box-blue\">\n                <div class=\"box-body\">\n                    <div class=\"custom-table table-responsive\">\n                  <table class=\"table table-striped table-border\">\n                      <thead>\n                          <tr>\n                            <th>SNo.</th>\n                            <th>Venue Name</th>\n                            <th>Location</th>\n                            <th>Created Date</th>\n                            <th>Action</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let venue of venueList.docs | paginate: { itemsPerPage: venueList.limit, currentPage: venueList.page, totalItems: venueList.total };  let i = index\" [attr.data-index] =\"i\">\n                            <td *ngIf=\"venueList.page == 1\">{{i + 1}}</td>\n                            <td *ngIf=\"venueList.page > 1\">{{i + 1 + 10 * (venueList.page-1)}}</td>\n                            <td>{{venue.venueName || '----'}}</td>\n                            <td>{{venue.location.address || '----'}}</td>\n                            <td>{{venue.createdAt | date:'yyyy-MM-dd' || '----'}}</td>\n                            <td>\n                                <div class=\"action-btn\">\n                                    <button class=\"btn btn-sm btn-success\" (click)=\"viewAndEdit(venue._id, 'view')\"  ><i class=\"fa fa-eye\"></i>&nbsp;View</button>\n                                    <button class=\"btn btn-sm btn-success\" (click)=\"viewAndEdit(venue._id, 'edit')\" ><i class=\"fa fa-ban\"></i>&nbsp;Edit</button>\n                                    <button class=\"btn btn-sm btn-danger\" (click)=\"delete(venue._id, 'delete')\"><i class=\"fa fa-trash\"></i>&nbsp; Delete</button>\n                                </div>  \n                            </td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>  \n              <div *ngIf=\"venueList.docs.length==0\" class=\"no_record\"><h4>No records found!!</h4>\n              </div>   \n                </div>\n             </div>\n                  </div>\n              </fieldset>\n          </div>\n               <ul class=\"custom-pagination\">\n                    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n               </ul>\n              \n          </div>\n    </div>\n    </div>\n    \n    <div id=\"delete\" class=\"modal fade\" data-easein=\"bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"costumModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n          <div class=\"modal-content common-detail-modal\">\n              <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                      ×\n                  </button>\n              </div>\n              <div class=\"modal-body\">\n                  <p class=\"modal-inner-text\">\n                     Are you sure you want to {{data.requestType}} this veneu?\n                  </p>\n    \n                  <div class=\"button-box mt20\">\n                     <button class=\"btn btn-red mr10\" (click)=\"yes()\">Yes</button>\n                     <button class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n                  </div>\n              </div>\n              <div class=\"modal-footer\">\n                  \n              </div>\n          </div>\n      </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/pages/venue-management/venue-management.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/venue-management/venue-management.component.ts ***!
  \**********************************************************************/
/*! exports provided: VenueManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueManagementComponent", function() { return VenueManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VenueManagementComponent = /** @class */ (function () {
    function VenueManagementComponent(service) {
        this.service = service;
        this.venueList = { docs: [] };
        this.listLength = [];
        this.currentPage = 1;
        this.searchWord = "";
        this.limit = 3;
        this.data = { venueId: '', requestType: '' };
    }
    VenueManagementComponent.prototype.ngOnInit = function () {
        this.service.spinnerShow();
        this.getAllVenues();
    };
    VenueManagementComponent.prototype.getAllVenues = function () {
        var _this = this;
        var data = {
            adminId: localStorage.getItem('adminId'),
            userRole: localStorage.getItem('userRole'),
            page: this.currentPage,
            limit: this.limit,
            search: this.searchWord
        };
        console.log("data===>>>>", data);
        this.service.post('getAllVenues', data, 1).subscribe(function (res) {
            _this.service.spinnerHide();
            if (res['responseCode'] == 200) {
                console.log("getAllVenuess===>>>>" + JSON.stringify(res));
                _this.venueList = res['datas'];
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    VenueManagementComponent.prototype.search = function () {
        this.getAllVenues();
    };
    VenueManagementComponent.prototype.pageChanged = function (page) {
        this.currentPage = page;
        this.getAllVenues();
    };
    VenueManagementComponent.prototype.delete = function (venueId, requestType) {
        this.data['venueId'] = venueId;
        this.data['requestType'] = requestType;
        $('#delete').modal('show');
    };
    VenueManagementComponent.prototype.viewAndEdit = function (venueId, type) {
        if (type == 'view')
            this.service.routerLink('/view-venue/' + venueId);
        else
            this.service.routerLink('/edit-venue/' + venueId);
    };
    VenueManagementComponent.prototype.yes = function () {
        var _this = this;
        this.service.post('deleteVenue', this.data, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                $('#delete').modal('hide');
                _this.getAllVenues();
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    VenueManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-venue-management',
            template: __webpack_require__(/*! ./venue-management.component.html */ "./src/app/pages/venue-management/venue-management.component.html"),
            styles: [__webpack_require__(/*! ./venue-management.component.css */ "./src/app/pages/venue-management/venue-management.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]])
    ], VenueManagementComponent);
    return VenueManagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/view-banner/view-banner.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/view-banner/view-banner.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/view-banner/view-banner.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/view-banner/view-banner.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n  <div class=\"right-section\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n              <div class=\"filter-block\">\n                <fieldset class=\"global-fieldset\">\n                   <legend>Banner Detail</legend>\n                    <div class=\"filter-content\">\n                         <div class=\"common-detail-box\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6  label-right\">Venue Logo</label>\n                                  <div class=\"col-sm-6\">\n                                      <div clss=\"add_images_box\">\n                                          <ul class=\"img_list\">\n                                              <li class=\"addImage\" *ngIf=\"!viewBannerDetail.bannerImage\">\n                                                  <img src=\"assets/img/placeholder.png\">\n                                              </li>\n                                              <li class=\"addImage\" *ngIf=\"viewBannerDetail.bannerImage\">\n                                                  <img src=\"{{viewBannerDetail.bannerImage}}\">\n                                              </li>\n                                          </ul>\n                                      </div>\n                                  </div>\n                            </div>\n                            <div class=\"form-group row\">\n                               <label class=\"col-sm-6  label-right\">Banner Name : </label>\n                               <div class=\"col-sm-6\">\n                                  {{viewBannerDetail?.bannerName || '----'}}\n                               </div>\n                            </div>\n                            <div class=\"form-group row\">\n                               <label class=\"col-sm-6 label-right\">Link :</label>\n                               <div class=\"col-sm-6\">\n                                  {{viewBannerDetail?.link || '----'}}\n                               </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 label-right\">Status :</label>\n                                <div class=\"col-sm-6\">\n                                   {{viewBannerDetail.status == \"ACTIVE\" ? \"Active\" : \"Inactive\" || '----'}}\n                                </div>\n                             </div>\n                            <div class=\"form-group row\">\n                              <label class=\"col-sm-6 label-right\">Created date :</label>\n                              <div class=\"col-sm-6\">\n                                 {{viewBannerDetail?.createdAt  | date:'yyyy-MM-dd' || '----'}}\n                              </div>\n                           </div>\n                            <div class=\"table-button text-center mt30\">\n                               <button [routerLink]=\"['/promotion-banner-management']\" class=\"btn btn-danger\">Back</button>\n                            </div>\n                         </div>\n                    </div>\n                </fieldset>\n              </div>        \n          </div>  \n        </div>\n  </div>\n  \n  \n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/pages/view-banner/view-banner.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/view-banner/view-banner.component.ts ***!
  \************************************************************/
/*! exports provided: ViewBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBannerComponent", function() { return ViewBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
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



var ViewBannerComponent = /** @class */ (function () {
    function ViewBannerComponent(service, activeRouter) {
        this.service = service;
        this.activeRouter = activeRouter;
        this.viewBannerDetail = {};
    }
    ViewBannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.bannerId = params.get('bannerId');
        });
        this.bannerDetail();
    };
    ViewBannerComponent.prototype.bannerDetail = function () {
        var _this = this;
        this.service.spinnerShow();
        this.service.get('getBannerDetail/' + this.bannerId, 1).subscribe(function (res) {
            console.log("res=====>>" + JSON.stringify(res));
            if (res['responseCode'] == 200) {
                _this.service.spinnerHide();
                _this.viewBannerDetail = res['data'];
                console.log("res=====>>" + JSON.stringify(res['data']));
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ViewBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-banner',
            template: __webpack_require__(/*! ./view-banner.component.html */ "./src/app/pages/view-banner/view-banner.component.html"),
            styles: [__webpack_require__(/*! ./view-banner.component.css */ "./src/app/pages/view-banner/view-banner.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewBannerComponent);
    return ViewBannerComponent;
}());



/***/ }),

/***/ "./src/app/pages/view-menu-items/view-menu-items.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/view-menu-items/view-menu-items.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/view-menu-items/view-menu-items.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/view-menu-items/view-menu-items.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section\">\n        <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n        <div class=\"right-inner\">\n            <div class=\"filter-block\">\n                <fieldset class=\"global-fieldset\">\n                    <legend>Category Detail</legend>\n                    <div class=\"filter-content\">\n                        <div class=\"common-detail-box\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 label-right\">Category Name</label>\n                                <div class=\"col-sm-6\">\n                                    {{categoryDetail?.categoryName || '----'}}\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6  label-right\">Category Images</label>\n                                <div class=\"col-sm-6\">\n                                    <div clss=\"add_images_box\">\n                                        <ul class=\"img_list\">\n                                            <li class=\"addImage\">\n                                                <img src=\"{{categoryDetail?.categoryImage || 'assets/img/placeholder.png'}}\">\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n            <div class=\"filter-block\">\n                <fieldset class=\"global-fieldset\">\n                    <legend>Item Board</legend>\n                    <div class=\"filter-content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <div class=\"search-icon\">\n                                        <input type=\"text\" class=\"form-control max-wt-300 search-input\" [(ngModel)]=\"searchWord\" (keyup)=\"search()\" placeholder=\"search\">\n                                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"btn-right\">\n                                    <button class=\"btn btn-red btn-common\" (click)=\"addMoreItem()\" >Add Item</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"box box-blue\">\n                            <div class=\"box-body\">\n                                <div class=\"custom-table table-responsive\">\n                                    <table class=\"table table-striped table-border\">\n                                        <thead>\n                                            <tr>\n                                                <th>SNo.</th>\n                                                <th>Item Name</th>\n                                                <th>Item Price</th>\n                                                <th>Item Code</th>\n                                                <th>Item Discount In %</th>\n                                                <th>Created Date</th>\n                                                <th>Action</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let item of itemList.itemList | paginate: { itemsPerPage: itemList.limit, currentPage: itemList.page, totalItems: itemList.total };  let i = index\"\n                                                [attr.data-index]=\"i\">\n                                                <td *ngIf=\"itemList.page == 1\">{{i + 1}}</td>\n                                                <td *ngIf=\"itemList.page > 1\">{{i + 1 + 10 * (itemList.page-1)}}</td>\n                                                <td>{{item.itemName || '----'}}</td>\n                                                <td>{{item.itemPrice || '----'}}</td>\n                                                <td>{{item.itemCode || '----'}}</td>\n                                                <td>{{item.discount || '----'}}</td>\n                                                <td>{{item.createdAt | date:'yyyy-MM-dd' || '----'}}</td>\n                                                <td>\n                                                    <div class=\"action-btn\">\n                                                        <button class=\"btn btn-sm btn-success\" (click)=\"editOrDelete(item._id, 'edit')\">\n                                                            <i class=\"fa fa-ban\"></i>&nbsp;Edit</button>\n                                                        <button class=\"btn btn-sm btn-danger\" (click)=\"editOrDelete(item._id, 'delete')\">\n                                                            <i class=\"fa fa-trash\"></i>&nbsp; Delete</button>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div *ngIf=\"itemList.itemList.length==0\" class=\"no_record\">\n                                    <h4>No records found!!</h4>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n            <ul class=\"custom-pagination\">\n                <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n            </ul>\n        </div>\n    </div>\n</div>\n\n<div id=\"delete\" class=\"modal fade\" data-easein=\"bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"costumModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content common-detail-modal\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                        ×\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <p class=\"modal-inner-text\">\n                       Are you sure you want to {{data.status}} this Item?\n                    </p>\n      \n                    <div class=\"button-box mt20\">\n                       <button class=\"btn btn-red mr10\" (click)=\"yes()\">Yes</button>\n                       <button class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    \n                </div>\n            </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/pages/view-menu-items/view-menu-items.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/view-menu-items/view-menu-items.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewMenuItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMenuItemsComponent", function() { return ViewMenuItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewMenuItemsComponent = /** @class */ (function () {
    function ViewMenuItemsComponent(activateRouter, service) {
        this.activateRouter = activateRouter;
        this.service = service;
        this.data = { itemId: '', status: 'delete', categoryId: '', venueId: '' };
        this.categoryDetail = {};
        this.itemList = { itemList: [] };
        this.viewVenueDetail = {};
        this.searchWord = "";
        this.currentPage = 1;
    }
    ViewMenuItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRouter.paramMap.subscribe(function (params) {
            _this.venueId = params.get('venueId');
            _this.categoryId = params.get('categoryId');
        });
        console.log("venueId==>>>", this.venueId);
        console.log("categoryId==>>>", this.categoryId);
        this.getAllItemOfCategory();
        this.getCategoryDetailOfVenue();
    };
    ViewMenuItemsComponent.prototype.getCategoryDetailOfVenue = function () {
        var _this = this;
        this.service.get('getCategoryDetailOfVenue/' + this.venueId + '/' + this.categoryId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.categoryDetail = res['data'];
                console.log("resresfjsdfyuak===>>>" + JSON.stringify(_this.categoryDetail));
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ViewMenuItemsComponent.prototype.getAllItemOfCategory = function () {
        var _this = this;
        var data = {
            venueId: this.venueId,
            categoryId: this.categoryId,
            search: this.searchWord,
            page: this.currentPage
        };
        this.service.post('getAllItemOfCategory', data, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.itemList = res['datas'];
                console.log("resres===>>>" + JSON.stringify(res['datas']));
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ViewMenuItemsComponent.prototype.editOrDelete = function (itemId, requestType) {
        if (requestType == 'edit') {
            this.service.routerLink('/edit-category-item/' + this.venueId + '/' + this.categoryId + '/' + itemId);
        }
        if (requestType == 'delete') {
            $('#delete').modal('show');
            this.data['itemId'] = itemId;
            this.data['categoryId'] = this.categoryId;
            this.data['venueId'] = this.venueId;
            console.log("itemId===>>>>", this.data);
        }
    };
    ViewMenuItemsComponent.prototype.yes = function () {
        var _this = this;
        this.service.spinnerShow();
        this.service.post('deleteItemOfCategory', this.data, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.spinnerHide();
                _this.service.success(res['responseMessage']);
                $('#delete').modal('hide');
                _this.getAllItemOfCategory();
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ViewMenuItemsComponent.prototype.pageChanged = function (page) {
        this.currentPage = page;
        this.getAllItemOfCategory();
    };
    ViewMenuItemsComponent.prototype.search = function () {
        this.getAllItemOfCategory();
    };
    ViewMenuItemsComponent.prototype.addMoreItem = function () {
        this.service.routerLink('/add-more-category-items/' + this.venueId + '/' + this.categoryId);
    };
    ViewMenuItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-menu-items',
            template: __webpack_require__(/*! ./view-menu-items.component.html */ "./src/app/pages/view-menu-items/view-menu-items.component.html"),
            styles: [__webpack_require__(/*! ./view-menu-items.component.css */ "./src/app/pages/view-menu-items/view-menu-items.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]])
    ], ViewMenuItemsComponent);
    return ViewMenuItemsComponent;
}());



/***/ }),

/***/ "./src/app/pages/view-merchant/view-merchant.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/view-merchant/view-merchant.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/view-merchant/view-merchant.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/view-merchant/view-merchant.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"btn-right\">\n            <button class=\"btn btn-red btn-common\" (click)=\"changePassword('/merchant-change-Password/')\">Change Password</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"filter-block\">\n        <fieldset class=\"global-fieldset\">\n          <legend>Merchant Detail</legend>\n          <div class=\"filter-content\">\n            <div class=\"common-detail-box\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-6  label-right\">Merchant Name : </label>\n                <div class=\"col-sm-6\">\n                  {{viewUserDetail?.firstName || '----'}}\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-sm-6 label-right\">Email :</label>\n                <div class=\"col-sm-6\">\n                  {{viewUserDetail?.email || '----'}}\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-sm-6 label-right\">Created date :</label>\n                <div class=\"col-sm-6\">\n                  {{viewUserDetail.createdAt | date:'yyyy-MM-dd' || '----'}}\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-sm-6 label-right\">Statue :</label>\n                <div class=\"col-sm-6\">\n                  {{viewUserDetail?.status == 'ACTIVE' ? 'Active': 'Block' || '----'}}\n                </div>\n              </div>\n              <div class=\"table-button text-center mt30\">\n                <button [routerLink]=\"['/merchant-management']\" class=\"btn btn-danger\">Back</button>\n              </div>\n            </div>\n          </div>\n        </fieldset>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/view-merchant/view-merchant.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/view-merchant/view-merchant.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewMerchantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMerchantComponent", function() { return ViewMerchantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
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



var ViewMerchantComponent = /** @class */ (function () {
    function ViewMerchantComponent(service, activeRouter) {
        this.service = service;
        this.activeRouter = activeRouter;
        this.viewUserDetail = {};
    }
    ViewMerchantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.userId = params.get('userId');
        });
        this.userDetail();
    };
    ViewMerchantComponent.prototype.userDetail = function () {
        var _this = this;
        this.service.get('getUserProfile/' + this.userId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.viewUserDetail = res['data'];
                console.log("res=====>>", res['data']);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ViewMerchantComponent.prototype.changePassword = function (url) {
        this.service.routerLink(url + this.userId);
    };
    ViewMerchantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-merchant',
            template: __webpack_require__(/*! ./view-merchant.component.html */ "./src/app/pages/view-merchant/view-merchant.component.html"),
            styles: [__webpack_require__(/*! ./view-merchant.component.css */ "./src/app/pages/view-merchant/view-merchant.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewMerchantComponent);
    return ViewMerchantComponent;
}());



/***/ }),

/***/ "./src/app/pages/view-order-item/view-order-item.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/view-order-item/view-order-item.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/view-order-item/view-order-item.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/view-order-item/view-order-item.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n      <h1 class=\"heading\">ORDER HISTORY</h1>\n      <div class=\"filter-block\">\n        <fieldset class=\"global-fieldset\">\n          <legend>Order Detail</legend>\n          <div class=\"filter-content\">\n              <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                          <div class=\"search-icon\">\n                              <input type=\"text\" class=\"form-control max-wt-300 search-input\" [(ngModel)]=\"searchWord\" (keyup)=\"search()\" placeholder=\"search\">\n                              <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            <div class=\"box box-blue\">\n              <div class=\"box-body\">\n                <div class=\"custom-table table-responsive\">\n                  <table class=\"table table-striped table-border\">\n                    <thead>\n                      <tr>\n                        <th>SNo.</th>\n                        <th>Item Name</th>\n                        <th>Item Code</th>\n                        <th>Total Price</th>\n                        <th>Total Qty</th>\n                        <th>Action</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let order of orderList.docs | paginate: { itemsPerPage: orderList.limit, currentPage: orderList.page, totalItems: orderList.total };  let i = index\"\n                        [attr.data-index]=\"i\">\n                        <td *ngIf=\"orderList.page == 1\">{{i + 1}}</td>\n                        <td *ngIf=\"orderList.page > 1\">{{i + 1 + 10 * (orderList.page-1)}}</td>\n                        <td>{{order.itemName || '----'}}</td>\n                        <td>{{order.itemCode || '----'}}</td>\n                        <td>>{{order.itemPrice || '----'}}</td>\n                        <td>{{order.totalQuantity || '----'}}</td>\n                        <td>\n                          <div class=\"action-btn\">\n                            <button class=\"btn btn-sm btn-success\" (click)=\"view(order._id)\">\n                              <i class=\"fa fa-ban\"></i>&nbsp;View</button>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div *ngIf=\"orderList.docs.length==0\" class=\"no_record\">\n                  <h4>No records found!!</h4>\n                </div>\n              </div>\n            </div>\n          </div>\n        </fieldset>\n      </div>\n      <ul class=\"custom-pagination\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </ul>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/view-order-item/view-order-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/view-order-item/view-order-item.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewOrderItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOrderItemComponent", function() { return ViewOrderItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
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



var ViewOrderItemComponent = /** @class */ (function () {
    function ViewOrderItemComponent(service, activateRoute) {
        this.service = service;
        this.activateRoute = activateRoute;
        this.orderList = { docs: [] };
        this.currentPage = 1;
        this.searchWord = "";
    }
    ViewOrderItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.paramMap.subscribe(function (params) {
            _this.tableId = params.get('tableId');
        });
        this.getOrderList();
    };
    ViewOrderItemComponent.prototype.getOrderList = function () {
        var _this = this;
        var data = {
            page: this.currentPage,
            tableId: this.tableId,
            search: this.searchWord
        };
        this.service.post('getOrderItems', data, 1).subscribe(function (res) {
            console.log("getAllOrder===>>>>" + JSON.stringify(res));
            if (res['responseCode'] == 200) {
                _this.orderList = res['datas'];
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ViewOrderItemComponent.prototype.search = function () {
        this.getOrderList();
    };
    ViewOrderItemComponent.prototype.pageChanged = function (page) {
        this.currentPage = page;
    };
    ViewOrderItemComponent.prototype.view = function (itemId) {
        this.service.routerLink('/view-order-user/' + this.tableId + '/' + itemId);
    };
    ViewOrderItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-order-item',
            template: __webpack_require__(/*! ./view-order-item.component.html */ "./src/app/pages/view-order-item/view-order-item.component.html"),
            styles: [__webpack_require__(/*! ./view-order-item.component.css */ "./src/app/pages/view-order-item/view-order-item.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewOrderItemComponent);
    return ViewOrderItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/view-order-user/view-order-user.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/view-order-user/view-order-user.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/view-order-user/view-order-user.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/view-order-user/view-order-user.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n  <div class=\"right-section\">\n    <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n    <div class=\"right-inner\">\n      <h1 class=\"heading\">ORDER HISTORY</h1>\n      <div class=\"filter-block\">\n        <fieldset class=\"global-fieldset\">\n          <legend>User Detail</legend>\n          <div class=\"filter-content\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <div class=\"search-icon\">\n                    <input type=\"text\" class=\"form-control max-wt-300 search-input\" [(ngModel)]=\"searchWord\" (keyup)=\"search()\" placeholder=\"search\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"box box-blue\">\n              <div class=\"box-body\">\n                <div class=\"custom-table table-responsive\">\n                  <table class=\"table table-striped table-border\">\n                    <thead>\n                      <tr>\n                        <th>SNo.</th>\n                        <th>User Name</th>\n                        <th>Order Time</th>\n                        <th>Order Qty</th>\n                        <th>Action</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let order of userList.docs | paginate: { itemsPerPage: userList.limit, currentPage: userList.page, totalItems: userList.total };  let i = index\"\n                        [attr.data-index]=\"i\">\n                        <td *ngIf=\"userList.page == 1\">{{i + 1}}</td>\n                        <td *ngIf=\"userList.page > 1\">{{i + 1 + 10 * (userList.page-1)}}</td>\n                        <td>{{order.name || '----'}}</td>\n                        <td>{{order.orderTime | date:'yyyy-MM-dd' || '----'}}</td>\n                        <td>>{{order.quantity || '  0'}}</td>\n                        <td>\n                          <div class=\"action-btn\">\n                            <button class=\"btn btn-sm btn-success\" (click)=\"view_order(order._id)\">\n                              <i class=\"fa fa-eye\"></i>&nbsp;View</button>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div *ngIf=\"userList.docs.length==0\" class=\"no_record\">\n                  <h4>No records found!!</h4>\n                </div>\n              </div>\n            </div>\n          </div>\n        </fieldset>\n      </div>\n      <ul class=\"custom-pagination\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </ul>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/view-order-user/view-order-user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/view-order-user/view-order-user.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewOrderUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOrderUserComponent", function() { return ViewOrderUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
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



var ViewOrderUserComponent = /** @class */ (function () {
    function ViewOrderUserComponent(service, activateRoute) {
        this.service = service;
        this.activateRoute = activateRoute;
        this.userList = { docs: [] };
        this.currentPage = 1;
        this.searchWord = "";
    }
    ViewOrderUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.paramMap.subscribe(function (params) {
            _this.tableId = params.get('tableId');
            _this.itemId = params.get('itemId');
        });
        this.getUserList();
    };
    ViewOrderUserComponent.prototype.getUserList = function () {
        var _this = this;
        var data = {
            page: this.currentPage,
            tableId: this.tableId,
            itemId: this.itemId,
            search: this.searchWord
        };
        this.service.post('getAllUserOfOrderItem', data, 1).subscribe(function (res) {
            console.log("getAllOrder===>>>>" + JSON.stringify(res));
            if (res['responseCode'] == 200) {
                _this.userList = res['datas'];
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ViewOrderUserComponent.prototype.search = function () {
        this.getUserList();
    };
    ViewOrderUserComponent.prototype.pageChanged = function (page) {
        this.currentPage = page;
    };
    ViewOrderUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-order-user',
            template: __webpack_require__(/*! ./view-order-user.component.html */ "./src/app/pages/view-order-user/view-order-user.component.html"),
            styles: [__webpack_require__(/*! ./view-order-user.component.css */ "./src/app/pages/view-order-user/view-order-user.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewOrderUserComponent);
    return ViewOrderUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/view-user/view-user.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/view-user/view-user.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/view-user/view-user.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/view-user/view-user.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n  <app-side-menu></app-side-menu>\n<div class=\"right-section\">\n  <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n  <div class=\"right-inner\">\n      <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <div class=\"btn-right\">\n                  <button class=\"btn btn-red btn-common\" (click)=\"changePassword('/user-change-Password/')\">Change Password</button>\n              </div>\n          </div>\n       </div>\n            <div class=\"filter-block\">\n              <fieldset class=\"global-fieldset\">\n                 <legend>User Detail</legend>\n                  <div class=\"filter-content\">\n                       <div class=\"common-detail-box\">\n                          <div class=\"form-group row\">\n                             <label class=\"col-sm-6  label-right\">Client Name : </label>\n                             <div class=\"col-sm-6\">\n                                {{viewUserDetail?.firstName +' '+ viewUserDetail?.lastName || '----'}}\n                             </div>\n                          </div>\n                          <div class=\"form-group row\">\n                             <label class=\"col-sm-6 label-right\">Mobile Number  :</label>\n                             <div class=\"col-sm-6\">\n                                {{viewUserDetail?.phone || '----'}}\n                             </div>\n                          </div>\n                          <div class=\"form-group row\">\n                             <label class=\"col-sm-6 label-right\">Email :</label>\n                             <div class=\"col-sm-6\">\n                                {{viewUserDetail?.email || '----'}}\n                             </div>\n                          </div>\n                          <div class=\"form-group row\">\n                             <label class=\"col-sm-6 label-right\">Date of birth</label>\n                             <div class=\"col-sm-6\">\n                                {{viewUserDetail?.dateOfBirth || '----'}}\n\n                             </div>\n                          </div>\n                          <div class=\"form-group row\">\n                             <label class=\"col-sm-6 label-right\">Gender :</label>\n                             <div class=\"col-sm-6\">\n                                {{viewUserDetail?.gender == \"MALE\" ? \"Male\":\"Female\" || '----'}}\n                             </div>\n                          </div>\n                          <div class=\"form-group row\">\n                             <label class=\"col-sm-6 label-right\">Created date :</label>\n                             <div class=\"col-sm-6\">\n                                {{viewUserDetail.createdAt  | date:'yyyy-MM-dd' || '----'}}\n                             </div>\n                          </div>\n                          <div class=\"form-group row\">\n                             <label class=\"col-sm-6 label-right\">Statue</label>\n                             <div class=\"col-sm-6\">\n                                {{viewUserDetail?.status == 'ACTIVE' ? 'Active': 'Block' || '----'}}\n                             </div>\n                          </div>\n                          <div class=\"table-button text-center mt30\">\n                             <!-- <button (click)=\"editUser()\" class=\"btn btn-red\">Edit </button> -->\n                             <button [routerLink]=\"['/user-management']\" class=\"btn btn-danger\">Back</button>\n                          </div>\n                       </div>\n\n                  </div>\n              </fieldset>\n            </div>        \n        </div>  \n      </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/view-user/view-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/view-user/view-user.component.ts ***!
  \********************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
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



var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(service, activeRouter) {
        this.service = service;
        this.activeRouter = activeRouter;
        this.viewUserDetail = {};
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.userId = params.get('userId');
        });
        this.userDetail();
    };
    ViewUserComponent.prototype.userDetail = function () {
        var _this = this;
        this.service.get('getUserProfile/' + this.userId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.viewUserDetail = res['data'];
                console.log("res=====>>", res['data']);
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ViewUserComponent.prototype.changePassword = function (url) {
        this.service.routerLink(url + this.userId);
    };
    ViewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-user',
            template: __webpack_require__(/*! ./view-user.component.html */ "./src/app/pages/view-user/view-user.component.html"),
            styles: [__webpack_require__(/*! ./view-user.component.css */ "./src/app/pages/view-user/view-user.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/view-venue-speciality/view-venue-speciality.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/view-venue-speciality/view-venue-speciality.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/view-venue-speciality/view-venue-speciality.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/view-venue-speciality/view-venue-speciality.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section\">\n        <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n        <div class=\"right-inner\">\n            <div class=\"filter-block\">\n                <fieldset class=\"global-fieldset\">\n                    <legend>Venue Detail</legend>\n                    <div class=\"filter-content\">\n                        <div class=\"common-detail-box\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 label-right\">Venue Name :</label>\n                                <div class=\"col-sm-6\">\n                                    {{venueDetail?.venueName || '----'}}\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-sm-6  label-right\">Venue Logo</label>\n                            <div class=\"col-sm-6\">\n                                <div clss=\"add_images_box\">\n                                    <ul class=\"img_list\">\n                                        <li class=\"addImage\" *ngIf=\"!venueDetail.logo\">\n                                            <img src=\"assets/img/placeholder.png\">\n                                        </li>\n                                        <li class=\"addImage\" *ngIf=\"venueDetail.logo\">\n                                            <img src=\"{{venueDetail.logo}}\">\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n            <div class=\"filter-block\">\n                <fieldset class=\"global-fieldset\">\n                    <legend>Speciality Board</legend>\n                    <div class=\"filter-content\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <div class=\"search-icon\">\n                                        <input type=\"text\" class=\"form-control max-wt-300 search-input\" [(ngModel)]=\"searchWord\" (keyup)=\"search()\" placeholder=\"search\">\n                                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"btn-right\">\n                                    <button class=\"btn btn-red btn-common\" (click)=\"addSpeciality()\">Add Speciality</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"box box-blue\">\n                            <div class=\"box-body\">\n                                <div class=\"custom-table table-responsive\">\n                                    <table class=\"table table-striped table-border\">\n                                        <thead>\n                                            <tr>\n                                                <th>SNo.</th>\n                                                <th>Category Name</th>\n                                                <th>Created Date</th>\n                                                <th>Action</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let speciality of specialityList.specialityList | paginate: { itemsPerPage: specialityList.limit, currentPage: specialityList.page, totalItems: specialityList.total };  let i = index\"\n                                                [attr.data-index]=\"i\">\n                                                <td *ngIf=\"specialityList.page == 1\">{{i + 1}}</td>\n                                                <td *ngIf=\"specialityList.page > 1\">{{i + 1 + 10 * (specialityList.page-1)}}</td>\n                                                <td>{{speciality.categoryName || '----'}}</td>\n                                                <td>{{speciality.createdAt | date:'yyyy-MM-dd' || '----'}}</td>\n                                                <td>\n                                                    <div class=\"action-btn\">\n                                                        <button class=\"btn btn-sm btn-success\" (click)=\"editOrDelete(speciality._id, 'edit')\">\n                                                            <i class=\"fa fa-ban\"></i>&nbsp;Edit</button>\n                                                        <button class=\"btn btn-sm btn-danger\" (click)=\"editOrDelete(speciality._id, 'delete')\">\n                                                            <i class=\"fa fa-trash\"></i>&nbsp; Delete</button>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div *ngIf=\"specialityList.specialityList.length==0\" class=\"no_record\">\n                                    <h4>No records found!!</h4>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n            <ul class=\"custom-pagination\">\n                <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n            </ul>\n        </div>\n    </div>\n</div>\n\n<div id=\"delete\" class=\"modal fade\" data-easein=\"bounceIn\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"costumModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content common-detail-modal\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                        ×\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <p class=\"modal-inner-text\">\n                       Are you sure you want to delete this category?\n                    </p>\n      \n                    <div class=\"button-box mt20\">\n                       <button class=\"btn btn-red mr10\" (click)=\"yes()\">Yes</button>\n                       <button class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    \n                </div>\n            </div>\n        </div>\n      </div>\n      "

/***/ }),

/***/ "./src/app/pages/view-venue-speciality/view-venue-speciality.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/view-venue-speciality/view-venue-speciality.component.ts ***!
  \********************************************************************************/
/*! exports provided: ViewVenueSpecialityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVenueSpecialityComponent", function() { return ViewVenueSpecialityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewVenueSpecialityComponent = /** @class */ (function () {
    function ViewVenueSpecialityComponent(activateRoute, service) {
        this.activateRoute = activateRoute;
        this.service = service;
        this.searchWord = "";
        this.specialityList = { specialityList: [] };
        this.venueDetail = { images: [] };
        this.data = {};
        this.currentPage = 1;
    }
    ViewVenueSpecialityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.paramMap.subscribe(function (params) {
            _this.venueId = params.get('venueId');
        });
        this.getVenueDetail();
        this.getAllSpecialityOfVenue();
    };
    ViewVenueSpecialityComponent.prototype.getVenueDetail = function () {
        var _this = this;
        this.service.spinnerShow();
        this.service.get('getVenueDetail/' + this.venueId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.spinnerHide();
                _this.venueDetail = res['data'];
                console.log("venueDetail res=====>>" + JSON.stringify(res['data']));
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ViewVenueSpecialityComponent.prototype.getAllSpecialityOfVenue = function () {
        var _this = this;
        var data = {
            venueId: this.venueId,
            search: this.searchWord,
            page: this.currentPage
        };
        this.service.post('getAllSpecialityOfVenue', data, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.specialityList = res['datas'];
                console.log("res===>>>" + JSON.stringify(res['datas']));
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ViewVenueSpecialityComponent.prototype.editOrDelete = function (categoryId, type) {
        if (type == 'edit') {
            this.service.routerLink('/edit-venue-speciality/' + this.venueId + '/' + categoryId);
        }
        if (type == 'delete') {
            this.data.categoryId = categoryId;
            this.data.status = type;
            $('#delete').modal('show');
        }
    };
    ViewVenueSpecialityComponent.prototype.yes = function () {
        var _this = this;
        $('#delete').modal('hide');
        this.service.post('deleteSpecialityOfVenue', this.data, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.success(res['responseMessage']);
                _this.getAllSpecialityOfVenue();
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ViewVenueSpecialityComponent.prototype.addSpeciality = function () {
        this.service.routerLink('/add-venue-speciality/' + this.venueId);
    };
    ViewVenueSpecialityComponent.prototype.pageChanged = function (page) {
        this.currentPage = page;
    };
    ViewVenueSpecialityComponent.prototype.search = function () {
        this.getAllSpecialityOfVenue();
    };
    ViewVenueSpecialityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-venue-speciality',
            template: __webpack_require__(/*! ./view-venue-speciality.component.html */ "./src/app/pages/view-venue-speciality/view-venue-speciality.component.html"),
            styles: [__webpack_require__(/*! ./view-venue-speciality.component.css */ "./src/app/pages/view-venue-speciality/view-venue-speciality.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]])
    ], ViewVenueSpecialityComponent);
    return ViewVenueSpecialityComponent;
}());



/***/ }),

/***/ "./src/app/pages/view-venue/view-venue.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/view-venue/view-venue.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/view-venue/view-venue.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/view-venue/view-venue.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbox\">\n    <app-side-menu></app-side-menu>\n    <div class=\"right-section\">\n        <div class=\"copyrights\">Copyright © 2018 App name All Rights Reserved.</div>\n        <div class=\"right-inner\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"btn-right\">\n                        <!-- <button class=\"btn btn-red btn-common\" (click)=\"AddOrViewMenu('/order-management/')\">Order History</button> -->\n                        <button class=\"btn btn-red btn-common\" *ngIf=\"!viewVenueDetail.isMenu\" (click)=\"AddOrViewMenu('/add-menu/')\">Add Menu</button>\n                        <button class=\"btn btn-red btn-common\" *ngIf=\"viewVenueDetail.isMenu\" (click)=\"AddOrViewMenu('/menu-management/')\">View Menu</button>\n                        <button class=\"btn btn-red btn-common\" *ngIf=\"!viewVenueDetail.isSpeciality\" (click)=\"AddOrViewMenu('/add-venue-speciality/')\">Add Speciality</button>\n                        <button class=\"btn btn-red btn-common\" *ngIf=\"viewVenueDetail.isSpeciality\" (click)=\"AddOrViewMenu('/view-venue-speciality/')\">View Speciality</button>\n                    </div>\n                </div>\n             </div>\n            <div class=\"filter-block\">\n                <fieldset class=\"global-fieldset\">\n                    <legend>Venue Detail</legend>\n                    <div class=\"filter-content\">\n                        <div class=\"common-detail-box\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6  label-right\">Venue Images</label>\n                                <div class=\"col-sm-6\">\n                                    <div clss=\"add_images_box\">\n                                        <ul class=\"img_list\">\n                                            <li class=\"addImage\" *ngIf=\"!viewVenueDetail.images.length\">\n                                                <img src=\"assets/img/placeholder.png\">\n                                            </li>\n                                            <li class=\"addImage\" *ngFor=\"let imageUrl of viewVenueDetail.images;let i = index\">\n                                                <img src=\"{{imageUrl}}\">\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6  label-right\">Venue Logo</label>\n                                <div class=\"col-sm-6\">\n                                    <div clss=\"add_images_box\">\n                                        <ul class=\"img_list\">\n                                            <li class=\"addImage\" *ngIf=\"!viewVenueDetail.logo\">\n                                                <img src=\"assets/img/placeholder.png\">\n                                            </li>\n                                            <li class=\"addImage\" *ngIf=\"viewVenueDetail.logo\">\n                                                <img src=\"{{viewVenueDetail.logo}}\">\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6  label-right\">Establishment Name : </label>\n                                <div class=\"col-sm-6\">\n                                    {{viewVenueDetail?.venueName || '----'}}\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 label-right\">Type :</label>\n                                <div class=\"col-sm-6\">\n                                    {{viewVenueDetail?.venueType || '----'}}\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 label-right\">Address :</label>\n                                <div class=\"col-sm-6\">\n                                    {{address || '----'}}\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 label-right\">City</label>\n                                <div class=\"col-sm-6\">\n                                    {{city || '----'}}\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                    <label class=\"col-sm-6 label-right\">Total Tables</label>\n                                    <div class=\"col-sm-6\">\n                                        {{viewVenueDetail?.totalTables || '----'}}\n                                    </div>\n                                </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 label-right\">Status :</label>\n                                <div class=\"col-sm-6\">\n                                    {{viewVenueDetail?.status == 'ACTIVE' ? 'Active':'Inactive' || '----'}}\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 label-right\">Created date :</label>\n                                <div class=\"col-sm-6\">\n                                    {{viewVenueDetail.createdAt | date:'yyyy-MM-dd' || '----'}}\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-6 label-right\">Description :</label>\n                                <div class=\"col-sm-6\">\n                                    {{viewVenueDetail.description || '----'}}\n                                </div>\n                            </div>\n                            <div class=\"table-button text-center mt30\">\n                                <button [routerLink]=\"['/venue-management']\" class=\"btn btn-danger\">Back</button>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/view-venue/view-venue.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/view-venue/view-venue.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewVenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVenueComponent", function() { return ViewVenueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ "./src/app/service/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewVenueComponent = /** @class */ (function () {
    function ViewVenueComponent(service, activeRouter) {
        this.service = service;
        this.activeRouter = activeRouter;
        this.viewVenueDetail = { images: [] };
    }
    ViewVenueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (params) {
            _this.venueId = params.get('venueId');
        });
        this.getVenueDetail();
    };
    ViewVenueComponent.prototype.getVenueDetail = function () {
        var _this = this;
        this.service.spinnerShow();
        this.service.get('getVenueDetail/' + this.venueId, 1).subscribe(function (res) {
            if (res['responseCode'] == 200) {
                _this.service.spinnerHide();
                _this.viewVenueDetail = res['data'];
                _this.address = res['data']['location'].address;
                _this.city = res['data']['location'].city;
                console.log("venueDetail res=====>>" + JSON.stringify(res['data']));
            }
            else if (res['responseCode'] == 402) {
                _this.service.error(res['responseMessage']);
                _this.service.clearLocalStorage();
            }
            else {
                _this.service.error(res['responseMessage']);
            }
        }, function (err) {
            _this.service.error('somthing went wrong.');
        });
    };
    ViewVenueComponent.prototype.AddOrViewMenu = function (routerLink) {
        this.service.routerLink(routerLink + this.venueId);
    };
    ViewVenueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-venue',
            template: __webpack_require__(/*! ./view-venue.component.html */ "./src/app/pages/view-venue/view-venue.component.html"),
            styles: [__webpack_require__(/*! ./view-venue.component.css */ "./src/app/pages/view-venue/view-venue.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ViewVenueComponent);
    return ViewVenueComponent;
}());



/***/ }),

/***/ "./src/app/service/service.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/service.service.ts ***!
  \********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServiceService = /** @class */ (function () {
    function ServiceService(http, toastr, spinner, router) {
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.baseUrl = 'http:///localhost:1416/admin/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            })
        };
    }
    ServiceService.prototype.post = function (url, data, isHeader) {
        if (isHeader == 1) {
            console.log("this.httpOptions", this.httpOptions);
            return this.http.post(this.baseUrl + url, data, this.httpOptions);
        }
        return this.http.post(this.baseUrl + url, data);
    };
    ServiceService.prototype.get = function (url, isHeader) {
        if (isHeader == 1) {
            return this.http.get(this.baseUrl + url, this.httpOptions);
        }
        return this.http.get(this.baseUrl + url);
    };
    ServiceService.prototype.spinnerShow = function () {
        this.spinner.show();
    };
    ServiceService.prototype.spinnerHide = function () {
        this.spinner.hide();
    };
    ServiceService.prototype.success = function (msg) {
        this.toastr.success(msg);
    };
    ServiceService.prototype.error = function (msg) {
        this.toastr.error(msg);
    };
    ServiceService.prototype.routerLink = function (pageName) {
        this.router.navigate([pageName]);
    };
    ServiceService.prototype.clearLocalStorage = function () {
        localStorage.setItem("token", "");
        localStorage.setItem("userRole", "");
        localStorage.setItem("adminId", "");
        this.routerLink('/login');
    };
    ServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ServiceService);
    return ServiceService;
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

module.exports = __webpack_require__(/*! /Users/shadab/Desktop/redtieAdmin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map