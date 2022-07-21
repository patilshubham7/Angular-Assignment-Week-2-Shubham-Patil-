import { Component, OnInit } from '@angular/core';
import { Blog } from '../blogs.model';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  blogs:Blog[]=[];

  constructor(public blogService:BlogsService) { }

  ngOnInit(): void {
    this.blogs=this.blogService.getBlog();

}
}
