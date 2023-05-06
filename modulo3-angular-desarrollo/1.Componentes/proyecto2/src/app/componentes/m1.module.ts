import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    Ejemplo1Component,
    Ejemplo2Component,
    RestaurantesComponent,
    CustomerListComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Ejemplo1Component,
    Ejemplo2Component,
    RestaurantesComponent,
    CustomerListComponent,
    CounterComponent
  ]
})
export class ComponentesModule { }
