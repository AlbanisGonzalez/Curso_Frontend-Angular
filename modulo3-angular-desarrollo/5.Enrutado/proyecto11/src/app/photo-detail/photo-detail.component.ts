import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../models/photo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
photo:IPhoto|undefined;
  photoService: any;

constructor(private route: ActivatedRoute){}

ngOnInit(): void {
this.route.params.subscribe(params =>{
  const id = parseInt(params['id'], 10); 
      this.photoService.findById(id).subscribe((data: IPhoto | undefined) => this.photo = data);

});
}


}
