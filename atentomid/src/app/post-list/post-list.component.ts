import { Component, OnInit } from '@angular/core';
import { Papasa } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listOfPosts: Papasa []=[
    
  ]

  constructor(private postService: PostService){
    
  }

  ngOnInit(): void {
    this.listOfPosts=this.postService.getPost() /*pagkaintindi ko is dito yung laman kang listOfPosts su laman kang postService na name which 
    is ung PostService na class na nasa post.service.ts, then ung getPost is tigaget niya su laman kang listOfPosts*/
  }

}
