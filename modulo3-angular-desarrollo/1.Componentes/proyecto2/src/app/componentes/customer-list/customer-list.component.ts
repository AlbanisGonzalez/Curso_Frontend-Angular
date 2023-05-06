import { Component } from '@angular/core';
import { ICustomer } from './cliente.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  customers: ICustomer[] = [
    {
      fullName: 'cliente1',
      email: 'cliente1@gmail.com',
      phone: '6674563452'
    },
    {
      fullName: 'cleinte2',
      email: 'cliente2@gmail.com',
      phone: '644589758'
    },
    {
      fullName: 'cliente3',
      email: 'cliente3@gmail.com',
      phone: '23463789758'
    }
  ]

  userLogged: boolean = true;

  cerrarSesion() {
    this.userLogged = false
    alert('Sesión cerrada con exito')
  }

  anadirCliente() {
    this.customers.push({
      fullName: 'cliente3',
      email: 'cliente4@gmail.com',
      phone: '7643569758'
    })
  }

}
