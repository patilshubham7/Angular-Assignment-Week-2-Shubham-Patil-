import { Component, OnInit } from '@angular/core';
import { Blog } from '../blogs.model';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {


  blogs:Blog[]=[];

  constructor(public blogService:BlogsService) { }

  ngOnInit(): void {
    this.blogs=this.blogService.getBlog();
  }

}
