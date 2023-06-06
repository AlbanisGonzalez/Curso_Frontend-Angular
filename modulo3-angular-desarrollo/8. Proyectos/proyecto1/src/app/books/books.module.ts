import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule}from '@angular/material/input'
import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookGalleryComponent } from '../book-gallery/book-gallery.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';


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
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue:'es-ES'}
  ],
})
export class BooksModule { }
