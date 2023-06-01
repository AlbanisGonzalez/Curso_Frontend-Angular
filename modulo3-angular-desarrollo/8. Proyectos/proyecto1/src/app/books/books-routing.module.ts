import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookGalleryComponent } from '../book-gallery/book-gallery.component';
import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [
  {
      path: '',
      component: BookListComponent
    },
    {
      path: 'id',
      component: BookDetailComponent
    },
    {
      path: 'galerry',
      component: BookGalleryComponent
    },
    {
      path: 'new',
      component: BookGalleryComponent
    },
    {
      path: ':id/edit',
      component: BookFormComponent
    },
    {
      path: '', redirectTo: '', pathMatch: 'full'
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }