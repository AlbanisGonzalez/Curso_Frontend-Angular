import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule}from'@angular/common/http';
import{MatTableModule}from '@angular/material/table';
import{MatIconModule}from '@angular/material/icon';
import{MatButtonModule} from'@angular/material/button';
import{MatCardModule} from'@angular/material/card';
import{MatGridList, MatGridListModule} from'@angular/material/grid-list';
import { MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CommentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
