import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookGalleryComponent } from '../book-gallery/book-gallery.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import{MatTableModule} from '@angular/material/table';

import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        BookListComponent,
        BookDetailComponent,
        BookFormComponent,
        BookGalleryComponent,
    ],
    imports: [
        CommonModule,
        BooksRoutingModule,
        MatIconModule,
        HttpClientModule,
        MatButtonModule,
        MatTableModule,
        SharedModule,
        MatGridListModule
    ]
})
export class BooksModule { }