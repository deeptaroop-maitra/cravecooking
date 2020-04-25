import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './user/header/header.component';
import { AboutComponent } from './user/about/about.component';
import { ReceipesComponent } from './user/receipes/receipes.component';
import { BlogComponent } from './user/blog/blog.component';
import { PagesComponent } from './user/pages/pages.component';
import { ContactComponent } from './user/contact/contact.component';
import { FooterComponent } from './user/footer/footer.component';



@NgModule({
  declarations: [UserComponent, HeaderComponent, AboutComponent,
     ReceipesComponent, BlogComponent, PagesComponent, ContactComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports : [
    UserComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class UserModule { }
