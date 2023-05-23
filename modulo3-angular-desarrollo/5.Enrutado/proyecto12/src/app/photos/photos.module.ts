import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosDetailComponent } from './photo-detail/photos-detail.component';
import { PhotosGalleryComponent } from './photos-gallery/photos-gallery.component';


@NgModule({
  declarations: [
    PhotosDetailComponent,
    PhotosGalleryComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ],

})
export class PhotosModule { }
