import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './inc/admin-sidebar/admin-sidebar.component';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AddPromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
  

  ],
  exports: [
    RouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
