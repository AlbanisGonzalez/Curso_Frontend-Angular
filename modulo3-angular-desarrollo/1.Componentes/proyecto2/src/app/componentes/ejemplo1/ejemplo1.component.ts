import { Component } from '@angular/core';

interface IProduct {
  id: number;
  title: string;
  price: number;
}


@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.scss']
})
export class Ejemplo1Component {
  //Variables
  mensaje: string = "Hola Buenos dias por la mañana desde ejemplo1";
  precio: number = 3.99;

  //Objetos
  product1: IProduct = {
    id: 1,
    title: 'Ordenador portatil MSI Modern',
    price: 1500.0
  }
}
