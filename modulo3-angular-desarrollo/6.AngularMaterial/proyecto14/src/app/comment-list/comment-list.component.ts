import { Component } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Router } from '@angular/router';
import { IComment } from '../models/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent {
  [x: string]: any;
  displayedColumns = ['id', 'postId', 'name', 'email'];
  comments: IComment[] = [];
  constructor(private commentService: CommentService,private router:Router) {}
  ngOnInit(): void {
    this.commentService.findAll().subscribe((data) => (this.comments = data));
  }
  view(comment: IComment) {
    this.router.navigate(['/comments', comment.id]); // /comments/4
  }
}
