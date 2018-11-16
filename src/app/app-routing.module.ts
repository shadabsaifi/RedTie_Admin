import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { VenueManagementComponent } from './pages/venue-management/venue-management.component';
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

const routes: Routes = [
  
  //********************** Start Page with origin Functionality ***************************//
  { path:'', redirectTo:'login', pathMatch:'full' },

  //********************** Start login Functionality ***************************//
  { path:'login', component:LoginComponent },
  { path:'signup', component:SignupComponent },
  { path:'forgot-password', component:ForgotPasswordComponent },
  { path:'reset-password/:adminId/:secretKey', component:ResetPasswordComponent },
  //********************** End login Functionality ***************************//

  //********************** Start Dashboard Functionality ***************************//
  { path:'dashboard', component:DashboardComponent },
  //********************** End Dashboard Functionality ***************************//


  { path:'paypal', component:PaypalComponent },

  //********************** Start User Management Functionality ***************************//
  { path:'user-management', component:UserManagementComponent },
  { path:'view-user/:userId', component:ViewUserComponent },
  { path:'edit-user/:userId', component:EditUserComponent },
  { path:'user-change-Password/:userId', component:UserChangePasswordComponent },
  //********************** End User Management Functionality ***************************//

  //********************** Start Merchant Management Functionality ***************************//
  { path:'merchant-management', component:MerchantManagementComponent },
  { path:'add-merchant', component:AddMerchantComponent },
  { path:'view-merchant/:userId', component:ViewMerchantComponent },
  { path:'edit-merchant/:userId', component:EditMerchantComponent },
  { path:'merchant-change-Password/:userId', component:MerchantChangePasswordComponent },
  //********************** End Merchant Management Functionality ***************************//

  //********************** Start Venue Management Functionality ***************************//
  { path:'venue-management', component:VenueManagementComponent },
  { path:'add-menu/:venueId', component:AddMenuComponent },
  { path:'edit-venue-category/:venueId/:categoryId', component:EditVenueCategoryComponent },
  { path:'edit-category-item/:venueId/:categoryId/:itemId', component:EditCategoryItemComponent },
  { path:'add-more-category-items/:venueId/:categoryId', component:AddMoreCategoryItemsComponent },
  { path:'view-menu-items/:venueId/:categoryId', component:ViewMenuItemsComponent },
  { path:'menu-management/:venueId', component:MenuManagementComponent },
  { path:'view-venue/:venueId', component:ViewVenueComponent },
  { path:'edit-venue/:venueId', component:EditVenueComponent },
  { path:'add-venue', component:AddVenueComponent },
  { path:'add-venue-speciality/:venueId', component:AddVenueSpecialityComponent },
  { path:'view-venue-speciality/:venueId', component:ViewVenueSpecialityComponent },
  { path:'edit-venue-speciality/:venueId/:categoryId', component:EditVenueSpecialityComponent },
  //********************** End Venue Management Functionality ***************************//

  //********************** Start Order Management Functionality ***************************//
  { path:'order-management', component:OrderManagementComponent },
  { path:'view-order-item/:tableId', component:ViewOrderItemComponent },
  { path:'view-order-user/:tableId/:itemId', component:ViewOrderUserComponent },
  //********************** End Order Management Functionality ***************************//

  //********************** Start Promotion Management Functionality ***************************//
  { path:'promotion-banner-management', component:PromotionBannerManagementComponent },
  { path:'add-promotion-banner', component:AddPromotionBannerComponent },
  { path:'view-banner/:bannerId', component:ViewBannerComponent },
  //********************** End Promotion Management Functionality ***************************//

  //********************** Start static Management Functionality ***************************//
  { path:'static-content-management', component:StaticContentManagementComponent },
  //********************** End static Management Functionality ***************************//

  //********************** Start Header, Footer, Side-menu Management Functionality ***************************//
  { path:'header', component:HeaderComponent },
  { path:'footer', component:FooterComponent },
  { path:'side-menu', component:SideMenuComponent },
  //********************** End Header, Footer, Side-menu Management Functionality ***************************//

  //********************** Start Page Not Found Functionality ***************************//
  { path:'**', component:PageNotFoundComponent }
  //********************** End Page Not Found Functionality ***************************//

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
