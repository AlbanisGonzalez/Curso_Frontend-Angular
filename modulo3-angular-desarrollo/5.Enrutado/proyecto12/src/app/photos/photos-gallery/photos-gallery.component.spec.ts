import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosGalleryComponent } from './photos-gallery.component';

describe('PhotosGalleryComponent', () => {
  let component: PhotosGalleryComponent;
  let fixture: ComponentFixture<PhotosGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosGalleryComponent]
    });
    fixture = TestBed.createComponent(PhotosGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
