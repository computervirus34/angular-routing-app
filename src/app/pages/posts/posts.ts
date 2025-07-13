import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post';
import { Post } from '../../models/post/post.model';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrls: ['./posts.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  loading = true;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.slice(0, 20); // show top 10
      this.loading = false;
    });
  }
}
