import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blog } from '../blogs.model';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.css']
})
export class ManageBlogComponent implements OnInit {

  blogs:Blog[]=[];
  private blogsSub: Subscription;

  constructor(public blogService:BlogsService) { }

  ngOnInit(): void {
    this.blogs=this.blogService.getBlog();
  }


  deleteblog(id: number){
  if(confirm("Are you sure to delete Blog id="+id))
  {
    // alert('id='+id);
    // console.log(id);
    // console.log(this.blogs);
    this.blogService.deleteblog(id);

    // this.blogs=this.blogs.filter((f)=>f.id !==id)
    // console.log( this.blogs.filter((f)=>f.id !==id));
    this.blogs=this.blogService.getBlog();
  }
}
editblog(id){
  // alert(this.blo);
this.blogService.editblog(id);
}

}