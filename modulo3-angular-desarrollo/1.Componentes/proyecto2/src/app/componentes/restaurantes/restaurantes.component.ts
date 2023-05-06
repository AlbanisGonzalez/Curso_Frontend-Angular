import { Component } from '@angular/core';
import { IRestaurant } from './restaurante.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss']
})
export class RestaurantesComponent {
  restaurante1: IRestaurant = {
    nombre: 'Capricho',
    direccion: 'Calle simca',
    abierto: true
  }


}
