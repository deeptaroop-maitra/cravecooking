import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './user/about/about.component';
import { BlogComponent } from './user/blog/blog.component';
import { ContactComponent } from './user/contact/contact.component';
import { PagesComponent } from './user/pages/pages.component';
import { ReceipesComponent } from './user/receipes/receipes.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'pages', component: PagesComponent},
    {path: 'receipes', component: ReceipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
