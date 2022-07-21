import { Injectable } from "@angular/core";
import { Blog } from "./blogs.model";

@Injectable({providedIn:'root'})
export class BlogsService{
    private blogs: Blog[]=[];

    addBlog(title :String, description :String, dateTime:any,id:number){
        const blog:Blog ={
            title: title, description: description, dateTime: new Date(),id
        };  
        this.blogs.push(blog);
        this.blogs.sort((a,b)=> b.id-a.id)
    }

    getBlog(){
        return this.blogs
    }
    deleteblog(id){
        this.blogs=this.blogs.filter((f)=>f.id !==id)
    }
    editblog(id){

    }

}