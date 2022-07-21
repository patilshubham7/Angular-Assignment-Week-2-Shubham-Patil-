import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCreateComponent } from './Blogging/blog-create/blog-create.component';
import { BlogListComponent } from './Blogging/blog-list/blog-list.component';
import { ManageBlogComponent } from './Blogging/manage-blog/manage-blog.component';

const routes: Routes = [
 { path:'createblog',component :BlogCreateComponent},
 {path :'bloglist', component :BlogListComponent},
 {path :'manageblogs', component:ManageBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
