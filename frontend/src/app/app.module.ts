import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminComponent } from './admin/admin/admin.component';
import { UserRoutingModule } from './user/user-routing.module';
import { UserComponent } from './user/user/user.component';
import { AboutComponent } from './user/user/about/about.component';
import { BlogComponent } from './user/user/blog/blog.component';
import { ContactComponent } from './user/user/contact/contact.component';
import { PagesComponent } from './user/user/pages/pages.component';
import { ReceipesComponent } from './user/user/receipes/receipes.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PagesComponent,
    ReceipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AdminRoutingModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
