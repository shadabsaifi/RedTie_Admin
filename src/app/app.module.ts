import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2ImgMaxModule } from 'ng2-img-max'; // <-- import the module
import { NgxSpinnerModule } from 'ngx-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { VenueManagementComponent } from './pages/venue-management/venue-management.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { PromotionBannerManagementComponent } from './pages/promotion-banner-management/promotion-banner-management.component';
import { AddVenueComponent } from './pages/add-venue/add-venue.component';
import { AddPromotionBannerComponent } from './pages/add-promotion-banner/add-promotion-banner.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { ViewVenueComponent } from './pages/view-venue/view-venue.component';
import { EditVenueComponent } from './pages/edit-venue/edit-venue.component';
import { ViewBannerComponent } from './pages/view-banner/view-banner.component';
import { AddMenuComponent } from './pages/add-menu/add-menu.component';
import { AddVenueSpecialityComponent } from './pages/add-venue-speciality/add-venue-speciality.component';
import { ViewVenueSpecialityComponent } from './pages/view-venue-speciality/view-venue-speciality.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { ViewMenuItemsComponent } from './pages/view-menu-items/view-menu-items.component';
import { AddMoreCategoryItemsComponent } from './pages/add-more-category-items/add-more-category-items.component';
import { EditVenueCategoryComponent } from './pages/edit-venue-category/edit-venue-category.component';
import { EditCategoryItemComponent } from './pages/edit-category-item/edit-category-item.component';
import { EditVenueSpecialityComponent } from './pages/edit-venue-speciality/edit-venue-speciality.component';
import { StaticContentManagementComponent } from './pages/static-content-management/static-content-management.component';
import { MerchantManagementComponent } from './pages/merchant-management/merchant-management.component';
import { AddMerchantComponent } from './pages/add-merchant/add-merchant.component';
import { ViewMerchantComponent } from './pages/view-merchant/view-merchant.component';
import { EditMerchantComponent } from './pages/edit-merchant/edit-merchant.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { UserChangePasswordComponent } from './pages/user-change-password/user-change-password.component';
import { MerchantChangePasswordComponent } from './pages/merchant-change-password/merchant-change-password.component';
import { PaypalComponent } from './pages/paypal/paypal.component';
import { OrderManagementComponent } from './pages/order-management/order-management.component';
import { ViewOrderUserComponent } from './pages/view-order-user/view-order-user.component';
import { ViewOrderItemComponent } from './pages/view-order-item/view-order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    UserManagementComponent,
    VenueManagementComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    DashboardComponent,
    ResetPasswordComponent,
    PromotionBannerManagementComponent,
    AddVenueComponent,
    AddPromotionBannerComponent,
    ViewUserComponent,
    ViewVenueComponent,
    EditVenueComponent,
    ViewBannerComponent,
    AddMenuComponent,
    AddVenueSpecialityComponent,
    ViewVenueSpecialityComponent,
    MenuManagementComponent,
    ViewMenuItemsComponent,
    AddMoreCategoryItemsComponent,
    EditVenueCategoryComponent,
    EditCategoryItemComponent,
    EditVenueSpecialityComponent,
    StaticContentManagementComponent,
    MerchantManagementComponent,
    AddMerchantComponent,
    ViewMerchantComponent,
    EditMerchantComponent,
    EditUserComponent,
    UserChangePasswordComponent,
    MerchantChangePasswordComponent,
    PaypalComponent,
    OrderManagementComponent,
    ViewOrderUserComponent,
    ViewOrderItemComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    NgxPaginationModule,
    Ng2ImgMaxModule,
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
