import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogCreateComponent } from './Blogging/blog-create/blog-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BlogListComponent } from './Blogging/blog-list/blog-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { ManageBlogComponent } from './Blogging/manage-blog/manage-blog.component';
import { BlogViewComponent } from './Blogging/blog-view/blog-view.component';






@NgModule({
  declarations: [
    AppComponent,
    BlogCreateComponent,
    BlogListComponent,
    ManageBlogComponent,
    BlogViewComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
