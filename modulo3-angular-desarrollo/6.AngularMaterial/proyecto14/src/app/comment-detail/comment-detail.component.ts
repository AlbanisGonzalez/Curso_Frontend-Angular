import { ActivatedRoute } from '@angular/router';
import { CommentService } from './../services/comment.service';
import { Component, OnInit } from '@angular/core';
import { IComment } from '../models/comment.model';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss'],
})
export class CommentDetailComponent implements OnInit {
  comment: IComment | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private CommentService: CommentService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = parseInt(params['id'], 10);
      this.CommentService.findById(id).subscribe(
        (data) => (this.comment = data)
      );
    });
  }
}
