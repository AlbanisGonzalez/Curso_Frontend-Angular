import { Component } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent {
  displayedColumns = ['id', 'postId', 'name', 'email'];
  constructor(private commentService: CommentService) {}
}
