import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})


export class BlogCreateComponent implements OnInit {
  
   id=0;
  constructor(public blogService: BlogsService) { 
    
  }
  
  ngOnInit(): void {
    
  }
  onBlogAdded(Form :NgForm){
    
    if(Form.invalid){
      return
    }
    this.blogService.addBlog(Form.value.title,Form.value.description,Form.value.dateTime,++this.id);
    alert('Blog created Successfully')
    Form.resetForm()
  }
  
  
}
